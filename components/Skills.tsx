import React from 'react';
import { CORE_STRENGTHS } from '../constants';
import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Core <span className="text-primary">Strengths</span></h2>
          <p className="text-zinc-400">Technical and strategic capabilities that drive delivery.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {CORE_STRENGTHS.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative bg-zinc-900 border border-zinc-800 hover:border-primary px-6 py-4 rounded-xl cursor-default transition-all duration-300"
            >
               <div className="flex items-center gap-3">
                 <Cpu className="w-5 h-5 text-zinc-600 group-hover:text-primary transition-colors" />
                 <span className="font-bold text-zinc-300 group-hover:text-white">{skill}</span>
               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
