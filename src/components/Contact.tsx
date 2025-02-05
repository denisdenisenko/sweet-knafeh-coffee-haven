import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "./ui/button";

const ContactInfo = ({ icon: Icon, title, content }: { icon: any; title: string; content: string }) => (
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
    <p className="text-foreground/70 dark:text-foreground/60">{content}</p>
  </motion.div>
);

const Contact = () => {
  return (
    <section className="py-20 relative overflow-hidden" id="contact">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-accent/20 to-transparent dark:from-accent-dark/30 dark:via-accent-dark/20" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">צרו קשר</h2>
          <p className="text-foreground/70 dark:text-foreground/60 text-lg">נשמח לענות על כל שאלה</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
          <ContactInfo 
            icon={Phone}
            title="טלפון"
            content="054-1234567"
          />
          <ContactInfo 
            icon={Mail}
            title="אימייל"
            content="info@knafeh.co.il"
          />
          <ContactInfo 
            icon={MapPin}
            title="כתובת"
            content="רחוב הרצל 1, תל אביב"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-primary text-white hover:bg-primary/90 dark:bg-primary-light dark:text-primary-dark dark:hover:bg-primary-light/90"
          >
            שלחו הודעה
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;