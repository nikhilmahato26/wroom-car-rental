import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock, Zap, MapPin, Wrench, Sparkles, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { useBooking } from '../../context/BookingContext';

export const WhyChooseUs: React.FC = () => {
  const { openBookingModal } = useBooking();

  const features = [
    {
      icon: Sparkles,
      title: "100% Sanitized & Detailed Cars",
      description: "Every car undergoes a multi-point mechanical inspection and deep interior sanitization before every rental."
    },
    {
      icon: Clock,
      title: "Transparent 24h & 350 KM Policy",
      description: "No confusing hourly slots or tiny 150 KM caps. You receive full 24 hours of freedom with 350 KM included."
    },
    {
      icon: Zap,
      title: "Instant WhatsApp Booking",
      description: "Skip lengthy paperwork. Fast digital document approval on WhatsApp in under 5 minutes."
    },
    {
      icon: Wrench,
      title: "24/7 Roadside Assistance",
      description: "Travel with complete peace of mind across Gujarat with round-the-clock emergency support."
    },
    {
      icon: MapPin,
      title: "Convenient Mota Varachha Hub",
      description: "Easily accessible hub near Dukhiyano Darbar with flexible pickup and drop timings."
    },
    {
      icon: ShieldCheck,
      title: "Hassle-Free Deposit Refund",
      description: "Prompt inspection upon return with 100% security deposit refund credited via UPI within 24 hours."
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image with Floating Stats Card */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100"
            >
              <img
                src="/images/handover.jpg"
                alt="WROOM Car Rental Handover Experience Surat"
                className="w-full h-[460px] object-cover"
              />

              {/* Floating Stat Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-slate-900/90 backdrop-blur-md text-white p-5 rounded-2xl border-l-4 border-red-600 shadow-xl">
                <span className="text-2xl font-black text-red-500">10,000+</span>
                <span className="block text-xs font-bold uppercase tracking-wider text-slate-300 mt-0.5">
                  Happy Self-Drive Journeys Completed
                </span>
                <p className="text-[11px] text-slate-400 mt-2">
                  Serving Surat travelers, families, and corporate executives with top-tier reliability.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Key Highlights */}
          <div className="lg:col-span-7">
            <SectionHeading
              tag="The Wroom Advantage"
              title="WHY CHOOSE WROOM CAR RENTAL"
              subtitle="Built for drivers who demand immaculate cars, zero hidden fees, and lightning-fast customer service."
              centered={false}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              {features.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="w-11 h-11 rounded-xl bg-red-50 border border-red-100 text-red-600 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-base text-slate-900 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-10 pt-6 border-t border-slate-100 flex items-center gap-4">
              <button
                type="button"
                onClick={() => openBookingModal()}
                className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-black text-sm shadow-md transition-all"
              >
                Reserve Your Car Now
              </button>

              <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Instant Surat Confirmation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
