import { Helmet } from 'react-helmet-async';

/**
 * SEO component to handle all head tags for a page.
 * @param {Object} props
 * @param {string} props.title - The page title.
 * @param {string} props.description - The meta description.
 * @param {string} props.keywords - The keywords for the page.
 * @param {string} props.canonical - The canonical URL.
 * @param {string} props.ogImage - Image for Open Graph.
 * @param {Object} props.schemaData - Additional JSON-LD structured data.
 */
export default function SEO({ 
  title, 
  description, 
  keywords, 
  canonical, 
  ogImage = '/Logo.png', 
  schemaData = null 
}) {
  const fullTitle = `${title} | Aarus Greentech LLP - Agrochemicals & Crop Protection`;
  const siteUrl = 'https://aarusgreen.com'; // Placeholder, replace with actual production URL if known
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullCanonical} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${siteUrl}${ogImage}`} />

      {/* Structured Data (JSON-LD) */}
      {schemaData && (
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      )}
    </Helmet>
  );
}
