import { ShieldCheck, Droplet, Settings, BarChart3, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export default function Benefits() {
  const benefits = [
    { icon: ShieldCheck, title: "Reduce Beer Loss", desc: "Minimize leakage and foam waste." },
    { icon: Droplet, title: "Better Quality", desc: "Improve carbonation and product quality." },
    { icon: Settings, title: "Extend Keg Life", desc: "Professional care for longer asset lifespan." },
    { icon: BarChart3, title: "Lower Costs", desc: "Reduce replacement and repair expenses." },
    { icon: Clock, title: "Operational Uptime", desc: "More reliable keg circulation." },
  ];

  return (
    <section className="py-16 bg-gray-50 border-b border-gray-100 relative z-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6 lg:divide-x divide-gray-200">
           {benefits.map((b, i) => (
             <motion.div 
               key={i} 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.5, delay: i * 0.1 }}
               className="flex flex-col items-center text-center lg:px-4 border-gray-200"
             >
                <b.icon className="w-12 h-12 text-[#0B1527] mb-5 stroke-[1.5]" />
                <h3 className="font-sans font-bold tracking-tight text-[1.1rem] text-slate-800 mb-2">{b.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed max-w-[200px]">{b.desc}</p>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
