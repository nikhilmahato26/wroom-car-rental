import React from 'react';
import { Helmet } from 'react-helmet-async';
import { RequirementsSection } from '../components/home/RequirementsSection';
import { BUSINESS_INFO } from '../data/fleet';
import { ShieldCheck, MessageCircle, CheckCircle2 } from 'lucide-react';
import { useBooking } from '../context/BookingContext';

export const RequirementsPage: React.FC = () => {
  const { openBookingModal } = useBooking();

  return (
    <>
      <Helmet>
        <title>Rental Requirements & Terms | {BUSINESS_INFO.name} Surat</title>
        <meta
          name="description"
          content="Learn about documents required for renting self-drive cars in Surat. Valid Driving License, Aadhaar card, security deposit, and age policy. Instant digital verification."
        />
      </Helmet>

      <div>
        <div className="bg-gradient-to-b from-slate-900 to-slate-950 text-white py-16 text-center px-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-red-950 border border-red-800 text-red-400 mb-3">
            <ShieldCheck className="w-4 h-4 text-red-500" />
            Quick Verification
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            RENTAL REQUIREMENTS & TERMS
          </h1>
          <p className="mt-4 text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            We keep documentation minimal so you can hit the road faster. Discover our simple self-drive criteria below.
          </p>
        </div>

        <RequirementsSection />

        {/* Detailed FAQ checklist banner */}
        <div className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-10">
              <h3 className="text-2xl font-black text-slate-900 mb-6">
                Important Document Checklist
              </h3>

              <div className="space-y-4 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">Original Physical Driving License</strong>
                    <span>Must be present at vehicle handover. Learner licenses (LL) are strictly not permitted.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">Original Identity Card (Aadhaar or Passport)</strong>
                    <span>Used to authenticate local residence and national identity. Verification is done in 5 minutes via OTP or photo.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">Security Deposit Refund Policy</strong>
                    <span>A small security deposit is taken at handover and returned within 24 hours of safe return with no pending fines.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">Speed Limits & Safety Norms</strong>
                    <span>All vehicles follow regional speed governor and expressway highway limits for renter and passenger safety.</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => openBookingModal()}
                  className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-md transition-all"
                >
                  Book A Car Now
                </button>

                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent('Hello WROOM CAR RENTAL, I want to submit my documents for self-drive verification.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Verify on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
