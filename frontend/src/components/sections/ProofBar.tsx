import { motion } from 'framer-motion';

const stats = [
  { value: "10-Stage", label: "AI Reasoning Pipeline" },
  { value: "100%", label: "Local — No Cloud Required" },
  { value: "PubMed", label: "Citation Verification" },
  { value: "PDF + PPTX", label: "One-Click Export" }
];

const technologies = [
  "Google Gemini", "PubMed E-utilities", "FastAPI", "React 19", "SQLite"
];

export default function ProofBar() {
  return (
    <section id="proofbar" className="w-full bg-[#FFFFFF] border-y border-[#E7EEF5] flex flex-col">
      {/* Statistics Bar */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-2 md:flex md:flex-row"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.04 } }
          }}
        >
          {stats.map((stat, i) => {
            let borderClasses = "border-[#E7EEF5] ";
            // Handle responsive borders: grid on mobile, row on desktop
            if (i === 0) borderClasses += "border-b border-r md:border-b-0 ";
            else if (i === 1) borderClasses += "border-b md:border-b-0 md:border-r ";
            else if (i === 2) borderClasses += "border-r ";
            else if (i === 3) borderClasses += "md:border-r-0 ";

            return (
              <motion.div 
                key={i} 
                className={`flex-1 py-[20px] sm:py-[28px] px-[16px] sm:px-[32px] ${borderClasses}`}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
                }}
              >
                <div className="font-['IBM_Plex_Sans'] font-bold text-[22px] sm:text-[28px] lg:text-[32px] text-[#162C41] leading-tight">
                  {stat.value}
                </div>
                <div className="font-['IBM_Plex_Sans'] font-normal text-[13px] text-[#4F606F] mt-1">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Technology Acknowledgment Strip */}
      <div className="w-full bg-[#F5F8FB] py-[16px]">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-center md:items-center gap-4">
          <span className="font-['IBM_Plex_Sans'] font-medium text-[12px] uppercase tracking-[0.06em] text-[#6D7E8F] shrink-0 text-center">
            Powered by
          </span>
          <div className="flex flex-wrap justify-center items-center gap-[8px]">
            {technologies.map((tech, i) => (
              <div 
                key={i} 
                className="border border-[#D7E2EC] rounded-[4px] py-[6px] px-[12px] font-['IBM_Plex_Sans'] font-medium text-[12px] text-[#4F606F]"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* License & Source Note */}
      <div className="w-full bg-[#FFFFFF] py-[16px] flex justify-center items-center">
        <span className="font-['IBM_Plex_Mono'] text-[12px] text-[#6D7E8F] text-center px-4">
          Source-available license · Self-hosted · Linux AppImage
        </span>
      </div>
    </section>
  );
}
