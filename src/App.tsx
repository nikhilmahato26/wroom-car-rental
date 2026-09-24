import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { BookingProvider } from './context/BookingContext';
import { TopAnnouncement } from './components/layout/TopAnnouncement';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { FloatingActions } from './components/layout/FloatingActions';
import { BookingModal } from './components/booking/BookingModal';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { CarsPage } from './pages/CarsPage';
import { PricingPage } from './pages/PricingPage';
import { RequirementsPage } from './pages/RequirementsPage';
import { ContactPage } from './pages/ContactPage';

export const App: React.FC = () => {
  return (
    <HelmetProvider>
      <BookingProvider>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-red-500 selection:text-white pb-16 md:pb-0">
            <TopAnnouncement />
            <Navbar />
            <div className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/cars" element={<CarsPage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/requirements" element={<RequirementsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<HomePage />} />
              </Routes>
            </div>
            <Footer />
            <BookingModal />
            <FloatingActions />
          </div>
        </Router>
      </BookingProvider>
    </HelmetProvider>
  );
};

export default App;
