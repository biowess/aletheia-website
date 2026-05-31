import React from 'react';
import { motion } from 'framer-motion';

export interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 15
      }
  }
};

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      className="group bg-white border border-[#D7E2EC] rounded shadow-[0_1px_3px_rgba(22,44,65,0.06),0_4px_16px_rgba(22,44,65,0.06)] p-6 hover:-translate-y-[2px] hover:shadow-[0_4px_24px_rgba(22,44,65,0.10)] transition-all"
      style={{ transitionDuration: '180ms', transitionTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)' }}
    >
      <div className="w-9 h-9 bg-[#EDF3F8] rounded flex items-center justify-center text-[#244B73] transition-transform duration-180 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:scale-[1.05]">
        {icon}
      </div>
      <h3 className="font-sans font-semibold text-[15px] text-[#162C41] mt-3">
        {title}
      </h3>
      <p className="font-sans font-normal text-[14px] text-[#4F606F] leading-[1.6] mt-2">
        {description}
      </p>
    </motion.div>
  );
}
