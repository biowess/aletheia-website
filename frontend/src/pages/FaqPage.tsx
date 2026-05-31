import { Accordion, AccordionItem, PageHeader, ExternalLink, RippleButton } from '../components/ui';
import SEO from '../components/SEO';

export default function FaqPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Does Aletheia send patient data to the cloud?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. All case data is stored locally in a SQLite database on your machine. The only external calls are: (1) structured clinical prompts to Google Gemini — which should never include real patient identifiers — and (2) PMID lookups to PubMed E-utilities. No real patient records should be entered into the system, and no data leaves your machine."
        }
      },
      {
        "@type": "Question",
        "name": "Where is the database stored?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "At ~/.local/share/Aletheia/aletheia.db (desktop) or in the backend working directory (web app mode). The path is configurable."
        }
      },
      {
        "@type": "Question",
        "name": "Is Aletheia HIPAA compliant?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Aletheia is strictly an educational and research tool for students, not a regulated medical device. It must not be used for clinical decision-making or with real patient data. Users are responsible for ensuring they only input simulated or anonymized educational data."
        }
      },
      {
        "@type": "Question",
        "name": "Why is only Linux supported?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The current release targets Linux due to OS-level networking differences that affect the local dev server proxy. Windows compatibility via WSL 2 is possible; native Windows support is planned."
        }
      },
      {
        "@type": "Question",
        "name": "What is a Google Gemini API key and is it free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A Gemini API key authorizes Aletheia to call Google's Gemini language model. Google provides a free tier at aistudio.google.com. Costs depend on usage volume."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need an NCBI API key?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Without an NCBI key, Aletheia uses the public PubMed rate limit (3 requests/second). With an NCBI key, this increases to 10 requests/second — useful for cases with many citations."
        }
      },
      {
        "@type": "Question",
        "name": "Is Aletheia a certified medical device?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Aletheia is strictly an educational tool for medical students to practice clinical reasoning. It is not for clinical decision-making and does not replace professional clinical judgment. It should never be used on real patients."
        }
      },
      {
        "@type": "Question",
        "name": "How accurate are the differential diagnoses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Aletheia's accuracy depends on the quality of clinical inputs and the underlying Gemini model. Every differential in the output includes PubMed-verified citations and a confidence score — always review the evidence before acting on a suggestion."
        }
      },
      {
        "@type": "Question",
        "name": "Can I export reports for use in an EHR?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Reports can be exported as structured PDF (with TeX Gyre Termes typography and Vancouver-formatted references) or PowerPoint. Manual import into EHR systems is the user's responsibility."
        }
      },
      {
        "@type": "Question",
        "name": "What AI model does Aletheia use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Google Gemini, via the google-genai Python SDK. The model version is configurable in the settings."
        }
      },
      {
        "@type": "Question",
        "name": "Can I add support for other AI providers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. The backend uses a BaseAIProvider abstraction. Additional providers (e.g. Claude, GPT-4o) can be implemented by extending this class."
        }
      },
      {
        "@type": "Question",
        "name": "How does the PubMed verification work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "After Gemini generates a structured response with PMID references, Aletheia's async PubMed client queries NCBI E-utilities to verify each PMID exists and retrieves its metadata. Only verified PMIDs appear in the final report."
        }
      }
    ]
  };

  return (
    <main className="w-full min-h-[calc(100vh-56px)] bg-[#F5F8FB] pb-16 sm:pb-24">
      <SEO 
        title="FAQ — Aletheia"
        description="Frequently asked questions about Aletheia: data privacy, HIPAA considerations, installation, clinical use, and technical architecture."
        canonical="https://biowess.github.io/aletheia-website/faq"
      >
        <script type="application/ld+json">
          {JSON.stringify(faqJsonLd)}
        </script>
      </SEO>
      <PageHeader 
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'FAQ' }
        ]}
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about Aletheia's features, privacy, and technical setup."
      />
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 mt-10 sm:mt-12">

        <div className="space-y-10">
          
          <section>
            <h2 className="font-sans font-bold text-[16px] sm:text-[18px] text-[#162C41] border-l-[2px] border-[#244B73] pl-[12px] mb-6">
              Privacy & Data Security
            </h2>
            <Accordion>
              <AccordionItem title="Does Aletheia send patient data to the cloud?">
                No. All case data is stored locally in a SQLite database on your machine. The only external calls are: (1) structured clinical prompts to Google Gemini — which should never include real patient identifiers — and (2) PMID lookups to PubMed E-utilities. No real patient records should be entered into the system, and no data leaves your machine.
              </AccordionItem>
              <AccordionItem title="Where is the database stored?">
                At <code>~/.local/share/Aletheia/aletheia.db</code> (desktop) or in the backend working directory (web app mode). The path is configurable.
              </AccordionItem>
              <AccordionItem title="Is Aletheia HIPAA compliant?">
                Aletheia is strictly an educational and research tool for students, not a regulated medical device. It must not be used for clinical decision-making or with real patient data. Users are responsible for ensuring they only input simulated or anonymized educational data.
              </AccordionItem>
            </Accordion>
          </section>

          <section>
            <h2 className="font-sans font-bold text-[16px] sm:text-[18px] text-[#162C41] border-l-[2px] border-[#244B73] pl-[12px] mb-6">
              Installation & Setup
            </h2>
            <Accordion>
              <AccordionItem title="Why is only Linux supported?">
                The current release targets Linux due to OS-level networking differences that affect the local dev server proxy. Windows compatibility via WSL 2 is possible; native Windows support is planned.
              </AccordionItem>
              <AccordionItem title="What is a Google Gemini API key and is it free?">
                A Gemini API key authorizes Aletheia to call Google's Gemini language model. Google provides a free tier at <ExternalLink href="https://aistudio.google.com">aistudio.google.com</ExternalLink>. Costs depend on usage volume.
              </AccordionItem>
              <AccordionItem title="Do I need an NCBI API key?">
                No. Without an NCBI key, Aletheia uses the public PubMed rate limit (3 requests/second). With an NCBI key, this increases to 10 requests/second — useful for cases with many citations.
              </AccordionItem>
            </Accordion>
          </section>

          <section>
            <h2 className="font-sans font-bold text-[16px] sm:text-[18px] text-[#162C41] border-l-[2px] border-[#244B73] pl-[12px] mb-6">
              Educational Use Only
            </h2>
            <Accordion>
              <AccordionItem title="Is Aletheia a certified medical device?">
                No. Aletheia is strictly an educational tool for medical students to practice clinical reasoning. It is not for clinical decision-making and does not replace professional clinical judgment. It should never be used on real patients.
              </AccordionItem>
              <AccordionItem title="How accurate are the differential diagnoses?">
                Aletheia's accuracy depends on the quality of clinical inputs and the underlying Gemini model. Every differential in the output includes PubMed-verified citations and a confidence score — always review the evidence before acting on a suggestion.
              </AccordionItem>
              <AccordionItem title="Can I export reports for use in an EHR?">
                Reports can be exported as structured PDF (with TeX Gyre Termes typography and Vancouver-formatted references) or PowerPoint. Manual import into EHR systems is the user's responsibility.
              </AccordionItem>
            </Accordion>
          </section>

          <section>
            <h2 className="font-sans font-bold text-[16px] sm:text-[18px] text-[#162C41] border-l-[2px] border-[#244B73] pl-[12px] mb-6">
              Technical
            </h2>
            <Accordion>
              <AccordionItem title="What AI model does Aletheia use?">
                Google Gemini, via the <code className="bg-white px-1.5 py-0.5 rounded text-[14px] border border-[#D7E2EC]">google-genai</code> Python SDK. The model version is configurable in the settings.
              </AccordionItem>
              <AccordionItem title="Can I add support for other AI providers?">
                Yes. The backend uses a <code className="bg-white px-1.5 py-0.5 rounded text-[14px] border border-[#D7E2EC]">BaseAIProvider</code> abstraction. Additional providers (e.g. Claude, GPT-4o) can be implemented by extending this class.
              </AccordionItem>
              <AccordionItem title="How does the PubMed verification work?">
                After Gemini generates a structured response with PMID references, Aletheia's async PubMed client queries NCBI E-utilities to verify each PMID exists and retrieves its metadata. Only verified PMIDs appear in the final report.
              </AccordionItem>
            </Accordion>
          </section>

        </div>

        <div className="mt-16 text-center">
          <p className="text-[16px] font-sans text-[#4F606F] mb-4">Still have questions?</p>
          <RippleButton
            as="a"
            href="https://github.com/aletheia/aletheia/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-interactive btn-light inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 min-h-[48px] rounded-[4px] font-sans font-medium text-[15px] transition-colors focus:outline-none focus:ring-2 focus:ring-[#1B5FA8]"
          >
            Open an issue on GitHub
          </RippleButton>
        </div>
        
      </div>
    </main>
  );
}
