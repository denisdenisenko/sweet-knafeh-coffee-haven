
import { motion, AnimatePresence } from "framer-motion";
import Hero from "@/components/Hero";
import LocationSection from "@/components/LocationSection";

const Index = () => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="index-page"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="min-h-screen bg-background dark:bg-primary-dark transition-colors duration-300"
      >
        <Hero />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <LocationSection />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
