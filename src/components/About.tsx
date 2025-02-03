const About = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">Our Story</h2>
          <p className="text-lg text-textColor/80 mb-8">
            For generations, we've been crafting authentic Middle Eastern desserts using traditional recipes 
            and techniques. Our Knafeh is made fresh daily with the finest ingredients, creating the perfect 
            balance of crispy, sweet, and cheesy goodness that melts in your mouth.
          </p>
          <div className="flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9" 
              alt="Fresh Knafeh" 
              className="rounded-lg shadow-xl w-full max-w-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;