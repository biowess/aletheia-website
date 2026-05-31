import { useState, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import BrowserMockup from '../ui/BrowserMockup';
import { track } from '../../lib/analytics';

import screenshot01 from '../assets/docs/01.png';
import screenshot02 from '../assets/docs/02.png';
import screenshot03 from '../assets/docs/03.png';
import screenshot04 from '../assets/docs/04.png';
import screenshot05 from '../assets/docs/05.png';

const tabs = [
  {
    id: 'casebook',
    name: 'Casebook',
    file: screenshot05,
    description: 'Case management dashboard. Active/archived case listing, search bar, tag filters.',
    caption: 'Active case listings and archive management.'
  },
  {
    id: 'clinical-workspace',
    name: 'Clinical Workspace',
    file: screenshot04,
    description: 'Split-pane view: left panel shows Anamnesis, Physical Exam, Laboratory, and Morphological Data forms. Right panel shows live AI report with inline citations.',
    caption: 'Split-pane view combining data entry with live reasoning output.'
  },
  {
    id: 'differential-evolution',
    name: 'Differential Evolution',
    file: screenshot03,
    description: 'Version timeline comparing V1→V2→V3. Confidence bars, rank movement indicators, certainty bands.',
    caption: 'Version history showing the evolution of the differential diagnosis.'
  },
  {
    id: 'report-viewer',
    name: 'Report Viewer',
    file: screenshot02,
    description: 'Full structured report: Vancouver-formatted references, confidence bars, severity indicators, EB Garamond typography.',
    caption: 'Detailed structured report with Vancouver-style references.'
  },
  {
    id: 'report-detail',
    name: 'Report Detail',
    file: screenshot01,
    description: 'Close-up of report section: inline PMID citations, diagnostic likelihood scores, diagnostic criteria text.',
    caption: 'Close-up view of inline citations and likelihood scoring.'
  }
];

export default function ScreenshotShowcase() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const shouldReduceMotion = useReducedMotion();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex = index;
    switch (e.key) {
      case 'ArrowRight':
        nextIndex = (index + 1) % tabs.length;
        break;
      case 'ArrowLeft':
        nextIndex = (index - 1 + tabs.length) % tabs.length;
        break;
      case 'Home':
        nextIndex = 0;
        break;
      case 'End':
        nextIndex = tabs.length - 1;
        break;
      default:
        return;
    }
    e.preventDefault();
    setActiveTab(tabs[nextIndex]);
    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <section id="showcase" className="bg-[#F5F8FB] section-py w-full border-t border-[#D7E2EC]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12 text-center md:text-left">
          <div
            className="uppercase tracking-[0.08em] font-semibold text-[11px] text-[#244B73] mb-4"
            style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
          >
            Inside Aletheia
          </div>
          <h2
            className="text-[24px] sm:text-[28px] lg:text-[32px] font-bold text-[#162C41] mb-4 tracking-tight"
            style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
          >
            A precision instrument for clinical reasoning
          </h2>
          <p
            className="text-[16px] text-[#4F606F] max-w-[600px] md:mx-0"
            style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
          >
            Every screen is designed around a single principle: structured input, verifiable output.
          </p>
        </div>

        {/* Tab Navigation Container */}
        <div className="showcase-tab-wrapper w-full mb-8">
          <div className="w-full border-b border-[#D7E2EC] overflow-x-auto no-scrollbar" style={{ WebkitOverflowScrolling: 'touch' }}>
            <div className="flex min-w-max" role="tablist" aria-label="Screenshot showcase tabs">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                ref={(el) => { tabRefs.current[index] = el; }}
                role="tab"
                aria-selected={activeTab.id === tab.id}
                aria-controls={`panel-${tab.id}`}
                id={`tab-${tab.id}`}
                tabIndex={activeTab.id === tab.id ? 0 : -1}
                onClick={() => {
                  setActiveTab(tab);
                  track('Screenshot Tab Changed', { tab: tab.name });
                }}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className={`relative px-6 py-3 text-[13px] font-semibold tracking-wide transition-colors duration-200 cursor-pointer ${activeTab.id === tab.id
                    ? 'text-[#162C41] bg-[#EDF3F8]'
                    : 'text-[#4F606F] hover:text-[#162C41] bg-[#F5F8FB]'
                  }`}
                style={{
                  fontFamily: '"IBM Plex Sans", sans-serif',
                  borderTopLeftRadius: '4px',
                  borderTopRightRadius: '4px',
                  borderTop: '1px solid transparent',
                  borderLeft: '1px solid transparent',
                  borderRight: '1px solid transparent',
                  ...(activeTab.id === tab.id ? {
                    borderColor: '#D7E2EC',
                    borderBottomColor: 'transparent',
                    borderBottomWidth: 0,
                  } : {})
                }}
              >
                {tab.name}
                {/* Active Border */}
                {activeTab.id === tab.id && (
                  <div
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#244B73]"
                  />
                )}
              </button>
            ))}
            </div>
          </div>
        </div>

        {/* Showcase Area */}
        <div className="flex flex-col items-center">
          <div 
            className="w-full max-w-[960px] aspect-[16/10] relative"
            id={`panel-${activeTab.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeTab.id}`}
            tabIndex={0}
          >
            <BrowserMockup hideGradient context={activeTab.name}>
              <figure className="w-full h-full m-0 relative overflow-hidden bg-[#EDF3F8]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab.id}
                    initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.995 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.995 }}
                    transition={{ type: 'spring', duration: 0.26, bounce: 0 }}
                    className="absolute inset-0 flex items-center justify-center p-4"
                  >
                    <div className="w-full h-full border border-dashed border-[#D7E2EC] bg-[#EDF3F8] flex flex-col items-center justify-center text-center p-6 relative overflow-hidden">
                      <img
                        src={activeTab.file}
                        alt={activeTab.caption}
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                        width={1200}
                        height={800}
                      />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </figure>
            </BrowserMockup>
          </div>

          <figcaption
            className="mt-6 text-[13px] text-[#4F606F] italic text-center"
            style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
          >
            {activeTab.caption}
          </figcaption>
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <a
            href="/screenshots"
            className="text-[15px] font-semibold text-[#244B73] hover:text-[#162C41] transition-colors"
            style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
          >
            See all screenshots <span aria-hidden="true">→</span>
          </a>
        </div>

      </div>
    </section>
  );
}