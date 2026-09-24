import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ContactSection } from '../components/home/ContactSection';
import { BUSINESS_INFO } from '../data/fleet';
import { MapPin } from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contact Surat Hub | {BUSINESS_INFO.name} (+91 8980944981)</title>
        <meta
          name="description"
          content="Contact WROOM CAR RENTAL Surat. Hub located at Near Dukhiyano Darbar, Bharthana Road, Mota Varachha, Surat 394107. Call or WhatsApp +91 8980944981."
        />
      </Helmet>

      <div>
        {/* Hero Banner */}
        <div className="bg-gradient-to-b from-slate-900 to-slate-950 text-white py-16 text-center px-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-red-950 border border-red-800 text-red-400 mb-3">
            <MapPin className="w-4 h-4 text-red-500" />
            Mota Varachha, Surat
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            CONTACT WROOM CAR RENTAL
          </h1>
          <p className="mt-4 text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Get in touch with Surat's leading self-drive car rental agency. We are ready to assist you 24 hours a day, 7 days a week.
          </p>
        </div>

        <ContactSection />
      </div>
    </>
  );
};
