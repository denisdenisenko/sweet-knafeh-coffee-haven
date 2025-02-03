import { CakeSlice } from "lucide-react";

const MenuItem = ({ name, description, price }: { name: string; description: string; price: string }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <h3 className="text-xl font-semibold text-secondary mb-2">{name}</h3>
    <p className="text-textColor/70 mb-4">{description}</p>
    <p className="text-primary-dark font-bold">{price}</p>
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
    <div className="bg-accent/30 py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 mb-12">
          <CakeSlice className="w-8 h-8 text-secondary" />
          <h2 className="text-3xl md:text-4xl font-bold text-secondary">Our Menu</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuItems.map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;