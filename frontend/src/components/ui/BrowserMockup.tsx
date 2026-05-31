import type { ReactNode } from 'react';

export default function BrowserMockup({ children, hideGradient = false, context = 'default' }: { children?: ReactNode; hideGradient?: boolean; context?: string }) {
  return (
    <div
      role="img"
      aria-label={`Application screenshot: ${context}`}
      className="flex flex-col overflow-hidden w-full h-full relative"
      style={{
        border: '1px solid #D7E2EC',
        borderRadius: '4px',
        backgroundColor: '#FFFFFF',
        boxShadow: '0 8px 40px rgba(22,44,65,0.10)',
      }}
    >
      {/* Browser Chrome */}
      <div className="flex items-center px-4 py-3 border-b border-[#D7E2EC] bg-[#FFFFFF] gap-4">
        {/* Traffic Lights */}
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#E5ECEC]" />
          <div className="w-3 h-3 rounded-full bg-[#E5ECEC]" />
          <div className="w-3 h-3 rounded-full bg-[#E5ECEC]" />
        </div>
        
        {/* Address Bar */}
        <div 
          className="flex-1 mx-4 bg-[#F5F8FB] rounded-md px-3 py-1.5 text-center"
        >
          <span 
            className="text-[13px] text-[#4F606F] font-mono tracking-wide"
            style={{ fontFamily: '"IBM Plex Mono", monospace' }}
          >
            aletheia://workspace
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 relative bg-[#EDF3F8]">
        {children}
        
        {/* White fade at bottom */}
        {!hideGradient && (
          <div 
            className="absolute bottom-0 left-0 right-0 pointer-events-none"
            style={{
              height: '30%',
              background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)'
            }}
          />
        )}
      </div>
    </div>
  );
}
