import { Sparkles, Wrench, Settings2, Package, ArrowRight } from 'lucide-react';
import image1 from '../assets/images/regenerated_image_1779387454378.png';
import image2 from '../assets/images/regenerated_image_1779391035050.png';
import image3 from '../assets/images/regenerated_image_1779391041843.png';
import image4 from '../assets/images/regenerated_image_1779387490192.png';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import BlurImage from './BlurImage';

export default function Services() {
  const services = [
    {
      title: "Keg Maintenance &\nSanitation",
      desc: "Advanced cleaning, beer stone removal, ultrasonic sanitation, pressure testing, and leak verification.",
      icon: Sparkles,
      image: image1
    },
    {
      title: "Keg Repair &\nStructural Restoration",
      desc: "Dent removal, neck straightening, chime restoration, inspection, and pressure integrity checks.",
      icon: Wrench,
      image: image2
    },
    {
      title: "Spear & Valve Services",
      desc: "Spear overhaul, gasket and O-ring replacement, CO₂ valve servicing, and pressure testing.",
      icon: Settings2,
      image: image3
    },
    {
      title: "Genuine Parts Supply",
      desc: "High-quality genuine spears, gaskets, O-rings, CO₂ valves, and other sealing components.",
      icon: Package,
      image: image4
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-sans font-bold tracking-tight text-slate-900 inline-flex flex-col items-center">
            Our Core Services
            <div className="h-0.5 w-24 bg-slate-800 mt-6 rounded-full opacity-80"></div>
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group flex flex-col border border-gray-200/60 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:border-gray-300/60 transition-all duration-300"
            >
              <div className="relative h-[250px]">
                <div className="absolute inset-0 overflow-hidden">
                  <BlurImage src={s.image} alt={s.title} containerClassName="absolute inset-0" className="w-full h-full object-fill group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-transparent"></div>
                </div>
                <div className="absolute -bottom-7 left-6 bg-[#0B1527] text-white p-3.5 rounded-full border-[3px] border-white shadow-lg z-10 transition-transform group-hover:-translate-y-1">
                  <s.icon className="w-6 h-6 stroke-[1.5]" />
                </div>
              </div>
              <div className="flex flex-col flex-grow p-8 pt-12">
                <h3 className="font-sans font-bold tracking-tight text-[1.35rem] leading-tight text-slate-800 mb-4 whitespace-pre-line">{s.title}</h3>
                <p className="text-sm text-slate-600 mb-8 flex-grow leading-relaxed">{s.desc}</p>
                <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B1527] hover:text-slate-600 transition-colors uppercase tracking-wider group/link">
                  Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
