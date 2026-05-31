import React from 'react';
import { Accordion, AccordionItem, CodeBlock, DataTable, ExternalLink, PageHeader, RippleButton } from '../components/ui';
import { track } from '../lib/analytics';
import SEO from '../components/SEO';
import hospitalImg from '../components/assets/docs/hospital.webp';

const DownloadPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pb-16 font-['IBM_Plex_Sans',sans-serif]">
      <SEO 
        title="Download — Aletheia"
        description="Download Aletheia for Linux. Self-contained AppImage with installer. Requires a Google Gemini API key."
        canonical="https://biowess.github.io/aletheia-website/download"
      />

      {/* Full-width Hero Header */}
      <div className="relative w-full overflow-hidden border-b border-[#D7E2EC]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={hospitalImg} 
            alt="Aletheia Download Banner" 
            className="w-full h-full object-cover object-center"
          />
          {/* Gradient Overlay for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#162C41]/95 via-[#162C41]/70 to-[#162C41]/20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#162C41]/80 via-transparent to-transparent sm:hidden"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-24">
          {/* Custom Breadcrumb for dark background */}
          <nav aria-label="Breadcrumb" className="font-sans text-[13px] tracking-wide mb-6">
            <ol className="flex items-center space-x-2 m-0 p-0 list-none">
              <li>
                <a href="/" className="text-white/70 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li className="text-white/50" aria-hidden="true">→</li>
              <li>
                <span className="text-white font-medium" aria-current="page">
                  Download
                </span>
              </li>
            </ol>
          </nav>

          <h1 className="font-sans font-bold text-[32px] sm:text-[40px] lg:text-[48px] text-white leading-tight mb-4 max-w-3xl drop-shadow-md">
            Download Aletheia
          </h1>
          <p className="font-sans font-normal text-[16px] sm:text-[18px] text-white/90 max-w-2xl leading-relaxed drop-shadow">
            Self-contained Linux AppImage. Includes installer. Requires a Google Gemini API key.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto space-y-12 sm:space-y-16 px-4 sm:px-6 lg:px-8 mt-10 sm:mt-12">
        <section className="bg-white border border-[#D7E2EC] rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-8 space-y-6 max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
            <div className="flex items-center space-x-3">
              <svg 
                className="w-6 h-6 text-[#162C41]" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M21.1,14.6c0,0-1.8-1.5-2.6-1.5c-0.8,0-1.9,1.4-2.8,1.4c-0.9,0-1.7-1-2.4-1.6c-0.7-0.5-1.5-1-2.2-1.4 c-0.8-0.3-1.6-0.6-2.5-0.7c0,0,0,0,0,0c-1.4,0-2.8,0.5-3.8,1.5C3.7,13.4,3,15.1,3,17c0,1.9,0.7,3.6,1.8,4.8C5.8,23,7.2,23.5,8.6,23.5 c0,0,0,0,0,0c0.8-0.1,1.6-0.4,2.4-0.7c0.8-0.3,1.5-0.8,2.2-1.3c0.7-0.5,1.5-1.2,2.4-1.5c0.9,0,1.9,1.3,2.8,1.3 c0.8,0,2.6-1.4,2.6-1.4c0.5-0.4,0.7-1,0.7-1.6C21.8,16.5,21.6,15.1,21.1,14.6z"/>
                <path d="M11.6,1.2c0,0,0.8,0.7,1,1.5c0.2,0.8-0.1,1.9-0.5,2.6c-0.4,0.8-1.2,1.4-2.1,1.6c-0.9,0.3-1.9,0.1-2.7-0.4 C6.6,6.1,6.1,5.3,6,4.5C5.8,3.6,6.2,2.6,6.6,1.8C7.1,1.1,7.9,0.5,8.7,0.3C9.6-0.1,10.6,0.1,11.6,1.2z"/>
              </svg>
              <h2 className="text-xl font-semibold text-slate-900">Linux (AppImage)</h2>
            </div>
            <div className="text-left sm:text-right mt-1 sm:mt-0">
              <div className="font-mono text-[14px] text-slate-800 font-medium">Aletheia-0.1.AppImage</div>
              <div className="text-sm text-slate-500">(~180 MB)</div>
            </div>
          </div>
          
          <RippleButton 
            as="a"
            href="https://github.com/biowess/aletheia/releases/latest"
            onClick={() => track('Download CTA Click', { location: 'download_page' })}
            className="btn-interactive btn-dark flex items-center justify-center w-full h-[48px] rounded-lg font-bold text-[15px] sm:text-[16px] transition-all"
          >
            Download Aletheia for Linux
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </RippleButton>
          
          <p className="text-center text-sm text-slate-500">
            or <a href="#source" className="text-[#244B73] font-medium hover:underline">clone and build from source on GitHub</a>
          </p>
        </section>

        {/* Installation Method Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <div className="bg-white p-6 rounded-lg border border-[#D7E2EC] shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-slate-900 mb-2">AppImage (Recommended)</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Double-click to run, or use <code className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-800 text-[13px] font-mono border border-slate-200">install.sh</code> for system integration.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-[#D7E2EC] shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-slate-900 mb-2">Build from Source</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Full manual setup, requires Python 3.11+ and Node.js 18+.
            </p>
          </div>
        </div>

        {/* System Requirements */}
        <section className="bg-white rounded-lg border border-[#D7E2EC] shadow-sm overflow-hidden max-w-3xl mx-auto">
          <div className="px-6 py-4 border-b border-[#D7E2EC] bg-[#F8FAFC]">
            <h2 className="font-semibold text-slate-900 text-lg">System Requirements</h2>
          </div>
          <div className="p-0 overflow-x-auto">
            <DataTable 
              headers={['Requirement', 'Minimum']}
              rows={[
                [<span className="font-medium text-slate-900">OS</span>, 'Linux (Ubuntu 20.04+, Fedora 38+, Arch, or any modern distribution)'],
                [<span className="font-medium text-slate-900">FUSE</span>, <span><code className="bg-slate-100 px-1.5 py-0.5 rounded font-mono text-[13px] border border-slate-200">libfuse2</code> (for AppImage)</span>],
                [<span className="font-medium text-slate-900">RAM</span>, '4 GB recommended'],
                [<span className="font-medium text-slate-900">Storage</span>, '~500 MB'],
                [<span className="font-medium text-slate-900">API Key</span>, <span>Google Gemini (required) — <ExternalLink href="https://aistudio.google.com/">aistudio.google.com</ExternalLink></span>],
                [<span className="font-medium text-slate-900">NCBI Key</span>, 'Optional (increases PubMed rate limit from 3→10 req/s)'],
              ]}
              className="border-none rounded-none"
            />
          </div>
        </section>

        {/* Source Code Section */}
        <section id="source" className="space-y-6 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#162C41]">Build from Source</h2>
          <Accordion>
            <AccordionItem title="Show build instructions">
              <div className="space-y-4 pt-2 pb-2">
                <p className="text-slate-600">To build Aletheia from source, clone the repository and run the setup scripts:</p>
                <CodeBlock 
                  language="bash" 
                  code={`# Clone the repository
git clone https://github.com/biowess/aletheia.git
cd aletheia

# Setup Python environment
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt

# Setup Node.js frontend
cd frontend
npm install
npm run build

# Run the application
cd ..
python app.py`} 
                />
              </div>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Changelog Section */}
        <section className="space-y-6 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#162C41]">Release Notes</h2>
          
          <div className="bg-white p-6 md:p-8 rounded-lg border border-[#D7E2EC] shadow-sm relative pl-6 md:pl-10">
            {/* Timeline accent line */}
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#244B73] rounded-l-lg opacity-80"></div>
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-2">
              <h3 className="font-mono font-bold text-xl text-[#162C41]">v0.1</h3>
              <span className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                Latest Release
              </span>
            </div>
            
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#244B73] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Initial release
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#244B73] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                10-stage reasoning pipeline
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#244B73] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                PubMed verification
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#244B73] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                PDF/PPTX export
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#244B73] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Casebook UI
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#244B73] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Split-pane workspace
              </li>
            </ul>
          </div>
          
          <div className="pt-2 border-t border-slate-200 mt-6">
            <p className="text-sm text-slate-500 italic mt-4">
              Note: For the full git history, see the <span onClick={() => track('GitHub Link Click')}><ExternalLink href="https://github.com/biowess/aletheia">GitHub repository</ExternalLink></span>.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DownloadPage;
