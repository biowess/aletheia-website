import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import FeatureCard from '../ui/FeatureCard';

const features = [
  {
    title: 'Case Management',
    description: 'Full CRUD lifecycle with soft-archival, tag-based classification, and JSON-typed clinical section storage across Anamnesis, Physical Exam, Laboratory, and Morphological Data.',
    icon: <svg aria-hidden="true" focusable="false" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/><path d="M2 10h20"/><path d="M2 15h20"/></svg>
  },
  {
    title: 'AI Reasoning Pipeline',
    description: 'A 10-stage orchestrated engine performing deterministic preprocessing, structured prompt assembly, Gemini inference, response parsing, and immutable version persistence.',
    icon: <svg aria-hidden="true" focusable="false" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3"/><path d="M15 1v3"/><path d="M9 20v3"/><path d="M15 20v3"/><path d="M20 9h3"/><path d="M20 14h3"/><path d="M1 9h3"/><path d="M1 14h3"/></svg>
  },
  {
    title: 'PubMed Evidence Grounding',
    description: 'Every citation verified against NCBI E-utilities with rate-limit enforcement, exponential back-off, per-PMID cache stampede prevention, and automatic fallback metadata.',
    icon: <svg aria-hidden="true" focusable="false" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
  },
  {
    title: 'Evidence Cache',
    description: 'SHA-256-keyed global evidence cache deduplicating Gemini grounding calls across all cases. Configurable TTL with soft-invalidation.',
    icon: <svg aria-hidden="true" focusable="false" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>
  },
  {
    title: 'Follow-Up Timeline',
    description: 'Append-only delta event system recording incremental clinical updates per case for longitudinal tracking without duplicating the full case state.',
    icon: <svg aria-hidden="true" focusable="false" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
  },
  {
    title: 'Version History',
    description: 'Immutable, append-only structured report snapshots with per-case versioning, differential evolution tracking, and multi-dimensional confidence scoring.',
    icon: <svg aria-hidden="true" focusable="false" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 12 12 17 22 12"/><polyline points="2 17 12 22 22 17"/></svg>
  },
  {
    title: 'Export Services',
    description: 'One-click PDF export (ReportLab + TeX Gyre Termes typography) and PowerPoint export (python-pptx), both served as file streams.',
    icon: <svg aria-hidden="true" focusable="false" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
  },
  {
    title: 'Settings Management',
    description: 'Runtime key-value settings store for API keys, grounding toggles, cache TTL, and export preferences — no schema migrations required.',
    icon: <svg aria-hidden="true" focusable="false" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg>
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.03,
    }
  }
};

export default function Features() {
  return (
    <section id="features" className="bg-[#F5F8FB] section-py">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-sans font-bold text-[24px] sm:text-[28px] lg:text-[36px] text-[#162C41]">
            Built for Clinical Rigor
          </h2>
          <p className="font-sans font-normal text-[17px] text-[#4F606F] max-w-[600px] mx-auto mt-4 leading-[1.65]">
            Every component of Aletheia is designed around a single constraint: diagnostic outputs must be verifiable, reproducible, and evidence-grounded.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Link 
            to="/docs" 
            className="font-sans font-medium text-[14px] text-[#244B73] hover:underline"
          >
            Read the full technical documentation &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
