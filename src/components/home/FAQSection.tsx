import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Phone, MessageCircle } from 'lucide-react';
import { FAQ_LIST, BUSINESS_INFO } from '../../data/fleet';
import { SectionHeading } from '../ui/SectionHeading';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_LIST[0].id);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Got Questions?"
          title="FREQUENTLY ASKED QUESTIONS"
          subtitle="Everything you need to know about our self-drive car rentals, 24-hour slots, and 350 KM limit."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Instant Help Box */}
          <div className="lg:col-span-4 bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-7 shadow-xl border-t-4 border-red-600 sticky top-24">
            <div className="w-12 h-12 rounded-xl bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-500 mb-5">
              <HelpCircle className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-extrabold text-white mb-2">
              Have More Questions?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
              Our Surat customer support team is available 24/7 to assist you with customized trip plans, long-duration rentals, and vehicle queries.
            </p>

            <div className="space-y-3">
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent('Hello WROOM CAR RENTAL, I have a question about self-drive car booking.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 transition-all"
              >
                <Phone className="w-4 h-4 text-red-500" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: FAQ Accordion */}
          <div className="lg:col-span-8 space-y-3.5">
            {FAQ_LIST.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all ${
                    isOpen
                      ? 'bg-white border-red-200 shadow-md ring-1 ring-red-100'
                      : 'bg-slate-50/70 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full px-6 py-4.5 flex items-center justify-between gap-4 text-left font-bold text-base text-slate-900"
                  >
                    <span>{faq.question}</span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? 'bg-red-600 text-white rotate-180'
                          : 'bg-white border border-slate-300 text-slate-600'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
