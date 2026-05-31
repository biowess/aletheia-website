import { Helmet } from 'react-helmet-async';
import { type ReactNode } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  children?: ReactNode;
}

export default function SEO({
  title,
  description,
  canonical,
  ogImage = 'https://biowess.github.io/aletheia-website/docs/04.png',
  children,
}: SEOProps) {
  const fullTitle = `${title} | Aletheia Clinical Workstation`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {/* General */}
      <meta name="robots" content="index, follow" />

      {/* Additional JSON-LD tags, etc */}
      {children}
    </Helmet>
  );
}
