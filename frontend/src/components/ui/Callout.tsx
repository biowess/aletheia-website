import React from 'react';

interface CalloutProps {
  variant?: 'info' | 'warning' | 'error';
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function Callout({ variant = 'info', title, children, className = '' }: CalloutProps) {
  const styles = {
    info: 'bg-slate-100 border-l-4 border-slate-400 text-slate-800',
    warning: 'bg-[#FFF8ED] border-l-4 border-[#C58A2B] text-amber-900',
    error: 'bg-red-50 border-l-4 border-red-500 text-red-900',
  };

  const iconColors = {
    info: 'text-slate-500',
    warning: 'text-[#C58A2B]',
    error: 'text-red-500',
  };

  const icons = {
    info: (
      <svg aria-hidden="true" focusable="false" width="1em" height="1em" style={{flexShrink: 0}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    warning: (
      <svg aria-hidden="true" focusable="false" width="1em" height="1em" style={{flexShrink: 0}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    error: (
      <svg aria-hidden="true" focusable="false" width="1em" height="1em" style={{flexShrink: 0}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  };

  return (
    <div className={`p-4 rounded-r-md ${styles[variant]} ${className}`}>
      <div className="flex">
        <div className={`mr-3 ${iconColors[variant]}`}>
          {icons[variant]}
        </div>
        <div>
          {title && <h3 className="text-sm font-semibold mb-1">{title}</h3>}
          <div className="text-sm">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
