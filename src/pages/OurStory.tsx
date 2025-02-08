
import { motion } from "framer-motion";

const OurStory = () => {
  return (
    <div className="min-h-screen bg-background dark:bg-primary-dark transition-colors duration-300">
      {/* Hero Section */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/lovable-uploads/1a40e50f-e703-41dd-8021-4e0a7ef99a21.png"
            alt="Traditional Knafeh setup"
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
            <h1 className="text-5xl md:text-7xl font-bold mb-4 font-heading">הסיפור שלנו</h1>
            <p className="text-xl md:text-2xl">מסורת של טעמים וניחוחות</p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background dark:from-primary-dark to-transparent" />
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-12"
        >
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
