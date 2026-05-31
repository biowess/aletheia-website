import { useEffect, useState } from 'react';
import FeaturePanel from '../components/sections/FeaturePanel';
import { PageHeader } from '../components/ui';
import SEO from '../components/SEO';

const featuresData = [
  {
    id: 'case-management',
    title: 'Case Management',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/><path d="M2 10h20"/><path d="M2 15h20"/></svg>,
    description: (
      <>
        <p>Aletheia provides a full CRUD lifecycle for clinical cases, ensuring every simulated educational scenario is securely stored and easily retrievable. The system utilizes structured JSON aggregate storage, allowing diverse clinical sections like Anamnesis, Physical Exam, Laboratory, and Morphological Data to be preserved without rigid relational schemas breaking under varying data shapes.</p>
        <p>To reduce visual clutter while preserving historical data, Aletheia implements soft-archival capabilities rather than destructive deletions. Clinicians can utilize robust tag-based classification to group cases by pathology, severity, or custom cohorts.</p>
        <p>This approach solves the educational challenge of fragmented case records. By consolidating all heterogeneous data into a single, structured workspace, students minimize the risk of overlooking critical findings and can retrieve evidence consistently during subsequent reviews.</p>
      </>
    ),
    keyFacts: ['JSON aggregate storage', 'Soft-archival functionality', 'Tag-based classification']
  },
  {
    id: 'ai-pipeline',
    title: 'AI Reasoning Pipeline',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3"/><path d="M15 1v3"/><path d="M9 20v3"/><path d="M15 20v3"/><path d="M20 9h3"/><path d="M20 14h3"/><path d="M1 9h3"/><path d="M1 14h3"/></svg>,
    description: (
      <>
        <p>The core of Aletheia's diagnostic capability is a sophisticated 10-stage orchestrated reasoning engine. Governed by the <code>ReasoningOrchestrationService</code>, it enforces a strict sequence: deterministic preprocessing, structured prompt assembly, inference, response parsing, and language enhancement before generating the final report.</p>
        <p>Inference is powered by Google Gemini, ensuring state-of-the-art analytical reasoning over the provided clinical context. The pipeline is designed to be fully deterministic in its preprocessing and assembly phases, mitigating hallucination risks by tightly constraining the LLM's operational boundaries.</p>
        <p>This addresses the educational challenge of irreproducible reasoning. By delegating synthesis to a structured pipeline, Aletheia ensures that differential diagnoses are generated methodically, helping students understand how conclusions are reached while maintaining a transparent audit trail.</p>
      </>
    ),
    keyFacts: ['10-stage orchestration', 'ReasoningOrchestrationService', 'Google Gemini inference']
  },
  {
    id: 'pubmed-grounding',
    title: 'PubMed Evidence Grounding',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>,
    description: (
      <>
        <p>Aletheia ensures educational validity by cross-referencing generated diagnostic pathways against the latest biomedical literature. It employs an asynchronous client interfacing directly with NCBI E-utilities to retrieve and verify citations in real-time.</p>
        <p>The system is engineered for resilience, implementing strict rate-limit enforcement, exponential back-off for failed requests, and per-PMID cache stampede prevention to handle concurrent verification demands without overwhelming external APIs.</p>
        <p>This solves the critical issue of unsupported AI assertions. Clinicians are provided with a fully verified, literature-backed differential diagnosis report, fostering trust and enabling immediate access to primary sources for further reading.</p>
      </>
    ),
    keyFacts: ['NCBI E-utilities async client', 'Exponential backoff retry', 'Per-PMID cache stampede prevention']
  },
  {
    id: 'evidence-cache',
    title: 'Evidence Cache',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>,
    description: (
      <>
        <p>To optimize performance and minimize redundant API calls to external inference and grounding services, Aletheia implements a robust global caching mechanism. Every piece of retrieved evidence is stored in a SHA-256-keyed cache.</p>
        <p>The cache supports cross-case deduplication, meaning that if a specific clinical pattern or literature citation has been recently resolved for one simulated case, the cached result is instantaneously available for others. It features a configurable Time-To-Live (TTL) with soft-invalidation to ensure data remains current.</p>
        <p>For the clinician, this means significantly faster report generation times and offline resilience. The system remains highly responsive even under heavy usage, providing a seamless workstation experience without latency spikes.</p>
      </>
    ),
    keyFacts: ['SHA-256 keyed cache', 'Configurable TTL expiration', 'Cross-case deduplication']
  },
  {
    id: 'follow-up-timeline',
    title: 'Follow-Up Timeline',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>,
    description: (
      <>
        <p>Simulated clinical scenarios are rarely static; they evolve over time with new test results and symptom changes. Aletheia tracks these changes using an append-only delta event system, recording incremental clinical updates per case.</p>
        <p>Rather than duplicating the entire case state for every minor update, the system stores only the delta. This creates a lightweight, highly efficient chronological record of the simulated case's longitudinal journey.</p>
        <p>This allows students to review the exact trajectory of a disease's progression or its response to treatment over time. It provides a clear, undeniable history of what changed and when, which is vital for accurate long-term case management.</p>
      </>
    ),
    keyFacts: ['Append-only delta events', 'Longitudinal case tracking', 'State duplication avoidance']
  },
  {
    id: 'version-history',
    title: 'Version History',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 12 12 17 22 12"/><polyline points="2 17 12 22 22 17"/></svg>,
    description: (
      <>
        <p>Every time a diagnostic report is generated, Aletheia saves it as an immutable, append-only structured snapshot. This ensures that historical interpretations of the simulated case data are never lost or overwritten.</p>
        <p>The system tracks differential evolution across these versions, utilizing multi-dimensional confidence scoring to highlight how the AI's certainty regarding specific conditions has shifted in response to new data.</p>
        <p>This provides an unprecedented level of transparency. Clinicians can visually track how a differential diagnosis narrowed down over time, observing exactly which piece of new evidence caused a shift in diagnostic confidence.</p>
      </>
    ),
    keyFacts: ['Immutable snapshot architecture', 'Multi-dimensional confidence scoring', 'Differential evolution tracking']
  },
  {
    id: 'export-services',
    title: 'Export Services',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>,
    description: (
      <>
        <p>Aletheia is designed to integrate seamlessly into existing clinical workflows by providing high-fidelity export capabilities. It generates editorial-grade PDF reports utilizing ReportLab and the TeX Gyre Termes scholarly typography.</p>
        <p>Additionally, it supports PowerPoint exports via <code>python-pptx</code>, ideal for tumor boards and clinical case presentations. Both export formats are generated dynamically and served directly as streamable file responses to the client.</p>
        <p>This eliminates the friction of copy-pasting findings into external word processors. Clinicians can immediately generate presentation-ready or archive-ready documents with a single click, saving valuable administrative time.</p>
      </>
    ),
    keyFacts: ['ReportLab PDF generation', 'TeX Gyre Termes typography', 'python-pptx stream responses']
  },
  {
    id: 'settings-management',
    title: 'Settings Management',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg>,
    description: (
      <>
        <p>Aletheia abstracts away complex infrastructure management through a dynamic runtime key-value store. This centralized configuration module manages critical operational parameters on the fly.</p>
        <p>Administrators and clinicians can update API key management, adjust grounding toggles, or modify cache TTL preferences directly through the UI. The architecture guarantees that these changes require no complex database schema migrations to take effect.</p>
        <p>This ensures the system remains highly adaptable to changing deployment environments. Whether updating an expired API key or tweaking performance parameters, the application remains stable and continuously available without requiring IT intervention.</p>
      </>
    ),
    keyFacts: ['Runtime key-value store', 'Dynamic API key management', 'No schema migrations required']
  }
];

