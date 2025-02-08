
import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 2 }}
      onAnimationComplete={() => document.body.style.overflow = 'unset'}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      <motion.img
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, rotate: 360 }}
        transition={{
          duration: 1.5,
          ease: "easeOut",
        }}
        src="/images/knafeh-logo.png"
        alt="House of Knafeh"
        className="w-32 h-32"
      />
    </motion.div>
  );
};

export default LoadingScreen;
