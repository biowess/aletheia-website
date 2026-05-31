import React from 'react';
import { Badge, SectionDivider } from '../ui';

interface FeaturePanelProps {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: React.ReactNode;
  keyFacts: string[];
}

export default function FeaturePanel({ id, title, icon, description, keyFacts }: FeaturePanelProps) {
  return (
    <div id={id} className="scroll-mt-32 mb-16 last:mb-0">
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded bg-[#F5F8FB] border border-[#D7E2EC] flex items-center justify-center text-[#162C41]">
          {icon}
        </div>
        <h2 className="font-sans font-bold text-[20px] sm:text-[24px] text-[#162C41]">{title}</h2>
        <Badge variant="mono" className="ml-2">
          Technical Specification
        </Badge>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <div className="xl:col-span-2 space-y-4 font-sans font-normal text-[15px] sm:text-[16px] text-[#4F606F] leading-[1.65]">
          {description}
        </div>
        
        <div className="xl:col-span-1">
          <aside className="bg-[#F5F8FB] border-l-[3px] border-[#244B73] p-4 rounded-r">
            <h3 className="font-sans font-medium text-[14px] text-[#162C41] mb-3">Key Details</h3>
            <ul className="space-y-2">
              {keyFacts.map((fact, index) => (
                <li key={index} className="flex items-start gap-2">
                  <svg aria-hidden="true" focusable="false" className="w-4 h-4 text-[#244B73] shrink-0 mt-[2px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-mono text-[13px] text-[#4F606F] leading-tight">{fact}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>

      <SectionDivider className="mt-16" />
    </div>
  );
}
