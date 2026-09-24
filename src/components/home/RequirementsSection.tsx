import React from 'react';
import { motion } from 'framer-motion';
import { FileText, CreditCard, Shield, UserCheck, Fuel, Sparkles } from 'lucide-react';
import { RENTAL_REQUIREMENTS } from '../../data/fleet';
import { SectionHeading } from '../ui/SectionHeading';

const iconMap = [FileText, CreditCard, Shield, UserCheck, Fuel, Sparkles];

export const RequirementsSection: React.FC = () => {
  return (
    <section id="requirements" className="py-20 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Zero Hassle Documentation"
          title="RENTAL REQUIREMENTS"
          subtitle="Simple, transparent and paperless verification. Drive away in your chosen car with confidence."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {RENTAL_REQUIREMENTS.map((req, idx) => {
            const Icon = iconMap[idx % iconMap.length];
            return (
              <motion.div
                key={req.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-red-200 transition-all flex flex-col justify-between relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center border border-red-100 group-hover:bg-red-600 group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black text-slate-200 group-hover:text-red-200 transition-colors">
                      {req.step}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 mb-2">
                    {req.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {req.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100">
                  <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider text-red-600 bg-red-50 px-2.5 py-1 rounded-md">
                    {req.badge}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
