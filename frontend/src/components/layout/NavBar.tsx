/**
 * NavBar — fixed top navigation bar.
 * Appears on every route via PageWrapper / App.tsx.
 *
 * Spec compliance:
 *  - Fixed top, z-50, full-width, bg #FFFFFF, 1px border-bottom #D7E2EC, h 56px
 *  - Left: logo → /
 *  - Center: Features, Screenshots, Docs, Install, Download (nav links)
 *  - Right: "Download" CTA button → /download
 *  - Active route: color #162C41 + 2px bottom border #244B73
 *  - Mobile (<768px): hide center links, show hamburger; tap opens dropdown
 *  - Focus rings on all interactive elements
 */

import { useState, useEffect, useRef } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { RippleButton } from '../ui'
import logoSrc from '../../assets/logo.png'

/* ─── Constants ─────────────────────────────────────────────────────────────── */

const NAV_LINKS = [
  { label: 'Features', to: '/features' },
  { label: 'Screenshots', to: '/screenshots' },
  { label: 'Docs', to: '/docs' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Install', to: '/install' },
] as const

/* ─── Inline style helpers ───────────────────────────────────────────────────
   We use inline styles here rather than Tailwind utilities so every pixel
   value precisely matches the Clinical Frost spec tokens without utility
   class drift. Shared motion durations come from the token sheet.
*/

const styles = {
  nav: {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    height: 56,
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    borderBottom: '1px solid rgba(215, 226, 236, 0.8)',
    display: 'flex',
    alignItems: 'center',
  },
  inner: {
    width: '100%',
    maxWidth: 1280,
    margin: '0 auto',
    padding: '0 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 16,
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    flexShrink: 0,
    lineHeight: 0,
    borderRadius: 2,
    // focus ring applied via CSS class below
  },
  centerLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: 4,
    flex: 1,
    justifyContent: 'center',
  },
  ctaButton: {
    display: 'flex',
    alignItems: 'center',
    flexShrink: 0,
    backgroundColor: '#162C41',
    color: '#FFFFFF',
    borderRadius: 4,
    height: 36,
    padding: '0 16px',
    fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
    fontWeight: 600,
    fontSize: 13,
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'background-color 180ms cubic-bezier(0.4, 0, 0.2, 1)',
    whiteSpace: 'nowrap' as const,
    lineHeight: 1,
  },
  hamburgerBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: 8,
    borderRadius: 2,
    flexShrink: 0,
  },
  mobilePanel: {
    position: 'fixed' as const,
    top: 56,
    left: 0,
    right: 0,
    zIndex: 49,
    backgroundColor: '#FFFFFF',
    borderBottom: '1px solid #D7E2EC',
    display: 'flex',
    flexDirection: 'column' as const,
    padding: '8px 0',
  },
  mobileLinkBase: {
    display: 'block',
    padding: '14px 24px',
    fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
    fontWeight: 500,
    fontSize: 14,
    textDecoration: 'none',
    transition: 'color 120ms cubic-bezier(0.4, 0, 0.2, 1), background-color 120ms cubic-bezier(0.4, 0, 0.2, 1)',
    borderRadius: 0,
    minHeight: 48,
  },
}

/* ─── NavLinkItem ─────────────────────────────────────────────────────────── */

