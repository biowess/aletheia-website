import type { Annotation } from '../components/ui/AnnotatedScreenshot';
import AnnotatedScreenshot from '../components/ui/AnnotatedScreenshot';
import { PageHeader } from '../components/ui';
import SEO from '../components/SEO';

const panels = [
  {
    id: 'casebook',
    title: 'Casebook — Case Management Dashboard',
    description: 'Browse, search, and organize all simulated educational cases from a single interface. Cases can be tagged, archived, or permanently deleted. The search bar filters across case titles and tags in real time.',
    imageSrc: '/docs/05.png',
    annotations: [
      { id: 1, label: 'Active / Archived toggle', dotX: 20, dotY: 15, labelX: 30, labelY: 8 },
      { id: 2, label: 'Tag-based filter system', dotX: 70, dotY: 15, labelX: 80, labelY: 8 },
      { id: 3, label: 'Case status indicators', dotX: 85, dotY: 50, labelX: 95, labelY: 40 },
    ] as Annotation[]
  },
  {
    id: 'workspace',
    title: 'Educational Workspace — Split-Pane Data Entry',
    description: 'Structured input forms for simulated cases (Anamnesis, Physical Examination, Laboratory, Morphological Data) on the left. The live AI-generated report renders on the right as generation completes.',
    imageSrc: '/docs/04.png',
    annotations: [
      { id: 1, label: 'Four clinical input tabs', dotX: 15, dotY: 30, labelX: 25, labelY: 20 },
      { id: 2, label: 'Live report preview', dotX: 70, dotY: 50, labelX: 80, labelY: 40 },
      { id: 3, label: 'Generate Report action', dotX: 85, dotY: 90, labelX: 90, labelY: 80 },
    ] as Annotation[]
  },
  {
    id: 'evolution',
    title: 'Differential Evolution Tracker',
    description: 'Version-controlled differential diagnosis showing confidence shifts and rank movement across report iterations. Compare V1 → V2 → V3 side by side with certainty bands.',
    imageSrc: '/docs/03.png',
    annotations: [
      { id: 1, label: 'Version selector', dotX: 50, dotY: 15, labelX: 60, labelY: 8 },
      { id: 2, label: 'Rank movement arrows', dotX: 30, dotY: 50, labelX: 40, labelY: 40 },
      { id: 3, label: 'Confidence bands', dotX: 70, dotY: 60, labelX: 80, labelY: 50 },
    ] as Annotation[]
  },
  {
    id: 'viewer',
    title: 'Aletheia — Clinical Reasoning Report',
    description: 'Editorial-grade clinical summaries rendered in a clean serif typeface with Vancouver-formatted references. Each diagnostic entry includes confidence bars and categorized clinical evidence.',
    imageSrc: '/docs/02.png',
    annotations: [
      { id: 1, label: 'Vancouver reference format', dotX: 75, dotY: 80, labelX: 85, labelY: 70 },
      { id: 2, label: 'Differential diagnosis confidence bars', dotX: 60, dotY: 40, labelX: 70, labelY: 30 },
      { id: 3, label: 'Strength of evidence labels', dotX: 25, dotY: 85, labelX: 35, labelY: 75 },
    ] as Annotation[]
  },
  {
    id: 'detail',
    title: 'Clinical Reasoning Report — References & Missing Data',
    description: 'The rest of the clinical analysis rendered in a clean serif typeface featuring fully detailed PubMed references. The report explicitly highlights critical missing laboratory data and outlines a chronological follow-up timeline for patient care.',
    imageSrc: '/docs/01.png',
    annotations: [
      { id: 1, label: 'PMID-verified citations', dotX: 80, dotY: 20, labelX: 90, labelY: 10 },
      { id: 2, label: 'Missing information and labs', dotX: 50, dotY: 50, labelX: 60, labelY: 40 },
      { id: 3, label: 'Follow-up timeline', dotX: 50, dotY: 80, labelX: 60, labelY: 70 },
    ] as Annotation[]
  },
  {
    id: 'inlinecite',
    title: 'Clinical Reasoning Report — Citation Verification',
    description: 'The AI-generated clinical analysis document features interactive reference overlays. Hovering over a source reveals explicit study metadata, a verified PMID, and quick actions to copy identifiers or generate citations.',
    imageSrc: '/docs/06.png',
    annotations: [
      { id: 1, label: 'Interactive citation hover cards', dotX: 80, dotY: 20, labelX: 90, labelY: 10 },
      { id: 2, label: 'PMID actions and copy buttons', dotX: 50, dotY: 50, labelX: 60, labelY: 40 },
      { id: 3, label: 'Grounded LLM generation metadata', dotX: 50, dotY: 80, labelX: 60, labelY: 70 },
    ] as Annotation[]
  },
  {
    id: 'citemodal',
    title: 'Clinical Reasoning Report — Reference Copy Modal',
    description: 'An interactive interface overlay designed for seamless workflow integration and medical referencing. Clicking a source citation triggers a dedicated modal containing a fully formatted bibliographic reference string alongside rapid copy actions.',
    imageSrc: '/docs/07.png',
    annotations: [
      { id: 1, label: 'Citation generation modal', dotX: 80, dotY: 20, labelX: 90, labelY: 10 },
      { id: 2, label: 'Formatted reference strings', dotX: 50, dotY: 50, labelX: 60, labelY: 40 },
      { id: 3, label: 'Copy citation quick actions', dotX: 50, dotY: 80, labelX: 60, labelY: 70 },
    ] as Annotation[]
  },
  {
    id: 'pptx',
    title: 'App-Generated PowerPoint Presentation',
    description: 'This shows the PowerPoint presentation that was successfully generated directly using the clinical reasoning app. The interface displays the fully formatted deck ready for use.',
    imageSrc: '/docs/08.png',
    annotations: [
      { id: 1, label: 'Slide navigation sidebar', dotX: 80, dotY: 20, labelX: 90, labelY: 10 },
      { id: 2, label: 'Title slide card', dotX: 50, dotY: 50, labelX: 60, labelY: 40 },
      { id: 3, label: 'Color-coded severity badge', dotX: 50, dotY: 80, labelX: 60, labelY: 70 },
    ] as Annotation[]
  }
];

export default function ScreenshotsPage() {
  return (
    <>
      <SEO
        title="Screenshots — Aletheia"
        description="Interface screenshots of Aletheia: casebook, split-pane educational workspace, differential evolution tracker, and citation-verified report viewer."
        canonical="https://biowess.github.io/aletheia-website/screenshots"
      />

      <main className="bg-[#FFFFFF] min-h-screen pt-20">
        <PageHeader
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Screenshots' }
          ]}
          title="Screenshots"
          subtitle="All views of the Aletheia Educational Workstation interface."
        />

        {/* Panels */}
        <div className="w-full pb-20">
          {panels.map((panel, index) => {
            const isEven = index % 2 === 0;
            const bgClass = isEven ? 'bg-[#FFFFFF]' : 'bg-[#F5F8FB]';
            // alternating layout: even panels have text left / image right; odd panels have image left / text right.
            // On mobile: always image above text.
            // Component flex is image left / text right by default. So `reversed={true}` makes text left / image right.

            return (
              <div key={panel.id} className={`${bgClass} py-16 border-b border-[#D7E2EC]`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <AnnotatedScreenshot
                    title={panel.title}
                    description={panel.description}
                    imageSrc={panel.imageSrc}
                    annotations={panel.annotations}
                    reversed={isEven}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}
