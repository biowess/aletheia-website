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

/* ─── SVG icons ──────────────────────────────────────────────────────────── */

const IconShield = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M9.661 2.237a.531.531 0 01.678 0 11.947 11.947 0 007.078 2.749.5.5 0 01.479.425c.069.52.104 1.05.104 1.589 0 5.162-3.26 9.563-7.834 11.256a.48.48 0 01-.332 0C5.26 16.563 2 12.162 2 7c0-.538.035-1.07.104-1.589a.5.5 0 01.48-.425 11.947 11.947 0 007.077-2.749z"
      clipRule="evenodd"
    />
  </svg>
)

const IconDatabase = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" aria-hidden="true">
    <path d="M10 2c-2.236 0-4.43.18-6.57.524C1.993 2.755 1 4.014 1 5.426v5.148c0 1.413.993 2.67 2.43 2.902.848.137 1.705.248 2.57.331v3.443a.75.75 0 001.28.53l3.58-3.579c.57-.573.222-1.473-.554-1.473H7.255a41.801 41.801 0 01-2.215-.227V9.539c1.397.167 2.817.256 4.253.274a.75.75 0 00.762-.757.75.75 0 00-.757-.762 39.24 39.24 0 01-4.01-.264v-.91c1.21.093 2.436.149 3.679.168a.75.75 0 00.761-.757.75.75 0 00-.757-.762A40.284 40.284 0 015.25 6.36V5.426c0-.394.228-.741.63-.813A37.268 37.268 0 0110 4.262c2.06 0 4.105.183 6.12.552.401.072.63.42.63.812v.915a37.6 37.6 0 01-3.502-.157.75.75 0 00-.104 1.497 39.122 39.122 0 004.024.238v.887a37.46 37.46 0 01-3.502-.157.75.75 0 00-.103 1.497 38.999 38.999 0 004.017.236l.007.001c.77.01 1.283.88.952 1.574L15 13.7c.23-.027.456-.056.682-.088C17.007 13.344 18 12.087 18 10.574V5.426c0-1.412-.993-2.67-2.43-2.902A44.958 44.958 0 0010 2z" />
  </svg>
)

const IconEye = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" aria-hidden="true">
    <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
    <path
      fillRule="evenodd"
      d="M.664 10.59a1.651 1.651 0 010-1.18l.392-.865C2.408 6.28 5.892 4.5 10 4.5c4.109 0 7.592 1.78 8.944 3.946l.392.864a1.652 1.652 0 010 1.18l-.392.865C17.592 13.72 14.108 15.5 10 15.5c-4.108 0-7.592-1.78-8.944-3.946l-.392-.864z"
      clipRule="evenodd"
    />
  </svg>
)

const IconGlobe = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1.5-2.09A6.5 6.5 0 012.1 11h1.65a1.5 1.5 0 001.5 1.5v.5a1.5 1.5 0 001.5 1.5v.88a.5.5 0 00.5.5h.75A6.51 6.51 0 018.5 15.91zm1.83-10.6a.5.5 0 01-.33.47V7h-.5a.5.5 0 01-.5-.5V5.5A.5.5 0 019.5 5h.75a.5.5 0 01.08.31zM14 15.5a.5.5 0 01-.5.5h-.5a.5.5 0 01-.5-.5v-.5a1.5 1.5 0 001.5-1.5h1.65A6.516 6.516 0 0114 15.5zm2.95-4.5a6.5 6.5 0 00-6.45-7.49V5h.5a.5.5 0 010 1H10v1a1 1 0 001 1h1.5a1.5 1.5 0 011.5 1.5v.5a.5.5 0 01-.5.5H12a.5.5 0 010-1v-.5H10a2 2 0 01-2-2V6.04A6.494 6.494 0 013.05 11H4.5a1.5 1.5 0 001.5 1.5H7a.5.5 0 010 1H5.5a2.5 2.5 0 01-2.45-2H1.6a6.5 6.5 0 0015.35 0h-1.45a2.5 2.5 0 01-2.45 2H12a.5.5 0 010-1h.5a1.5 1.5 0 001.5-1.5H16a.5.5 0 010 1H14.5A.5.5 0 0014 12v-.5a.5.5 0 01.5-.5h2a6.517 6.517 0 00.45-1z"
      clipRule="evenodd"
    />
  </svg>
)

const IconNoUser = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" aria-hidden="true">
    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
  </svg>
)

const IconSparkle = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.83-4.4z"
      clipRule="evenodd"
    />
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
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #D6DDE4',
                borderRadius: 4,
                padding: '16px 18px',
                boxShadow: '0 1px 3px 0 rgba(22,44,65,0.06)',
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
              }}
            >
              <div style={{ color: '#1B5FA8', width: 20, height: 20 }} aria-hidden="true">
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
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                height: 36,
                padding: '0 16px',
                fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
                fontWeight: 500,
                fontSize: 13,
                color: '#162C41',
                backgroundColor: '#F5F8FB',
                border: '1px solid #D6DDE4',
                borderRadius: 4,
                textDecoration: 'none',
                transition: 'border-color 150ms ease, background-color 150ms ease',
                cursor: 'pointer',
              }}
            >
              Read the FAQ
            </Link>
            <a
              href="https://github.com/biowess/aletheia/issues"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                height: 36,
                padding: '0 16px',
                fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
                fontWeight: 600,
                fontSize: 13,
                color: '#FFFFFF',
                backgroundColor: '#162C41',
                border: '1px solid #162C41',
                borderRadius: 4,
                textDecoration: 'none',
                transition: 'background-color 150ms ease',
                cursor: 'pointer',
              }}
            >
              Open an issue ↗
            </a>
          </div>
        </div>
      </div>

      {/* ── Inline hover style for footer nav links ── */}
      <style>{`
        .privacy-nav-btn:hover {
          border-color: #1B5FA8 !important;
          background-color: #EFF6FF !important;
        }
      `}</style>
    </main>
  )
}
