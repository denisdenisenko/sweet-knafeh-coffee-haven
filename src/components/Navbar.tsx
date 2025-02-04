import { Link } from "react-router-dom";
import { useTheme } from "next-themes";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Gallery", path: "/gallery" },
    { name: "Location", path: "/location" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <h1 className="text-2xl font-heading font-bold text-gradient">Knafeh</h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="font-arabic text-foreground/80 hover:text-foreground px-3 py-2 rounded-md text-sm transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="ml-4"
              >
                {theme === "dark" ? "🌞" : "🌙"}
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="inline-flex items-center justify-center"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background/80 backdrop-blur-sm">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="font-arabic text-foreground/80 hover:text-foreground block px-3 py-2 rounded-md text-base"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setTheme(theme === "light" ? "dark" : "light");
                setIsOpen(false);
              }}
              className="w-full justify-start px-3"
            >
              {theme === "dark" ? "Light Mode 🌞" : "Dark Mode 🌙"}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;