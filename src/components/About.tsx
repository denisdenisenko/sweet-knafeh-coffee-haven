const About = () => {
  return (
    <div className="py-20 bg-gradient-to-br from-primary/5 to-transparent dark:from-primary-dark/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-primary to-primary/80 dark:from-primary-light dark:to-primary-light/80 bg-clip-text text-transparent mb-6">
            Our Story
          </h2>
          <p className="text-lg text-foreground/80 dark:text-foreground/70 leading-relaxed mb-8">
            For generations, we've been crafting authentic Middle Eastern desserts using traditional recipes 
            and techniques. Our Knafeh is made fresh daily with the finest ingredients, creating the perfect 
            balance of crispy, sweet, and cheesy goodness that melts in your mouth.
          </p>
          <div className="relative group">
            <img 
              src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9" 
              alt="Fresh Knafeh" 
              className="rounded-xl shadow-xl w-full max-w-2xl mx-auto transition-transform duration-300 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;