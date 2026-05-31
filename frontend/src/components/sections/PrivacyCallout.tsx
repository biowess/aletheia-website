import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const CheckmarkIcon = () => (
  <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 mt-0.5">
    <path d="M5 13L9 17L19 7" stroke="#3E6B61" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function PrivacyCallout() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const bulletPoints = [
    "All case data stored in local SQLite — ~/.local/share/Aletheia/",
    "Gemini API call contains only structured educational prompts, never real patient identifiers",
    "PubMed queries use only PMID lookups — no clinical content transmitted"
  ];

  return (
    <section 
      id="privacy"
      ref={sectionRef}
      /* This section uses #162C41 as an intentional dark background for visual hierarchy. This is NOT dark mode. Light mode is enforced globally. */
      className="bg-[#162C41] w-full section-py px-4 sm:px-6 md:px-12 lg:px-24 flex justify-center overflow-hidden"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left Column - Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="flex flex-col gap-4">
            <span className="font-['IBM_Plex_Sans'] font-semibold text-[11px] uppercase tracking-[0.08em] text-[#A9C8E6]">
              Local-First Architecture
            </span>
            <h2 className="font-['IBM_Plex_Sans'] font-bold text-[24px] sm:text-[28px] lg:text-[32px] text-[#FFFFFF] leading-[1.2]">
              Your simulated case data never leaves your machine.
            </h2>
            <p className="font-['IBM_Plex_Sans'] font-normal text-[16px] text-[rgba(255,255,255,0.75)] leading-[1.7]">
              Aletheia runs entirely on your local hardware. The AI inference call to Google Gemini uses only structured diagnostic prompts for educational cases — no real patient identifiers, no real records, no cloud storage. SQLite database lives on your filesystem.
            </p>
          </div>
          
          <ul className="flex flex-col gap-4 mt-2">
            {bulletPoints.map((point, i) => (
              <li key={i} className="flex gap-3 items-start">
                <CheckmarkIcon />
                <span className="font-['IBM_Plex_Sans'] font-normal text-[14px] sm:text-[16px] text-[#FFFFFF] leading-[1.5]">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right Column - Architecture Diagram */}
        <motion.div 
          className="w-full flex justify-center lg:justify-end"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* REPLACE WITH: Custom architecture illustration. Style: technical line-art on navy background. Colors: white lines on #162C41. See docs/aletheia.png for brand reference. */}
          <div className="hidden sm:flex w-full max-w-[500px] relative justify-center lg:justify-end">
            <svg aria-hidden="true" focusable="false" width="100%" height="auto" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Internal System (Your Machine) */}
              <rect x="20" y="20" width="240" height="360" rx="8" stroke="white" strokeWidth="1.5" strokeOpacity="0.3" fill="none" strokeDasharray="4 4" />
              <text x="40" y="50" fontFamily="IBM Plex Mono" fontSize="11" fill="rgba(255,255,255,0.80)" letterSpacing="0.05em">YOUR MACHINE</text>
              
              {/* Aletheia App Box */}
              <rect x="40" y="80" width="200" height="80" rx="6" fill="rgba(255,255,255,0.12)" stroke="white" strokeWidth="1.5" />
              <text x="140" y="124" fontFamily="IBM Plex Mono" fontSize="14" fill="#FFFFFF" textAnchor="middle" fontWeight="500">Aletheia App</text>
              
              {/* SQLite DB Box */}
              <rect x="40" y="220" width="200" height="80" rx="6" fill="rgba(255,255,255,0.12)" stroke="white" strokeWidth="1.5" />
              <text x="140" y="264" fontFamily="IBM Plex Mono" fontSize="14" fill="#FFFFFF" textAnchor="middle" fontWeight="500">SQLite DB</text>
              
              {/* Internal Data Flow */}
              <path 
                d="M140 160 L140 220" 
                stroke="white" 
                strokeWidth="1.5" 
                strokeOpacity="0.5" 
              />
              <path d="M140 220 L135 210 L145 210 Z" fill="rgba(255,255,255,0.5)" />
              <path d="M140 160 L135 170 L145 170 Z" fill="rgba(255,255,255,0.5)" />
              <text x="150" y="193" fontFamily="IBM Plex Mono" fontSize="10" fill="rgba(255,255,255,0.60)">Local Data Flow</text>

              {/* External Services */}
              {/* Google Gemini API */}
              <rect x="340" y="80" width="140" height="80" rx="6" fill="rgba(255,255,255,0.06)" stroke="white" strokeWidth="1.5" strokeDasharray="4 4" />
              <text x="410" y="120" fontFamily="IBM Plex Mono" fontSize="12" fill="rgba(255,255,255,0.80)" textAnchor="middle">Google Gemini</text>
              <text x="410" y="136" fontFamily="IBM Plex Mono" fontSize="10" fill="rgba(255,255,255,0.60)" textAnchor="middle">API (external)</text>

              {/* PubMed */}
              <rect x="340" y="220" width="140" height="80" rx="6" fill="rgba(255,255,255,0.06)" stroke="white" strokeWidth="1.5" strokeDasharray="4 4" />
              <text x="410" y="260" fontFamily="IBM Plex Mono" fontSize="12" fill="rgba(255,255,255,0.80)" textAnchor="middle">PubMed</text>
              <text x="410" y="276" fontFamily="IBM Plex Mono" fontSize="10" fill="rgba(255,255,255,0.60)" textAnchor="middle">E-utilities</text>

              {/* Arrows to External Services */}
              {/* To Gemini */}
              <motion.path 
                d="M240 120 L335 120" 
                stroke="white" 
                strokeWidth="1.5" 
                strokeOpacity="0.8"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              />
              <motion.path 
                d="M335 120 L325 115 L325 125 Z" 
                fill="white"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.2, delay: 0.9 }}
              />
              <motion.text 
                x="287" y="110" 
                fontFamily="IBM Plex Mono" 
                fontSize="10" 
                fill="rgba(255,255,255,0.80)" 
                textAnchor="middle"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.8 }}
              >
                Structured Prompt Only →
              </motion.text>

              {/* To PubMed */}
              <motion.path 
                d="M240 260 L335 260" 
                stroke="white" 
                strokeWidth="1.5" 
                strokeOpacity="0.8"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
              />
              <motion.path 
                d="M335 260 L325 255 L325 265 Z" 
                fill="white"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.2, delay: 1.1 }}
              />
              <motion.text 
                x="287" y="250" 
                fontFamily="IBM Plex Mono" 
                fontSize="10" 
                fill="rgba(255,255,255,0.80)" 
                textAnchor="middle"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.4, delay: 1.0 }}
              >
                PMID Lookup Only →
              </motion.text>

            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
