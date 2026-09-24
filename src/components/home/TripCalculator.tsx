import React, { useState } from 'react';
import { MessageCircle, Calendar, ShieldCheck } from 'lucide-react';
import { FLEET_VEHICLES, BUSINESS_INFO } from '../../data/fleet';
import { SectionHeading } from '../ui/SectionHeading';
import { formatINR } from '../../lib/utils';

export const TripCalculator: React.FC = () => {
  const [selectedVehicleId, setSelectedVehicleId] = useState(FLEET_VEHICLES[1].id); // Swift Auto default
  const [days, setDays] = useState(1);

  const vehicle = FLEET_VEHICLES.find((v) => v.id === selectedVehicleId) || FLEET_VEHICLES[0];
  const totalHours = days * 24;
  const totalKm = days * 350;
  const totalPrice = vehicle.price * days;

  const handleWhatsAppBooking = () => {
    const text = vehicle.isPerKm
      ? `Hello WROOM CAR RENTAL! I want to book the *${vehicle.name}* (${vehicle.type}) for *${days} Day(s)*.\n• Billing Rate: *${vehicle.priceFormatted}*\n• Pickup: Surat\n\nPlease confirm availability and estimate based on my planned itinerary.`
      : `Hello WROOM CAR RENTAL! I calculated a self-drive trip estimate:\n\n• Car: *${vehicle.name}* (${vehicle.type})\n• Duration: *${days} Day(s) (${totalHours} Hours)*\n• Included Limit: *${totalKm} KM*\n• Estimated Base Fare: *${formatINR(totalPrice)}*\n\nPlease confirm availability and booking procedure for Surat pickup.`;
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const dayOptions = [1, 2, 3, 5, 7];

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Transparent Trip Estimator"
          title="CALCULATE YOUR RENTAL"
          subtitle="Estimate your self-drive fare based on 24-hour daily slots. Every day includes 350 KM free allowance."
        />

        <div className="max-w-5xl mx-auto bg-gradient-to-br from-slate-50 via-white to-red-50/20 rounded-3xl border border-slate-200 shadow-xl overflow-hidden p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Controls */}
            <div className="lg:col-span-7 space-y-6">
              {/* Select Car */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  1. Select Your Vehicle
                </label>
                <select
                  value={selectedVehicleId}
                  onChange={(e) => setSelectedVehicleId(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 font-bold text-sm focus:border-red-600 focus:ring-2 focus:ring-red-100 outline-none transition-all shadow-xs"
                >
                  {FLEET_VEHICLES.map((v) => (
                    <option key={v.id} value={v.id}>
                      {v.name} ({v.type}) — {v.priceFormatted} {v.isPerKm ? '(Distance based)' : '/ 24 Hours'}
                    </option>
                  ))}
                </select>
              </div>

              {/* Select Duration */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  2. Choose Rental Duration
                </label>
                <div className="grid grid-cols-5 gap-2">
                  {dayOptions.map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => setDays(d)}
                      className={`p-3 rounded-xl border text-center transition-all ${
                        days === d
                          ? 'bg-red-600 text-white border-red-600 shadow-md shadow-red-500/20'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <span className="block font-black text-base sm:text-lg leading-none">
                        {d}d
                      </span>
                      <span className="block text-[10px] uppercase font-bold mt-1 opacity-80">
                        {d * 24}h
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Info Badges */}
              <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-100/80 text-slate-700">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>350 KM Included per 24h</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-100/80 text-slate-700">
                  <Calendar className="w-4 h-4 text-red-600 shrink-0" />
                  <span>Surat Hub Pickup</span>
                </div>
              </div>
            </div>

            {/* Right Summary Card */}
            <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-6 sm:p-7 shadow-xl border border-slate-800 relative overflow-hidden flex flex-col justify-between">
              {/* Car Preview Header */}
              <div className="flex items-center gap-3.5 pb-4 border-b border-slate-800">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-16 h-12 rounded-lg object-cover bg-slate-800 shrink-0"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/hero-car.jpg';
                  }}
                />
                <div>
                  <h4 className="font-extrabold text-lg text-white leading-tight">
                    {vehicle.name}
                  </h4>
                  <span className="text-xs text-red-400 font-bold uppercase tracking-wider">
                    {vehicle.type} • 24h Slot
                  </span>
                </div>
              </div>

              {/* Calculations List */}
              <div className="py-4 space-y-2.5 text-xs text-slate-300">
                <div className="flex justify-between">
                  <span>Base Rate:</span>
                  <span className="font-bold text-white">
                    {vehicle.isPerKm ? `${vehicle.priceFormatted} (Distance-based)` : `${vehicle.priceFormatted} / 24h`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Selected Duration:</span>
                  <span className="font-bold text-white">{days} Day(s) ({totalHours} Hours)</span>
                </div>
                <div className="flex justify-between text-red-300 font-bold">
                  <span>Travel Allowance:</span>
                  <span>{vehicle.isPerKm ? 'Actual KM Driven' : `${totalKm} KM Total`}</span>
                </div>
                <div className="flex justify-between">
                  <span>Pickup Location:</span>
                  <span className="text-slate-400">Mota Varachha, Surat</span>
                </div>
              </div>

              {/* Total & Action */}
              <div className="pt-4 border-t border-slate-800">
                <div className="flex justify-between items-baseline mb-4">
                  <span className="text-xs uppercase font-extrabold tracking-wider text-slate-400">
                    {vehicle.isPerKm ? 'Fare Basis' : 'Estimated Total'}
                  </span>
                  <span className="text-3xl font-black text-red-500 tracking-tight">
                    {vehicle.isPerKm ? vehicle.priceFormatted : formatINR(totalPrice)}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleWhatsAppBooking}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-sm shadow-md transition-all active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Book This Estimate on WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
