import React, { useRef, useState, useEffect } from "react";
import { Coffee, CakeSlice, UtensilsCrossed, Candy, Cookie, Wheat, Glasses, IceCream, Croissant, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Isotope from "isotope-layout";
import MenuItemCard from "@/components/MenuItemCard";

const Menu = () => {
  const categoryIcons: Record<string, LucideIcon> = {
    "שתייה חמה": Coffee,
    "שתייה קרה": Glasses,
    "מתוקים": CakeSlice,
    "כנאפה": CakeSlice,
    "בקלאווה": Candy,
  };

  const menuData = {
    "שתייה חמה": [
      { "name": "תה", "description": "מים חמים עם נענע/ פרוסות לימון/ מקלות קינמון.", "price": "10₪" },
      { "name": "קנקן תה", "description": "מים חמים עם נענע/פרוסות לימון/ מקלות קינמון. (ל-5 סועדים)", "price": "30₪" },
      { "name": "אספרסו", "description": "אספרסו קצר/ ארוך/ כפול קצר/ כפול ארוך", "price": "12₪" },
      { "name": "מקיאטו", "description": "אספרסו קצר/ ארוך/ כפול קצר/ כפול ארוך ומעל חלב חם מוקצף.", "price": "12₪" },
      { "name": "אפוגטו", "description": "כדור גלידה לבחירתכם מוגש עם אספרסו קצר/ ארוך/ כפול קצר/ כפול ארוך.", "price": "15₪" }
    ],
    "שתייה קרה": [
      { "name": "מילקשייק", "description": "על בסיס גלידה עשירה בטעמים לבחירה (שוקולד בלגי , וניל קלאסי, תות, וניל-עוגיות, פיסטוק, לוטוס, וניל דובדבן, מסטיק) מוגש עם קצפת מעל.", "price": "25₪" },
      { "name": "קפה קר", "description": "אספרסו איכותי, מוגש עם חלב טרי, קרח ומעט מתיקות לבחירה. מוגש עם קצפת מעל.", "price": "15₪" },
      { "name": "אייס וניל", "description": "משקה קרמי ומפנק על בסיס וניל, קרח גרוס וחלב טרי, מוגש עם קצפת מעל.", "price": "12₪" },
      { "name": "אייס קפה", "description": "משקה קרמי וממכר על בסיס קפה נמס איכותי, קרח גרוס וחלב טרי, מוגש עם קצפת מעל.", "price": "12₪" },
      { "name": "לימונענע גרוס", "description": "שילוב מרענן של לימון חמצמץ ונענע טרייה עם קרח גרוס וסירופ מתקתק במידה הנכונה.", "price": "12₪" }
    ],
    "מתוקים": [
      { "name": "וופל בלגי מפנק", "description": "וופל בלגי טרי ופריך, מוגש עם רטבי שוקולד לבחירה: נוטלה, שוקולד לבן, קינדר, פיסטוק, מייפל או לוטוס. כולל כדור גלידה לבחירה (שוקולד, וניל, תות ועוד) וקצפת עשירה בצד.", "price": "45₪" },
      { "name": "פנקייק קלאסי", "description": "זוג פנקייקים זהובים, אווריריים וטריים, מוגשים עם רטבים לבחירה: נוטלה, שוקולד לבן, קינדר, פיסטוק, מייפל או לוטוס. כולל כדור גלידה לבחירה (שוקולד, וניל, תות ועוד) וקצפת עשירה בצד.", "price": "35₪" },
      { "name": "קרפ צרפתי", "description": "קרפ דקיק וזהוב, מוגש עם רטבים מפנקים לבחירה: נוטלה, שוקולד לבן, קינדר, פיסטוק, מייפל או לוטוס. כולל כדור גלידה לבחירה (וניל, שוקולד, תות ועוד) וקצפת מעל. ניתן להוסיף תוספות לבחירה: מקופלת, פירורי לוטוס או אורא������, בוטנים קלויים, דובדבן מסוכר ועוד.", "price": "25₪" },
      { "name": "צ'ורוס", "description": "8 יחידות של צ'ורוס טריים, זהובים ופריכים, מצופים בסוכר וקינמון. מוגשים לצד קצפת עם רטבים לבחירה: קינדר, נוטלה או שוקולד לבן.", "price": "45₪" }
    ],
    "כנאפה": [
      { "name": "כנאפת הבית", "description": "כנאפה טרייה וחמה, עשויה במקום עם גבינה עשירה וסירופ סוכר מתקתק, במרקם מושלם.", "sizes": { "אישית": "20₪", "זוגית": "35₪", "משפחתית": "70₪" } },
      { "name": "כנאפה פיסטוק", "description": "קינוח עשיר בשתי שכבות קדאיף פריכות וביניהן קרם פיסטוק עשיר ושוקולד לבן נמס. מעל, ציפוי נדיב של קרם פיסטוק ושוקולד לבן, מוגש עם קצפת וכדור גלידה לבחירה (וניל, שוקולד, תות ועוד).", "price": "45₪" },
      { "name": "כנאפה נוטלה", "description": "קינוח עשיר בשתי שכבות קדאיף פריכות וביניהן שכבת נוטלה מפנקת ושוקולד לבן נמס. מעל, ציפוי נדיב של נוטלה ושוקולד לבן, מוגש עם קצפת וכדור גלידה לבחירה (וניל, שוקולד, תות ועוד).", "price": "45₪" }
    ],
    "בקלאווה": [
      { "name": "קולאז' אגוזים וקינמון", "description": "שכבות בצק פילו עדינות, ממולאות בתערובת עשירה של אגוזים טחונים עם נגיעות קינמון ארומטי, מצופות בסירופ סוכר מתקתק.", "price": "110₪ לקילו" },
      { "name": "בורמה פיסטוק", "description": "גליל בקלאווה עשוי משכבות דקות של בצק פילו פריך, ממולא בפיסטוק טחון טרי ומצופה בסירופ סוכר מתקתק.", "price": "130₪ לקילו" },
      { "name": "הריסה סולת", "description": "עוגת סולת מסורתית, רכה ונימוחה, ספוגה בסירופ סוכר עדין ומעוטרת בשקד מעל.", "price": "40₪ לקילו" }
    ]
  };

  const menuItems = Object.entries(menuData).flatMap(([category, items]) => 
    items.map(item => {
      const categoryIcon = categoryIcons[category] || Coffee;
      return {
        src: item.name.includes("תה") || item.name.includes("אספרסו") || item.name.includes("קפה") ? "/lovable-uploads/64c25164-f773-4859-b6f3-8992fabfdba9.png" :
             category === "מתוקים" ? "https://images.unsplash.com/photo-1565299543923-37dd37887442" :
             category === "כנאפה" ? "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9" :
             category === "בקלאווה" ? "https://images.unsplash.com/photo-1514910367230-3be03a9a9528" : 
             "https://images.unsplash.com/photo-1573750215158-97a608a0986d",
        alt: item.name,
        title: item.name,
        category: category,
        price: item.price,
        sizes: item.sizes,
        description: item.description,
        icon: categoryIcon
      };
    })
  );

  const categories = Object.keys(menuData);
  
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const categoryScrollRef = useRef<HTMLDivElement>(null);
  const lastClickTimeRef = useRef<number>(0);
  const clickDebounceTime = 300; // ms between allowed clicks
  const isotopeRef = useRef<Isotope | null>(null);
  const menuGridRef = useRef<HTMLDivElement>(null);
  const [isIsotopeInitialized, setIsIsotopeInitialized] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const filteredItems = selectedCategory 
    ? menuItems.filter(item => item.category === selectedCategory)
    : menuItems;

  const displayedCategories = selectedCategory 
    ? [selectedCategory] 
    : categories;

  const handleCategoryClick = (event: React.MouseEvent, category: string) => {
    // Prevent default to avoid page scroll
    event.preventDefault();
    
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

  const handleAllCategoryClick = (event: React.MouseEvent) => {
    // Prevent default to avoid page scroll
    event.preventDefault();
    
    const now = Date.now();
    
    if (now - lastClickTimeRef.current < clickDebounceTime) {
      return;
    }
    
    lastClickTimeRef.current = now;
    console.log("Setting category to All (null)");
    setSelectedCategory(null);
  };

  // Track image loading
  useEffect(() => {
    const preloadImages = async () => {
      const imageUrls = [...new Set(menuItems.map(item => item.src))];
      
      // Create an array of promises for image loading
      const loadPromises = imageUrls.map(url => {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = () => resolve(true);
          img.onerror = () => resolve(false);
          img.src = url;
        });
      });
      
      // Wait for all images to load
      await Promise.all(loadPromises);
      setImagesLoaded(true);
    };
    
    preloadImages();
  }, [menuItems]);

  // Initialize Isotope after images are loaded
  useEffect(() => {
    if (!imagesLoaded || !menuGridRef.current) return;
    
    // Add a small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      if (menuGridRef.current) {
        // Destroy previous instance if it exists
        if (isotopeRef.current) {
          isotopeRef.current.destroy();
        }

        // Create new Isotope instance
        isotopeRef.current = new Isotope(menuGridRef.current, {
          itemSelector: '.menu-item',
          layoutMode: 'fitRows',
          fitRows: {
            gutter: 20
          },
          originLeft: false
        });
        
        setIsIsotopeInitialized(true);
        
        // Force layout update
        setTimeout(() => {
          if (isotopeRef.current) {
            isotopeRef.current.layout();
          }
        }, 100);
      }
    }, 300);
    
    return () => clearTimeout(timer);
  }, [imagesLoaded]);

  // Update layout when category changes
  useEffect(() => {
    if (isotopeRef.current && isIsotopeInitialized) {
      const filterValue = selectedCategory 
        ? `.${selectedCategory.replace(/\s+/g, '-')}`
        : '*';
      
      // First update the filter
      isotopeRef.current.arrange({ filter: filterValue });
      
      // Then force a layout update after a short delay
      setTimeout(() => {
        if (isotopeRef.current) {
          isotopeRef.current.layout();
        }
      }, 100);
    }
  }, [selectedCategory, isIsotopeInitialized]);

  // Update layout on window resize
  useEffect(() => {
    const handleResize = () => {
      if (isotopeRef.current && isIsotopeInitialized) {
        isotopeRef.current.layout();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isIsotopeInitialized]);

  // Force layout update when component mounts
  useEffect(() => {
    return () => {
      // Clean up on unmount
      if (isotopeRef.current) {
        isotopeRef.current.destroy();
      }
    };
  }, []);

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
                    onClick={(e) => handleCategoryClick(e, category)}
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
  
        <div className="mx-auto max-w-7xl">
          {!imagesLoaded ? (
            <div className="flex justify-center items-center min-h-[300px]">
              <div className="animate-pulse text-primary">טוען...</div>
            </div>
          ) : (
            <div 
              ref={menuGridRef} 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6" 
              style={{ direction: "rtl" }}
            >
              {filteredItems.map((item, index) => (
                <div 
                  key={`${item.category}-${item.title}-${index}`}
                  className={`menu-item ${item.category.replace(/\s+/g, '-')}`}
                >
                  <MenuItemCard {...item} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Menu;
