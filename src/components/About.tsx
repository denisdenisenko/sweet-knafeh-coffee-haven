
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
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent dark:from-primary-dark/5" />
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5 bg-repeat" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center space-y-8 mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">
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
            className="relative group cursor-pointer"
          >
            {/* Card container with glass effect */}
            <div className="relative overflow-hidden rounded-xl glass-morphism p-4">
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Image wrapper */}
              <div className="relative rounded-lg overflow-hidden">
                <motion.img 
                  src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9" 
                  alt="קנאפה טרייה" 
                  className="w-full h-[500px] object-cover transform transition-transform duration-500 group-hover:scale-110"
                  style={{ objectPosition: "center" }}
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.7 }}
                />
              </div>
              
              {/* Text overlay */}
              <motion.div 
                className="absolute inset-0 flex items-end justify-center p-8 text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="text-center relative z-10">
                  <h3 className="text-2xl font-bold mb-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    הקנאפה המסורתית שלנו
                  </h3>
                  <p className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                    מתכון משפחתי מסורתי שעובר מדור לדור
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 dark:from-primary-light/20 dark:via-primary-light/10 dark:to-primary-light/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
