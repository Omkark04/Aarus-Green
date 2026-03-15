import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProductCategories from '../components/ProductCategories';
import FeaturedProducts from '../components/FeaturedProducts';
import BenefitsSection from '../components/BenefitsSection';
import ImpactSection from '../components/ImpactSection';
import ProductCarousel from '../components/ProductCarousel';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProductCategories />
      <FeaturedProducts />
      <BenefitsSection />
      <ImpactSection />
      <ProductCarousel />
      <CTASection />
      <Footer />
    </>
  );
}
