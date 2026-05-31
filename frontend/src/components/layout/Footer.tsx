import { Link } from 'react-router-dom'

export default function Footer({ analyticsNote = "This site uses privacy-first, cookie-free analytics." }: { analyticsNote?: string }) {
  return (
    <>
      <style>{`
        .aletheia-footer-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 56px 24px 32px 24px;
        }
        .aletheia-footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          margin-bottom: 48px;
        }
        @media (min-width: 768px) {
          .aletheia-footer-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .aletheia-footer-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 32px;
          }
        }
        .aletheia-footer-link {
          display: inline-flex;
          align-items: center;
          font-family: 'IBM Plex Sans', system-ui, sans-serif;
          font-weight: 400;
          font-size: 14px;
          color: rgba(255, 255, 255, 0.70);
          text-decoration: none;
          transition: color 120ms cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          margin-bottom: 12px;
          position: relative;
          width: fit-content;
        }
        .aletheia-footer-link:hover {
          color: rgba(255, 255, 255, 1) !important;
        }
        .aletheia-footer-link::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: -2px;
          height: 2px;
          background-color: rgba(255, 255, 255, 1);
          border-radius: 1px;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 200ms ease-out;
        }
        .aletheia-footer-link:hover::after,
        .aletheia-footer-link:focus-visible::after {
          transform: scaleX(1);
        }
        @media (prefers-reduced-motion: reduce) {
          .aletheia-footer-link::after {
            transition: none !important;
          }
        }
        .aletheia-footer-link:focus-visible {
          outline: none;
          box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.30);
          border-radius: 2px;
        }
        .aletheia-footer-col {
          display: flex;
          flex-direction: column;
        }
        .aletheia-footer-col-header {
          font-family: 'IBM Plex Sans', system-ui, sans-serif;
          font-weight: 600;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: rgba(255, 255, 255, 0.40);
          margin: 0 0 20px 0;
        }
        .aletheia-footer-bottom {
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }
        @media (min-width: 768px) {
          .aletheia-footer-bottom {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
        }
      `}</style>
      <footer
        role="contentinfo"
        style={{
          width: '100%',
          backgroundColor: '#162C41',
          borderTop: '1px solid rgba(255, 255, 255, 0.10)',
          flexShrink: 0,
        }}
      >
        <div className="aletheia-footer-container">
          <div className="aletheia-footer-grid">

            {/* Column 1 - Brand */}
            <div className="aletheia-footer-col">
              {/* REPLACE: Use frontend/src/assets/logowhite.png (white logo for dark background). Height: 28px. */}
              <img
                src="/src/assets/logowhite.png"
                alt="Aletheia"
                style={{ height: 28, width: 'auto', alignSelf: 'flex-start', transform: 'translateX(-8px)' }}
              />
              <p style={{
                fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
                fontWeight: 400,
                fontSize: 14,
                color: 'rgba(255, 255, 255, 0.60)',
                margin: '12px 0 0 0',
                lineHeight: 1.5,
              }}>
                Evidence-grounded AI diagnostic reasoning for medical education.
              </p>
              <p style={{
                fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
                fontWeight: 400,
                fontSize: 12,
                color: 'rgba(255, 255, 255, 0.40)',
                margin: '24px 0 0 0',
              }}>
                © 2026 Biowess. All rights reserved.
              </p>
            </div>

            <nav aria-label="Footer navigation" style={{ display: 'contents' }}>
              {/* Column 2 - Product */}
              <div className="aletheia-footer-col">
                <h2 className="aletheia-footer-col-header">Product</h2>
                <Link to="/features" className="aletheia-footer-link">Features</Link>
                <Link to="/screenshots" className="aletheia-footer-link">Screenshots</Link>
                <Link to="/install" className="aletheia-footer-link">Installation Guide</Link>
                <Link to="/download" className="aletheia-footer-link">Download</Link>
                <Link to="/docs" className="aletheia-footer-link">Documentation</Link>
                <Link to="/faq" className="aletheia-footer-link">FAQ</Link>
              </div>

              {/* Column 3 - Resources */}
              <div className="aletheia-footer-col">
                <h2 className="aletheia-footer-col-header">Resources</h2>
                <a href="https://github.com/biowess/aletheia" target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository (opens in new tab)" className="aletheia-footer-link">
                  GitHub Repository <span aria-hidden="true" style={{ marginLeft: 4, fontSize: 12 }}>↗</span>
                </a>
                <a href="https://github.com/biowess/aletheia/releases" target="_blank" rel="noopener noreferrer" aria-label="Releases (opens in new tab)" className="aletheia-footer-link">
                  Releases <span aria-hidden="true" style={{ marginLeft: 4, fontSize: 12 }}>↗</span>
                </a>
                <a href="https://github.com/biowess/aletheia/issues" target="_blank" rel="noopener noreferrer" aria-label="Issues (opens in new tab)" className="aletheia-footer-link">
                  Issues <span aria-hidden="true" style={{ marginLeft: 4, fontSize: 12 }}>↗</span>
                </a>
                <a href="https://aistudio.google.com" target="_blank" rel="noopener noreferrer" aria-label="Google Gemini (opens in new tab)" className="aletheia-footer-link">
                  Google Gemini <span aria-hidden="true" style={{ marginLeft: 4, fontSize: 12 }}>↗</span>
                </a>
              </div>
            </nav>

            {/* Column 4 - Legal & Info */}
            <div className="aletheia-footer-col">
              <h2 className="aletheia-footer-col-header">Legal</h2>
              <a href="https://github.com/biowess/aletheia/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" aria-label="License (opens in new tab)" className="aletheia-footer-link">
                License <span aria-hidden="true" style={{ marginLeft: 4, fontSize: 12 }}>↗</span>
              </a>

              <div style={{
                fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
                fontWeight: 600,
                fontSize: 11,
                color: 'rgba(255, 255, 255, 0.70)',
                border: '1px solid rgba(255, 255, 255, 0.20)',
                borderRadius: 4,
                padding: '4px 8px',
                display: 'inline-block',
                alignSelf: 'flex-start',
                marginBottom: 20,
                marginTop: 4,
                letterSpacing: '0.05em',
                textTransform: 'uppercase'
              }}>
                Source-Available
              </div>

              <div style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 12,
                color: 'rgba(255, 255, 255, 0.30)',
                lineHeight: 1.6,
                marginBottom: 16
              }}>
                Built with React · FastAPI · Google Gemini · SQLite
              </div>

              <div style={{
                fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
                fontWeight: 400,
                fontSize: 12,
                color: 'rgba(255, 255, 255, 0.40)',
                lineHeight: 1.5,
                margin: 0
              }}>
                {analyticsNote}
              </div>
            </div>

          </div>

          <div style={{
            fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
            fontSize: 12,
            color: 'rgba(255, 255, 255, 0.5)',
            lineHeight: 1.5,
            paddingTop: 24,
            paddingBottom: 24,
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            textAlign: 'center'
          }}>
            <strong>Educational Use Disclaimer:</strong> Aletheia is designed strictly for medical education and clinical case simulation. It is not a regulated medical device and is not intended for use in the diagnosis, cure, mitigation, treatment, or prevention of disease. The AI-generated diagnostic outputs are for educational purposes only and do not replace professional clinical judgment. Do not input real patient data.
          </div>

          <div className="aletheia-footer-bottom">
            <span style={{
              fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
              fontWeight: 400,
              fontSize: 12,
              color: 'rgba(255, 255, 255, 0.40)'
            }}>
              Built with rigor. Designed for medical education.
            </span>
            <span style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 12,
              color: 'rgba(255, 255, 255, 0.30)'
            }}>
              Aletheia v0.1
            </span>
          </div>
        </div>
      </footer>
    </>
  )
}
