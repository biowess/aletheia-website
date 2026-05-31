import { useEffect, useRef, useState } from 'react';

const stages = [
  { name: 'Preprocessing', desc: 'Deterministic heuristics' },
  { name: 'Prompt Assembly', desc: 'Structured context' },
  { name: 'Gemini Inference', desc: 'LLM reasoning' },
  { name: 'Response Parsing', desc: 'JSON extraction' },
  { name: 'Citation Extraction', desc: 'PMID identification' },
  { name: 'PubMed Verification', desc: 'E-utilities query' },
  { name: 'Deduplication', desc: 'Cache lookup' },
  { name: 'Certainty Policy', desc: 'Score validation' },
  { name: 'Language Enhancement', desc: 'Clinical editing' },
  { name: 'Version Persistence', desc: 'Immutable snapshot' },
];

export default function Pipeline() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="pipeline" ref={sectionRef} className="w-full bg-[#FFFFFF] section-py">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl">
          <h2 className="font-sans font-semibold text-[11px] uppercase tracking-[0.08em] text-[#244B73] mb-3">
            The Reasoning Pipeline
          </h2>
          <h3 className="font-sans font-bold text-[24px] sm:text-[28px] lg:text-[32px] text-clinical-navy leading-tight mb-4">
            Ten deterministic stages. One verified report.
          </h3>
          <p className="font-sans font-normal text-[16px] text-clinical-slate max-w-[520px] leading-relaxed">
            Aletheia's reasoning engine is not a black box. Each stage has a defined contract, auditable inputs, and verifiable outputs.
          </p>
        </div>

        {/* Pipeline Visualization */}
        <div className="relative w-full mt-20 mb-24">
          {/* Desktop Line Connector */}
          <div 
            className="hidden md:block absolute top-[15.5px] left-[16px] h-[1px] bg-[#D7E2EC] transition-all duration-[600ms] ease-out z-0" 
            style={{ width: isVisible ? 'calc(100% - 32px)' : '0%' }}
          />
          {/* Mobile Line Connector */}
          <div 
            className="md:hidden absolute top-[16px] left-[15.5px] w-[1px] bg-[#D7E2EC] transition-all duration-[600ms] ease-out z-0" 
            style={{ height: isVisible ? 'calc(100% - 32px)' : '0%' }}
          />

          <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-0">
            {stages.map((stage, i) => (
              <div 
                key={i}
                className={`relative z-10 flex flex-row md:flex-col items-center md:items-center gap-4 md:gap-3 transition-opacity duration-[400ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="w-[24px] h-[24px] sm:w-[32px] sm:h-[32px] shrink-0 rounded-full bg-clinical-navy flex items-center justify-center text-white font-sans font-bold text-[10px] sm:text-[13px]">
                  {i + 1}
                </div>
                <div className="flex flex-col md:items-center text-left md:text-center md:max-w-[80px]">
                  <div className="font-sans font-semibold text-clinical-navy text-[10px] sm:text-[12px] leading-tight">
                    {stage.name}
                  </div>
                  <div className="font-sans font-normal text-clinical-slate text-[10px] sm:text-[11px] leading-tight mt-1.5">
                    {stage.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Callout Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Card */}
          <div className="bg-[#F5F8FB] border border-[#D7E2EC] rounded p-8">
            <span className="inline-block font-mono text-[12px] text-clinical-slate mb-4">
              Technical Detail
            </span>
            <h4 className="font-sans font-semibold text-[16px] text-clinical-navy mb-2">
              Deterministic Preprocessing
            </h4>
            <p className="font-sans font-normal text-[14px] text-clinical-slate leading-relaxed">
              Aletheia normalizes lab values and standardizes exam findings through deterministic heuristics before LLM inference. This eliminates unnecessary reasoning overhead and prevents hallucination on concrete clinical data points.
            </p>
          </div>

          {/* Right Card */}
          <div className="bg-[#F5F8FB] border border-[#D7E2EC] rounded p-8">
            <span className="inline-block font-mono text-[12px] text-clinical-slate mb-4">
              Technical Detail
            </span>
            <h4 className="font-sans font-semibold text-[16px] text-clinical-navy mb-2">
              Fault-Tolerant JSON Recovery
            </h4>
            <p className="font-sans font-normal text-[14px] text-clinical-slate leading-relaxed">
              The pipeline utilizes a robust json-repair library to automatically detect and recover from malformed LLM outputs. This ensures the structural integrity of the final report even if the model generates invalid JSON syntax.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
