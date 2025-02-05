import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import LocationSection from "@/components/LocationSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background dark:bg-primary-dark transition-colors duration-300">
      <Hero />
      <Menu />
      <About />
      <Testimonials />
      <Gallery />
      <LocationSection />
      <Contact />
    </div>
  );
};

export default Index;