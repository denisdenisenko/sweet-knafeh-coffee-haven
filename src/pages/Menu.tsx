
import React, { useRef, useState, useEffect } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Coffee, CakeSlice, UtensilsCrossed, Candy, Cookie, Wheat, Salad, Milk, IceCream, Croissant } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Isotope from "isotope-layout";

const Menu = () => {
  const menuItems = [
    // Drinks Category
    {
      src: "/lovable-uploads/64c25164-f773-4859-b6f3-8992fabfdba9.png",
      alt: "קפה טרי",
      title: "קפה ערבי מסורתי",
      category: "שתיה חמה",
      price: "₪15",
      description: "קפה טחון דק בתוספת הל",
      icon: Coffee
    },
    {
      src: "https://images.unsplash.com/photo-1573750215158-97a608a0986d",
      alt: "תה נענע",
      title: "תה נענע טרי",
      category: "שתיה חמה",
      price: "₪12",
      description: "תה עם עלי נענע טריים ונגיעת דבש",
      icon: Coffee
    },
    // Desserts Category
    {
      src: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
      alt: "בורמה פיסטוק",
      title: "בורמה פיסטוק",
      category: "בקלאווה",
      price: "₪130",
      description: "קינוח גבינה מסורתי עם שערות קדאיף",
      icon: CakeSlice
    },
    {
      src: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
      alt: "קנאפה מסורתית",
      title: "קנאפה קלאסית",
      category: "בקלאווה",
      price: "₪48",
      description: "קינוח גבינה מסורתי עם שערות קדאיף",
      icon: CakeSlice
    },
    {
      src: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
      alt: "קנאפה מסורתית",
      title: "קנאפה קלאסית",
      category: "בקלאווה",
      price: "₪48",
      description: "קינוח גבינה מסורתי עם שערות קדאיף",
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
  const lastClickTimeRef = useRef<number>(0);
  const clickDebounceTime = 300; // ms between allowed clicks
  const isotopeRef = useRef<Isotope | null>(null);
  const menuGridRef = useRef<HTMLDivElement>(null);

  const filteredItems = selectedCategory 
    ? menuItems.filter(item => item.category === selectedCategory)
    : menuItems;

  const displayedCategories = selectedCategory 
    ? [selectedCategory] 
    : categories;

  const handleCategoryClick = (category: string) => {
    const now = Date.now();
    
    if (now - lastClickTimeRef.current < clickDebounceTime) {
      return;
    }
    
    lastClickTimeRef.current = now;
    
    if (category === selectedCategory) {
      console.log("Clearing category selection");
      setSelectedCategory(null);
    } else {
      console.log("Setting category to:", category);
      setSelectedCategory(category);
    }
  };

  const handleAllCategoryClick = () => {
    const now = Date.now();
    
    if (now - lastClickTimeRef.current < clickDebounceTime) {
      return;
    }
    
    lastClickTimeRef.current = now;
    console.log("Setting category to All (null)");
    setSelectedCategory(null);
  };

  useEffect(() => {
    if (menuGridRef.current) {
      setTimeout(() => {
        if (menuGridRef.current) {
          isotopeRef.current = new Isotope(menuGridRef.current, {
            itemSelector: '.menu-item',
            layoutMode: 'fitRows',
            fitRows: {
              gutter: 20
            },
            percentPosition: true,
            stagger: 30,
            transitionDuration: '0.4s',
            hiddenStyle: {
              opacity: 0,
              transform: 'scale(0.8)'
            },
            visibleStyle: {
              opacity: 1,
              transform: 'scale(1)'
            },
            originLeft: false
          });
        }
      }, 100);
    }

    return () => {
      if (isotopeRef.current) {
        isotopeRef.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    if (isotopeRef.current) {
      setTimeout(() => {
        if (isotopeRef.current) {
          isotopeRef.current.arrange({
            filter: selectedCategory ? `.${selectedCategory.replace(/\s+/g, '-')}` : '*'
          });
          
          setTimeout(() => {
            if (isotopeRef.current) {
              isotopeRef.current.layout();
            }
          }, 100);
        }
      }, 100);
    }
  }, [selectedCategory]);

  useEffect(() => {
    const handleResize = () => {
      if (isotopeRef.current) {
        isotopeRef.current.layout();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    console.log("Current selected category:", selectedCategory);
  }, [selectedCategory]);

  return (
    <motion.div
      key="menu-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-background dark:bg-primary-dark transition-colors duration-300 relative"
    >
      <div className="relative h-[40vh] md:h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/lovable-uploads/af376e6c-4e24-4b16-9452-bd4a34f7eedf.png"
            alt="Coffee Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-7xl font-bold mb-4 font-heading">התפריט שלנו</h1>
            <p className="text-lg md:text-2xl">טעמים מסורתיים בכל ביס</p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background dark:from-primary-dark to-transparent" />
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="relative mb-6 md:mb-8 max-w-5xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold mb-4">בחר קטגוריה</h2>
          
          <div className="relative">
            <div 
              ref={categoryScrollRef}
              className="flex flex-wrap justify-end gap-2"
            >
              <Button
                key="all"
                variant={selectedCategory === null ? "default" : "outline"}
                onClick={handleAllCategoryClick}
                className="whitespace-nowrap mb-2"
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
                    className="whitespace-nowrap gap-2 mb-2"
                  >
                    <CategoryIcon className="h-4 w-4" />
                    <span>{category}</span>
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
  
        <div 
          ref={menuGridRef} 
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 md:gap-3" 
          style={{ direction: "rtl" }}
        >
          {menuItems.map((item, index) => (
            <div 
              key={`item-${index}`}
              className={`menu-item ${item.category.replace(/\s+/g, '-')}`}
              style={{ width: '100%' }}
            >
              <div 
                className="glass-morphism rounded-lg overflow-hidden flex flex-col"
                style={{ height: '240px' }}
              >
                <div className="w-full" style={{ height: '100px' }}>
                  <AspectRatio ratio={4/3} className="w-full h-full">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="object-cover w-full h-full"
                      loading="lazy"
                    />
                  </AspectRatio>
                </div>
                <div className="p-2 flex flex-col h-[140px]">
                  <div>
                    <div className="flex items-center gap-1 mb-1">
                      {React.createElement(item.icon, { className: "w-3 h-3 text-primary" })}
                      <span className="text-xs text-foreground/60">{item.category}</span>
                    </div>
                    <h3 className="text-xs font-semibold text-foreground/80 dark:text-foreground/70 mb-1 h-[2rem] line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-[10px] text-foreground/60 dark:text-foreground/50 mb-1 h-[2.5rem] line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                  <div className="text-xs font-bold text-primary dark:text-primary-light mt-auto">
                    {item.price}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Menu;
