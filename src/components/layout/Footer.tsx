import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Car, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/fleet';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Brand & Address */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center text-white shadow-md shadow-red-500/20 transform -skew-x-6">
                <Car className="w-5 h-5 transform skew-x-6" />
              </div>
              <div>
                <span className="block font-black text-2xl tracking-tight text-white leading-none">
                  WROOM <span className="text-red-600">CAR RENTAL</span>
                </span>
                <span className="block text-[10px] font-bold tracking-widest text-slate-500 uppercase mt-0.5">
                  Self-Drive Cars in Surat
                </span>
              </div>
            </Link>

            <p className="mt-4 text-sm text-slate-400 leading-relaxed max-w-sm">
              Surat's trusted self-drive car rental company. Choose from our well-maintained fleet of hatchbacks, CNG sedans, family 7-seaters, and luxury SUVs.
            </p>

            {/* Pricing Highlight Pill */}
            <div className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-red-950/60 border border-red-900 text-red-400 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-red-500" />
              <span>24-Hour Rental • 350 KM Included</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div>
            <h4 className="text-white font-extrabold text-sm uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-red-500" /> Home
                </Link>
              </li>
              <li>
                <Link to="/cars" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-red-500" /> Our Fleet
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-red-500" /> 24H Pricing
                </Link>
              </li>
              <li>
                <Link to="/requirements" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-red-500" /> Rental Requirements
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-red-500" /> Contact Surat Hub
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Cars */}
          <div>
            <h4 className="text-white font-extrabold text-sm uppercase tracking-wider mb-4">
              Top Fleet
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="flex justify-between border-b border-slate-900 pb-1.5">
                <span className="text-slate-300">Maruti Swift Auto</span>
                <span className="text-red-400 font-bold">₹3,500/24h</span>
              </li>
              <li className="flex justify-between border-b border-slate-900 pb-1.5">
                <span className="text-slate-300">Ertiga CNG 7-Seater</span>
                <span className="text-red-400 font-bold">₹4,000/24h</span>
              </li>
              <li className="flex justify-between border-b border-slate-900 pb-1.5">
                <span className="text-slate-300">Kia Seltos SUV</span>
                <span className="text-red-400 font-bold">₹6,000/24h</span>
              </li>
              <li className="flex justify-between border-b border-slate-900 pb-1.5">
                <span className="text-slate-300">Virtus GT Turbo</span>
                <span className="text-red-400 font-bold">₹6,500/24h</span>
              </li>
              <li className="flex justify-between border-b border-slate-900 pb-1.5">
                <span className="text-slate-300">Fortuner Legender</span>
                <span className="text-red-400 font-bold">₹20,000/24h</span>
              </li>
              <li className="flex justify-between">
                <span className="text-slate-300">BMW 2 Series</span>
                <span className="text-red-400 font-bold">₹25,000/24h</span>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-extrabold text-sm uppercase tracking-wider mb-4">
              Surat Office
            </h4>
            <div className="space-y-3 text-xs leading-relaxed">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span className="text-slate-300">{BUSINESS_INFO.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-red-500 shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-white font-bold hover:text-red-400">
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-red-500 shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="text-slate-300 hover:text-white break-all">
                  {BUSINESS_INFO.email}
                </a>
              </div>

              <div className="flex items-center gap-2.5 text-slate-400 pt-1">
                <Clock className="w-4 h-4 text-red-500 shrink-0" />
                <span>{BUSINESS_INFO.operatingHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} WROOM CAR RENTAL. All Rights Reserved. Self-Drive Car Rental Surat.</p>
          <div className="flex items-center gap-6">
            <span>24-Hour Rental • 350 KM Daily Limit</span>
            <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-red-400 hover:underline">
              {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
