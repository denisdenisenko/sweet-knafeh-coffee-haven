
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <motion.div 
        key="not-found-page"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="min-h-[calc(100vh-16rem)] flex items-center justify-center bg-gray-100"
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-4">אופס! העמוד לא נמצא</p>
          <a href="/" className="text-blue-500 hover:text-blue-700 underline">
            חזרה לדף הבית
          </a>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default NotFound;
