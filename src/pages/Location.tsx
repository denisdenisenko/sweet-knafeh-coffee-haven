
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Instagram, Facebook, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Location = () => {
  const openWaze = () => {
    window.open("https://waze.com/ul?ll=32.0853,34.7818&navigate=yes", "_blank");
  };

  const openInstagram = () => {
    window.open("https://instagram.com/your-handle", "_blank");
  };

  const openFacebook = () => {
    window.open("https://facebook.com/your-page", "_blank");
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/+972123456789", "_blank");
  };

  return (
    <div className="min-h-screen bg-background dark:bg-primary-dark transition-colors duration-300">
      {/* Hero Section */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/lovable-uploads/b9711b3b-bd2d-4f1d-9044-5f7084551b02.png"
            alt="Traditional Middle Eastern restaurant exterior"
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
            <h1 className="text-5xl md:text-7xl font-bold mb-4 font-heading">המיקום שלנו</h1>
            <p className="text-xl md:text-2xl">בואו לבקר אותנו</p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background dark:from-primary-dark to-transparent" />
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6 glass-morphism p-8 rounded-xl"
            >
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-foreground/80 dark:text-foreground/70">המיקום שלנו</h2>
                <p className="text-foreground/70 dark:text-foreground/60">
                  רחוב הרצל 123<br />
                  תל אביב<br />
                  ישראל
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-foreground/80 dark:text-foreground/70">שעות פתיחה</h2>
                <div className="space-y-2 text-foreground/70 dark:text-foreground/60">
                  <p>ראשון - חמישי: 08:00 - 21:00</p>
                  <p>שישי: 09:00 - 15:00</p>
                  <p>שבת: סגור</p>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-foreground/80 dark:text-foreground/70">צור קשר</h2>
                <p className="text-foreground/70 dark:text-foreground/60">
                  טלפון: 03-1234567<br />
                  אימייל: info@knafeh.co.il
                </p>
              </div>
              <div className="flex gap-4 pt-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={openInstagram}
                  className="hover:text-primary dark:hover:text-primary-light"
                >
                  <Instagram className="w-6 h-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={openFacebook}
                  className="hover:text-primary dark:hover:text-primary-light"
                >
                  <Facebook className="w-6 h-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={openWhatsApp}
                  className="hover:text-primary dark:hover:text-primary-light"
                >
                  <MessageCircle className="w-6 h-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={openWaze}
                  className="hover:text-primary dark:hover:text-primary-light"
                >
                  <MapPin className="w-6 h-6" />
                </Button>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="h-[400px] glass-morphism rounded-xl overflow-hidden"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.6897129667604!2d34.7818!3d32.0853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDA1JzA3LjEiTiAzNMKwNDYnNTQuNiJF!5e0!3m2!1sen!2sil!4v1635789245611!5m2!1sen!2sil"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
