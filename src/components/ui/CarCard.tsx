import React from 'react';
import { motion } from 'framer-motion';
import { Users, Fuel, Gauge, MessageCircle, CalendarCheck, MapPin } from 'lucide-react';
import type { Vehicle } from '../../types';
import { buildDirectWhatsAppCarLink } from '../../lib/utils';
import { useBooking } from '../../context/BookingContext';

interface CarCardProps {
  vehicle: Vehicle;
}

export const CarCard: React.FC<CarCardProps> = ({ vehicle }) => {
  const { openBookingModal } = useBooking();

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -6 }}
      className="group bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-red-200 transition-all duration-300 flex flex-col overflow-hidden"
    >
      {/* Image Container with Badges */}
      <div className="relative w-full h-56 bg-gradient-to-b from-slate-50 to-white flex items-center justify-center overflow-hidden border-b border-slate-100">
        <span className={`absolute top-3.5 left-3.5 z-10 px-3 py-1 rounded-full text-xs font-bold border tracking-wide uppercase ${vehicle.badgeClass}`}>
          {vehicle.type}
        </span>

        <span className="absolute top-3.5 right-3.5 z-10 inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-900/80 text-white backdrop-blur-xs">
          <MapPin className="w-3 h-3 text-red-400" />
          Surat Self-Drive
        </span>

        <img
          src={vehicle.image}
          alt={`WROOM CAR RENTAL - ${vehicle.name}`}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/images/hero-car.jpg';
          }}
        />
      </div>

      {/* Body Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow">
        {/* Header */}
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight group-hover:text-red-600 transition-colors">
              {vehicle.name}
            </h3>
            <p className="text-xs font-semibold text-slate-500 mt-0.5">
              {vehicle.highlightBadge}
            </p>
          </div>
        </div>

        {/* Specs Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-4 pb-4 border-b border-slate-100 text-xs font-medium text-slate-600">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100">
            <Users className="w-3.5 h-3.5 text-slate-500" />
            {vehicle.seats}
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100">
            <Fuel className="w-3.5 h-3.5 text-slate-500" />
            {vehicle.fuel}
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100">
            <Gauge className="w-3.5 h-3.5 text-slate-500" />
            {vehicle.trans}
          </span>
        </div>

        {/* Prominent Mandatory 24-Hour & 350 KM Included Pricing Box */}
        <div className="bg-gradient-to-br from-red-50/60 to-white rounded-xl border border-red-200/80 p-3.5 mb-5 flex items-center justify-between">
          <div>
            <span className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
              {vehicle.isPerKm ? 'RATE PER KM' : '24 HOURS RENTAL'}
            </span>
            <span className="text-2xl font-black text-red-600 tracking-tight">
              {vehicle.priceFormatted}
            </span>
          </div>

          <div className="text-right">
            <span className="inline-block bg-red-600 text-white text-xs font-black px-2.5 py-1 rounded tracking-wide uppercase shadow-xs">
              {vehicle.isPerKm ? 'PER KM' : '350 KM'}
            </span>
            <span className="block text-[10px] font-extrabold text-slate-500 tracking-wider uppercase mt-1">
              {vehicle.isPerKm ? 'DISTANCE BILLED' : 'LIMIT INCLUDED'}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-auto grid grid-cols-2 gap-2.5">
          <button
            type="button"
            onClick={() => openBookingModal(vehicle.id)}
            className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-sm font-bold shadow-sm hover:shadow-md transition-all active:scale-[0.98]"
          >
            <CalendarCheck className="w-4 h-4" />
            Book Now
          </button>

          <a
            href={buildDirectWhatsAppCarLink(vehicle.name, vehicle.priceFormatted, vehicle.isPerKm)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold shadow-sm hover:shadow-md transition-all active:scale-[0.98]"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
        </div>
      </div>
    </motion.article>
  );
};
