import { motion } from "framer-motion";
import { Award, Clock, Users } from "lucide-react";

const Feature = ({ icon: Icon, title, description }: { icon: any; title: string; description: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="flex flex-col items-center text-center space-y-4 p-6"
  >
    <div className="p-4 rounded-full bg-primary/10 dark:bg-primary-light/10">
      <Icon className="w-8 h-8 text-primary dark:text-primary-light" />
    </div>
    <h3 className="text-xl font-semibold text-primary dark:text-primary-light">{title}</h3>
    <p className="text-foreground/70 dark:text-foreground/60">{description}</p>
  </motion.div>
);

const About = () => {
  const features = [
    {
      icon: Award,
      title: "איכות מעולה",
      description: "שימוש במרכיבים הטובים ביותר לטעם אותנטי"
    },
    {
      icon: Clock,
      title: "טרי מדי יום",
      description: "מוכן טרי בכל בוקר לחוויה הטובה ביותר"
    },
    {
      icon: Users,
      title: "מתכון משפחתי",
      description: "עובר מדור לדור עם מומחיות של שנים"
    }
  ];

  return (
    <div className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent dark:from-primary-dark/5" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center space-y-8 mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-primary to-primary/80 dark:from-primary-light dark:to-primary-light/80 bg-clip-text text-transparent">
              הסיפור שלנו
            </h2>
            <p className="text-lg text-foreground/80 dark:text-foreground/70 leading-relaxed">
              במשך דורות, אנחנו מכינים קינוחים מזרחיים אותנטיים באמצעות מתכונים וטכניקות מסורתיות. 
              הקנאפה שלנו מוכנה טרייה מדי יום עם המרכיבים האיכותיים ביותר, יוצרת איזון מושלם 
              של מרקמים ומתיקות שנמסה בפה.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <Feature key={index} {...feature} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 dark:from-primary-light/20 dark:to-primary-light/5 rounded-xl transform transition-transform duration-300 group-hover:scale-105" />
            <img 
              src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9" 
              alt="קנאפה טרייה" 
              className="relative rounded-xl shadow-xl w-full max-w-3xl mx-auto transition-transform duration-300 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;