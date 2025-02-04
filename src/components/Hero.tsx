import { Coffee } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center bg-primary/10 dark:bg-primary-dark/30">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618160702438-9b02ab6515c9')] bg-cover bg-center opacity-20" />
      <div className="relative z-10 text-center space-y-8 p-4">
        <h1 className="text-5xl md:text-7xl font-heading font-bold text-gradient">
          Knafeh Paradise
        </h1>
        <p className="text-xl md:text-2xl font-arabic text-foreground/80">
          Authentic Middle Eastern Knafeh & Coffee
        </p>
        <div className="flex items-center justify-center gap-4">
          <Button
            size="lg"
            className="bg-secondary text-white hover:bg-secondary/80 dark:bg-secondary-dark dark:hover:bg-secondary-dark/80"
          >
            View Menu
          </Button>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/80 dark:bg-primary-light dark:text-textColor dark:hover:bg-primary-light/80"
          >
            <Coffee className="w-5 h-5" />
            Order Coffee
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;