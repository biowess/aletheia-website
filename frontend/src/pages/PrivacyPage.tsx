/**
 * PrivacyPage — Privacy Policy for Aletheia.
 * Linked quietly from the footer. Covers:
 *  - Cloudflare Web Analytics (cookie-free, no personal data)
 *  - No enforcement of real patient data entry
 *  - Only clinical data (never patient identifiers) sent to Gemini
 *  - Local-first data model
 * Faithful to the Clinical Frost design system.
 */

import SEO from '../components/SEO'
import { PageHeader } from '../components/ui'
import { Link } from 'react-router-dom'

/* ─── Section types ──────────────────────────────────────────────────────── */

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      style={{
        fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
        fontWeight: 700,
        fontSize: 'clamp(16px, 2.5vw, 18px)',
        color: '#162C41',
        borderLeft: '2px solid #244B73',
        paddingLeft: 12,
        marginBottom: 16,
        marginTop: 0,
      }}
    >
      {children}
    </h2>
  )
}

function BodyText({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <p
      style={{
        fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        color: '#4F606F',
        lineHeight: 1.75,
        margin: '0 0 12px 0',
        ...style,
      }}
    >
      {children}
    </p>
  )
}

function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <li
      style={{
        fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        color: '#4F606F',
        lineHeight: 1.75,
        paddingLeft: 4,
        marginBottom: 6,
      }}
    >
      {children}
    </li>
  )
}

function InlineCode({ children }: { children: React.ReactNode }) {
  return (
    <code
      style={{
        fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
        fontSize: 13,
        color: '#162C41',
        backgroundColor: '#EDF1F5',
        border: '1px solid #D6DDE4',
        borderRadius: 2,
        padding: '1px 6px',
      }}
    >
      {children}
    </code>
  )
}

/* ─── Highlight callout ──────────────────────────────────────────────────── */

function KeyCallout({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode
  title: string
  children: React.ReactNode
}) {
  return (
    <div
      style={{
        display: 'flex',
        gap: 14,
        backgroundColor: '#FFFFFF',
        border: '1px solid #D6DDE4',
        borderRadius: 4,
        padding: '16px 18px',
        boxShadow: '0 1px 3px 0 rgba(22,44,65,0.07)',
        marginBottom: 12,
      }}
    >
      <div
        style={{
          flexShrink: 0,
          marginTop: 2,
          color: '#1B5FA8',
          width: 20,
          height: 20,
        }}
        aria-hidden="true"
      >
        {icon}
      </div>
      <div>
        <p
          style={{
            fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
            fontWeight: 600,
            fontSize: 14,
            color: '#162C41',
            margin: '0 0 4px 0',
          }}
        >
          {title}
        </p>
        <p
          style={{
            fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            color: '#4F606F',
            lineHeight: 1.65,
            margin: 0,
          }}
        >
          {children}
        </p>
      </div>
    </div>
  )
}

/* ─── SVG icons (stroke-style, matching FeaturesPage) ────────────────────── */

const IconShield = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
)

const IconDatabase = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <ellipse cx="12" cy="5" rx="9" ry="3"/>
    <path d="M3 5V19A9 3 0 0 0 21 19V5"/>
    <path d="M3 12A9 3 0 0 0 21 12"/>
  </svg>
)

const IconEye = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
)

const IconNoUser = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <line x1="17" y1="8" x2="23" y2="14"/>
    <line x1="23" y1="8" x2="17" y2="14"/>
  </svg>
)

const IconSparkle = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
)

/* ─── Section divider ────────────────────────────────────────────────────── */

function Divider() {
  return (
    <hr
      style={{
        border: 'none',
        borderTop: '1px solid #D6DDE4',
        margin: '36px 0',
      }}
    />
  )
}

/* ─── Main page ──────────────────────────────────────────────────────────── */

