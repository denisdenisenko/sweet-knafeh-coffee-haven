
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "דוד כהן",
    text: "הקנאפה הכי טעימה שאכלתי! המקום מקסים והשירות מעולה",
    rating: 5
  },
  {
    name: "שרה לוי",
    text: "אווירה נעימה ומתוקים מדהימים. ממליצה בחום!",
    rating: 5
  },
  {
    name: "יוסי אברהם",
    text: "מקום קסום עם טעמים אותנטיים. חובה לכל חובב קינוחים",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-accent/20 to-transparent dark:from-accent-dark/30 dark:via-accent-dark/20" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">מה אומרים עלינו</h2>
          <p className="text-foreground/70 dark:text-foreground/60 text-lg">הלקוחות שלנו מספרים</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group h-full flex"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary-light/5 dark:to-primary-light/10 rounded-xl transform transition-transform duration-300 group-hover:scale-105" />
              <div className="relative glass-morphism p-8 rounded-xl flex flex-col justify-between w-full">
                <div>
                  <Quote className="w-10 h-10 text-primary dark:text-primary-light mb-4" />
                  <p className="text-foreground/80 dark:text-foreground/70 mb-6">{testimonial.text}</p>
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <span className="font-semibold text-primary dark:text-primary-light">{testimonial.name}</span>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
