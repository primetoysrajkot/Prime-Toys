import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import AboutSection from "@/components/AboutSection";
import CategoriesSection from "@/components/CategoriesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LocationSection from "@/components/LocationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Prime Toys - Where Fun Meets Imagination | Rajkot's Premier Toy Showroom</title>
        <meta
          name="description"
          content="Discover thousands of toys at Prime Toys, Rajkot's largest toy showroom. From action figures to educational toys, find the perfect gift for every child. Visit us at Mavadi Main Road!"
        />
        <meta
          name="keywords"
          content="toys Rajkot, toy store, kids toys, educational toys, LEGO, dolls, action figures, Prime Toys, toy showroom"
        />
        <link rel="canonical" href="https://primetoys.in" />
        <meta property="og:title" content="Prime Toys - Where Fun Meets Imagination" />
        <meta
          property="og:description"
          content="Rajkot's premier toy destination with 5000+ toys across 50+ brands. Visit our showroom today!"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <main className="min-h-screen bg-background overflow-x-hidden">
        <Navbar />
        <HeroSection />
        <FeaturesSection />
        <CategoriesSection />
        <AboutSection />
        <TestimonialsSection />
        <LocationSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
