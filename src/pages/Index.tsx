
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import DestinationSelector from '@/components/DestinationSelector';
import BookingForm from '@/components/BookingForm';
import PackagesSection from '@/components/PackagesSection';
import AccommodationsSection from '@/components/AccommodationsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-cosmic-dark text-white">
      <Navbar />
      <HeroSection />
      <DestinationSelector />
      <BookingForm />
      <PackagesSection />
      <AccommodationsSection />
      <Footer />
    </div>
  );
};

export default Index;
