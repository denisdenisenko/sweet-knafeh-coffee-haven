
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import LocationSection from "@/components/LocationSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background dark:bg-primary-dark transition-colors duration-300">
      <Hero />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <LocationSection />
      </motion.div>
    </div>
  );
};

export default Index;
