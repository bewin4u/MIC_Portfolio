import React from 'react';
import { WRITING } from '../constants';
import { ExternalLink, BookOpen, Linkedin } from 'lucide-react';

const Writing: React.FC = () => {
  return (
    <section id="writing" className="py-24 bg-zinc-900 border-t border-zinc-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
               Published <span className="text-primary">Writing</span>
             </h2>
             <p className="text-zinc-400">Verifiable proof of thought leadership.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {WRITING.map((item, index) => (
            <a key={index} href={item.link} className="group block bg-zinc-950 p-8 rounded-2xl border border-zinc-800 hover:border-primary/50 transition-all duration-300">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-zinc-900 rounded-lg group-hover:bg-primary/10 transition-colors">
                  {item.platform.includes('Medium') ? <BookOpen className="w-6 h-6 text-white group-hover:text-primary" /> : <Linkedin className="w-6 h-6 text-white group-hover:text-primary" />}
                </div>
                <ExternalLink className="w-5 h-5 text-zinc-600 group-hover:text-primary transition-colors" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
              <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">{item.platform}</p>
              <p className="text-zinc-400 leading-relaxed">
                {item.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Writing;
