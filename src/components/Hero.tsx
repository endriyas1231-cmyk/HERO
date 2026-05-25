import { ArrowRight, Calendar } from 'lucide-react';
import heroImage from '../assets/images/hero_technician_1779387053324.png';
import { motion } from 'motion/react';
import BlurImage from './BlurImage';

export default function Hero() {
  return (
    <section className="relative bg-[#0B1527] text-white overflow-hidden min-h-[600px] flex flex-col justify-center">
      {/* Background image overlay */}
      <motion.div 
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <BlurImage
          src={heroImage}
          alt="Worker inspecting keg"
          containerClassName="absolute inset-0"
          className="w-full h-full object-cover object-right opacity-60 mix-blend-overlay"
        />
        {/* Gradient to darken the left side for text readability like in the image */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1527] via-[#0B1527]/90 to-transparent"></div>
      </motion.div>

      <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 md:px-12 py-24 md:py-32 lg:py-40">
        <div className="max-w-2xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-bold tracking-tight leading-[1.1] mb-6"
          >
            Protecting<br/>Every Pour.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-slate-200 mb-8 sm:mb-10 leading-relaxed max-w-xl"
          >
            Professional keg maintenance, sanitation, repair, and genuine parts solutions that help breweries reduce losses, protect beer quality, and improve operational uptime.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <button className="group flex items-center justify-center gap-2 bg-[#C5A059] border border-[#C5A059] hover:bg-[#B38F46] hover:border-[#B38F46] transition-colors px-8 py-3.5 rounded-xl text-sm font-semibold text-white">
              Request a Quote <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex items-center justify-center gap-2 bg-transparent border border-white/30 text-white hover:bg-white/10 hover:border-white transition-colors px-8 py-3.5 rounded-xl text-sm font-semibold">
              Schedule Inspection <Calendar className="w-4 h-4 ml-1" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
