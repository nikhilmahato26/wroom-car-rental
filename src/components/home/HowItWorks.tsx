import React from 'react';
import { motion } from 'framer-motion';
import { Car, FileCheck, Key } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: "01",
      icon: Car,
      title: "Choose Your Vehicle",
      description: "Browse our 18 verified fleet models ranging from economical CNG hatchbacks to Thar 4x4, premium SUVs, luxury BMW, royal vintage cars, and Force Urbania."
    },
    {
      step: "02",
      icon: FileCheck,
      title: "Fast WhatsApp Verification",
      description: "Click to chat on WhatsApp. Share your Driving License and Aadhaar photo for quick 5-minute digital verification and pay a nominal token."
    },
    {
      step: "03",
      icon: Key,
      title: "Collect Keys & Drive Away",
      description: "Pick up your thoroughly detailed car at our Mota Varachha hub or request doorstep delivery. Enjoy 350 KM of freedom every 24 hours!"
    }
  ];

  return (
    <section className="py-20 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Easy 3-Step Process"
          title="HOW IT WORKS"
          subtitle="Renting a self-drive car in Surat has never been this smooth. Hit the road in 3 easy steps."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-7 border border-slate-200 shadow-xs hover:shadow-lg transition-all relative group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-red-600 text-white flex items-center justify-center font-black text-lg shadow-md shadow-red-600/30">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-3xl font-black text-slate-200 group-hover:text-red-200 transition-colors">
                    {s.step}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-slate-900 mb-2.5">
                  {s.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {s.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
