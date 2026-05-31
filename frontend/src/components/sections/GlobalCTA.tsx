import { Link } from 'react-router-dom';
import { track } from '../../lib/analytics';
import { RippleButton } from '../ui';

export default function GlobalCTA() {
  return (
    <section id="download" className="w-full bg-[#F5F8FB] border-t border-[#D7E2EC] section-py">
      <div className="max-w-[640px] mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
        
        <h2 
          className="text-[24px] sm:text-[28px] lg:text-[36px] font-bold text-[#162C41] mb-4"
          style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
        >
          Download Aletheia
        </h2>
        
        <p 
          className="text-[17px] text-[#4F606F] mb-8"
          style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
        >
          Available as a self-contained Linux AppImage. Includes a one-command installer.
        </p>

        <div className="w-full relative bg-[#162C41] rounded-[4px] p-[20px] px-[24px] mb-8 text-left overflow-x-auto" style={{ WebkitOverflowScrolling: 'touch' }}>
          <div 
            className="absolute top-2 left-3 text-[11px] text-[#4F606F]"
            style={{ fontFamily: '"IBM Plex Mono", monospace' }}
          >
            Terminal
          </div>
          <pre 
            className="text-[14px] text-[#A9C8E6] mt-4 whitespace-pre-wrap"
            style={{ fontFamily: '"IBM Plex Mono", monospace' }}
          >
            <code>
# Download and extract the release zip, then:
./install.sh
            </code>
          </pre>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 w-full">
          <RippleButton
            as={Link}
            to="/download"
            onClick={() => track('Download CTA Click', { location: 'global_cta' })}
            className="btn-interactive btn-dark flex items-center justify-center h-[48px] px-[24px] rounded-[4px] text-[15px] font-semibold transition-colors duration-200 w-full sm:w-auto"
            style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
          >
            Download Latest Release
          </RippleButton>

          <RippleButton
            as="a"
            href="https://github.com/biowess/aletheia"
            onClick={() => track('GitHub Link Click')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-interactive btn-light flex items-center justify-center h-[48px] px-[24px] rounded-[4px] text-[15px] font-semibold transition-colors duration-200 w-full sm:w-auto"
            style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
          >
            <svg aria-hidden="true" focusable="false" className="w-[16px] h-[16px] mr-[8px]" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            View on GitHub
          </RippleButton>
        </div>


        <div 
          className="text-[12px] text-[#A7B4C0]"
          style={{ fontFamily: '"IBM Plex Mono", monospace' }}
        >
          Version 0.1 · Linux AppImage · GPL-compatible source-available license
        </div>

      </div>
    </section>
  );
}
