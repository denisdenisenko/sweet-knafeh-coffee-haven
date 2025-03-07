
import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
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
    <footer className="bg-primary-foreground/5 pt-10 pb-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-right">
            <h3 className="text-xl font-bold mb-3 text-foreground/90">ניווט מהיר</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-foreground/70 hover:text-primary transition-colors">דף הבית</Link></li>
              <li><Link to="/menu" className="text-foreground/70 hover:text-primary transition-colors">תפריט</Link></li>
              <li><Link to="/location" className="text-foreground/70 hover:text-primary transition-colors">המיקום שלנו</Link></li>
              <li><Link to="/our-story" className="text-foreground/70 hover:text-primary transition-colors">הסיפור שלנו</Link></li>
            </ul>
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-bold mb-3 text-foreground/90">שעות פתיחה</h3>
            <ul className="space-y-2 text-foreground/70">
              <li>ראשון - שבת: 10:00 - 22:00</li>
              <li>שלישי: סגור</li>
            </ul>
          </div>
          
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-3 text-foreground/90">צור קשר</h3>
            <p className="text-foreground/70 mb-3">
              אבא חושי 352<br />
              עיספיא, 3009000<br />
              ישראל<br />
              טלפון: 04-886-4323
            </p>
            <div className="flex justify-center md:justify-start gap-4 mt-3">
              <button 
                onClick={openInstagram}
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram />
              </button>
              <button 
                onClick={openFacebook}
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook />
              </button>
              <button 
                onClick={openWhatsApp}
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle />
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-6 text-center text-foreground/60 text-sm">
          <p>© {currentYear} כנאפה בית הקפה. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
