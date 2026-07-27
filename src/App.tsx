import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Categories from '@/components/Categories';
import FeaturedProducts from '@/components/FeaturedProducts';
import CollectionSpotlight from '@/components/CollectionSpotlight';
import NewArrivals from '@/components/NewArrivals';
import Features from '@/components/Features';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import WishlistDrawer from '@/components/WishlistDrawer';
import QuickView from '@/components/QuickView';
import ScrollTop from '@/components/ScrollTop';
import CategoryQuickNav from '@/components/CategoryQuickNav';

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
        <Newsletter />
      </main>
      <Footer />
      <CartDrawer />
      <WishlistDrawer />
      <QuickView />
      <ScrollTop />
      <CategoryQuickNav />
    </div>
  );
}
