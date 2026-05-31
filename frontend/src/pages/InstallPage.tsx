import { CodeBlock, Callout, Accordion, AccordionItem, PageHeader, DataTable, ExternalLink, RippleButton } from '../components/ui';
import SEO from '../components/SEO';
import { track } from '../lib/analytics';


export default function InstallPage() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <SEO 
        title="Installation Guide — Aletheia"
        description="Install Aletheia Clinical Workstation on Linux: AppImage desktop app or local web application. Step-by-step guide."
        canonical="https://biowess.github.io/aletheia-website/install"
      />
      <PageHeader 
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Installation' }
        ]}
        title="Installation Guide"
        subtitle="Aletheia runs on Linux. Choose your preferred installation method."
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-12 lg:py-16">

      {/* Path Selection Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
        <RippleButton
          as="button"
          onClick={() => {
            scrollToSection('desktop-app');
            track('Install Method Selected', { method: 'Desktop App' });
          }}
          className="text-left bg-[#EDF3F8] border border-[#D7E2EC] rounded-xl p-5 sm:p-6 md:p-8 hover:bg-[#E2EAF2] transition-colors duration-200 relative overflow-hidden group focus:outline-none focus:ring-2 focus:ring-[#162C41] cursor-pointer min-h-[44px]"
        >
          <div className="absolute top-4 right-4 bg-[#EDF3F8] text-[#3E6B61] text-xs font-semibold px-3 py-1 rounded-full border border-[#3E6B61]/20 group-hover:bg-[#3E6B61] group-hover:text-white transition-colors">
            Recommended
          </div>
          <h3 className="text-xl font-bold text-[#162C41] mb-2 pr-28">Desktop App</h3>
          <p className="text-slate-600">
            Standalone application with bundled dependencies. Quickest way to get started.
          </p>
        </RippleButton>

        <RippleButton
          as="button"
          onClick={() => {
            scrollToSection('local-web');
            track('Install Method Selected', { method: 'Local Web App' });
          }}
          className="text-left bg-[#FFFFFF] border border-[#D7E2EC] rounded-xl p-5 sm:p-6 md:p-8 hover:bg-[#F5F8FB] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#162C41] cursor-pointer min-h-[44px]"
        >
          <h3 className="text-xl font-bold text-[#162C41] mb-2">Local Web App</h3>
          <p className="text-slate-600">
            Clone the repository and run locally. Best for developers and contributors.
          </p>
        </RippleButton>
      </div>

      {/* Option 1: Desktop Application */}
      <section id="desktop-app" className="mb-20 scroll-mt-24">
        <h2 className="text-[20px] sm:text-2xl font-bold text-[#162C41] mb-6 sm:mb-8 pb-4 border-b border-[#D7E2EC]">
          Option 1: Desktop App (Linux)
        </h2>

        <div className="space-y-12">
          {/* Step 1 */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#162C41] text-white flex items-center justify-center font-['IBM_Plex_Sans'] font-bold text-sm">
              1
            </div>
            <div className="flex-grow min-w-0">
              <h3 className="text-lg font-semibold text-[#162C41] mb-2 sm:mt-0.5">Navigate to GitHub Releases</h3>
              <p className="text-slate-600 mb-4">
                Navigate to the Releases page on GitHub. Download the latest .zip file.
              </p>
              <CodeBlock language="url" code="https://github.com/biowess/aletheia/releases" />
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#162C41] text-white flex items-center justify-center font-['IBM_Plex_Sans'] font-bold text-sm">
              2
            </div>
            <div className="flex-grow min-w-0">
              <h3 className="text-lg font-semibold text-[#162C41] mb-2 sm:mt-0.5">Extract the archive</h3>
              <CodeBlock language="bash" code={`unzip Aletheia-*.zip -d aletheia-release\ncd aletheia-release`} />
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#162C41] text-white flex items-center justify-center font-['IBM_Plex_Sans'] font-bold text-sm">
              3
            </div>
            <div className="flex-grow min-w-0">
              <h3 className="text-lg font-semibold text-[#162C41] mb-2 sm:mt-0.5">Run the installer</h3>
              <CodeBlock language="bash" code="./install.sh" />
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#162C41] text-white flex items-center justify-center font-['IBM_Plex_Sans'] font-bold text-sm">
              4
            </div>
            <div className="flex-grow min-w-0">
              <h3 className="text-lg font-semibold text-[#162C41] mb-2 sm:mt-0.5">Launch</h3>
              <p className="text-slate-600 mb-4">
                Aletheia is now available in your application menu. You can also launch it from terminal:
              </p>
              <CodeBlock language="bash" code="aletheia" />
            </div>
          </div>

          {/* Step 5 */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#162C41] text-white flex items-center justify-center font-['IBM_Plex_Sans'] font-bold text-sm">
              5
            </div>
            <div className="flex-grow min-w-0">
              <h3 className="text-lg font-semibold text-[#162C41] mb-2 sm:mt-0.5">Configure API key</h3>
              <p className="text-slate-600">
                On first launch, navigate to Settings (/settings) and enter your Google Gemini API key. Get one free at aistudio.google.com.
              </p>
            </div>
          </div>

          {/* Notices */}
          <div className="sm:pl-14 space-y-4">
            <Callout variant="info" showIcon={false} className="!bg-slate-50 !border-slate-300">
              <span className="font-semibold text-slate-700">Uninstall note:</span> To remove Aletheia: <code className="bg-slate-200 px-1.5 py-0.5 rounded text-sm font-mono text-slate-800">./uninstall.sh</code>
            </Callout>

            <Callout variant="warning" showIcon={false}>
              <span className="font-semibold">FUSE dependency notice:</span> AppImages require FUSE/libfuse2. If not installed: <code className="font-mono text-sm bg-white/50 px-1 py-0.5 rounded">sudo apt install libfuse2</code> (Ubuntu/Debian) or <code className="font-mono text-sm bg-white/50 px-1 py-0.5 rounded">sudo dnf install fuse</code> (Fedora).
            </Callout>
          </div>
        </div>
      </section>

      {/* Option 2: Local Web App */}
      <section id="local-web" className="mb-20 scroll-mt-24">
        <h2 className="text-[20px] sm:text-2xl font-bold text-[#162C41] mb-6 sm:mb-8 pb-4 border-b border-[#D7E2EC]">
          Option 2: Local Web App
        </h2>

        <div className="mb-10 sm:pl-14">
          <h3 className="text-lg font-semibold text-[#162C41] mb-4">Prerequisites</h3>
          <DataTable 
            headers={['Tool', 'Minimum Version', 'Check']}
            rows={[
              [<span className="font-medium text-slate-800">Python</span>, '3.11+', <span className="font-mono text-[13px] bg-slate-50 rounded border border-[#D7E2EC] px-1.5 py-0.5">python --version</span>],
              [<span className="font-medium text-slate-800">Node.js</span>, '18.0+', <span className="font-mono text-[13px] bg-slate-50 rounded border border-[#D7E2EC] px-1.5 py-0.5">node --version</span>],
              [<span className="font-medium text-slate-800">npm</span>, '9.0+', <span className="font-mono text-[13px] bg-slate-50 rounded border border-[#D7E2EC] px-1.5 py-0.5">npm --version</span>],
              [<span className="font-medium text-slate-800">Git</span>, 'Any', <span className="font-mono text-[13px] bg-slate-50 rounded border border-[#D7E2EC] px-1.5 py-0.5">git --version</span>],
            ]}
          />
        </div>

        <div className="space-y-12">
          {/* Step 1 */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#162C41] text-white flex items-center justify-center font-['IBM_Plex_Sans'] font-bold text-sm">
              1
            </div>
            <div className="flex-grow min-w-0">
              <h3 className="text-lg font-semibold text-[#162C41] mb-2 sm:mt-0.5">Clone the repository</h3>
              <CodeBlock language="bash" code={`git clone https://github.com/biowess/aletheia.git\ncd aletheia`} />
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#162C41] text-white flex items-center justify-center font-['IBM_Plex_Sans'] font-bold text-sm">
              2
            </div>
            <div className="flex-grow min-w-0">
              <h3 className="text-lg font-semibold text-[#162C41] mb-2 sm:mt-0.5">Configure environment variables</h3>
              <p className="text-slate-600 mb-4">
                Copy the template and set your API keys in <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm text-[#162C41] font-mono border border-slate-200">backend/.env</code>:
              </p>
              <CodeBlock language="env" code={`GEMINI_API_KEY=your_gemini_api_key_here\nNCBI_API_KEY=your_ncbi_api_key_here  # Optional`} />
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#162C41] text-white flex items-center justify-center font-['IBM_Plex_Sans'] font-bold text-sm">
              3
            </div>
            <div className="flex-grow min-w-0">
              <h3 className="text-lg font-semibold text-[#162C41] mb-2 sm:mt-0.5">Launch</h3>
              <p className="text-slate-600 mb-4">Run the initialization script. It will setup the environment and start the application.</p>
              <CodeBlock language="bash" code="./initialize.sh" />
            </div>
          </div>

          <div className="sm:pl-14">
            <Callout variant="error">
              <span className="font-semibold">Windows is not natively supported.</span> Use WSL 2 on Windows.
            </Callout>
          </div>
        </div>
      </section>

      {/* Troubleshooting Section */}
      <section>
        <h2 className="text-2xl font-bold text-[#162C41] mb-6">Troubleshooting</h2>
        <Accordion>
          <AccordionItem title="FUSE not found on startup">
            <div className="space-y-2">
              <p>This occurs when trying to run the AppImage on a Linux distribution missing FUSE support.</p>
              <p><strong>Ubuntu/Debian:</strong> <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm text-[#162C41] font-mono border border-slate-200">sudo apt install libfuse2</code></p>
              <p><strong>Fedora:</strong> <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm text-[#162C41] font-mono border border-slate-200">sudo dnf install fuse</code></p>
            </div>
          </AccordionItem>
          <AccordionItem title="Command aletheia not found in PATH">
            <div className="space-y-2">
              <p>If you ran <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm text-[#162C41] font-mono border border-slate-200">./install.sh</code> but the command isn't recognized, your local bin directory might not be in your PATH.</p>
              <p>Add <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm text-[#162C41] font-mono border border-slate-200">~/.local/bin</code> to your PATH in your shell configuration file (e.g., <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm text-[#162C41] font-mono border border-slate-200">~/.bashrc</code> or <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm text-[#162C41] font-mono border border-slate-200">~/.zshrc</code>).</p>
            </div>
          </AccordionItem>
          <AccordionItem title="ECONNREFUSED on Windows">
            <div className="space-y-2">
              <p>Native Windows execution is currently not supported due to OS loopback and DNS routing differences. Please use <strong>WSL 2</strong> (Windows Subsystem for Linux) to run the application.</p>
            </div>
          </AccordionItem>
          <AccordionItem title="Gemini API key not working">
            <div className="space-y-2">
              <p>Navigate to the Settings page (<code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm text-[#162C41] font-mono border border-slate-200">/settings</code>) within the application and verify your API key is entered correctly. You can obtain a free key at <ExternalLink href="https://aistudio.google.com">aistudio.google.com</ExternalLink>.</p>
            </div>
          </AccordionItem>
        </Accordion>
      </section>
      </div>
    </>
  );
}
