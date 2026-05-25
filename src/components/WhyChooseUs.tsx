import { CheckCircle2, ArrowRight, Shield, Database } from 'lucide-react';
import imagePath from '../assets/images/regenerated_image_1779387996127.png';
import { motion } from 'motion/react';
import BlurImage from './BlurImage';

export default function WhyChooseUs() {
  const reasons = [
    "Industry-specific technical expertise",
    "One-stop solution for maintenance, repair and parts",
    "Brewery-grade sanitation and safety standards",
    "Genuine parts for long-term reliability",
    "Preventive maintenance to reduce downtime and losses",
    "Partnership approach focused on your success",
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-sans font-bold tracking-tight text-slate-800 mb-8 leading-[1.15]">
            Why Breweries Choose Hero Keg
          </h2>
          <ul className="space-y-5 mb-10">
            {reasons.map((r, i) => (
              <motion.li 
                key={i} 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-3"
              >
                <CheckCircle2 className="w-6 h-6 text-[#0B1527] shrink-0 mt-[2px] fill-[#0B1527] stroke-white stroke-[2]" />
                <span className="text-slate-700 leading-relaxed font-medium">{r}</span>
              </motion.li>
            ))}
          </ul>
          <button className="group flex items-center gap-2 bg-[#C5A059] text-white px-7 py-3.5 rounded-xl text-sm font-medium hover:bg-[#B38F46] transition-all shadow-md hover:shadow-xl">
            Discover More About Us <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative h-[450px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
        >
           <img 
             src={imagePath}
             alt="Kegs stack in warehouse" 
             className="w-[600px] h-[500px] object-fill" 
           />
           <div className="absolute inset-0 bg-[#0B1527]/10 mix-blend-multiply"></div>
           

        </motion.div>

      </div>
    </section>
  );
}
