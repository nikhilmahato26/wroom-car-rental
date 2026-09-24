import React from 'react';
import { Phone, MessageCircle, CalendarCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/fleet';
import { useBooking } from '../../context/BookingContext';

export const FloatingActions: React.FC = () => {
  const { openBookingModal } = useBooking();

  return (
    <>
      {/* Desktop Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent('Hello WROOM CAR RENTAL, I would like to book a self-drive car in Surat.')}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="hidden md:inline-flex fixed bottom-7 right-7 z-40 items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-sm shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all active:scale-95 group"
      >
        <MessageCircle className="w-5 h-5 fill-white text-emerald-500 group-hover:rotate-12 transition-transform" />
        <span>Book on WhatsApp</span>
      </a>

      {/* Desktop Floating Call Button */}
      <a
        href={`tel:${BUSINESS_INFO.phoneRaw}`}
        aria-label="Call WROOM CAR RENTAL"
        className="hidden md:inline-flex fixed bottom-7 left-7 z-40 items-center gap-2.5 px-4 py-3 rounded-full bg-slate-900 hover:bg-red-600 text-white font-extrabold text-sm shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all border border-slate-700/80 active:scale-95"
      >
        <Phone className="w-4 h-4 text-red-400" />
        <span>{BUSINESS_INFO.phone}</span>
      </a>

      {/* Mobile Sticky Bottom Conversion Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 flex items-center gap-2 shadow-lg">
        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-slate-100 text-slate-800 font-bold text-xs active:bg-slate-200"
        >
          <Phone className="w-3.5 h-3.5 text-red-600" />
          <span>Call</span>
        </a>

        <a
          href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent('Hello WROOM CAR RENTAL, I am inquiring about car rental in Surat.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-emerald-600 text-white font-bold text-xs active:bg-emerald-700"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>

        <button
          type="button"
          onClick={() => openBookingModal()}
          className="flex-[1.2] inline-flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-red-600 text-white font-bold text-xs shadow-md active:bg-red-700"
        >
          <CalendarCheck className="w-3.5 h-3.5" />
          <span>Book Now</span>
        </button>
      </div>
    </>
  );
};
