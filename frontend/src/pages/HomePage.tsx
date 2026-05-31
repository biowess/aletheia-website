import Hero from '../components/sections/Hero';
import ProofBar from '../components/sections/ProofBar';
import Features from '../components/sections/Features';
import Pipeline from '../components/sections/Pipeline';
import ScreenshotShowcase from '../components/sections/ScreenshotShowcase';
import PrivacyCallout from '../components/sections/PrivacyCallout';
import GlobalCTA from '../components/sections/GlobalCTA';

import SEO from '../components/SEO';

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Aletheia Clinical Workstation",
    "operatingSystem": "Linux",
    "applicationCategory": "MedicalApplication",
    "description": "Evidence-grounded AI diagnostic reasoning workstation for medical education and clinical case simulation.",
    "url": "https://biowess.github.io/aletheia-website/",
    "author": {
      "@type": "Organization",
      "name": "Biowess"
    },
    "license": "https://github.com/biowess/aletheia/blob/main/LICENSE",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <main className="min-h-screen bg-[#F5F8FB] w-full">
      <SEO 
        title="Aletheia — Clinical Workstation" 
        description="Evidence-grounded AI diagnostic reasoning for medical education. Structured, PubMed-verified differential diagnosis reports for simulated clinical cases. Runs locally on Linux."
        canonical="https://biowess.github.io/aletheia-website/"
      >
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </SEO>
      
      <Hero />
      <ProofBar />
      <Features />
      <Pipeline />
      <ScreenshotShowcase />
      <PrivacyCallout />
      <GlobalCTA />
    </main>
  );
}
