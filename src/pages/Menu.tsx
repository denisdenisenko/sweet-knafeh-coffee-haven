
import React, { useRef, useState, useEffect } from "react";
import { Coffee, CakeSlice, UtensilsCrossed, Candy, Cookie, Wheat, Glasses, IceCream, Croissant } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Isotope from "isotope-layout";
import MenuItemCard from "@/components/MenuItemCard";

const Menu = () => {
  const categoryIcons: Record<string, React.FC<any>> = {
    "שתייה חמה": Coffee,
    "שתייה קרה": Glasses,
    "מתוקים": CakeSlice,
    "כנאפה": CakeSlice,
    "בקלאווה": Candy,
  };

  const menuItems = [
    // שתייה חמה
    {
      src: "/lovable-uploads/64c25164-f773-4859-b6f3-8992fabfdba9.png",
      alt: "תה",
      title: "תה",
      category: "שתייה חמה",
      price: "10₪",
      description: "מים חמים עם נענע/ פרוסות לימון/ מקלות קינמון.",
      icon: Coffee
    },
    {
      src: "https://images.unsplash.com/photo-1573750215158-97a608a0986d",
      alt: "קנקן תה",
      title: "קנקן תה",
      category: "שתייה חמה",
      price: "30₪",
      description: "מים חמים עם נענע/פרוסות לימון/ מקלות קינמון (ל-5 סועדים)",
      icon: Coffee
    },
    {
      src: "https://images.unsplash.com/photo-1510707577719-ae7afe3e6a58",
      alt: "אספרסו",
      title: "אספרסו",
      category: "שתייה חמה",
      price: "12₪",
      description: "אספרסו קצר/ארוך/כפול קצר/כפול ארוך",
      icon: Coffee
    },
    {
      src: "https://images.unsplash.com/photo-1571658734946-f816bf04d706",
      alt: "מקיאטו",
      title: "מקיאטו",
      category: "שתייה חמה",
      price: "12₪",
      description: "אספרסו קצר/ארוך/כפול קצר/כפול ארוך ומעל חלב חם מוקצף",
      icon: Coffee
    },
    {
      src: "https://images.unsplash.com/photo-1560624052-53e88eee2555",
      alt: "אפוגטו",
      title: "אפוגטו",
      category: "שתייה חמה",
      price: "15₪",
      description: "כדור גלידה לבחירה עם אספרסו קצר/ארוך/כפול קצר/כפול ארוך",
      icon: Coffee
    },
    
    // שתייה קרה
    {
      src: "https://images.unsplash.com/photo-1563805042-7684c019e1cb",
      alt: "מילקשייק",
      title: "מילקשייק",
      category: "שתייה קרה",
      price: "25₪",
      description: "גלידה בטעמים לבחירה עם קצפת",
      icon: Glass
    },
    {
      src: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735",
      alt: "קפה קר",
      title: "קפה קר",
      category: "שתייה קרה",
      price: "15₪",
      description: "אספרסו עם חלב טרי, קרח וקצפת",
      icon: Glass
    },
    {
      src: "https://images.unsplash.com/photo-1558645836-e44122a743ee",
      alt: "אייס וניל",
      title: "אייס וניל",
      category: "שתייה קרה",
      price: "12₪",
      description: "וניל, קרח גרוס וחלב, עם קצפת",
      icon: Glass
    },
    {
      src: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d",
      alt: "אייס קפה",
      title: "אייס קפה",
      category: "שתייה קרה",
      price: "12₪",
      description: "קפה נמס, קרח גרוס וחלב, עם קצפת",
      icon: Glass
    },
    {
      src: "https://images.unsplash.com/photo-1627824087252-4c8012923553",
      alt: "לימונענע גרוס",
      title: "לימונענע גרוס",
      category: "שתייה קרה",
      price: "12₪",
      description: "לימון, נענע, קרח וסירופ מתקתק",
      icon: Glass
    },
    
    // מתוקים
    {
      src: "https://images.unsplash.com/photo-1475856033578-76b4a228f5c5",
      alt: "וופל בלגי מפנק",
      title: "וופל בלגי מפנק",
      category: "מתוקים",
      price: "45₪",
      description: "רטבי שוקולד לבחירה, גלידה וקצפת",
      icon: CakeSlice
    },
    {
      src: "https://images.unsplash.com/photo-1565299543923-37dd37887442",
      alt: "פנקייק קלאסי",
      title: "פנקייק קלאסי",
      category: "מתוקים",
      price: "35₪",
      description: "זוג פנקייקים עם רטבים, גלידה וקצפת",
      icon: CakeSlice
    },
    {
      src: "https://images.unsplash.com/photo-1634215751955-9bdf3735186d",
      alt: "קרפ צרפתי",
      title: "קרפ צרפתי",
      category: "מתוקים",
      price: "25₪",
      description: "רטבים לבחירה, גלידה וקצפת",
      icon: CakeSlice
    },
    {
      src: "https://images.unsplash.com/photo-1626803775151-61d756612f97",
      alt: "צ'ורוס",
      title: "צ'ורוס",
      category: "מתוקים",
      price: "45₪",
      description: "8 יח' צ'ורוס עם סוכר, קינמון וקצפת",
      icon: CakeSlice
    },
    
    // כנאפה
    {
      src: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
      alt: "כנאפת הבית",
      title: "כנאפת הבית",
      category: "כנאפה",
      sizes: { "אישית": "20₪", "זוגית": "35₪", "משפחתית": "70₪" },
      icon: Candy
    },
    {
      src: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
      alt: "כנאפה פיסטוק",
      title: "כנאפה פיסטוק",
      category: "כנאפה",
      price: "45₪",
      description: "קדאיף עם קרם פיסטוק, שוקולד לבן וגלידה",
      icon: Candy
    },
    {
      src: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
      alt: "כנאפה נוטלה",
      title: "כנאפה נוטלה",
      category: "כנאפה",
      price: "45₪",
      description: "קדאיף עם נוטלה, שוקולד לבן וגלידה",
      icon: Candy
    },
    
    // בקלאווה
    {
      src: "https://images.unsplash.com/photo-1514910367230-3be03a9a9528",
      alt: "קולאז' אגוזים וקינמון",
      title: "קולאז' אגוזים וקינמון",
      category: "בקלאווה",
      price: "110₪ לקילו",
      description: "בצק פילו עם אגוזים וקינמון, בסירופ סוכר",
      icon: Cookie
    },
    {
      src: "https://images.unsplash.com/photo-1514910367230-3be03a9a9528",
      alt: "בורמה פיסטוק",
      title: "בורמה פיסטוק",
      category: "בקלאווה",
      price: "130₪ לקילו",
      description: "בצק פילו ממולא פיסטוק, בסירופ סוכר",
      icon: Cookie
    },
    {
      src: "https://images.unsplash.com/photo-1514910367230-3be03a9a9528",
      alt: "הריסה סולת",
      title: "הריסה סולת",
      category: "בקלאווה",
      price: "40₪ לקילו",
      description: "עוגת סולת מסורתית עם שקדים",
      icon: Cookie
    },
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
              gutter: 16 // Slightly reduced gutter for mobile
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
      <div className="relative h-[30vh] sm:h-[40vh] md:h-[60vh] w-full overflow-hidden">
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
            <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold mb-2 sm:mb-4 font-heading">התפריט שלנו</h1>
            <p className="text-base sm:text-lg md:text-2xl">טעמים מסורתיים בכל ביס</p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 bg-gradient-to-t from-background dark:from-primary-dark to-transparent" />
      </div>

      <div className="container mx-auto px-4 py-6 md:py-12">
        <div className="relative mb-6 md:mb-10 text-center max-w-5xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold mb-4">בחר קטגוריה</h2>
          
          <div className="relative">
            <div 
              ref={categoryScrollRef}
              className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 overflow-x-auto py-2"
            >
              <Button
                key="all"
                variant={selectedCategory === null ? "default" : "outline"}
                onClick={handleAllCategoryClick}
                className="whitespace-nowrap mb-2 text-sm sm:text-base"
              >
                הכל
              </Button>
              {categories.map((category) => {
                const CategoryIcon = categoryIcons[category] || Coffee;
                
                return (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => handleCategoryClick(category)}
                    className="whitespace-nowrap gap-1 sm:gap-2 mb-2 text-sm sm:text-base"
                  >
                    <CategoryIcon className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span>{category}</span>
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
  
        <div className="mx-auto max-w-6xl">
          <div 
            ref={menuGridRef} 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 justify-center" 
            style={{ direction: "rtl" }}
          >
            {menuItems.map((item, index) => (
              <div 
                key={`item-${index}`}
                className={`menu-item ${item.category.replace(/\s+/g, '-')} w-full`}
              >
                <MenuItemCard 
                  src={item.src}
                  alt={item.alt}
                  title={item.title}
                  category={item.category}
                  price={item.price}
                  sizes={item.sizes}
                  description={item.description}
                  icon={item.icon}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Menu;
