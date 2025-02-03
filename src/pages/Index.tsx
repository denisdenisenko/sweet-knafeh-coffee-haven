import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import About from "@/components/About";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Menu />
      <About />
    </div>
  );
};

export default Index;