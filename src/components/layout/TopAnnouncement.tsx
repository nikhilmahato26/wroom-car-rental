import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/fleet';

export const TopAnnouncement: React.FC = () => {
  return (
    <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800 hidden sm:block">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="bg-red-600 text-white font-extrabold text-[10px] px-2 py-0.5 rounded uppercase tracking-wider">
            Surat Self-Drive
          </span>
          <span className="font-semibold text-slate-300">
            24-Hour Rental • 350 KM Included with every car!
          </span>
        </div>

        <div className="flex items-center gap-6 text-slate-300">
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-red-500" />
            <span className="font-bold text-white">{BUSINESS_INFO.phone}</span>
          </a>

          <a
            href={`mailto:${BUSINESS_INFO.email}`}
            className="flex items-center gap-1.5 hover:text-white transition-colors hidden md:flex"
          >
            <Mail className="w-3.5 h-3.5 text-red-500" />
            <span>{BUSINESS_INFO.email}</span>
          </a>

          <span className="flex items-center gap-1.5 text-slate-400 hidden lg:flex">
            <MapPin className="w-3.5 h-3.5 text-red-500" />
            <span>Mota Varachha, Surat</span>
          </span>
        </div>
      </div>
    </div>
  );
};
