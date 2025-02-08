
import { motion } from "framer-motion";

const OurStory = () => {
  return (
    <div className="min-h-screen bg-background dark:bg-primary-dark transition-colors duration-300 py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-12"
        >
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-8">
              הסיפור שלנו
            </h1>
            <p className="text-lg text-foreground/70 dark:text-foreground/60 leading-relaxed">
              מסע הטעמים שלנו התחיל לפני שנים רבות, כשסבא שלנו החל להכין את הקנאפה המסורתית 
              בביתו הקטן בירושלים. המתכון המשפחתי הועבר מדור לדור, וכיום אנחנו ממשיכים 
              את המסורת עם אותה תשוקה ומסירות.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold text-primary dark:text-primary-light">
                המסורת שלנו
              </h2>
              <p className="text-foreground/70 dark:text-foreground/60">
                אנחנו מאמינים שהסוד לקנאפה מושלמת טמון באיכות המרכיבים ובתשומת הלב לפרטים הקטנים. 
                כל בוקר אנחנו מתחילים מחדש, עם חומרי גלם טריים ואהבה אמיתית למלאכה.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold text-primary dark:text-primary-light">
                החזון שלנו
              </h2>
              <p className="text-foreground/70 dark:text-foreground/60">
                החזון שלנו הוא להמשיך ולשמר את המסורת תוך שילוב חדשנות וטכניקות מודרניות, 
                כדי להביא לכם את חווית הקנאפה הטובה ביותר.
              </p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative rounded-xl overflow-hidden aspect-video"
          >
            <img 
              src="https://images.unsplash.com/photo-1628194647768-906d7601ce9a"
              alt="תהליך הכנת הקנאפה"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default OurStory;