export default function PrivacyPage() {
  const effectiveDate = 'May 2026'

  return (
    <main
      className="w-full min-h-[calc(100vh-56px)]"
      style={{ backgroundColor: '#F5F8FB', paddingBottom: 80 }}
    >
      <SEO
        title="Privacy Policy — Aletheia"
        description="Aletheia's privacy policy covers website analytics, local-first data storage, AI data flows, and our commitment to never encouraging real patient data entry."
        canonical="https://biowess.github.io/aletheia-website/privacy"
      />

      <PageHeader
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Privacy Policy' }]}
        title="Privacy Policy"
        subtitle={`How Aletheia handles your data — on this website and inside the app. Effective ${effectiveDate}.`}
      />

      {/* ── Quick summary cards ── */}
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 12,
            marginBottom: 48,
            marginTop: 8,
          }}
        >
          {[
            {
              icon: <IconShield />,
              label: 'No cookies',
              detail: 'This website uses cookie-free analytics only.',
            },
            {
              icon: <IconDatabase />,
              label: 'Local-first app',
              detail: 'All case data stays on your machine.',
            },
            {
              icon: <IconNoUser />,
              label: 'No patient data to us',
              detail: "We never see anything you type in the app.",
            },
            {
              icon: <IconSparkle />,
              label: 'Clinical data only to AI',
              detail: 'Only anonymised clinical fields reach Gemini.',
            },
          ].map(({ icon, label, detail }) => (
            <div
              key={label}
              className="privacy-summary-card"
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #D6DDE4',
                borderRadius: 6,
                padding: '18px 18px',
                boxShadow: '0 1px 3px 0 rgba(22,44,65,0.06)',
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
                transition: 'border-color 180ms ease, box-shadow 180ms ease',
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 6,
                  backgroundColor: '#F5F8FB',
                  border: '1px solid #D7E2EC',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#244B73',
                  flexShrink: 0,
                }}
                aria-hidden="true"
              >
                {icon}
              </div>
              <p
                style={{
                  fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
                  fontWeight: 600,
                  fontSize: 14,
                  color: '#162C41',
                  margin: 0,
                }}
              >
                {label}
              </p>
              <p
                style={{
                  fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
                  fontWeight: 400,
                  fontSize: 13,
                  color: '#8FA3B3',
                  margin: 0,
                  lineHeight: 1.5,
                }}
              >
                {detail}
              </p>
            </div>
          ))}
        </div>

        {/* ── 1. Scope ── */}
        <section aria-labelledby="section-scope">
          <SectionHeading>1. Scope of this Policy</SectionHeading>
          <BodyText>
            This Privacy Policy describes how we handle information in two distinct contexts:
          </BodyText>
          <ul
            style={{
              listStyle: 'disc',
              paddingLeft: 24,
              margin: '0 0 16px 0',
            }}
          >
            <ListItem>
              <strong style={{ color: '#162C41' }}>This website</strong> — the Aletheia marketing
              and documentation site hosted at{' '}
              <InlineCode>biowess.github.io/aletheia-website</InlineCode>.
            </ListItem>
            <ListItem>
              <strong style={{ color: '#162C41' }}>The Aletheia desktop/web application</strong> —
              the locally-installed tool you run on your own machine.
            </ListItem>
          </ul>
          <BodyText>
            These two contexts have very different data flows and are addressed separately below.
          </BodyText>
        </section>

        <Divider />

        {/* ── 2. Website analytics ── */}
        <section aria-labelledby="section-analytics">
          <SectionHeading>2. Website Analytics (Cloudflare Web Analytics)</SectionHeading>
          <BodyText>
            This website uses{' '}
            <a
              href="https://www.cloudflare.com/web-analytics/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#1B5FA8',
                textDecoration: 'underline',
                textUnderlineOffset: 3,
              }}
            >
              Cloudflare Web Analytics
            </a>
            , a privacy-first analytics platform. It is specifically designed to measure site
            performance and general traffic patterns without compromising your privacy.
          </BodyText>

          <KeyCallout icon={<IconEye />} title="What Cloudflare collects">
            Cloudflare Web Analytics is <strong>cookieless</strong> and does{' '}
            <strong>not</strong> track individuals across sessions or sites. It records only
            aggregate, non-identifiable signals: page views, referrer domain, country (derived from
            IP but never stored), browser type, and device category. No personally identifiable
            information (PII) is collected.
          </KeyCallout>

          <KeyCallout icon={<IconShield />} title="No cookies, no fingerprinting">
            Unlike many analytics platforms, Cloudflare Web Analytics does not use cookies or
            browser fingerprinting. Your IP address is used only to derive a coarse geographic
            region and is not retained. No cross-site tracking occurs.
          </KeyCallout>

          <BodyText>
            You can read Cloudflare's privacy practices at{' '}
            <a
              href="https://www.cloudflare.com/privacypolicy/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#1B5FA8', textDecoration: 'underline', textUnderlineOffset: 3 }}
            >
              cloudflare.com/privacypolicy
            </a>
            .
          </BodyText>
          <BodyText>
            We collect no other telemetry on this website. We do not use Google Analytics, Meta
            Pixel, or any advertising trackers.
          </BodyText>
        </section>

        <Divider />

        {/* ── 3. The app ── */}
        <section aria-labelledby="section-app">
          <SectionHeading>3. The Aletheia Application — Local-First Architecture</SectionHeading>
          <BodyText>
            Aletheia is architected around a local-first principle: all your case data is stored in a{' '}
            <InlineCode>SQLite</InlineCode> database on your own machine at{' '}
            <InlineCode>~/.local/share/Aletheia/aletheia.db</InlineCode> (or the configured path).
          </BodyText>
          <BodyText>
            We — the developers of Aletheia — have <strong>no access</strong> to anything you enter
            in the application. There is no server-side database, no account system, and no data
            egress to us.
          </BodyText>

          {/* Sub: Patient data policy */}
          <h3
            style={{
              fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
              fontWeight: 600,
              fontSize: 15,
              color: '#162C41',
              margin: '24px 0 10px 0',
            }}
          >
            3.1 We Do Not Encourage or Enforce Real Patient Data Entry
          </h3>
          <BodyText>
            Aletheia accepts a free-text <em>report title</em> and structured clinical fields (e.g.
            presenting complaint, examination findings, investigation results). Although these fields
            accept any text, <strong>we do not require, encourage, or sanction the use of real
            patient names, NHS numbers, dates of birth, or any other patient identifiers.</strong>
          </BodyText>

          <div
            style={{
              backgroundColor: '#FEF3C7',
              border: '1px solid #FDE68A',
              borderLeft: '3px solid #B45309',
              borderRadius: 4,
              padding: '14px 18px',
              marginBottom: 16,
            }}
          >
            <p
              style={{
                fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
                fontWeight: 600,
                fontSize: 14,
                color: '#92400E',
                margin: '0 0 4px 0',
              }}
            >
              Educational tool only
            </p>
            <p
              style={{
                fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
                fontWeight: 400,
                fontSize: 14,
                color: '#78350F',
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              Aletheia is strictly an educational and research tool for medical students and
              educators. It is not a regulated medical device and is not intended for clinical
              decision-making. <strong>You must not enter real patient data.</strong> Use
              anonymised, synthetic, or fictional clinical scenarios only.
            </p>
          </div>

          <BodyText>
            If you choose to enter real patient data despite this guidance, you do so at your own
            risk and in potential violation of applicable data protection law (e.g. UK GDPR, HIPAA).
            Aletheia provides no technical safeguards against the entry of PII into free-text fields
            and makes no warranty regarding compliance with clinical data regulations.
          </BodyText>
        </section>

        <Divider />

        {/* ── 4. Third-party AI ── */}
        <section aria-labelledby="section-ai">
          <SectionHeading>4. Data Sent to Google Gemini</SectionHeading>
          <BodyText>
            To generate differential diagnoses and evidence summaries, Aletheia sends structured
            prompts to the Google Gemini API using your own API key. This is the only external data
            flow from the application itself.
          </BodyText>

          <KeyCallout icon={<IconSparkle />} title="Only clinical fields — never identifiers">
            The prompts constructed by Aletheia include only the clinical data you provide:
            presenting complaint, history, examination findings, and investigation results. The
            report title field is <em>not</em> included in prompts sent to Gemini. No patient name,
            date of birth, address, or NHS/MRN number is appended to any Gemini request by
            Aletheia's code.
          </KeyCallout>

          <BodyText>
            Because you supply your own Gemini API key, your usage is subject to{' '}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#1B5FA8', textDecoration: 'underline', textUnderlineOffset: 3 }}
            >
              Google's Privacy Policy
            </a>{' '}
            and the{' '}
            <a
              href="https://ai.google.dev/gemini-api/terms"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#1B5FA8', textDecoration: 'underline', textUnderlineOffset: 3 }}
            >
              Gemini API Additional Terms of Service
            </a>
            . You are responsible for reviewing these terms and ensuring your usage is appropriate
            for your context.
          </BodyText>

          <h3
            style={{
              fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
              fontWeight: 600,
              fontSize: 15,
              color: '#162C41',
              margin: '24px 0 10px 0',
            }}
          >
            4.1 PubMed Lookups
          </h3>
          <BodyText>
            Aletheia also queries the{' '}
            <a
              href="https://www.ncbi.nlm.nih.gov/home/develop/api/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#1B5FA8', textDecoration: 'underline', textUnderlineOffset: 3 }}
            >
              NCBI PubMed E-utilities API
            </a>{' '}
            to verify citation PMIDs. These requests contain only numeric PMID identifiers — no
            clinical content or patient information is transmitted. NCBI's terms of service and
            privacy policy govern these requests.
          </BodyText>
        </section>

        <Divider />

        {/* ── 5. Cookies ── */}
        <section aria-labelledby="section-cookies">
          <SectionHeading>5. Cookies &amp; Local Storage</SectionHeading>
          <BodyText>
            <strong>Website:</strong> We set no first-party cookies. Cloudflare Web Analytics is
            cookieless by design.
          </BodyText>
          <BodyText>
            <strong>Application:</strong> The Aletheia desktop/web app may use browser{' '}
            <InlineCode>localStorage</InlineCode> or application-level storage to persist UI state
            (e.g. theme preference, session configuration). This data never leaves your device.
          </BodyText>
        </section>

        <Divider />

        {/* ── 6. Your rights ── */}
        <section aria-labelledby="section-rights">
          <SectionHeading>6. Your Rights</SectionHeading>
          <BodyText>
            Because we collect only aggregate, anonymous website analytics and hold no user account
            data, there is no personal data we hold about you that is subject to a subject access
            request. However:
          </BodyText>
          <ul style={{ listStyle: 'disc', paddingLeft: 24, margin: '0 0 16px 0' }}>
            <ListItem>
              Any data you store in the local Aletheia database is entirely under your control — you
              can delete the database file at any time.
            </ListItem>
            <ListItem>
              For questions about how Cloudflare processes analytics data, refer to Cloudflare's own
              privacy documentation.
            </ListItem>
            <ListItem>
              For questions about how Google processes Gemini API data, refer to Google's privacy
              and AI terms.
            </ListItem>
          </ul>
        </section>

        <Divider />

        {/* ── 7. Open source ── */}
        <section aria-labelledby="section-oss">
          <SectionHeading>7. Open Source &amp; Transparency</SectionHeading>
          <BodyText>
            Aletheia is source-available. You can audit exactly what data the application sends over
            the network by reading the source code in the{' '}
            <a
              href="https://github.com/biowess/aletheia"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#1B5FA8', textDecoration: 'underline', textUnderlineOffset: 3 }}
            >
              GitHub repository
            </a>
            . The prompts sent to Gemini are constructed in the backend service layer and can be
            inspected directly.
          </BodyText>
        </section>

        <Divider />

        {/* ── 8. Changes ── */}
        <section aria-labelledby="section-changes">
          <SectionHeading>8. Changes to this Policy</SectionHeading>
          <BodyText>
            We may update this policy as the application evolves. Material changes will be reflected
            in the effective date shown at the top of this page and may be announced in the GitHub
            releases changelog. Continued use of the site or application after a change constitutes
            acceptance of the updated policy.
          </BodyText>
        </section>

        <Divider />

        {/* ── 9. Contact ── */}
        <section aria-labelledby="section-contact">
          <SectionHeading>9. Contact</SectionHeading>
          <BodyText>
            If you have questions about this policy, please open an issue on{' '}
            <a
              href="https://github.com/biowess/aletheia/issues"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#1B5FA8', textDecoration: 'underline', textUnderlineOffset: 3 }}
            >
              GitHub
            </a>
            .
          </BodyText>
        </section>

        {/* ── Bottom nav ── */}
        <div
          style={{
            marginTop: 48,
            padding: '20px 24px',
            backgroundColor: '#FFFFFF',
            border: '1px solid #D6DDE4',
            borderRadius: 4,
            display: 'flex',
            flexWrap: 'wrap',
            gap: 16,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <p
            style={{
              fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
              fontSize: 13,
              color: '#8FA3B3',
              margin: 0,
            }}
          >
            Have more questions about data handling?
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link
              to="/faq"
              className="btn-light btn-interactive"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                height: 36,
                padding: '0 16px',
                fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
                fontWeight: 500,
                fontSize: 13,
                borderRadius: 4,
                textDecoration: 'none',
                cursor: 'pointer',
              }}
            >
              Read the FAQ
            </Link>
            <a
              href="https://github.com/biowess/aletheia/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-dark btn-interactive"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                height: 36,
                padding: '0 16px',
                fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
                fontWeight: 600,
                fontSize: 13,
                borderRadius: 4,
                textDecoration: 'none',
                cursor: 'pointer',
              }}
            >
              Open an issue ↗
            </a>
          </div>
        </div>
      </div>

      {/* ── Privacy page micro-interaction styles ── */}
      <style>{`
        .privacy-summary-card:hover {
          border-color: #244B73 !important;
          box-shadow: 0 4px 12px 0 rgba(22,44,65,0.10) !important;
        }
      `}</style>
    </main>
  )
}
