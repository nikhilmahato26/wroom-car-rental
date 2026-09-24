import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';
import { FLEET_VEHICLES, BUSINESS_INFO } from '../data/fleet';
import { useBooking } from '../context/BookingContext';
import { buildDirectWhatsAppCarLink } from '../lib/utils';

export const PricingPage: React.FC = () => {
  const { openBookingModal } = useBooking();

  return (
    <>
      <Helmet>
        <title>Transparent 24H Car Rental Pricing & 350 KM Limit | {BUSINESS_INFO.name} Surat</title>
        <meta
          name="description"
          content="View our 100% transparent self-drive car rental price list in Surat. All rentals are for 24 HOURS and include a 350 KM LIMIT. Rates start at ₹3,000/24h."
        />
      </Helmet>

      <div className="py-12 bg-white min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-red-50 text-red-600 border border-red-200 mb-3">
              <ShieldCheck className="w-4 h-4 text-red-600" />
              100% Transparent Rates
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              RENTAL PRICING GUIDE
            </h1>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Every vehicle listed below is charged on a 24-hour cycle and includes 350 KM free allowance per day.
            </p>
          </div>

          {/* Pricing Policy Hero Card */}
          <div className="mb-12 bg-gradient-to-br from-slate-900 via-slate-900 to-red-950 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-800">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
              <div className="md:border-r md:border-slate-800 md:pr-6">
                <span className="text-xs font-extrabold uppercase tracking-widest text-red-400">
                  Fixed Rental Block
                </span>
                <h3 className="text-3xl font-black text-white mt-1">24 HOURS</h3>
                <p className="text-xs text-slate-400 mt-2">
                  Complete 24-hour rental window from your chosen pickup time. No early cut-offs.
                </p>
              </div>

              <div className="md:border-r md:border-slate-800 md:pr-6">
                <span className="text-xs font-extrabold uppercase tracking-widest text-red-400">
                  Daily Included Drive
                </span>
                <h3 className="text-3xl font-black text-white mt-1">350 KM FREE</h3>
                <p className="text-xs text-slate-400 mt-2">
                  Drive freely within 350 kilometers per 24 hours. Multi-day rentals accumulate (e.g. 2 days = 700 KM).
                </p>
              </div>

              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-red-400">
                  Refundable Security
                </span>
                <h3 className="text-3xl font-black text-white mt-1">100% REFUND</h3>
                <p className="text-xs text-slate-400 mt-2">
                  Prompt digital refund credited within 24 hours of safe vehicle return.
                </p>
              </div>
            </div>
          </div>

          {/* Complete Pricing Table */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden mb-12">
            <div className="p-5 sm:p-6 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h3 className="text-xl font-black text-slate-900">
                  Official Vehicle Price List
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Valid for Surat self-drive bookings
                </p>
              </div>

              <span className="text-xs font-bold text-red-600 bg-red-50 border border-red-200 px-3 py-1 rounded-full uppercase">
                350 KM Limit Included in all rates
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-100 text-slate-700 font-extrabold uppercase text-[11px] tracking-wider border-b border-slate-200">
                    <th className="py-3.5 px-6">Vehicle</th>
                    <th className="py-3.5 px-6">Category / Fuel</th>
                    <th className="py-3.5 px-6">Duration</th>
                    <th className="py-3.5 px-6">Included Limit</th>
                    <th className="py-3.5 px-6 text-red-600">24-Hour Rate</th>
                    <th className="py-3.5 px-6 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {FLEET_VEHICLES.map((car) => (
                    <tr key={car.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <img
                            src={car.image}
                            alt={car.name}
                            className="w-12 h-9 rounded object-cover bg-slate-100 shrink-0"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = '/images/hero-car.jpg';
                            }}
                          />
                          <div>
                            <span className="font-extrabold text-slate-900 block">
                              {car.name}
                            </span>
                            <span className="text-[11px] text-slate-500">
                              {car.seats}
                            </span>
                          </div>
                        </div>
                      </td>

                      <td className="py-4 px-6">
                        <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-bold border ${car.badgeClass}`}>
                          {car.type}
                        </span>
                      </td>

                      <td className="py-4 px-6 font-semibold text-slate-700">
                        24 Hours
                      </td>

                      <td className="py-4 px-6">
                        <span className="font-black text-slate-900">350 KM</span>
                      </td>

                      <td className="py-4 px-6">
                        <span className="font-black text-lg text-red-600">
                          {car.priceFormatted}
                        </span>
                      </td>

                      <td className="py-4 px-6 text-center">
                        <div className="inline-flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => openBookingModal(car.id)}
                            className="px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-bold shadow-xs transition-colors"
                          >
                            Book
                          </button>
                          <a
                            href={buildDirectWhatsAppCarLink(car.name, car.priceFormatted)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-xs transition-colors"
                          >
                            WhatsApp
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pricing FAQ Card */}
          <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200">
            <h4 className="font-black text-lg text-slate-900 mb-4">
              Pricing Terms & Clear Guidelines
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <span><strong>Accumulated KM Allowance:</strong> For a 3-day rental, you receive 3 × 350 = 1,050 KM total allowance.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <span><strong>Excess KM Charges:</strong> Extra kilometers beyond the 350 KM/day threshold are charged at ₹9 to ₹15 per KM depending on vehicle category.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <span><strong>Fuel Policy:</strong> Vehicles are delivered on same-to-same fuel basis. You return with identical fuel levels.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <span><strong>Tolls & Fastag:</strong> Highway tolls and state taxes are payable directly by the renter.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
