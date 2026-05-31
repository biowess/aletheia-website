import React from 'react';

export interface ExternalLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

export const ExternalLink: React.FC<ExternalLinkProps> = ({ children, className = '', ...props }) => {
  return (
    <a 
      target="_blank" 
      rel="noopener noreferrer" 
      className={`inline-flex items-center gap-1 text-[#244B73] hover:underline ${className}`}
      {...props}
    >
      {children}
      <svg aria-hidden="true" focusable="false" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        <polyline points="15 3 21 3 21 9"></polyline>
        <line x1="10" y1="14" x2="21" y2="3"></line>
      </svg>
    </a>
  );
};
