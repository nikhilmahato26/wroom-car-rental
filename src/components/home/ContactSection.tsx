import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { MapPin, Phone, Mail, Clock, CheckCircle2, MessageCircle } from 'lucide-react';
import { contactSchema } from '../../lib/validation';
import type { ContactSchemaType } from '../../lib/validation';
import { BUSINESS_INFO, FLEET_VEHICLES } from '../../data/fleet';
import { buildContactWhatsAppLink } from '../../lib/utils';
import { SectionHeading } from '../ui/SectionHeading';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactSchemaType>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      preferredCar: '',
      message: ''
    }
  });

  const onSubmit = (data: ContactSchemaType) => {
    const waUrl = buildContactWhatsAppLink(data);
    window.open(waUrl, '_blank');
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Find Us in Surat"
          title="GET IN TOUCH"
          subtitle="Ready to book or need custom assistance? Visit our Mota Varachha hub, give us a call, or send a quick message."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Address Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0 border border-red-100">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-extrabold text-base text-slate-900 mb-1">
                  Surat Main Hub Address
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {BUSINESS_INFO.address}
                </p>
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-red-600 hover:text-red-700 mt-2.5"
                >
                  <span>Open in Google Maps</span>
                  <span>→</span>
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0 border border-red-100">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-extrabold text-base text-slate-900 mb-1">
                  Phone & Direct Booking
                </h4>
                <p className="text-sm text-slate-600">
                  Available 24/7 for instant car reservations & road support.
                </p>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="block text-lg font-black text-red-600 hover:text-red-700 mt-2"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0 border border-red-100">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-extrabold text-base text-slate-900 mb-1">
                  Official Email
                </h4>
                <p className="text-sm text-slate-600">
                  For corporate tie-ups, monthly rentals, and documentation:
                </p>
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="block text-sm font-bold text-slate-800 hover:text-red-600 mt-2 break-all"
                >
                  {BUSINESS_INFO.email}
                </a>
              </div>
            </div>

            {/* Timing Card */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex items-center gap-4 text-xs text-slate-600">
              <Clock className="w-5 h-5 text-red-600 shrink-0" />
              <span>{BUSINESS_INFO.operatingHours}</span>
            </div>
          </div>

          {/* Right Column: React Hook Form + Zod Validated Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-9 border border-slate-200 shadow-lg">
            <div className="mb-6">
              <h3 className="text-2xl font-black text-slate-900">
                Send an Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Fill this quick form to dispatch your rental requirements directly to our team via WhatsApp for instant response.
              </p>
            </div>

            {submitted && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Inquiry opened in WhatsApp! Our team will reply within minutes.</span>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    {...register('name')}
                    placeholder="e.g. Rahul Patel"
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm outline-none transition-all ${
                      errors.name
                        ? 'border-red-500 bg-red-50/30'
                        : 'border-slate-300 focus:border-red-600 focus:ring-2 focus:ring-red-100'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-[11px] font-bold text-red-600 mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                    10-Digit Mobile *
                  </label>
                  <input
                    type="tel"
                    {...register('phone')}
                    placeholder="e.g. 9876543210"
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm outline-none transition-all ${
                      errors.phone
                        ? 'border-red-500 bg-red-50/30'
                        : 'border-slate-300 focus:border-red-600 focus:ring-2 focus:ring-red-100'
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-[11px] font-bold text-red-600 mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email (Optional) */}
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    {...register('email')}
                    placeholder="e.g. rahul@gmail.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-red-600 focus:ring-2 focus:ring-red-100 text-sm outline-none transition-all"
                  />
                  {errors.email && (
                    <p className="text-[11px] font-bold text-red-600 mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Preferred Car */}
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                    Vehicle Preference
                  </label>
                  <select
                    {...register('preferredCar')}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-red-600 focus:ring-2 focus:ring-red-100 text-sm bg-white outline-none transition-all"
                  >
                    <option value="">Any / Not decided yet</option>
                    {FLEET_VEHICLES.map((v) => (
                      <option key={v.id} value={`${v.name} (${v.priceFormatted}/24h)`}>
                        {v.name} — {v.priceFormatted}/24h ({v.type})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                  Trip Dates / Requirements *
                </label>
                <textarea
                  rows={3}
                  {...register('message')}
                  placeholder="Tell us your travel dates, destination, or duration (e.g. Need Swift for 2 days weekend trip to Saputara)..."
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-sm outline-none transition-all resize-none ${
                    errors.message
                      ? 'border-red-500 bg-red-50/30'
                      : 'border-slate-300 focus:border-red-600 focus:ring-2 focus:ring-red-100'
                  }`}
                />
                {errors.message && (
                  <p className="text-[11px] font-bold text-red-600 mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit CTA Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-black text-sm shadow-md shadow-red-600/25 transition-all active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Send WhatsApp Inquiry</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
