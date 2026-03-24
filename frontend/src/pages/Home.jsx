import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProductCategories from '../components/ProductCategories';
import FeaturedProducts from '../components/FeaturedProducts';
import BenefitsSection from '../components/BenefitsSection';
import ImpactSection from '../components/ImpactSection';
import ProductCarousel from '../components/ProductCarousel';
import CTASection from '../components/CTASection';

export default function Home() {
  return (
    <>
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
