
import BrowserMockup from './BrowserMockup';

export interface Annotation {
  id: number;
  label: string;
  dotX: number;
  dotY: number;
  labelX: number;
  labelY: number;
}

interface AnnotatedScreenshotProps {
  imageSrc: string;
  title: string;
  description: string;
  annotations: Annotation[];
  reversed?: boolean; // For alternating layout
}

export default function AnnotatedScreenshot({
  imageSrc,
  title,
  description,
  annotations,
  reversed = false
}: AnnotatedScreenshotProps) {
  return (
    <div className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center w-full`}>
      {/* Image / Mockup side */}
      <div className="w-full md:w-[60%] flex flex-col">
        <div className="relative w-full aspect-[16/10]">
          <BrowserMockup hideGradient={true}>
            <div className="relative w-full h-full bg-[#EDF3F8] overflow-hidden">
              <img 
                src={imageSrc} 
                alt={title} 
                className="w-full h-full object-cover object-top"
                loading="lazy"
                decoding="async"
                width={1200}
                height={800}
              />
              {/* Removed overlay SVG and labels as requested */}
            </div>
          </BrowserMockup>
        </div>

        {/* Annotations List */}
        <div className="mt-6 flex flex-col gap-3">
          {annotations.map(a => (
            <div key={a.id} className="flex items-center gap-3 text-[14px] text-[#4F606F] font-sans">
              <span className="w-6 h-6 shrink-0 rounded-full bg-[#244B73] text-white text-[11px] font-bold flex items-center justify-center shadow-sm">
                {a.id}
              </span>
              <span className="font-mono text-[12px] text-[#162C41]" style={{ fontFamily: '"IBM Plex Mono", monospace' }}>{a.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Text side */}
      <div className="w-full md:w-[40%] flex flex-col">
        <h2 className="font-sans font-bold text-[28px] text-[#162C41] mb-4 leading-tight">
          {title}
        </h2>
        <p className="font-sans font-normal text-[16px] text-[#4F606F] leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
