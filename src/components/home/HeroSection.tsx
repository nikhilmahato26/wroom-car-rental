import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, CalendarCheck, ArrowRight, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/fleet';
import { useBooking } from '../../context/BookingContext';

export const HeroSection: React.FC = () => {
  const { openBookingModal } = useBooking();

  return (
    <section className="relative bg-gradient-to-b from-white via-slate-50/60 to-white pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden border-b border-slate-100">
      {/* Decorative Light Red Ambient Radial Glow */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-red-500/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bold Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Top Hub & Verification Tag */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs mb-5"
            >
              <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
                Surat's Premier Self-Drive Car Rental
              </span>
              <span className="hidden sm:inline text-xs text-slate-400">•</span>
              <span className="hidden sm:inline text-xs font-semibold text-slate-600">
                Mota Varachha Hub
              </span>
            </motion.div>

            {/* Main Mandatory Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.08] uppercase"
            >
              RENT YOUR RIDE.{' '}
              <span className="text-red-600 relative inline-block">
                DRIVE YOUR WAY.
                <span className="absolute bottom-1 left-0 w-full h-2.5 bg-red-100 -z-10 rounded-sm" />
              </span>
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-5 text-lg sm:text-xl text-slate-600 font-medium leading-relaxed max-w-2xl"
            >
              Premium self-drive cars for city drives, weekend getaways, business trips and long journeys.
            </motion.p>

            {/* Highlight: 24-HOUR RENTAL • 350 KM LIMIT */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="mt-6 inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-slate-900 text-white shadow-lg border-l-4 border-red-600"
            >
              <Sparkles className="w-5 h-5 text-red-500 shrink-0" />
              <span className="font-extrabold text-sm sm:text-base tracking-wide uppercase">
                24-HOUR RENTAL <span className="text-red-400">•</span> 350 KM LIMIT
              </span>
            </motion.div>

            {/* CTA Group */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              {/* Primary CTA: BOOK A CAR */}
              <button
                type="button"
                onClick={() => openBookingModal()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-black text-base shadow-lg shadow-red-600/30 hover:shadow-xl transition-all active:scale-[0.98]"
              >
                <CalendarCheck className="w-5 h-5" />
                <span>BOOK A CAR</span>
              </button>

              {/* Secondary CTA: VIEW PRICES */}
              <a
                href="#fleet"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-900 font-bold text-base border border-slate-300 hover:border-red-300 shadow-xs transition-all"
              >
                <span>VIEW PRICES</span>
                <ArrowRight className="w-4 h-4 text-red-600" />
              </a>

              {/* Prominent WhatsApp Booking Button */}
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent('Hello WROOM CAR RENTAL! I want to book a self-drive car for 24-hour rental (350 KM limit). Please share available cars.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base shadow-md hover:shadow-lg transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Booking</span>
              </a>
            </motion.div>

            {/* Phone Display Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-7 pt-5 border-t border-slate-200/80 w-full flex flex-wrap items-center gap-6 text-sm text-slate-600"
            >
              <div className="flex items-center gap-2">
                <span className="text-slate-500 font-medium">Direct Call / Book:</span>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="font-black text-red-600 hover:text-red-700 text-base"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Instant Confirmation</span>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold">
                <ShieldCheck className="w-4 h-4 text-red-600" />
                <span>Zero Hidden Charges</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Premium Automotive Visual Card */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-3xl p-3 bg-white shadow-2xl border border-slate-200/90"
            >
              {/* Main Visual Image */}
              <div className="relative rounded-2xl overflow-hidden aspect-4/3 bg-slate-100">
                <img
                  src="/images/hero-car.jpg"
                  alt="WROOM Car Rental - Premium Self-Drive Highway Experience"
                  className="w-full h-full object-cover"
                />

                {/* Top Badge: Verified Fleet */}
                <div className="absolute top-4 right-4 bg-slate-900/85 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Sanitized & Inspected</span>
                </div>

                {/* Bottom Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-3.5 border border-slate-100 shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center font-black">
                      24h
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-slate-500 uppercase">
                        Standard Rental
                      </span>
                      <span className="block text-sm font-extrabold text-slate-900">
                        350 KM Limit Included
                      </span>
                    </div>
                  </div>

                  <span className="text-xs font-black text-red-600 bg-red-50 px-2.5 py-1 rounded-md">
                    From ₹3,000
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
