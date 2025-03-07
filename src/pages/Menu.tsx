
import React, { useState, useRef, useEffect } from "react";
import { Coffee, CakeSlice, UtensilsCrossed, Candy, Cookie, Wheat, Glasses, IceCream, Croissant, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
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
      { "name": "קרפ צרפתי", "description": "קרפ דקיק וזהוב, מוגש עם רטבים מפנקים לבחירה: נוטלה, שוקולד לבן, קינדר, פיסטוק, מייפל או לוטוס. כולל כדור גלידה לבחירה (וניל, שוקולד, תות ועוד) וקצפת מעל. ניתן להוסיף תוספות לבחירה: מקופלת, פירורי לוטוס או אורא������, בוטנים קלויי���, דובדבן מסוכר ו��וד.", "price": "25₪" },
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
  
  // Ensure proper scrolling behavior when changing categories
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedCategory]);

  // Direct event handlers without debounce to improve mobile responsiveness
  const handleCategoryClick = (category: string) => {
    if (category === selectedCategory) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
    }
  };

  const handleAllCategoryClick = () => {
    setSelectedCategory(null);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const renderMenuItems = () => {
    if (selectedCategory) {
      return (
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6" 
          style={{ direction: "rtl" }}
        >
          {menuItems
            .filter(item => item.category === selectedCategory)
            .map((item, index) => (
              <div 
                key={`${item.category}-${item.title}-${index}`}
                className="menu-item h-full"
              >
                <MenuItemCard {...item} index={index} />
              </div>
            ))}
        </motion.div>
      );
    } else {
      return (
        <div className="space-y-10">
          {categories.map((category) => (
            <div key={category} className="mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2 mb-4"
              >
                {categoryIcons[category] && React.createElement(categoryIcons[category], { className: "h-6 w-6 text-primary" })}
                <h2 className="text-2xl font-bold text-primary">{category}</h2>
              </motion.div>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6" 
                style={{ direction: "rtl" }}
              >
                {menuItems
                  .filter(item => item.category === category)
                  .map((item, index) => (
                    <div 
                      key={`${item.category}-${item.title}-${index}`}
                      className="menu-item h-full"
                    >
                      <MenuItemCard {...item} index={index} />
                    </div>
                  ))}
              </motion.div>
            </div>
          ))}
        </div>
      );
    }
  };

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
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl font-bold mb-4"
          >
            בחר קטגוריה
          </motion.h2>
          
          <div className="relative">
            <motion.div 
              ref={categoryScrollRef}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 py-2"
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
            </motion.div>
          </div>
        </div>
  
        <div className="mx-auto max-w-7xl">
          {renderMenuItems()}
        </div>
      </div>
    </motion.div>
  );
};

export default Menu;
