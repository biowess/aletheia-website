/**
 * PageWrapper — shell component that wraps every page.
 *
 * Renders:
 *  - <NavBar /> fixed at top (56px high)
 *  - <main> with padding-top: 56px so content is never occluded
 *  - 1200px max-width centered container (24px desktop / 16px mobile gutter)
 *  - Optional <Footer /> slot (added in Prompt 24)
 *
 * Also exports:
 *  - <Section> — full-width section with inner 1200px container.
 *    Accepts an optional `background` prop for alternating section colors.
 */

import type { ReactNode, CSSProperties } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'

/* ─── Types ──────────────────────────────────────────────────────────────── */

interface PageWrapperProps {
  /** Page content — rendered inside the 1200px container */
  children: ReactNode
  /**
   * When true the container is omitted and children fill the full width
   * of the <main> element. Useful for pages that compose <Section> directly.
   */
  fullWidth?: boolean
}

interface SectionProps {
  /** Section content */
  children: ReactNode
  /** Background color/value for the full-width band. Defaults to transparent. */
  background?: string
  /** Additional inline styles applied to the outer band */
  style?: CSSProperties
  /** Additional inline styles applied to the inner 1200px container */
  innerStyle?: CSSProperties
  /** HTML id for anchor links */
  id?: string
  /** Accessible label for the section landmark */
  'aria-label'?: string
}

/* ─── Container style helpers ────────────────────────────────────────────── */

const containerStyle: CSSProperties = {
  width: '100%',
  maxWidth: 1200,
  margin: '0 auto',
  paddingLeft: 'var(--page-gutter, 24px)',
  paddingRight: 'var(--page-gutter, 24px)',
}

/* ─── Section ─────────────────────────────────────────────────────────────── */

/**
 * Full-width section band with an inner 1200px container.
 * Use this as the primary building block for page sections.
 *
 * @example
 * <Section background="#F5F8FB" aria-label="Features overview">
 *   <h2>Features</h2>
 * </Section>
 */
export function Section({
  children,
  background,
  style,
  innerStyle,
  id,
  'aria-label': ariaLabel,
}: SectionProps) {
  return (
    <>
      {/* Inject responsive gutter via a scoped style tag */}
      <style>{`
        @media (max-width: 767px) {
          .aletheia-section-inner,
          .aletheia-page-container {
            --page-gutter: 16px;
          }
        }
      `}</style>
      <section
        id={id}
        aria-label={ariaLabel}
        style={{
          width: '100%',
          backgroundColor: background ?? 'transparent',
          ...style,
        }}
      >
        <div
          className="aletheia-section-inner"
          style={{ ...containerStyle, ...innerStyle }}
        >
          {children}
        </div>
      </section>
    </>
  )
}

/* ─── PageWrapper ─────────────────────────────────────────────────────────── */

export default function PageWrapper({ children, fullWidth = false }: PageWrapperProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-[#162C41] focus:font-medium focus:rounded focus:shadow-lg"
      >
        Skip to main content
      </a>

      {/* Fixed navigation — 56px tall */}
      <NavBar />

      {/* Main content area — offset by nav height */}
      <main
        id="main-content"
        tabIndex={-1}
        style={{
          flex: 1,
          paddingTop: 56, // matches NavBar height exactly
          backgroundColor: 'var(--color-bg, #F5F8FB)',
        }}
      >
        {fullWidth ? (
          children
        ) : (
          <div
            className="aletheia-page-container"
            style={containerStyle}
          >
            {children}
          </div>
        )}
      </main>

      {/* Footer — stub populated in Prompt 24 */}
      <Footer />
    </div>
  )
}
