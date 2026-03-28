import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProductCategories from '../components/ProductCategories';
import FeaturedProducts from '../components/FeaturedProducts';
import BenefitsSection from '../components/BenefitsSection';
import ImpactSection from '../components/ImpactSection';
import ProductCarousel from '../components/ProductCarousel';
import CTASection from '../components/CTASection';
import SEO from '../components/SEO';

export default function Home() {
  return (
    <>
      <SEO 
        title="Home"
        description="Aarus Greentech LLP is a leading manufacturer of high-performance agrochemicals, pesticides, and specialized seeds in Ankleshwar, Gujarat. Empowering Indian farmers with sustainable agricultural solutions."
        keywords="agrochemicals Gujarat, crop protection India, pesticide manufacturer Ankleshwar, fertilizer seeds Gujarat, Aarus Greentech, sustainable farming India"
        schemaData={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Aarus Greentech LLP",
          "image": "https://aarusgreen.com/Logo.png",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "110, Anmol Plaza-2, Nr. Decent Hotel",
            "addressLocality": "Ankleshvar",
            "addressRegion": "Gujarat",
            "postalCode": "393001",
            "addressCountry": "IN"
          },
          "telephone": "+91-9146673132",
          "url": "https://aarusgreen.com",
          "priceRange": "$$"
        }}
      />
      <HeroSection />
      <ProductCarousel />
      <AboutSection />
      <ProductCategories />
      <FeaturedProducts />
      <BenefitsSection />
      <ImpactSection />
      <CTASection />
    </>
  );
}
