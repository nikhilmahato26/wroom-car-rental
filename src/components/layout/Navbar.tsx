import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, CalendarCheck, MessageCircle, X, Menu, Car } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/fleet';
import { useBooking } from '../../context/BookingContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openBookingModal } = useBooking();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Cars', path: '/cars' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Rental Requirements', path: '/requirements' },
    { name: 'Why Choose Us', path: '/#why-us' },
    { name: 'FAQ', path: '/#faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
            : 'bg-white border-b border-slate-100 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center text-white shadow-md shadow-red-500/20 transform -skew-x-6 group-hover:scale-105 transition-transform">
              <Car className="w-5 h-5 transform skew-x-6" />
            </div>
            <div>
              <span className="block font-black text-xl sm:text-2xl tracking-tight text-slate-900 leading-none">
                WROOM <span className="text-red-600">CAR RENTAL</span>
              </span>
              <span className="block text-[10px] font-bold tracking-widest text-slate-500 uppercase mt-0.5">
                Self-Drive • Surat
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-bold transition-colors relative py-1 ${
                    isActive ? 'text-red-600' : 'text-slate-700 hover:text-red-600'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Header CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-100 hover:bg-red-50 hover:text-red-600 text-slate-800 text-sm font-bold transition-colors"
            >
              <Phone className="w-4 h-4 text-red-600" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>

            <button
              type="button"
              onClick={() => openBookingModal()}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-sm font-bold shadow-md shadow-red-600/25 hover:shadow-lg transition-all active:scale-95"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Book Now</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
            className="lg:hidden w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-800 hover:bg-red-50 hover:text-red-600 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div
          className={`absolute top-0 right-0 w-4/5 max-w-sm h-full bg-white shadow-2xl p-6 flex flex-col justify-between transition-transform duration-300 transform ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-6 border-b border-slate-100">
              <div>
                <span className="font-black text-xl text-slate-900">
                  WROOM <span className="text-red-600">CAR RENTAL</span>
                </span>
                <span className="block text-xs font-bold text-slate-500 uppercase">
                  Surat Self-Drive
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-red-50 hover:text-red-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Drawer Links */}
            <div className="py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-bold text-slate-800 hover:text-red-600 py-1 border-b border-slate-50 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-slate-400 text-xs">→</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Drawer Footer Actions */}
          <div className="pt-6 border-t border-slate-100 flex flex-col gap-3">
            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                openBookingModal();
              }}
              className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-red-600 text-white font-bold text-sm shadow-md"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Book A Car Now</span>
            </button>

            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent('Hello WROOM CAR RENTAL, I would like to inquire about self-drive car booking.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 text-white font-bold text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-100 text-slate-800 font-bold text-sm"
            >
              <Phone className="w-4 h-4 text-red-600" />
              <span>Call: {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
