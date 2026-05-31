import React, { useCallback } from 'react';
import { useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface RippleButtonProps {
  as?: 'button' | 'a' | typeof Link;
  children: React.ReactNode;
  className?: string;
  /**
   * Override the ripple colour explicitly.
   * When omitted, colour is inferred from the variant class:
   *   btn-dark  → bright white  (visible on dark backgrounds)
   *   btn-light → deep navy     (visible on light backgrounds)
   */
  rippleColor?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  [key: string]: unknown;
}

/** Total duration of each ripple cycle, in milliseconds (500–700 ms per spec). */
const RIPPLE_MS = 620;

/**
 * Inject the shared @keyframes rule exactly once into <head>.
 * Idempotent — subsequent calls are no-ops.
 */
let _kfInjected = false;
function ensureKeyframes(): void {
  if (_kfInjected || typeof document === 'undefined') return;
  _kfInjected = true;

  const style = document.createElement('style');
  style.id = 'aletheia-ripple-kf';
  style.textContent = `
    @keyframes ale-ripple {
      0%   { transform: scale(0); opacity: 0.6; }
      100% { transform: scale(1); opacity: 0;   }
    }
  `;
  document.head.appendChild(style);
}

/**
 * RippleButton — polymorphic button / <a> / React Router <Link> that shows
 * a vivid, cursor-origin ripple on hover.
 *
 * Ripple variants
 * ───────────────
 *  • btn-dark  → white ripple   rgba(255,255,255,0.60) — clearly visible on
 *                dark navy / charcoal backgrounds
 *  • btn-light → dark ripple    rgba(22,44,65,0.22)   — clearly visible on
 *                white / cream / light-grey backgrounds
 *
 * Implementation notes
 * ────────────────────
 *  • Ripple element is injected directly into the DOM on mouseenter so we can
 *    read the exact cursor coordinates (e.clientX/Y) relative to the button.
 *  • Animation is a pure CSS @keyframes (GPU-composited transform + opacity).
 *  • The element is removed from the DOM when animationend fires, with a
 *    setTimeout fallback to guard against display:none edge cases.
 *  • overflow:hidden (added to the className) clips the ripple to the button.
 *  • Respects prefers-reduced-motion.
 */
export default function RippleButton({
  as = 'button',
  children,
  className = '',
  rippleColor,
  onClick,
  ...props
}: RippleButtonProps) {
  const Component = as as React.ElementType;
  const prefersReducedMotion = useReducedMotion();

  const isDark  = className.includes('btn-dark');
  const isLight = className.includes('btn-light');

  /**
   * Resolve the fill colour for this variant.
   * Defaults to a bright ripple for unclassified buttons (e.g. the nav CTA
   * which carries btn-dark as of NavBar.tsx).
   */
  const rippleFill: string =
    rippleColor ??
    (isDark
      ? 'rgba(255, 255, 255, 0.25)'  // subtle white
      : isLight
        ? 'rgba(22, 44, 65, 0.12)'   // subtle navy
        : 'rgba(255, 255, 255, 0.20)'); // safe fallback

  /**
   * Spawn a new ripple centred at the cursor entry point.
   * Called by onMouseEnter so every hover produces one ripple.
   */
  const spawnRipple = useCallback(
    (e: React.MouseEvent<HTMLElement>): void => {
      if (prefersReducedMotion) return;

      ensureKeyframes();

      const btn  = e.currentTarget;
      const rect = btn.getBoundingClientRect();

      // Cursor position relative to the button's top-left corner
      const cx = e.clientX - rect.left;
      const cy = e.clientY - rect.top;

      // Radius must reach the farthest corner so scale(1) covers the button.
      const radius = Math.max(
        Math.hypot(cx,               cy),
        Math.hypot(rect.width - cx,  cy),
        Math.hypot(cx,               rect.height - cy),
        Math.hypot(rect.width - cx,  rect.height - cy),
      );
      // Increased multiplier from 2 to 2.5 to ensure it easily spans long buttons
      const size = radius * 2.5;

      // ── Build the ripple element ────────────────────────────────────────────
      const dot = document.createElement('span');
      dot.setAttribute('aria-hidden', 'true');

      Object.assign(dot.style, {
        position:        'absolute',
        left:            `${cx - radius}px`,
        top:             `${cy - radius}px`,
        width:           `${size}px`,
        height:          `${size}px`,
        borderRadius:    '50%',
        backgroundColor: rippleFill,
        pointerEvents:   'none',
        // zIndex 0 sits above normal-flow text; acceptable since the ripple
        // is semi-transparent and completes in < 650 ms.
        zIndex:          '0',
        animation:       `ale-ripple ${RIPPLE_MS}ms cubic-bezier(0.22, 0.61, 0.36, 1) forwards`,
      } satisfies Partial<CSSStyleDeclaration>);

      // Insert as the first child so DOM order matches paint order cleanly.
      btn.insertBefore(dot, btn.firstChild);

      // ── Cleanup ─────────────────────────────────────────────────────────────
      const remove = (): void => {
        if (dot.parentNode) dot.remove();
      };

      // Primary: remove on animation completion (most reliable)
      dot.addEventListener('animationend', remove, { once: true });

      // Fallback: guard against display:none / visibility:hidden edge cases
      // where animationend may not fire.
      setTimeout(remove, RIPPLE_MS + 200);
    },
    [prefersReducedMotion, rippleFill],
  );

  return (
    <Component
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={spawnRipple}
      onClick={onClick}
      {...props}
    >
      {children}
    </Component>
  );
}
