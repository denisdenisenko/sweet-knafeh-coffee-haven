
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { motion } from "framer-motion";
import { Coffee, CakeSlice } from "lucide-react";

const Menu = () => {
  const menuItems = [
    {
      src: "/lovable-uploads/64c25164-f773-4859-b6f3-8992fabfdba9.png",
      alt: "קפה טרי",
      title: "קפה ערבי מסורתי",
      category: "משקאות",
      price: "₪15",
      description: "קפה טחון דק בתוספת הל"
    },
    {
      src: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
      alt: "קנאפה מסורתית",
      title: "קנאפה קלאסית",
      category: "קינוחים",
      price: "₪48",
      description: "קינוח גבינה מסורתי עם שערות קדאיף"
    },
    {
      src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      alt: "קנאפה שוקולד",
      title: "קנאפה שוקולד",
      category: "קינוחים",
      price: "₪52",
      description: "קנאפה במילוי שוקולד בלגי ואגוזי לוז"
    }
  ];

  return (
    <div className="min-h-screen bg-background dark:bg-primary-dark transition-colors duration-300 py-20">
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-gradient"
        >
          התפריט שלנו
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-morphism rounded-xl overflow-hidden hover-lift"
            >
              <AspectRatio ratio={4/3}>
                <img
                  src={item.src}
                  alt={item.alt}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                />
              </AspectRatio>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  {item.category === "משקאות" ? (
                    <Coffee className="w-5 h-5 text-primary" />
                  ) : (
                    <CakeSlice className="w-5 h-5 text-primary" />
                  )}
                  <span className="text-sm text-foreground/60">{item.category}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground/80 dark:text-foreground/70 mb-2">
                  {item.title}
                </h3>
                <p className="text-foreground/60 dark:text-foreground/50 mb-4">
                  {item.description}
                </p>
                <div className="text-lg font-bold text-primary dark:text-primary-light">
                  {item.price}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;

