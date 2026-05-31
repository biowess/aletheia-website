import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BrowserMockup from '../ui/BrowserMockup';

const tabs = [
  {
    id: 'casebook',
    name: 'Casebook',
    file: '05.png',
    description: 'Case management dashboard. Active/archived case listing, search bar, tag filters.',
    caption: 'Active case listings and archive management.'
  },
  {
    id: 'clinical-workspace',
    name: 'Clinical Workspace',
    file: '04.png',
    description: 'Split-pane view: left panel shows Anamnesis, Physical Exam, Laboratory, and Morphological Data forms. Right panel shows live AI report with inline citations.',
    caption: 'Split-pane view combining data entry with live reasoning output.'
  },
  {
    id: 'differential-evolution',
    name: 'Differential Evolution',
    file: '03.png',
    description: 'Version timeline comparing V1→V2→V3. Confidence bars, rank movement indicators, certainty bands.',
    caption: 'Version history showing the evolution of the differential diagnosis.'
  },
  {
    id: 'report-viewer',
    name: 'Report Viewer',
    file: '02.png',
    description: 'Full structured report: Vancouver-formatted references, confidence bars, severity indicators, EB Garamond typography.',
    caption: 'Detailed structured report with Vancouver-style references.'
  },
  {
    id: 'report-detail',
    name: 'Report Detail',
    file: '01.png',
    description: 'Close-up of report section: inline PMID citations, diagnostic likelihood scores, diagnostic criteria text.',
    caption: 'Close-up view of inline citations and likelihood scoring.'
  }
];

export default function ScreenshotShowcase() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="bg-[#F5F8FB] pt-24 pb-24 w-full border-t border-[#D7E2EC]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12 text-center md:text-left">
          <div 
            className="uppercase tracking-[0.08em] font-semibold text-[11px] text-[#244B73] mb-4"
            style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
          >
            Inside Aletheia
          </div>
          <h2 
            className="text-[32px] font-bold text-[#162C41] mb-4 tracking-tight"
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
        <div className="w-full border-b border-[#D7E2EC] mb-8 overflow-x-auto no-scrollbar">
          <div className="flex w-full min-w-max">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab)}
                className={`relative px-6 py-3 text-[13px] font-semibold tracking-wide transition-colors duration-200 cursor-pointer ${
                  activeTab.id === tab.id
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

        {/* Showcase Area */}
        <div className="flex flex-col items-center">
          <div className="w-full max-w-[960px] aspect-[16/10] relative">
            <BrowserMockup hideGradient>
              <figure className="w-full h-full m-0 relative overflow-hidden bg-[#EDF3F8]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.18, ease: 'easeInOut' }}
                    className="absolute inset-0 flex items-center justify-center p-4"
                  >
                    {/* Placeholder */}
                    <div className="w-full h-full border border-dashed border-[#D7E2EC] bg-[#EDF3F8] flex flex-col items-center justify-center text-center p-6 relative overflow-hidden">
                      <div 
                        className="text-[12px] text-[#4F606F] whitespace-pre-line leading-[1.8]"
                        style={{ fontFamily: '"IBM Plex Mono", monospace' }}
                      >
                        {`[Screenshot: ${activeTab.name}]\nReplace with: docs/${activeTab.file}\n${activeTab.description}`}
                      </div>
                      
                      {/* You can optionally show the real image underneath or hide the placeholder once real images are used */}
                      {/* 
                      <img 
                        src={`/docs/${activeTab.file}`} 
                        alt={activeTab.name}
                        className="absolute inset-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity" 
                      /> 
                      */}
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
