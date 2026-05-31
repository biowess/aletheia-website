import { useState } from 'react';

import { DOCS_SECTIONS } from '../../constants/docs';

interface DocsSidebarProps {
  activeSection: string;
}

export function DocsSidebar({ activeSection }: DocsSidebarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeLabel = DOCS_SECTIONS.find(s => s.id === activeSection)?.label || 'Overview';

  return (
    <>
      {/* Desktop Sidebar */}
      <nav className="hidden lg:block w-60 shrink-0 sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto">
        <h3 className="text-clinical-navy font-semibold text-sm tracking-wider uppercase mb-4 px-2">Contents</h3>
        <ul className="space-y-1">
          {DOCS_SECTIONS.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={`block px-2 py-1.5 text-sm rounded transition-colors ${
                  activeSection === section.id
                    ? 'bg-clinical-bg-subtle text-[#244B73] font-medium'
                    : 'text-clinical-slate hover:bg-clinical-bg hover:text-clinical-navy'
                }`}
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Sticky Selector */}
      <div className="lg:hidden sticky top-14 z-40 bg-clinical-bg border-b border-clinical-border -mx-4 px-4 sm:-mx-6 sm:px-6 py-3 mb-8">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="w-full flex items-center justify-between bg-white border border-clinical-border rounded px-3 py-2.5 text-sm text-clinical-navy min-h-[44px]"
        >
          <span className="font-medium">Jump to: {activeLabel}</span>
          <svg aria-hidden="true" focusable="false" className={`w-4 h-4 transition-transform ${mobileMenuOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        {mobileMenuOpen && (
          <ul className="absolute left-0 right-0 top-full mt-1 bg-white border border-clinical-border rounded shadow-lg max-h-60 overflow-y-auto z-50 mx-4 sm:mx-6">
            {DOCS_SECTIONS.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    const el = document.getElementById(section.id);
                    if (el) {
                      const offset = 120;
                      const top = el.getBoundingClientRect().top + window.scrollY - offset;
                      window.scrollTo({ top, behavior: 'smooth' });
                    }
                  }}
                  className={`w-full text-left flex items-center px-4 py-3 text-sm min-h-[44px] ${
                    activeSection === section.id
                      ? 'bg-clinical-bg-subtle text-[#244B73] font-medium'
                      : 'text-clinical-slate hover:bg-clinical-bg'
                  }`}
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
