
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Index from "./pages/Index";
import Menu from "./pages/Menu";
import Location from "./pages/Location";
import OurStory from "./pages/OurStory";
import NotFound from "./pages/NotFound";
import LoadingScreen from "./components/LoadingScreen";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
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
            <div className="min-h-screen bg-background">
              <Navbar />
              <main className="pt-16">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/menu" element={<Menu />} />
                  <Route path="/location" element={<Location />} />
                  <Route path="/our-story" element={<OurStory />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
