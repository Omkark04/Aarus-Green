import { Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import DistributorEnquiry from './pages/DistributorEnquiry'
import FarmerEnquiry from './pages/FarmerEnquiry'
import Gallery from './pages/Gallery'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Layout from './components/Layout'
import FloatingButtons from './components/FloatingButtons'
import BackToTop from './components/BackToTop'


function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/distributor-enquiry" element={<DistributorEnquiry />} />
          <Route path="/farmer-enquiry" element={<FarmerEnquiry />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </Layout>
      <FloatingButtons />
      <BackToTop />
    </>
  )
}

export default App
