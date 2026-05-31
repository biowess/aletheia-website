import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BrowserMockup from '../ui/BrowserMockup';
import screenshot04 from "../assets/docs/04.png";
import { track } from '../../lib/analytics';
import { RippleButton } from '../ui';


export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [mockupAnimComplete, setMockupAnimComplete] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getTransition = (delayMs: number, customDuration?: number) => {
    if (shouldReduceMotion) {
      return { duration: 0.12, delay: delayMs / 1000, ease: 'linear' as const };
    }
    return {
      type: 'spring' as const,
      stiffness: 100,
      damping: 20,
      duration: customDuration || 0.26,
      delay: delayMs / 1000
    };
  };

  const getVariants = (yOffset: number, xOffset: number = 0) => ({
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : yOffset,
      x: shouldReduceMotion ? 0 : xOffset
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0
    }
  });

  return (
    <section
      id="hero"
      className="relative flex flex-col justify-center min-h-[100svh] sm:min-h-[80vh] lg:min-h-screen bg-[#F5F8FB] pt-[80px] pb-16 sm:pt-[96px] lg:pt-0 lg:pb-0 overflow-hidden"
    >
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-8 lg:gap-8">

        {/* Left Column - Text Content */}
        <div className="w-full lg:w-[52%] flex flex-col items-start z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={getVariants(6)}
            transition={getTransition(0)}
            className="pl-[16px] uppercase tracking-[0.08em] font-semibold text-[11px] text-[#244B73] border-l border-[#244B73] mb-6"
            style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
          >
            Clinical Workstation
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={getVariants(6)}
            transition={getTransition(60)}
            className="text-[28px] sm:text-[32px] lg:text-[48px] font-bold leading-[1.1] text-[#162C41] tracking-tight mb-4 sm:mb-6"
            style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
          >
            Evidence-grounded diagnostic reasoning.
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={getVariants(6)}
            transition={getTransition(120)}
            className="text-[16px] sm:text-[18px] leading-[1.65] text-[#4F606F] max-w-full sm:max-w-[480px] mb-8 sm:mb-10"
            style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
          >
            Aletheia consolidates clinical inputs, runs a 10-stage AI reasoning pipeline, and returns a fully structured, PubMed-citation-verified differential diagnosis report — in a single session, on your machine.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={getVariants(6)}
            transition={getTransition(200)}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10 w-full sm:w-auto"
          >
            <RippleButton
              as={Link}
              to="/download"
              onClick={() => track('Download CTA Click', { location: 'hero' })}
              className="group btn-interactive btn-dark flex items-center justify-center h-[48px] px-[24px] rounded-[4px] text-[15px] font-semibold transition-colors duration-200 cursor-pointer w-full sm:w-auto"
              style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
            >
              Download for Linux
              <svg aria-hidden="true" focusable="false" className="ml-[12px] w-[16px] h-[16px] transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </RippleButton>

            <RippleButton
              as="a"
              href="https://github.com/biowess/aletheia"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track('GitHub Link Click')}
              className="btn-interactive btn-light flex items-center justify-center h-[48px] px-[24px] rounded-[4px] text-[15px] font-semibold transition-colors duration-200 cursor-pointer w-full sm:w-auto"
              style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
            >
              <svg aria-hidden="true" focusable="false" className="w-[16px] h-[16px] mr-[16px]" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              View on GitHub
            </RippleButton>

          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={getVariants(6)}
            transition={getTransition(280)}
            className="flex flex-wrap items-center gap-2 text-[13px] text-[#4F606F]"
            style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
          >
            <span>No cloud account required</span>
            <span aria-hidden="true" className="font-bold">·</span>
            <span>No data leaves your machine</span>
            <span aria-hidden="true" className="font-bold">·</span>
            <span>PubMed-verified citations</span>
          </motion.div>
        </div>

        {/* Right Column - Mockup */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={getVariants(0, 20)}
          transition={{ ...getTransition(100, 0.36) }}
          className="w-full lg:w-[48%] mt-8 lg:mt-0 relative"
          style={{ willChange: mockupAnimComplete ? 'auto' : 'transform' }}
          onAnimationComplete={() => setMockupAnimComplete(true)}
        >
          <BrowserMockup hideGradient>
            <img
              src={screenshot04}
              alt="Clinical Workspace Split-Pane"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
              width={1200}
              height={800}
            />
          </BrowserMockup>

        </motion.div>

      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex justify-center w-full pointer-events-none transition-opacity duration-300 hidden sm:flex ${scrolled ? 'opacity-0' : 'opacity-100'}`}
        aria-hidden="true"
      >
        <div className="animate-bounce" style={{ animationDuration: '1.8s' }}>
          <svg aria-hidden="true" focusable="false" className="w-5 h-5 text-[#A7B4C0]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
      <style>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(-25%);
            animation-timing-function: cubic-bezier(0.8,0,1,1);
          }
          50% {
            transform: translateY(0);
            animation-timing-function: cubic-bezier(0,0,0.2,1);
          }
        }
      `}</style>
    </section>
  );
}