export default function FeaturesPage() {
  const [activeSection, setActiveSection] = useState<string>(featuresData[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the visible section that intersects the most
        const visibleEntries = entries.filter(entry => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          // Sort by intersection ratio or just pick the first one
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0
      }
    );

    featuresData.forEach(feature => {
      const element = document.getElementById(feature.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <SEO 
        title="Features — Aletheia"
        description="Complete feature reference for Aletheia Clinical Workstation: AI reasoning pipeline, PubMed evidence grounding, version history, case management, and export services."
        canonical="https://biowess.github.io/aletheia-website/features"
      />

      <main className="bg-[#FFFFFF] min-h-screen pt-14">
        <PageHeader 
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Features' }
          ]}
          title="Feature Reference"
          subtitle="A complete technical overview of Aletheia's capabilities."
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="flex flex-col lg:flex-row gap-12 relative">
            
            {/* Mobile Jump To Dropdown */}
            <div className="lg:hidden sticky top-14 z-30 bg-white py-3 border-b border-[#D7E2EC] -mx-4 px-4">
              <label htmlFor="feature-jump" className="sr-only">Jump to section</label>
              <select 
                id="feature-jump"
                className="w-full bg-[#F5F8FB] border border-[#D7E2EC] text-[#162C41] text-sm rounded px-3 py-2 outline-none focus:ring-2 focus:ring-[#244B73]"
                value={activeSection}
                onChange={(e) => scrollToSection(e.target.value)}
              >
                {featuresData.map(feature => (
                  <option key={feature.id} value={feature.id}>{feature.title}</option>
                ))}
              </select>
            </div>

            {/* Sidebar Navigation (Desktop >= 1024px) */}
            <div className="hidden lg:block w-[220px] shrink-0">
              <div className="sticky top-32">
                <nav className="flex flex-col space-y-1">
                  {featuresData.map((feature) => {
                    const isActive = activeSection === feature.id;
                    return (
                      <button
                        key={feature.id}
                        onClick={() => scrollToSection(feature.id)}
                        className={`text-left px-4 py-2 text-[14px] font-sans transition-all duration-200 border-l-[2px] ${
                          isActive 
                            ? 'border-[#244B73] text-[#162C41] font-medium bg-[#F5F8FB]' 
                            : 'border-transparent text-[#4F606F] hover:text-[#162C41] hover:bg-[#F5F8FB]/50'
                        }`}
                      >
                        {feature.title}
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 min-w-0">
              <div className="max-w-4xl">
                {featuresData.map((feature) => (
                  <FeaturePanel
                    key={feature.id}
                    id={feature.id}
                    title={feature.title}
                    icon={feature.icon}
                    description={feature.description}
                    keyFacts={feature.keyFacts}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
      </main>
    </>
  );
}
