import React from 'react';
import { COMMERCIAL_STATS } from '../constants';
import { motion } from 'framer-motion';

const Impact: React.FC = () => {
  return (
    <section id="impact" className="py-24 bg-dark relative border-b border-zinc-900">
      <div className="container mx-auto px-6">
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
           <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
             Commercial Acumen & <span className="text-primary">Business Impact</span>
           </h2>
           <p className="text-zinc-400 text-lg">
             Delivering measurable outcomes that are verified by stakeholders. My work bridges the gap between technical execution and strategic business goals.
           </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMMERCIAL_STATS.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 border border-zinc-800 bg-card hover:bg-zinc-900 transition-colors group relative overflow-hidden rounded-xl"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[100px] -mr-4 -mt-4 group-hover:bg-primary/20 transition-all duration-500"></div>
              
              <h3 className="text-4xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                {stat.value}
              </h3>
              <p className="text-lg font-bold text-zinc-300 mb-3">{stat.label}</p>
              <div className="h-[2px] w-8 bg-zinc-700 mb-4 group-hover:w-full group-hover:bg-primary transition-all duration-500"></div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;