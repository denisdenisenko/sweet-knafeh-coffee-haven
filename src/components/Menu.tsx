
import { CakeSlice, Coffee, Star, Info } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
  longDescription: string;
}

const menuItems: MenuItem[] = [
  {
    name: "קנאפה קלאסית",
    description: "קינוח גבינה מסורתי עם שערות קדאיף פריכות, פיסטוקים וסירופ מתוק",
    price: "₪48",
    image: "/placeholder.svg",
    longDescription: "קנאפה קלאסית היא קינוח ערבי מסורתי המורכב משכבות של שערות קדאיף פריכות, במילוי גבינה רכה ומתוקה. הקינוח מוגש חם ומעוטר בפיסטוקים קצוצים וסירופ סוכר ארומטי. זהו שילוב מושלם של מרקמים וטעמים - פריך מבחוץ ורך ועשיר מבפנים."
  },
  {
    name: "קנאפה שוקולד",
    description: "הטוויסט המודרני שלנו עם מילוי שוקולד עשיר ואגוזי לוז",
    price: "₪52",
    image: "/placeholder.svg",
    longDescription: "קנאפה שוקולד היא גרסה מודרנית וייחודית לקינוח המסורתי. במקום גבינה, אנו משתמשים במילוי שוקולד בלגי איכותי ואגוזי לוז טחונים. השילוב של שערות הקדאיף הפריכות עם השוקולד החם והאגוזים יוצר חוויה קולינרית בלתי נשכחת."
  },
  {
    name: "קפה ערבי",
    description: "קפה מסורתי מתובל בהל, מוגש בכוסות קטנות",
    price: "₪15",
    image: "/placeholder.svg",
    longDescription: "קפה ערבי מסורתי מוכן בשיטה העתיקה, כאשר הקפה נטחן דק במיוחד ומתובל בהל ארומטי. הקפה מוגש בכוסות קטנות מסורתיות ומלווה בכוס מים קרים. זוהי דרך מושלמת לסיים ארוחה או פשוט ליהנות מרגע של שקט."
  },
  {
    name: "קפה טורקי",
    description: "קפה עשיר ולא מסונן עם אפשרות לטעם הל",
    price: "₪18",
    image: "/placeholder.svg",
    longDescription: "קפה טורקי מסורתי מוכן בפינג'אן נחושת על חול חם, מה שמעניק לו טעם עשיר ומיוחד. ניתן להוסיף הל לפי בקשה. הקפה מוגש לא מסונן בכוס מסורתית, עם קצף עשיר למעלה. מתאים במיוחד לחובבי קפה חזק ואותנטי."
  }
];

const MenuItem = ({ item, index }: { item: MenuItem; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group relative"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary-light/5 dark:to-primary-light/10 rounded-xl transform transition-transform duration-300 group-hover:scale-105" />
    <div className="relative bg-white/50 dark:bg-secondary-dark/50 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-primary/10 dark:border-primary-light/10 transform transition-all duration-300 group-hover:translate-y-[-5px]">
      <div className="absolute top-4 right-4">
        {index === 0 && (
          <div className="flex items-center gap-1 text-yellow-500">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm font-semibold">פופולרי</span>
          </div>
        )}
      </div>
      <h3 className="text-2xl font-semibold text-primary dark:text-primary-light mb-3">{item.name}</h3>
      <p className="text-foreground/70 dark:text-foreground/60 mb-4 min-h-[60px]">{item.description}</p>
      <div className="flex items-center justify-between">
        <p className="text-primary-dark dark:text-primary-light font-bold text-xl">{item.price}</p>
        <div className="flex gap-2">
          <Dialog>
            <DialogTrigger>
              <div className={cn(
                "p-2 rounded-full",
                "bg-primary/10 dark:bg-primary-light/10",
                "hover:bg-primary/20 dark:hover:bg-primary-light/20",
                "transition-colors duration-300"
              )}>
                <Info className="w-5 h-5 text-primary dark:text-primary-light" />
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold mb-4">{item.name}</DialogTitle>
                <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <DialogDescription className="text-lg">
                  {item.longDescription}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4">
                <p className="text-xl font-bold text-primary dark:text-primary-light">{item.price}</p>
              </div>
            </DialogContent>
          </Dialog>
          <div className={cn(
            "p-2 rounded-full",
            "bg-primary/10 dark:bg-primary-light/10",
            "group-hover:bg-primary/20 dark:group-hover:bg-primary-light/20",
            "transition-colors duration-300"
          )}>
            {item.name.toLowerCase().includes('קפה') ? (
              <Coffee className="w-5 h-5 text-primary dark:text-primary-light" />
            ) : (
              <CakeSlice className="w-5 h-5 text-primary dark:text-primary-light" />
            )}
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const Menu = () => {
  return (
    <div id="menu-section" className="relative py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-accent/20 to-transparent dark:from-accent-dark/30 dark:via-accent-dark/20" />
      <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat opacity-5" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mb-16"
        >
          <CakeSlice className="w-10 h-10 text-primary dark:text-primary-light" />
          <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-primary-light">התפריט שלנו</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {menuItems.map((item, index) => (
            <MenuItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
