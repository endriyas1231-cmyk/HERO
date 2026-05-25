import { Database, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function Stats() {
  return (
    <section className="bg-[#0B1527] text-white py-16 relative flex items-center justify-center">
      {/* Decorative subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-indigo-900/10 pointer-events-none"></div>

      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 relative z-10">
         <div className="grid md:grid-cols-3 gap-12 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
            
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.6 }}
               className="flex flex-col md:flex-row items-center justify-center gap-5 pt-6 md:pt-0 first:pt-0"
            >
              <Database className="w-12 h-12 md:w-14 md:h-14 stroke-[1]" />
              <div className="text-center md:text-left">
                <div className="text-4xl lg:text-5xl font-sans font-bold tracking-tight mb-1">3,639+</div>
                <div className="text-sm lg:text-base text-slate-300">Kegs Maintained</div>
              </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.6, delay: 0.15 }}
               className="flex flex-col md:flex-row items-center justify-center gap-5 pt-6 md:pt-0"
            >
              <ShieldCheck className="w-12 h-12 md:w-14 md:h-14 stroke-[1]" />
              <div className="text-center md:text-left">
                <div className="text-4xl lg:text-5xl font-sans font-bold tracking-tight mb-1">4,000+</div>
                <div className="text-sm lg:text-base text-slate-300">Spear & Gaskets Replaced</div>
              </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.6, delay: 0.3 }}
               className="flex flex-col md:flex-row items-center justify-center gap-5 pt-6 md:pt-0"
            >
              <CheckCircle2 className="w-12 h-12 md:w-14 md:h-14 stroke-[1]" />
              <div className="text-center md:text-left">
                <div className="text-4xl lg:text-5xl font-sans font-bold tracking-tight mb-1">100%</div>
                <div className="text-sm lg:text-base text-slate-300">Pressure Tested</div>
              </div>
            </motion.div>

         </div>
      </div>
    </section>
  );
}
