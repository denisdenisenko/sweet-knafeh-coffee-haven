import { CakeSlice } from "lucide-react";

const MenuItem = ({ name, description, price }: { name: string; description: string; price: string }) => (
  <div className="bg-white/50 dark:bg-secondary-dark/50 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/10 dark:border-primary-light/10">
    <h3 className="text-xl font-semibold text-primary dark:text-primary-light mb-2">{name}</h3>
    <p className="text-foreground/70 dark:text-foreground/60 mb-4 min-h-[60px]">{description}</p>
    <p className="text-primary-dark dark:text-primary-light font-bold">{price}</p>
  </div>
);

const Menu = () => {
  const menuItems = [
    {
      name: "Classic Knafeh",
      description: "Traditional cheese-based dessert with crispy kataifi, pistachios, and sweet syrup",
      price: "$12.99"
    },
    {
      name: "Chocolate Knafeh",
      description: "Our modern twist with rich chocolate filling and hazelnuts",
      price: "$14.99"
    },
    {
      name: "Arabic Coffee",
      description: "Traditional cardamom-spiced coffee served in small cups",
      price: "$3.99"
    },
    {
      name: "Turkish Coffee",
      description: "Rich and unfiltered coffee with optional cardamom flavor",
      price: "$4.99"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-accent/30 via-accent/20 to-transparent dark:from-accent-dark/30 dark:via-accent-dark/20 py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 mb-12">
          <CakeSlice className="w-8 h-8 text-primary dark:text-primary-light" />
          <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-primary-light">Our Menu</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {menuItems.map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;