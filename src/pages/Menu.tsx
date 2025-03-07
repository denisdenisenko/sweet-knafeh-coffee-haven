
import React, { useState, useRef } from "react";
import { Coffee, CakeSlice, Candy, Cookie, Glasses, LucideIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import MenuItemCard from "@/components/MenuItemCard";
import { Button } from "@/components/ui/button";

const Menu = () => {
  const categoryIcons: Record<string, LucideIcon> = {
    "שתייה חמה": Coffee,
    "שתייה קרה": Glasses,
    "מתוקים": CakeSlice,
    "כנאפה": Candy,
    "בקלאווה": Cookie,
  };

  const menuData = {
    "שתייה חמה": [
      { "name": "תה", "description": "מים חמים עם נענע/ פרוסות לימון/ מקלות קינמון.", "price": "10₪", "image": "images/menu1.jpg" },
      { "name": "קנקן תה", "description": "מים חמים עם נענע/פרוסות לימון/ מקלות קינמון. (ל-5 סועדים)", "price": "30₪", "image": "images/menu1.jpg" },
      { "name": "אספרסו", "description": "אספרסו קצר/ ארוך/ כפול קצר/ כפול ארוך", "price": "12₪", "image": "images/espresso (2).jpg" },
      { "name": "מקיאטו", "description": "אספרסו קצר/ ארוך/ כפול קצר/ כפול ארוך ומעל חלב חם מוקצף.", "price": "12₪", "image": "images/macchiato.jpg" },
      { "name": "אפוגטו", "description": "כדור גלידה לבחירתכם מוגש עם אספרסו קצר/ ארוך/ כפול קצר/ כפול ארוך.", "price": "15₪", "image": "images/affogato.jpg" },
      { "name": "קפה שחור", "description": "קפה שחור טחון במקום עם מים חמים.", "price": "12₪", "image": "images/menu1.jpg" },
      { "name": "אמריקנו", "description": "אספרסו כפול קצר עם מים חמים/ קרים, מוגש לצד חלב חם/ קר לבחירתכם.", "price": "12₪", "image": "images/menu1.jpg" },
      { "name": "קפה הפוך", "description": "קפה חם ועדין המבוסס על מנת אספרסו עם חלב חם מוקצף שמעניק לו מרקם חלק וקרמי.", "price": "15₪", "image": "images/cappuccino.jpg" },
      { "name": "קפה מוקה", "description": "משקה מתוק ומחמם המבוסס על אבקת שוקו – שילוב מפנק של אספרסו איכותי, שוקולד עשיר וחלב מוקצף, עם אבקת קקאו מעל להשלמת הטעם.", "price": "18₪", "image": "images/mocha.jpg" },
      { "name": "שוקו חם", "description": "משקה מתוק ומחמם המבוסס על אבקת שוקו איכותית עם חלב חם מוקצף. ניתן להוסיף מרשמלו או קצפת לתוספת פינוק.", "price": "15₪", "image": "images/menu1.jpg" },
      { "name": "סחלב", "description": "משקה חם, סמיך ומפנק המוכן מחלב חם מבושל. ניתן להוסיף תוספות קלאסיות של פיסטוק קצוץ, פירורי לוטוס, קינמון וקוקוס.", "price": "20₪", "image": "images/menu1.jpg" }
    ],
    "שתייה קרה": [
      { "name": "מילקשייק", "description": "על בסיס גלידה עשירה בטעמים לבחירה (שוקולד בלגי, וניל קלאסי, תות, וניל-עוגיות, פיסטוק, לוטוס, וניל דובדבן, מסטיק) – מוגש עם קצפת מעל.", "price": "25₪", "image": "images/menu2.jpg" },
      { "name": "קפה קר", "description": "אספרסו איכותי, מוגש עם חלב טרי, קרח ומעט מתיקות לבחירתכם. מוגש עם קצפת מעל.", "price": "15₪", "image": "images/menu2.jpg" },
      { "name": "אייס וניל", "description": "משקה קרמי ומפנק על בסיס וניל, קרח גרוס וחלב טרי – מוגש עם קצפת מעל.", "price": "12₪", "image": "images/menu2.jpg" },
      { "name": "אייס קפה", "description": "משקה קרמי וממכר על בסיס קפה נמס איכותי, קרח גרוס וחלב טרי – מוגש עם קצפת מעל.", "price": "12₪", "image": "images/menu2.jpg" },
      { "name": "לימונענע גרוס", "description": "שילוב מרענן של לימון חמצמץ ונענע טרייה עם קרח גרוס וסירופ מתקתק במידה הנכונה.", "price": "12₪", "image": "images/menu2.jpg" },
      { "name": "קנקן לימנענע גרוס", "description": "קנקן גדול של משקה מרענן של לימון חמצמץ ונענע טרייה עם קרח גרוס וסירופ מתקתק במידה הנכונה.", "price": "30₪", "image": "images/menu2.jpg" },
      { "name": "תפוזים סחוט טבעי", "description": "תפוזים טריים, נסחטים במקום למיץ טבעי, מתוק ומלא בריאות.", "price": "15₪", "image": "images/orangeJuice.jpg" },
      { "name": "לימונדה קלאסית", "description": "משקה לימונדה מרענן בטעם לימון מתקתק, מוכן במיוחד לרגעים של פינוק ורעננות.", "price": "8₪", "image": "images/lemonade.jpg" },
      { "name": "קנקן לימונדה קלאסית", "description": "קנקן גדול של משקה לימונדה מרענן בטעם לימון מתקתק, מוכן במיוחד לרגעים של פינוק ורעננות.", "price": "20₪", "image": "images/menu2.jpg" },
      { "name": "ברד ענבים", "description": "", "price": "10₪", "image": "images/menu2.jpg" },
      { "name": "ברד פסיפלורה", "description": "", "price": "10₪", "image": "images/menu2.jpg" },
      { "name": "מים מינרליים", "description": "", "price": "10₪", "image": "images/menu2.jpg" },
      { "name": "ענבים", "description": "", "price": "10₪", "image": "images/menu2.jpg" },
      { "name": "אשכוליות", "description": "", "price": "10₪", "image": "images/menu2.jpg" },
      { "name": "XL", "description": "", "price": "10₪", "image": "images/menu2.jpg" },
      { "name": "סודה", "description": "", "price": "10₪", "image": "images/menu2.jpg" },
      { "name": "פאנטה", "description": "", "price": "10₪", "image": "images/menu2.jpg" },
      { "name": "קוקה קולה", "description": "", "price": "10₪", "image": "images/menu2.jpg" },
      { "name": "קולה זירו", "description": "", "price": "10₪", "image": "images/menu2.jpg" }
    ],
    "מתוקים": [
      { "name": "וופל בלגי מפנק", "description": "וופל בלגי טרי ופריך, מוגש עם רטבי שוקולד לבחירה: נוטלה, שוקולד לבן, קינדר, פיסטוק, מייפל או לוטוס. כולל כדור גלידה לבחירה (שוקולד, וניל, תות ועוד) וקצפת עשירה בצד.", "price": "45₪", "image": "images/menu2.jpg" },
      { "name": "פנקייק קלאסי", "description": "זוג פנקייקים זהובים, אווריריים וטריים, מוגשים עם רטבים לבחירה: נוטלה, שוקולד לבן, קינדר, פיסטוק, מייפל או לוטוס. כולל כדור גלידה לבחירה (שוקולד, וניל, תות ועוד) וקצפת עשירה בצד.", "price": "35₪", "image": "images/menu2.jpg" },
      { "name": "פנקייק הולנדי", "description": "כדורי פנקייק אווריריים וטריים, מוגשים בגדלים לבחירה: 10 כדורים, 15 כדורים או 20 כדורים. מגיעים עם רטבים מפנקים לבחירה: נוטלה, שוקולד לבן, קינדר, פיסטוק, מייפל או לוטוס.", "price": "28₪", "image": "images/menu2.jpg" },
      { "name": "קרפ צרפתי", "description": "קרפ דקיק וזהוב, מוגש עם רטבים מפנקים לבחירה: נוטלה, שוקולד לבן, קינדר, פיסטוק, מייפל או לוטוס. כולל כדור גלידה לבחירה (וניל, שוקולד, תות ועוד) וקצפת מעל. ניתן להוסיף תוספות לבחירה: מקופלת, פירורי לוטוס או אוראו, בוטנים קלויים, דובדבן מסוכר ועוד.", "price": "25₪", "image": "images/menu2.jpg" },
      { "name": "צ'ורוס", "description": "8 יחידות של צ'ורוס טריים, זהובים ופריכים, מצופים בסוכר וקינמון. מוגשים לצד קצפת עם רטבים לבחירה: קינדר, נוטלה או שוקולד לבן.", "price": "45₪", "image": "images/menu2.jpg" }
    ],
    "כנאפה": [
      { "name": "כנאפת הבית", "description": "כנאפה טרייה וחמה, עשויה במקום עם גבינה עשירה וסירופ סוכר מתקתק, במרקם מושלם.", "prices": { "אישית": "20₪", "זוגית": "35₪", "משפחתית": "70₪" }, "image": "images/knafeh.jpg" },
      { "name": "שבלולית אדומה", "description": "כנאפה טרייה וחמה, עשויה במקום עם גבינה עשירה וסירופ סוכר מתקתק, במרקם מושלם.", "price": "40₪", "image": "images/menu2.jpg" },
      { "name": "כנאפה פיסטוק", "description": "קינוח עשיר בשתי שכבות קדאיף פריכות וביניהן קרם פיסטוק עשיר ושוקולד לבן נמס. מעל, ציפוי נדיב של קרם פיסטוק ושוקולד לבן, מוגש עם קצפת וכדור גלידה לבחירה (וניל, שוקולד, תות ועוד).", "price": "45₪", "image": "images/pistachioKnafeh.jpg" },
      { "name": "כנאפה נוטלה", "description": "קינוח עשיר בשתי שכבות קדאיף פריכות וביניהן שכבת נוטלה מפנקת ושוקולד לבן נמס. מעל, ציפוי נדיב של נוטלה ושוקולד לבן, מוגש עם קצפת וכדור גלידה לבחירה (וניל, שוקולד, תות ועוד).", "price": "45₪", "image": "images/nutellaKnafeh.jpg" },
      { "name": "כנאפה לוטוס", "description": "קינוח עשיר בשתי שכבות קדאיף פריכות וביניהן שכבת קרם לוטוס מלטף. מעל, ציפוי נדיב של קרם לוטוס ופירורי לוטוס פריכים, מוגש עם קצפת וכדור גלידה לבחירה (וניל, שוקולד, תות ועוד).", "price": "45₪", "image": "images/lotusKnafeh.jpg" }
    ],
    "בקלאווה": [
      { "name": "קולאז' אגוזים וקינמון", "description": "שכבות בצק פילו עדינות, ממולאות בתערובת עשירה של אגוזים טחונים עם נגיעות קינמון ארומטי, מצופות בסירופ סוכר מתקתק.", "price": "110₪ לקילו", "image": "images/baklawaNuts.jpg" },
      { "name": "בורמה פיסטוק", "description": "גליל בקלאווה עשוי משכבות דקות של בצק פילו פריך, ממולא בפיסטוק טחון טרי ומצופה בסירופ סוכר מתקתק.", "price": "130₪ לקילו", "image": "images/baklawaPistachio.jpg" },
      { "name": "הריסה סולת", "description": "עוגת סולת מסורתית, רכה ונימוחה, ספוגה בסירופ סוכר עדין ומעוטרת בשקד מעל.", "price": "40₪ לקילו", "image": "images/baklawaPistachio.jpg" }
    ]
  };

  const menuItems = Object.entries(menuData).flatMap(([category, items]) => 
    items.map((item: any) => {
      const categoryIcon = categoryIcons[category] || Coffee;
      return {
        src: item.image ? `/images/${item.image.split('/').pop()}` : 
             category === "שתייה חמה" ? "/lovable-uploads/64c25164-f773-4859-b6f3-8992fabfdba9.png" :
             category === "שתייה קרה" ? "https://images.unsplash.com/photo-1573750215158-97a608a0986d" :
             category === "מתוקים" ? "https://images.unsplash.com/photo-1565299543923-37dd37887442" :
             category === "כנאפה" ? "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9" :
             category === "בקלאווה" ? "https://images.unsplash.com/photo-1514910367230-3be03a9a9528" : 
             "https://images.unsplash.com/photo-1573750215158-97a608a0986d",
        alt: item.name,
        title: item.name,
        category: category,
        price: item.price,
        sizes: item.prices,
        description: item.description,
        icon: categoryIcon
      };
    })
  );

  const categories = Object.keys(menuData);
  
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const categoryScrollRef = useRef<HTMLDivElement>(null);
  
  const handleCategoryClick = (category: string) => {
    console.log("Category clicked:", category, "Previously selected:", selectedCategory);
    setSelectedCategory(prevCategory => prevCategory === category ? null : category);
  };

  const handleAllCategoryClick = () => {
    console.log("All categories clicked");
    setSelectedCategory(null);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2
      }
    }
  };

  const renderMenuItems = () => {
    if (selectedCategory) {
      return (
        <AnimatePresence mode="sync">
          <motion.div 
            key={selectedCategory}
            initial="hidden"
            animate="show"
            exit="exit"
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6" 
            style={{ direction: "rtl" }}
          >
            {menuItems
              .filter(item => item.category === selectedCategory)
              .map((item, index) => (
                <motion.div 
                  variants={itemVariants}
                  key={`${item.category}-${item.title}-${index}`}
                  className="menu-item h-full"
                  layout
                >
                  <MenuItemCard {...item} index={0} />
                </motion.div>
              ))}
          </motion.div>
        </AnimatePresence>
      );
    } else {
      return (
        <div className="space-y-10">
          {categories.map((category) => (
            <div key={category} className="mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-2 mb-4"
              >
                {categoryIcons[category] && React.createElement(categoryIcons[category], { className: "h-7 w-7 md:h-6 md:w-6 text-primary" })}
                <h2 className="text-3xl sm:text-2xl md:text-3xl font-bold text-primary">{category}</h2>
              </motion.div>
              
              <motion.div 
                initial="hidden"
                animate="show"
                variants={containerVariants}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6" 
                style={{ direction: "rtl" }}
              >
                {menuItems
                  .filter(item => item.category === category)
                  .map((item, index) => (
                    <motion.div 
                      variants={itemVariants}
                      key={`${item.category}-${item.title}-${index}`}
                      className="menu-item h-full"
                    >
                      <MenuItemCard {...item} index={0} />
                    </motion.div>
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
            className="text-2xl md:text-2xl font-bold mb-4"
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
              <motion.div
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  type="button"
                  onClick={handleAllCategoryClick}
                  variant={selectedCategory === null ? "default" : "outline"}
                  className="whitespace-nowrap text-lg md:text-base mb-2"
                >
                  הכל
                </Button>
              </motion.div>
              
              {categories.map((category) => {
                const CategoryIcon = categoryIcons[category] || Coffee;
                
                return (
                  <motion.div
                    key={category}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      type="button"
                      onClick={() => handleCategoryClick(category)}
                      variant={selectedCategory === category ? "default" : "outline"}
                      className="whitespace-nowrap text-lg md:text-base mb-2 inline-flex items-center gap-1 sm:gap-2"
                    >
                      <CategoryIcon className="h-5 w-5 md:h-4 md:w-4" />
                      <span>{category}</span>
                    </Button>
                  </motion.div>
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
