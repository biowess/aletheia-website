import React, { useState, useId } from 'react';
import { track } from '../../lib/analytics';
import { AnimatePresence, motion } from 'framer-motion';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
}

export function AccordionItem({ title, children }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const id = useId();

  return (
    <div className={`border-b last:border-b-0 transition-colors duration-200 ${isOpen ? 'bg-[#F5F8FB] border-[#D7E2EC]' : 'border-slate-200'}`}>
      <button
        id={`accordion-trigger-${id}`}
        aria-expanded={isOpen}
        aria-controls={`accordion-panel-${id}`}
        className="w-full px-4 sm:px-5 py-4 flex items-center justify-between text-left focus:outline-none hover:bg-slate-50 transition-colors min-h-[52px]"
        onClick={() => {
          if (!isOpen) {
            track('FAQ Item Opened', { question: title.split(' ').slice(0, 5).join(' ') });
          }
          setIsOpen(!isOpen);
        }}
      >
        <span className="font-sans font-semibold text-[14px] sm:text-[15px] text-[#162C41] pr-4">{title}</span>
        <svg
          aria-hidden="true"
          focusable="false"
          className={`w-5 h-5 shrink-0 text-[#162C41] transition-transform duration-200 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`accordion-panel-${id}`}
            role="region"
            aria-labelledby={`accordion-trigger-${id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", duration: 0.26, bounce: 0 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-4 pt-1 font-sans font-normal text-[15px] text-[#4F606F] leading-[1.7]">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Accordion({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`border border-[#D7E2EC] rounded-[4px] bg-white overflow-hidden shadow-sm ${className}`}>
      {children}
    </div>
  );
}