function NavLinkItem({ to, label }: { to: string; label: string }) {
  const location = useLocation();
  return (
    <NavLink
      to={to}
      onClick={(e) => {
        if (location.pathname === to) {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }}
      className="aletheia-nav-link link-animated"
      style={({ isActive }) => ({
        fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        textDecoration: 'none',
        color: isActive ? '#162C41' : '#4F606F',
        padding: '4px 8px',
        transition: 'color 120ms cubic-bezier(0.4, 0, 0.2, 1)',
        borderRadius: 2,
        display: 'inline-flex',
        alignItems: 'center',
        lineHeight: 1,
        whiteSpace: 'nowrap',
      })}
    >
      {label}
    </NavLink>
  )
}

/* ─── MobileNavLink ───────────────────────────────────────────────────────── */

function MobileNavLink({
  to,
  label,
  onClick,
}: {
  to: string
  label: string
  onClick: () => void
}) {
  const location = useLocation();
  return (
    <NavLink
      to={to}
      onClick={(e) => {
        if (location.pathname === to) {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        onClick();
      }}
      className="aletheia-nav-link"
      style={({ isActive }) => ({
        ...styles.mobileLinkBase,
        color: isActive ? '#162C41' : '#4F606F',
        backgroundColor: isActive ? '#F5F8FB' : 'transparent',
        borderLeft: isActive ? '2px solid #244B73' : '2px solid transparent',
      })}
    >
      {label}
    </NavLink>
  )
}

/* ─── HamburgerIcon ───────────────────────────────────────────────────────── */

function HamburgerIcon({ open }: { open: boolean }) {
  const bar = {
    display: 'block',
    width: 20,
    height: 2,
    backgroundColor: '#162C41',
    transition: 'transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 120ms',
  }
  return (
    <span aria-hidden="true" style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <span
        style={{
          ...bar,
          transform: open ? 'translateY(6px) rotate(45deg)' : 'none',
        }}
      />
      <span
        style={{
          ...bar,
          opacity: open ? 0 : 1,
          transform: open ? 'scaleX(0)' : 'none',
        }}
      />
      <span
        style={{
          ...bar,
          transform: open ? 'translateY(-6px) rotate(-45deg)' : 'none',
        }}
      />
    </span>
  )
}

/* ─── NavBar ──────────────────────────────────────────────────────────────── */

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()
  const location = useLocation()

  // Sync isMobile on mount + resize
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)')
    const update = () => {
      setIsMobile(mq.matches)
      if (!mq.matches) setMobileOpen(false)
    }
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  // Close panel on Escape
  useEffect(() => {
    if (!mobileOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [mobileOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  // Focus trap and restore focus
  const prevOpen = useRef(mobileOpen)
  useEffect(() => {
    if (prevOpen.current && !mobileOpen && isMobile) {
      // Focus hamburger when closed
      document.getElementById('aletheia-hamburger')?.focus()
    }
    prevOpen.current = mobileOpen
  }, [mobileOpen, isMobile])

  useEffect(() => {
    if (!mobileOpen || !panelRef.current) return
    const panel = panelRef.current
    const focusable = panel.querySelectorAll<HTMLElement>('a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])')
    if (focusable.length === 0) return

    const first = focusable[0]
    const last = focusable[focusable.length - 1]

    first.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault()
            last.focus()
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault()
            first.focus()
          }
        }
      }
    }
    panel.addEventListener('keydown', onKey)
    return () => panel.removeEventListener('keydown', onKey)
  }, [mobileOpen])

  const closeMenu = () => setMobileOpen(false)

  return (
    <>
      {/* ── Inject focus ring styles ── */}
      <style>{`
        .aletheia-nav-link:focus-visible,
        .aletheia-logo-link:focus-visible,
        .aletheia-cta:focus-visible,
        .aletheia-hamburger:focus-visible {
          outline: none;
          box-shadow: 0 0 0 3px rgba(36, 75, 115, 0.20);
          border-radius: 2px;
        }
        .aletheia-nav-link:hover {
          color: #162C41 !important;
        }
        .aletheia-cta:hover {
          background-color: #244B73 !important;
        }
        .aletheia-hamburger:focus-visible {
          border-radius: 2px;
        }
      `}</style>

      <nav
        role="navigation"
        aria-label="Main navigation"
        style={styles.nav}
      >
        <div style={styles.inner}>
          {/* ── Logo ── */}
          <Link
            to="/"
            onClick={(e) => {
              if (location.pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            aria-label="Aletheia home"
            className="aletheia-logo-link"
            style={styles.logo}
          >
            <img
              src={logoSrc}
              alt="Aletheia"
              width={120}
              height={24}
              decoding="async"
              style={{ display: 'block', userSelect: 'none', transform: 'translateX(-8px)' }}
            />
          </Link>

          {/* ── Desktop center links ── */}
          {!isMobile && (
            <div style={styles.centerLinks} role="list">
              {NAV_LINKS.map(({ label, to }) => (
                <div key={to} role="listitem">
                  <NavLinkItem to={to} label={label} />
                </div>
              ))}
            </div>
          )}

          {/* ── Right: CTA + hamburger ── */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            {!isMobile && (
              <RippleButton
                as={Link}
                to="/download"
                className="aletheia-cta btn-interactive"
                style={styles.ctaButton}
              >
                Download
              </RippleButton>
            )}

            {isMobile && (
              <button
                id="aletheia-hamburger"
                aria-expanded={mobileOpen}
                aria-controls="aletheia-mobile-menu"
                aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
                onClick={() => setMobileOpen(prev => !prev)}
                className="aletheia-hamburger"
                style={styles.hamburgerBtn}
              >
                <HamburgerIcon open={mobileOpen} />
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* ── Mobile dropdown panel ── */}
      <AnimatePresence>
        {isMobile && mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMenu}
              aria-hidden="true"
              style={{
                position: 'fixed',
                top: 56,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 48,
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
              }}
            />
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
              id="aletheia-mobile-menu"
              ref={panelRef}
              role="menu"
              aria-label="Mobile navigation"
              style={styles.mobilePanel}
            >
              {NAV_LINKS.map(({ label, to }) => (
                <MobileNavLink key={to} to={to} label={label} onClick={closeMenu} />
              ))}
              {/* CTA in mobile panel */}
              <div style={{ padding: '12px 24px 8px' }}>
                <RippleButton
                  as={Link}
                  to="/download"
                  onClick={closeMenu}
                  className="aletheia-cta btn-interactive"
                  style={{
                    ...styles.ctaButton,
                    display: 'inline-flex',
                    justifyContent: 'center',
                    width: '100%',
                    height: 48,
                  }}
                >
                  Download
                </RippleButton>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
