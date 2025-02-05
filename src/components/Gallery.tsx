import { motion } from "framer-motion";
import { Camera } from "lucide-react";

const images = [
  "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
  "https://images.unsplash.com/photo-1519676867240-f03562e64548",
  "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af",
  "https://images.unsplash.com/photo-1530610476181-d83430b64dcd",
];

const Gallery = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-accent/20 to-transparent dark:from-accent-dark/30 dark:via-accent-dark/20" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Camera className="w-10 h-10 text-primary dark:text-primary-light mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">הגלריה שלנו</h2>
          <p className="text-foreground/70 dark:text-foreground/60 text-lg">תמונות מהמטבח והמסעדה</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group aspect-square"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary-light/5 dark:to-primary-light/10 rounded-xl transform transition-transform duration-300 group-hover:scale-105" />
              <img 
                src={image}
                alt="גלריה"
                className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;