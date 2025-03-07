
import { Link } from "react-router-dom";
import { useTheme } from "next-themes";
import { Menu as MenuIcon, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const navRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = (e?: React.MouseEvent) => {
    // If provided, prevent default behavior
    if (e) {
      e.preventDefault();
    }
    setIsOpen(prevState => !prevState);
  };

  // Handle clicks outside the navbar to close the menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      // Check if we clicked outside both the navbar and the toggle button
      const targetNode = event.target as Node;
      
      if (
        isOpen && 
        navRef.current && 
        !navRef.current.contains(targetNode) &&
        buttonRef.current && 
        !buttonRef.current.contains(targetNode)
      ) {
        setIsOpen(false);
      }
    };

    // Add both mouse and touch event listeners
    document.addEventListener("mousedown", handleClickOutside, { passive: false });
    document.addEventListener("touchstart", handleClickOutside, { passive: false });
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  const menuItems = [
    { name: "בית", path: "/" },
    { name: "תפריט", path: "/menu" },
    { name: "הסיפור שלנו", path: "/our-story" },
    { name: "מיקום", path: "/location" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-sm border-b" ref={navRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Hidden on Mobile */}
          <Link to="/" className="hidden md:flex flex-shrink-0">
            <motion.img
              initial={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
              src="/images/knafeh-logo.png"
              alt="House of Knafeh"
              className="h-12 w-12"
            />
          </Link>

          {/* Mobile layout */}
          <div className="flex items-center justify-between w-full md:hidden">
            {/* Menu Button with improved styling and touch behavior */}
            <Button
              ref={buttonRef}
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="inline-flex items-center justify-center hover:bg-accent/50 active:bg-accent/70 touch-manipulation"
              aria-label="Toggle menu"
              data-test-id="mobile-menu-toggle"
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <MenuIcon className="h-5 w-5" />
              )}
            </Button>

            {/* Right side logo */}
            <motion.img
              initial={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
              src="/images/knafeh-logo.png"
              alt="House of Knafeh"
              className="h-8 w-8"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="font-hebrew text-foreground/80 hover:text-foreground px-3 py-2 rounded-md text-base font-medium transition-colors"
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
                className="font-hebrew text-foreground/80 hover:text-foreground block px-3 py-2 rounded-md text-lg font-medium"
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
              className="w-full justify-start px-3 text-base"
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
