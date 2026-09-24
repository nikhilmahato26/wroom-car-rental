import React from 'react';
import { Clock, Gauge, KeyRound, MapPin } from 'lucide-react';

export const QuickInfoBar: React.FC = () => {
  const items = [
    {
      icon: Clock,
      title: "24 HOURS",
      subtitle: "Rental Duration",
      detail: "Flexible 24-hr blocks"
    },
    {
      icon: Gauge,
      title: "350 KM",
      subtitle: "Included Limit",
      detail: "Generous daily drive"
    },
    {
      icon: KeyRound,
      title: "SELF DRIVE",
      subtitle: "Drive Yourself",
      detail: "Total privacy & freedom"
    },
    {
      icon: MapPin,
      title: "SURAT",
      subtitle: "Mota Varachha",
      detail: "Near Dukhiyano Darbar"
    }
  ];

  return (
    <section className="bg-white border-b border-slate-200 py-6 relative z-20 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`flex items-center gap-4 ${
                  idx !== items.length - 1 ? 'lg:border-r lg:border-slate-200 pr-4' : ''
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-200/80 flex items-center justify-center text-red-600 shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-none">
                    {item.title}
                  </h3>
                  <p className="text-xs font-bold text-slate-700 uppercase tracking-wide mt-1">
                    {item.subtitle}
                  </p>
                  <span className="text-[11px] text-slate-400 font-medium hidden sm:block">
                    {item.detail}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
