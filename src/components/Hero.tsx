import { Coffee } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Hero = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Only show theme toggle after mounting to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center bg-primary/10 dark:bg-primary-dark/30">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618160702438-9b02ab6515c9')] bg-cover bg-center opacity-20" />
      <div className="absolute top-4 right-4">
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="p-2 rounded-full bg-secondary/10 dark:bg-secondary-dark/30 hover:bg-secondary/20 dark:hover:bg-secondary-dark/50 transition-colors"
        >
          {theme === "dark" ? "🌞" : "🌙"}
        </button>
      </div>
      <div className="container mx-auto px-4 z-10">
        <div className="text-center animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-bold text-secondary dark:text-primary mb-6">
            حلويات عربية أصيلة
          </h1>
          <p className="text-xl md:text-2xl text-textColor/80 dark:text-textColor-dark mb-8">
            Authentic Middle Eastern Knafeh & Coffee
          </p>
          <div className="flex items-center justify-center gap-4">
            <button className="bg-secondary text-white px-8 py-3 rounded-full hover:bg-secondary/80 transition-colors dark:bg-secondary-dark dark:hover:bg-secondary-dark/80">
              View Menu
            </button>
            <button className="flex items-center gap-2 bg-primary px-8 py-3 rounded-full hover:bg-primary/80 transition-colors dark:bg-primary-light dark:text-textColor dark:hover:bg-primary-light/80">
              <Coffee className="w-5 h-5" />
              Order Coffee
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;