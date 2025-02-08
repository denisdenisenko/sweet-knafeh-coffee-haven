
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
    <div className="min-h-screen bg-background dark:bg-primary-dark transition-colors duration-300">
      {/* Hero Section */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/lovable-uploads/af376e6c-4e24-4b16-9452-bd4a34f7eedf.png"
            alt="Coffee Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4 font-heading">התפריט שלנו</h1>
            <p className="text-xl md:text-2xl">טעמים מסורתיים בכל ביס</p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background dark:from-primary-dark to-transparent" />
      </div>

      {/* Menu Items Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
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
