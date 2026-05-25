import { ArrowRight, Box, Building2, Calendar, ClipboardCheck, FileText, Heart, Map, Navigation, ShieldCheck, Truck, Users, Lightbulb, Hexagon } from 'lucide-react';
import heroImage from '../assets/images/regenerated_image_1779387996127.png';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import BlurImage from '../components/BlurImage';

export default function About() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0B1527] border-b-[8px] border-[#C5A059]">
        <motion.div 
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <BlurImage
            src={heroImage}
            alt="Kegs stack"
            containerClassName="absolute inset-0"
            className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1527] via-[#0B1527]/90 to-transparent"></div>
        </motion.div>

        <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 md:px-12 py-20 md:py-32">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-[1.1] mb-12 text-white"
            >
              About Us
            </motion.h1>

            <motion.div
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-xl md:text-2xl text-white font-medium mb-6 leading-relaxed">
                 Technical expertise. Operational understanding.<br/>
                 A partner committed to your success.
              </h3>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                 Hero Keg Service and Trading PLC is Ethiopia's specialized partner for professional keg maintenance, sanitation, repair, and genuine parts supply. We help breweries and beverage operators maintain quality, reduce losses, and ensure reliable keg circulation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 xl:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-slate-900 mb-10">Who We Are</h2>
            <div className="space-y-8 text-base md:text-lg text-slate-700 leading-relaxed">
               <p>
                  Founded by professionals with deep experience in the Ethiopian brewing industry, Hero Keg Service and Trading PLC understands the critical role kegs play in delivering perfect beer to every glass.
               </p>
               <p>
                  We provide end-to-end keg care solutions using modern equipment, industry best practices, and a team trained in technical, hygiene, and safety standards.
               </p>
               <p>
                  From cleaning and inspection to structural repair and parts supply, we ensure every keg is safe, clean, and performance-ready.
               </p>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-10 md:gap-12">
            {[
              { 
                icon: Navigation, 
                title: 'Our Mission', 
                desc: 'To provide reliable, high-quality keg maintenance and asset protection solutions that improve brewery performance and profitability.'
              },
              { 
                icon: Map, 
                title: 'Our Vision', 
                desc: 'To become Ethiopia\'s most trusted keg maintenance and brewery asset protection partner.'
              },
              { 
                icon: ShieldCheck, 
                title: 'Our Values', 
                list: [
                  'Quality Excellence', 'Reliability', 'Technical Precision', 'Operational Integrity', 'Customer Partnership'
                ]
              },
              { 
                icon: Heart, 
                title: 'Our Philosophy', 
                desc: 'Proper keg maintenance is not an expense. It is a strategic investment in product quality, asset longevity, and profitability.'
              }
            ].map((item, idx) => (
              <motion.div 
                 key={idx}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, margin: "-50px" }}
                 transition={{ duration: 0.6, delay: idx * 0.1 }}
                 className="flex flex-col"
              >
                  <item.icon className="w-8 h-8 text-[#0B1527] stroke-[1.5] mb-5" />
                  <h4 className="font-serif font-medium text-xl text-slate-900 mb-4">{item.title}</h4>
                  {item.desc ? (
                    <p className="text-slate-600 text-[0.95rem] leading-relaxed">{item.desc}</p>
                  ) : (
                    <ul className="text-slate-600 text-[0.95rem] space-y-2.5">
                       {item.list?.map((li, i) => (
                         <li key={i}>{li}</li>
                       ))}
                    </ul>
                  )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Our Approach Different */}
      <section className="py-24 bg-[#0B1527] text-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.6 }}
             className="text-center mb-16 lg:mb-24"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium inline-flex flex-col items-center">
              What Makes Our Approach Different
              <div className="h-0.5 w-16 bg-[#C5A059] mt-6 opacity-90"></div>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
             {[
               { icon: Users, title: 'Industry Expertise', desc: 'Deep knowledge of brewing operations, keg systems, and distribution challenges in Ethiopia.' },
               { icon: Hexagon, title: 'Structured Processes', desc: 'Standardized inspection, sanitation, testing, and repair procedures for consistent results.' },
               { icon: ClipboardCheck, title: 'Quality Standards', desc: 'Brewery-grade cleaning, pressure testing, and hygiene practices ensure safe and reliable kegs.' },
               { icon: Box, title: 'Genuine Parts', desc: 'We supply authentic, high-quality components for long-term operational reliability.' },
               { icon: Users, title: 'Partnership Mindset', desc: 'We work as an extension of your team to improve uptime, reduce costs, and grow your business.' }
             ].map((item, idx) => (
               <motion.div 
                 key={idx}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, margin: "-50px" }}
                 transition={{ duration: 0.6, delay: idx * 0.1 }}
                 className="flex flex-col items-center text-center"
               >
                 <item.icon className="w-10 h-10 text-[#C5A059] stroke-[1.5] mb-5" />
                 <h4 className="font-serif font-medium text-lg text-white mb-3">{item.title}</h4>
                 <p className="text-slate-400 text-sm leading-relaxed max-w-[280px]">{item.desc}</p>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Industries We Support */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.6 }}
             className="text-center mb-16 lg:mb-20"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-slate-900 inline-flex flex-col items-center">
              Industries We Support
              <div className="h-0.5 w-24 bg-[#0B1527] mt-6 opacity-80"></div>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
             {[
               { icon: Box, label: 'Breweries' },
               { icon: FileText, label: 'Brewpubs' },
               { icon: Truck, label: 'Beverage Distributors' },
               { icon: Building2, label: 'Hospitality Groups' },
               { icon: Lightbulb, label: 'Draught Beer Operators' },
               { icon: Calendar, label: 'Event & Catering Services' }
             ].map((item, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true, margin: "-50px" }}
                 transition={{ duration: 0.5, delay: i * 0.1 }}
                 className="flex flex-col items-center justify-center gap-6"
               >
                 <div className="w-20 h-20 rounded-md border border-gray-100 shadow-sm flex items-center justify-center bg-white group-hover:border-[#0B1527]/20 transition-colors">
                    <item.icon className="w-8 h-8 text-[#0B1527] stroke-[1.5]" />
                 </div>
                 <span className="font-semibold text-slate-800 text-[0.95rem]">{item.label}</span>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Let's Work Together CTA */}
      <section className="py-8 pb-24 bg-white relative">
         <div className="max-w-[1400px] mx-auto px-6 md:px-12">
           <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              className="bg-white border text-center md:text-left border-gray-100 shadow-xl rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-10"
           >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                 <div className="w-20 h-20 bg-[#0B1527] rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-8 h-8 text-white fill-current" viewBox="0 0 24 24">
                        <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 00-1.02.24l-2.2 2.2a15.045 15.045 0 01-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 12h2a9 9 0 00-9-9v2c3.87 0 7 3.13 7 7zm-4 0h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3z"/>
                    </svg>
                 </div>
                 <div>
                    <h3 className="text-2xl md:text-3xl font-serif font-medium text-slate-900 mb-3">Let's Work Together</h3>
                    <p className="text-slate-600 text-base max-w-xl leading-relaxed">
                       Whether you need a one-time service, regular maintenance, or technical support, our team is ready to help.
                    </p>
                 </div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
                 <button className="bg-[#0B1527] hover:bg-slate-800 text-white px-8 py-4 rounded-xl text-sm font-semibold transition-colors flex items-center justify-center min-w-[200px]">
                    Request a<br/>Quote <ArrowRight className="w-4 h-4 ml-2 inline-block shrink-0" />
                 </button>
                 <button className="bg-white border-2 border-gray-200 text-slate-800 hover:border-slate-300 font-semibold px-8 py-4 rounded-xl text-sm transition-colors flex items-center justify-center min-w-[200px]">
                    Contact Our<br/>Team <ArrowRight className="w-4 h-4 ml-2 inline-block shrink-0" />
                 </button>
              </div>
           </motion.div>
         </div>
      </section>
    </main>
  );
}
