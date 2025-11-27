import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const Contact: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-dark pt-24 pb-12 border-t border-zinc-800 relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-primary shadow-[0_0_100px_rgba(74,222,128,0.5)]"></div>

      <div className="container mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-5xl font-bold mb-8 text-white">Let's <span className="text-primary">Connect</span></h2>
          <p className="text-zinc-400 text-lg mb-12 leading-relaxed">
            Ready to drive measurable outcomes? I'm available for leadership roles in AI delivery and product transformation.
          </p>
        </div>
          
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <a href={`mailto:${CONTACT_INFO.email}`} className="flex flex-col items-center p-8 bg-card rounded-2xl border border-zinc-800 hover:border-primary/50 group transition-all duration-300">
            <div className="w-16 h-16 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800 group-hover:border-primary group-hover:text-primary text-zinc-400 transition-all duration-300 mb-6 shadow-lg">
              <Mail className="w-8 h-8" />
            </div>
            <p className="text-sm text-zinc-500 uppercase font-bold tracking-wider mb-2">Email</p>
            <p className="text-lg md:text-xl font-medium text-white group-hover:text-primary transition-colors text-center break-all">{CONTACT_INFO.email}</p>
          </a>
          
          <div className="flex flex-col items-center p-8 bg-card rounded-2xl border border-zinc-800 hover:border-primary/50 group transition-all duration-300">
            <div className="w-16 h-16 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800 group-hover:border-primary group-hover:text-primary text-zinc-400 transition-all duration-300 mb-6 shadow-lg">
              <Phone className="w-8 h-8" />
            </div>
            <p className="text-sm text-zinc-500 uppercase font-bold tracking-wider mb-2">Phone</p>
            <p className="text-lg md:text-xl font-medium text-white group-hover:text-primary transition-colors text-center">{CONTACT_INFO.phone}</p>
          </div>

          <div className="flex flex-col items-center p-8 bg-card rounded-2xl border border-zinc-800 hover:border-primary/50 group transition-all duration-300">
            <div className="w-16 h-16 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800 group-hover:border-primary group-hover:text-primary text-zinc-400 transition-all duration-300 mb-6 shadow-lg">
              <MapPin className="w-8 h-8" />
            </div>
            <p className="text-sm text-zinc-500 uppercase font-bold tracking-wider mb-2">Location</p>
            <p className="text-lg md:text-xl font-medium text-white group-hover:text-primary transition-colors text-center">{CONTACT_INFO.location}</p>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-sm">
            © {new Date().getFullYear()} Michael David Robinston. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-sm font-medium"
          >
            Back to Top <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Contact;