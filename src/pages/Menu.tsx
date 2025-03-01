import React, { useRef, useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Coffee, CakeSlice, UtensilsCrossed, Candy, Cookie, Wheat, Salad, Milk, IceCream, Croissant } from "lucide-react";
import { Button } from "@/components/ui/button";

const Menu = () => {
  const menuItems = [
    // Drinks Category
    {
      src: "/lovable-uploads/64c25164-f773-4859-b6f3-8992fabfdba9.png",
      alt: "קפה טרי",
      title: "קפה ערבי מסורתי",
      category: "משקאות",
      price: "₪15",
      description: "קפה טחון דק בתוספת הל",
      icon: Coffee
    },
    {
      src: "https://images.unsplash.com/photo-1573750215158-97a608a0986d",
      alt: "תה נענע",
      title: "תה נענע טרי",
      category: "משקאות",
      price: "₪12",
      description: "תה עם עלי נענע טריים ונגיעת דבש",
      icon: Coffee
    },
    // Desserts Category
    {
      src: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
      alt: "קנאפה מסורתית",
      title: "קנאפה קלאסית",
      category: "קינוחים",
      price: "₪48",
      description: "קינוח גבינה מסורתי עם שערות קדאיף",
      icon: CakeSlice
    },
    {
      src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      alt: "קנאפה שוקולד",
      title: "קנאפה שוקולד",
      category: "קינוחים",
      price: "₪52",
      description: "קנאפה במילוי שוקולד בלגי ואגוזי לוז",
      icon: CakeSlice
    },
    // Main Dishes Category
    {
      src: "https://images.unsplash.com/photo-1633321702518-7feccafb94d5",
      alt: "מנסף",
      title: "מנסף ירדני",
      category: "מנות עיקריות",
      price: "₪85",
      description: "אורז עם בשר כבש וצנוברים בסגנון ירדני מסורתי",
      icon: UtensilsCrossed
    },
    {
      src: "https://images.unsplash.com/photo-1611742046824-935663633372",
      alt: "מקלובה",
      title: "מקלובה מסורתית",
      category: "מנות עיקריות",
      price: "₪75",
      description: "אורז עם ירקות, בשר ותבלינים מסורתיים",
      icon: UtensilsCrossed
    },
    // Sweets Category
    {
      src: "https://images.unsplash.com/photo-1514910367230-3be03a9a9528",
      alt: "בקלאווה",
      title: "בקלאווה פיסטוק",
      category: "ממתקים",
      price: "₪42",
      description: "שכבות של בצק פילו, פיסטוקים וסירופ דבש",
      icon: Candy
    },
    {
      src: "https://images.unsplash.com/photo-1588195500881-53d468964000",
      alt: "עוגיות תמרים",
      title: "עוגיות תמרים",
      category: "ממתקים",
      price: "₪32",
      description: "עוגיות מסורתיות במילוי תמרים וקינמון",
      icon: Candy
    },
    // Cookies Category
    {
      src: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35",
      alt: "עוגיות תבלינים",
      title: "עוגיות שבבי שוקולד",
      category: "עוגיות",
      price: "₪28",
      description: "עוגיות רכות עם שבבי שוקולד בלגי",
      icon: Cookie
    },
    {
      src: "https://images.unsplash.com/photo-1585803114088-cd027dd872d1",
      alt: "מעמול",
      title: "מעמול תמרים",
      category: "עוגיות",
      price: "₪35",
      description: "עוגיות מסורתיות ממולאות במחית תמרים",
      icon: Cookie
    },
    // Bread Category
    {
      src: "https://images.unsplash.com/photo-1555507036-ab1f4038808a",
      alt: "פיתה טרייה",
      title: "פיתה ביתית",
      category: "לחמים",
      price: "₪8",
      description: "פיתה טרייה אפויה בתנור אבן מסורתי",
      icon: Wheat
    },
    {
      src: "https://images.unsplash.com/photo-1590030580235-872a348a9224",
      alt: "לחם טאבון",
      title: "לחם טאבון",
      category: "לחמים",
      price: "₪12",
      description: "לחם שטוח אפוי בטאבון מסורתי",
      icon: Wheat
    },
    // Salads Category
    {
      src: "https://images.unsplash.com/photo-1529059997568-3d847b1154f0",
      alt: "סלט טבולה",
      title: "טבולה קלאסי",
      category: "סלטים",
      price: "₪32",
      description: "סלט פטרוזיליה, בורגול, עגבניות ונענע",
      icon: Salad
    },
    {
      src: "https://images.unsplash.com/photo-1544489518-18591cf1374a",
      alt: "סלט פתוש",
      title: "פתוש לבנוני",
      category: "סלטים",
      price: "₪34",
      description: "סלט ירקות עם פיתה קריספית וסומק",
      icon: Salad
    },
    // Dairy Category
    {
      src: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04",
      alt: "לבנה",
      title: "לבנה עם זעתר",
      category: "מוצרי חלב",
      price: "₪22",
      description: "גבינת לבנה מסורתית עם זעתר וזיתים",
      icon: Milk
    },
    {
      src: "https://images.unsplash.com/photo-1559561853-08451507cbe7",
      alt: "לבן",
      title: "לבן ביתי",
      category: "מוצרי חלב",
      price: "₪18",
      description: "לבן טרי ועשיר בסגנון ביתי",
      icon: Milk
    },
    // Ice Cream Category
    {
      src: "https://images.unsplash.com/photo-1563805042-7684c019e1cb",
      alt: "בוזה",
      title: "בוזה פיסטוק",
      category: "גלידות",
      price: "₪24",
      description: "גלידה ערבית מסורתית בטעם פיסטוק",
      icon: IceCream
    },
    {
      src: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f",
      alt: "סורבה",
      title: "סורבה פירות",
      category: "גלידות",
      price: "₪22",
      description: "סורבה טבעי מפירות טריים",
      icon: IceCream
    },
    // Pastries Category
    {
      src: "https://images.unsplash.com/photo-1602351447937-745cb720612f",
      alt: "מאפה גבינה",
      title: "מאפה גבינה",
      category: "מאפים",
      price: "₪16",
      description: "מאפה פילו במילוי גבינות מסורתיות",
      icon: Croissant
    },
    {
      src: "https://images.unsplash.com/photo-1509440159596-0249088772ff",
      alt: "מאפה תרד",
      title: "מאפה תרד",
      category: "מאפים",
      price: "₪14",
      description: "מאפה פילו במילוי תרד ובצל מטוגן",
      icon: Croissant
    }
  ];

  const categories = [...new Set(menuItems.map(item => item.category))];
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const categoryScrollRef = useRef<HTMLDivElement>(null);

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const translateY = useTransform(scrollYProgress, [0, 0.2], [100, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    },
    hover: {
      scale: 1.03,
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.3
      }
    }
  };

  const filteredItems = selectedCategory 
    ? menuItems.filter(item => item.category === selectedCategory)
    : menuItems;

  const displayedCategories = selectedCategory 
    ? [selectedCategory] 
    : categories;

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(prevCategory => 
      prevCategory === category ? null : category
    );
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-background dark:bg-primary-dark transition-colors duration-300">
      <div className="relative h-[50vh] md:h-[70vh] w-full overflow-hidden">
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
            <h1 className="text-4xl md:text-7xl font-bold mb-4 font-heading">התפריט שלנו</h1>
            <p className="text-lg md:text-2xl">טעמים מסורתיים בכל ביס</p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background dark:from-primary-dark to-transparent" />
      </div>

      <motion.div 
        style={{ opacity, translateY }} 
        className="container mx-auto px-4 py-12 md:py-20"
      >
        <div className="relative mb-8 md:mb-12 max-w-5xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold mb-4">בחר קטגוריה</h2>
          
          <div className="relative overflow-hidden">
            <div 
              ref={categoryScrollRef}
              className="flex gap-2 overflow-x-auto pb-4 no-scrollbar"
            >
              <Button
                key="all"
                variant={selectedCategory === null ? "default" : "outline"}
                onClick={() => setSelectedCategory(null)}
                className="whitespace-nowrap bg-primary text-white hover:bg-primary/90"
                style={selectedCategory === null ? {} : {}}
              >
                הכל
              </Button>
              {categories.map((category) => {
                const CategoryIcon = menuItems.find(item => item.category === category)?.icon || Coffee;
                
                return (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => handleCategoryClick(category)}
                    className={`whitespace-nowrap gap-2 ${selectedCategory === category ? "bg-primary text-white" : "bg-background hover:bg-accent hover:text-primary"}`}
                  >
                    <CategoryIcon className="h-4 w-4" />
                    <span>{category}</span>
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
  
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory ?? 'all'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {displayedCategories.map((category, categoryIndex) => (
              <motion.div 
                key={category}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                className="mb-12 md:mb-20"
              >
                <motion.div 
                  className="flex items-center gap-3 mb-6 md:mb-10 justify-center"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  {menuItems.find(item => item.category === category)?.icon && (
                    <motion.div
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {React.createElement(
                        menuItems.find(item => item.category === category)?.icon || Coffee, 
                        { className: "w-6 h-6 md:w-8 md:h-8 text-primary" }
                      )}
                    </motion.div>
                  )}
                  <h2 className="text-2xl md:text-4xl font-bold text-primary dark:text-primary-light">
                    {category}
                  </h2>
                </motion.div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                  {filteredItems
                    .filter(item => item.category === category)
                    .map((item, index) => (
                      <motion.div
                        key={`${category}-${index}`}
                        variants={itemVariants}
                        whileHover="hover"
                        className="glass-morphism rounded-xl overflow-hidden"
                      >
                        <div className="flex flex-col md:flex-row">
                          <div className="w-full md:w-2/5">
                            <AspectRatio ratio={1/1}>
                              <img
                                src={item.src}
                                alt={item.alt}
                                className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                              />
                            </AspectRatio>
                          </div>
                          <div className="p-4 md:p-6 w-full md:w-3/5 flex flex-col justify-between">
                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                {React.createElement(item.icon, { className: "w-4 h-4 md:w-5 md:h-5 text-primary" })}
                                <span className="text-xs md:text-sm text-foreground/60">{item.category}</span>
                              </div>
                              <h3 className="text-lg md:text-xl font-semibold text-foreground/80 dark:text-foreground/70 mb-2">
                                {item.title}
                              </h3>
                              <p className="text-sm md:text-base text-foreground/60 dark:text-foreground/50 mb-4">
                                {item.description}
                              </p>
                            </div>
                            <motion.div 
                              className="text-base md:text-lg font-bold text-primary dark:text-primary-light"
                              whileHover={{ scale: 1.05 }}
                            >
                              {item.price}
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Menu;
