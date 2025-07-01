// src/App.tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import LetsTalk from "./pages/LetsTalk";
import InvestorDeck from "./pages/InvestorDeck";
import NotFound from "./pages/NotFound";
import ClientPage from "./pages/Client";
import './assets/fonts/fonts.css'
import ScrollToTop from "./hooks/scrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { HeaderProvider } from '@/context/HeaderContext'

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <HeaderProvider> {/* Wrap entire app with HeaderProvider */}
          <ScrollToTop />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Index />
                  <Footer />
                </>
              }
            />
            <Route path="/lets-talk" element={<LetsTalk />} />
            <Route path="/investor-deck" element={<InvestorDeck />} />
            <Route path="/client/:name" element={<ClientPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HeaderProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;