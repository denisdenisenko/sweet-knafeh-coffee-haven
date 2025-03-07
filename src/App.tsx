
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Menu from "./pages/Menu";
import Location from "./pages/Location";
import OurStory from "./pages/OurStory";
import NotFound from "./pages/NotFound";
import LoadingScreen from "./components/LoadingScreen";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  const [isPageRefresh, setIsPageRefresh] = useState(true);
  const isMenuPage = location.pathname === "/menu";

  useEffect(() => {
    setIsPageRefresh(false);
  }, []);
  
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
      {isMenuPage && <Footer />}
    </AnimatePresence>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

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
            <div className="min-h-screen bg-background flex flex-col">
              <Navbar />
              <main className="pt-16 flex-grow">
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
