import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  pathname?: string;
}

export default function SEO({ title, description, pathname }: SEOProps) {
  // Votre domaine principal
  const siteUrl = "https://kroma-agence.com";
  
  // Votre image unique située dans public/og-img.png
  const ogImage = `${siteUrl}/og-img.png`;
  
  // Construction de l'URL canonique de la page
  const currentUrl = pathname ? `${siteUrl}${pathname}` : siteUrl;

  return (
    <Helmet>
      {/* Titre et Description standards */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Balises Open Graph (WhatsApp, Facebook, LinkedIn, etc.) */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Balises Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}