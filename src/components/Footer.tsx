import { MapPin, Phone, Mail, Linkedin, Facebook, Shield } from 'lucide-react';
import Logo from './Logo';
import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="bg-[#0B1527] text-slate-300 py-20 relative overflow-hidden">
      {/* Container matches Navbar constraint roughly */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
         
         {/* Brand Section */}
         <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-50px" }}
           transition={{ duration: 0.6 }}
           className="md:col-span-12 lg:col-span-4 flex flex-col gap-6 lg:pr-8"
         >
            <Logo isDark={true} />
            <p className="text-[0.9rem] text-slate-400 leading-loose mt-2">
              Professional keg maintenance, sanitation, repair, and genuine parts solutions for breweries and draught beverage operations across Ethiopia.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"><Facebook className="w-[18px] h-[18px] text-white" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"><Linkedin className="w-[18px] h-[18px] text-white" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"><Mail className="w-[18px] h-[18px] text-white" /></a>
            </div>
         </motion.div>

         {/* Quick Links Section */}
         <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-50px" }}
           transition={{ duration: 0.6, delay: 0.1 }}
           className="md:col-span-4 lg:col-span-2 lg:pl-8"
         >
            <h4 className="text-[#C5A059] font-sans font-bold tracking-tight text-[1.1rem] mb-8">Quick Links</h4>
            <ul className="space-y-4 text-[0.95rem]">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Why Choose Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
         </motion.div>

         {/* Services Section */}
         <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-50px" }}
           transition={{ duration: 0.6, delay: 0.2 }}
           className="md:col-span-4 lg:col-span-3 lg:pl-8"
         >
            <h4 className="text-[#C5A059] font-sans font-bold tracking-tight text-[1.1rem] mb-8">Our Services</h4>
            <ul className="space-y-4 text-[0.95rem]">
              <li><a href="#" className="hover:text-white transition-colors">Keg Maintenance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Keg Repair</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Valve Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Parts Supply</a></li>
            </ul>
         </motion.div>

         {/* Contact Section */}
         <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-50px" }}
           transition={{ duration: 0.6, delay: 0.3 }}
           className="md:col-span-4 lg:col-span-3 lg:pl-4"
         >
            <h4 className="text-[#C5A059] font-sans font-bold tracking-tight text-[1.1rem] mb-8">Contact Us</h4>
            <ul className="space-y-6 text-[0.95rem]">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-white/80 shrink-0 mt-0.5" />
                <span className="leading-relaxed">Bole Sub-City, Addis Ababa, Ethiopia</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-white/80 shrink-0" />
                <span>+251 934 567 890</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-white/80 shrink-0" />
                <span>your@gmail.com</span>
              </li>
            </ul>
         </motion.div>

      </div>

      {/* Copyright Bar */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 mt-20 pt-8 border-t border-white/5 text-[0.8rem] tracking-wide text-slate-500">
         © 2026 Hero Keg Service and Trading PLC. All rights reserved.
      </div>

      {/* Large background emblem */}
      <div className="absolute right-0 bottom-0 translate-x-1/4 translate-y-[15%] opacity-[0.02] z-0 pointer-events-none">
         <Shield className="w-[500px] h-[500px]" strokeWidth={0.5} />
      </div>
    </footer>
  );
}
