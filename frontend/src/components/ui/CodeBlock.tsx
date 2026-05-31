import React, { useState } from 'react';

interface CodeBlockProps {
  language: string;
  code: string;
  className?: string;
}

export function CodeBlock({ language, code, className = '' }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const formatCode = (text: string) => {
    return text.split('\n').map((line, i) => {
      const commentIndex = line.indexOf('#');
      if (commentIndex !== -1 && !line.startsWith('http')) {
        return (
          <React.Fragment key={i}>
            {line.substring(0, commentIndex)}
            <span style={{ color: '#4F606F' }}>{line.substring(commentIndex)}</span>
            {i < text.split('\n').length - 1 && '\n'}
          </React.Fragment>
        );
      }
      return (
        <React.Fragment key={i}>
          {line}
          {i < text.split('\n').length - 1 && '\n'}
        </React.Fragment>
      );
    });
  };

  return (
    <div role="region" aria-label="Code example" className={`rounded bg-[#162C41] overflow-hidden max-w-full ${className}`}>
      <div className="flex items-center justify-between px-5 py-2 bg-[#0F1E2D]">
        <span className="text-[11px] tracking-wider text-[#4F606F] font-mono">
          {language}
        </span>
        <button
          onClick={handleCopy}
          className="text-[11px] text-[#4F606F] hover:text-[#A9C8E6] transition-colors font-mono focus:outline-none"
          aria-label="Copy code"
        >
          {copied ? 'Copied ✓' : 'Copy'}
        </button>
      </div>
      <div className="px-5 py-4 overflow-x-auto -webkit-overflow-scrolling-touch scroll-x-touch" style={{ WebkitOverflowScrolling: 'touch' }}>
        <pre className="text-[13px] text-[#A9C8E6] font-mono whitespace-pre font-['IBM_Plex_Mono',monospace]">
          <code>{formatCode(code)}</code>
        </pre>
      </div>
    </div>
  );
}
