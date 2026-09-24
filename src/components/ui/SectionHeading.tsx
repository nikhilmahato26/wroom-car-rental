import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  tag: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  tag,
  title,
  subtitle,
  centered = true,
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center mx-auto' : ''} max-w-3xl`}>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-red-50 text-red-600 border border-red-200 mb-3"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
        {tag}
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`mt-3.5 text-base sm:text-lg text-slate-600 leading-relaxed ${
            centered ? 'mx-auto' : ''
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
