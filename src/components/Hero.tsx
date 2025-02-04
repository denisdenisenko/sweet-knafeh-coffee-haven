import { Coffee } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-primary/5 via-primary/10 to-transparent dark:from-primary-dark/10 dark:via-primary-dark/5">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618160702438-9b02ab6515c9')] bg-cover bg-center opacity-10 dark:opacity-20" />
      <div className="relative z-10 text-center space-y-8 p-4 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-7xl font-heading font-bold bg-gradient-to-br from-primary via-primary/80 to-primary/60 dark:from-primary-light dark:to-primary-light/60 bg-clip-text text-transparent">
          Knafeh Paradise
        </h1>
        <p className="text-xl md:text-2xl font-arabic text-foreground/80 dark:text-foreground/70">
          Experience the Art of Middle Eastern Desserts
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Button
            size="lg"
            className="bg-primary text-white hover:bg-primary/90 dark:bg-primary-light dark:text-primary-dark dark:hover:bg-primary-light/90"
          >
            Explore Menu
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary hover:bg-primary/5 dark:border-primary-light dark:hover:bg-primary-light/5"
          >
            <Coffee className="w-5 h-5 mr-2" />
            Order Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;