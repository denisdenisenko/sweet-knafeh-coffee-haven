
import { Link } from "react-router-dom";
import { useTheme } from "next-themes";
import { Menu, Utensils } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: "בית", path: "/" },
    { name: "תפריט", path: "/gallery" },
    { name: "מיקום", path: "/location" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Hidden on Mobile */}
          <Link to="/" className="hidden md:flex flex-shrink-0">
            <h1 className="text-2xl font-heading font-bold text-gradient">קנאפה</h1>
          </Link>

          {/* Mobile layout */}
          <div className="flex items-center justify-between w-full md:hidden">
            {/* Menu Button (now on the left) */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="inline-flex items-center justify-center"
            >
              <Menu className="h-6 w-6" />
            </Button>

            {/* Center Logo */}
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-2xl font-heading font-bold text-gradient">קנאפה</h1>
            </Link>

            {/* Utensils Icon (now on the right) */}
            <div className="flex items-center">
              <Utensils className="h-6 w-6 text-foreground/80" />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="font-hebrew text-foreground/80 hover:text-foreground px-3 py-2 rounded-md text-sm transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="mr-4"
              >
                {theme === "dark" ? "🌞" : "🌙"}
              </Button>
            </div>
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
                className="font-hebrew text-foreground/80 hover:text-foreground block px-3 py-2 rounded-md text-base"
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
              {theme === "dark" ? "מצב יום 🌞" : "מצב לילה 🌙"}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
