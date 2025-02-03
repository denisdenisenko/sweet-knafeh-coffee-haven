import { Coffee } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center bg-primary/10">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618160702438-9b02ab6515c9')] bg-cover bg-center opacity-20" />
      <div className="container mx-auto px-4 z-10">
        <div className="text-center animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-bold text-secondary mb-6">
            Sweet Traditions
          </h1>
          <p className="text-xl md:text-2xl text-textColor/80 mb-8">
            Authentic Middle Eastern Knafeh & Coffee
          </p>
          <div className="flex items-center justify-center gap-4">
            <button className="bg-secondary text-white px-8 py-3 rounded-full hover:bg-secondary-light transition-colors">
              View Menu
            </button>
            <button className="flex items-center gap-2 bg-primary px-8 py-3 rounded-full hover:bg-primary-dark transition-colors">
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