import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Categories from '@/components/Categories';
import FeaturedProducts from '@/components/FeaturedProducts';
import CollectionSpotlight from '@/components/CollectionSpotlight';
import NewArrivals from '@/components/NewArrivals';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import QuickView from '@/components/QuickView';
import ScrollTop from '@/components/ScrollTop';

export default function App() {
  return (
    <div className="min-h-screen bg-ivory-50">
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <FeaturedProducts />
        <CollectionSpotlight />
        <NewArrivals />
        <Features />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
      <CartDrawer />
      <QuickView />
      <ScrollTop />
    </div>
  );
}
