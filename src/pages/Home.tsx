import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import EventInquirySection from "@/components/home/EventInquirySection";
import IntroSection from "@/components/home/IntroSection";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <EventInquirySection />
        <IntroSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
