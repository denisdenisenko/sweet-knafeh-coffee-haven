import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Index from "./pages/Index";
import Menu from "./pages/Menu";
import Location from "./pages/Location";
import OurStory from "./pages/OurStory";
import NotFound from "./pages/NotFound";
import LoadingScreen from "./components/LoadingScreen";
import BookPageAnimation from "./components/BookPageAnimation";

const queryClient = new QueryClient();

// Component to handle AnimatePresence with routes
const AnimatedRoutes = () => {
  const location = useLocation();
  const [isPageRefresh, setIsPageRefresh] = useState(true);

  useEffect(() => {
    // Set isPageRefresh to false after first render
    setIsPageRefresh(false);
  }, []);
  
  // If page was refreshed and we're not on the home page, redirect to home
  if (isPageRefresh && location.pathname !== "/") {
    return <Navigate to="/" replace />;
  }
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/location" element={<Location />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showBookAnimation, setShowBookAnimation] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
      
      // Keep the book animation visible for a bit after loading is complete
      setTimeout(() => {
        setShowBookAnimation(false);
      }, 3500);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            {isLoading && <LoadingScreen />}
            {showBookAnimation && <BookPageAnimation />}
            <div className="min-h-screen bg-background">
              <Navbar />
              <main className="pt-16">
                <AnimatedRoutes />
              </main>
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
