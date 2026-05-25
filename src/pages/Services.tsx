import { ArrowRight, Check, FlaskConical, Settings, Box, BarChart2, Search, ArrowLeftRight, CalendarCheck, HelpCircle, ClipboardCheck, Zap, ShieldCheck, RefreshCw, ChevronDown, Clock, Activity, LucideIcon } from 'lucide-react';
import heroImage from '../assets/images/hero_technician_1779387053324.png';
import image1 from '../assets/images/regenerated_image_1779387454378.png';
import image2 from '../assets/images/regenerated_image_1779391035050.png';
import image3 from '../assets/images/regenerated_image_1779387490192.png';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import BlurImage from '../components/BlurImage';

const faqs = [
  { q: "How is pricing structured?", a: "Pricing is based on unit volume and the specific services required. We offer per-keg rates as well as discounted annual contract agreements." },
  { q: "Do you replace worn parts?", a: "Yes, we stock and replace genuine spears, gaskets, O-rings, and CO2 valves. Parts replacement can be included in maintenance packages or quoted individually." },
  { q: "How long does maintenance take?", a: "Typical turnaround for standard maintenance is 24-72 hours, depending on volume. Major structural repairs may take slightly longer." },
  { q: "Do you provide maintenance contracts?", a: "Yes, we offer tailored preventive maintenance programs to keep your keg fleet operating smoothly year-round." },
  { q: "What areas do you serve?", a: "We primarily serve breweries and distributors nationwide across Ethiopia, with local pickup and delivery available from our main facility." },
  { q: "How do you ensure hygiene?", a: "We use brewery-grade chemicals, ultrasonic cleaning, and rigorous validation tests to ensure every keg is 100% sterile and ready for packaging." },
];

function FAQItem({ question, answer }: { question: string; answer: string; key?: number | string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none"
      >
        <span className="font-semibold text-slate-800 text-base">{question}</span>
        <ChevronDown className={`w-5 h-5 text-[#C5A059] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-slate-600 text-[0.95rem] leading-relaxed pr-8">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0B1527]">
        <motion.div 
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <BlurImage
            src={heroImage}
            alt="Keg services"
            containerClassName="absolute inset-0"
            className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1527]/90 via-[#0B1527]/70 to-[#0B1527]/20"></div>
        </motion.div>

        <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 md:px-12 py-20 md:py-32">
          <div className="max-w-2xl">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-7xl font-serif font-medium leading-[1.1] mb-8 text-white"
            >
              Our Services
            </motion.h1>

            <motion.p
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.4 }}
               className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl"
            >
               End-to-end keg care solutions that protect quality, reduce losses, and extend the life of your assets. Our services are designed for breweries and draught beverage operations across Ethiopia.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-24 bg-gray-50/50">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.6 }}
             className="text-center mb-16 lg:mb-20"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-slate-900 mb-4 text-center">
              Our Core Services
            </h2>
            <p className="text-slate-600 text-lg">Professional maintenance. Technical precision. Measurable results.</p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Service 1 */}
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.6 }}
               className="bg-white border border-gray-200 shadow-sm flex flex-col"
            >
               <div className="relative">
                  <div className="h-64 overflow-hidden">
                     <BlurImage src={image1} className="w-full h-full object-cover" containerClassName="w-full h-full" alt="Keg Maintenance" />
                  </div>
                  <div className="absolute -bottom-6 left-8 bg-[#0B1527] text-white p-3 rounded-full border-4 border-white shadow-sm z-10">
                     <FlaskConical className="w-6 h-6 stroke-[1.5]" />
                  </div>
               </div>
               <div className="p-8 pt-12 flex flex-col flex-grow">
                  <h3 className="font-serif font-medium text-2xl text-slate-900 mb-4">1. Keg Maintenance &<br/>Sanitation</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">
                     Comprehensive cleaning and sanitation services to protect beer quality and remove contamination risks.
                  </p>
                  <ul className="space-y-3 mb-10">
                     {[
                       'Ultrasonic internal cleaning',
                       'Beer stone (scale) removal',
                       'Sanitation & hygiene validation',
                       'Pressure testing & leak verification',
                       'Residual beer disposal',
                       'Internal visual inspection'
                     ].map((item, i) => (
                       <li key={i} className="flex items-start gap-3 text-[0.95rem] text-slate-700">
                          <Check className="w-5 h-5 text-[#C5A059] shrink-0" />
                          <span>{item}</span>
                       </li>
                     ))}
                  </ul>

                  <div className="bg-gray-50 border border-gray-100 p-4 mb-6 flex items-start gap-4">
                     <Clock className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                     <div>
                       <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">Recommended Frequency</div>
                       <div className="text-sm font-medium text-slate-900">Every 90 - 120 days</div>
                     </div>
                  </div>

                  <button className="w-full py-4 bg-[#0B1527] hover:bg-slate-800 transition-colors text-white text-sm font-semibold flex items-center justify-center gap-2">
                    Schedule Maintenance <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
               </div>
            </motion.div>

            {/* Service 2 */}
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.6, delay: 0.1 }}
               className="bg-white border border-gray-200 shadow-sm flex flex-col"
            >
               <div className="relative">
                  <div className="h-64 overflow-hidden">
                     <BlurImage src={image2} className="w-full h-full object-cover" containerClassName="w-full h-full" alt="Keg Repair" />
                  </div>
                  <div className="absolute -bottom-6 left-8 bg-[#0B1527] text-white p-3 rounded-full border-4 border-white shadow-sm z-10">
                     <Settings className="w-6 h-6 stroke-[1.5]" />
                  </div>
               </div>
               <div className="p-8 pt-12 flex flex-col flex-grow">
                  <h3 className="font-serif font-medium text-2xl text-slate-900 mb-4">2. Keg Repair & Structural<br/>Restoration</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">
                     Restore structural integrity, eliminate leaks, and extend the operational life of your kegs.
                  </p>
                  <ul className="space-y-3 mb-10">
                     {[
                       'Dent removal & body repair',
                       'Neck straightening & alignment',
                       'Chime (top & bottom) restoration',
                       'Spear alignment & system check',
                       'Leak correction & pressure testing',
                       'Final inspection & approval'
                     ].map((item, i) => (
                       <li key={i} className="flex items-start gap-3 text-[0.95rem] text-slate-700">
                          <Check className="w-5 h-5 text-[#C5A059] shrink-0" />
                          <span>{item}</span>
                       </li>
                     ))}
                  </ul>

                  <div className="bg-gray-50 border border-gray-100 p-4 mb-6 flex items-start gap-4">
                     <Clock className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                     <div>
                       <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">Typical Turnaround</div>
                       <div className="text-sm font-medium text-slate-900">24 - 72 hours*</div>
                     </div>
                  </div>

                  <button className="w-full py-4 bg-[#0B1527] hover:bg-slate-800 transition-colors text-white text-sm font-semibold flex items-center justify-center gap-2">
                    Book Inspection <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
               </div>
            </motion.div>

            {/* Service 3 */}
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="bg-white border border-gray-200 shadow-sm flex flex-col"
            >
               <div className="relative">
                  <div className="h-64 overflow-hidden bg-gray-50">
                     <BlurImage src={image3} className="w-full h-full object-contain p-4" containerClassName="w-full h-full" alt="Genuine Parts" />
                  </div>
                  <div className="absolute -bottom-6 left-8 bg-[#0B1527] text-white p-3 rounded-full border-4 border-white shadow-sm z-10">
                     <Box className="w-6 h-6 stroke-[1.5]" />
                  </div>
               </div>
               <div className="p-8 pt-12 flex flex-col flex-grow">
                  <h3 className="font-serif font-medium text-2xl text-slate-900 mb-4">3. Genuine Parts Supply</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">
                     High-quality, genuine components for optimal performance and long-term reliability.
                  </p>
                  <ul className="space-y-3 mb-10">
                     {[
                       'Spears',
                       'Gaskets',
                       'O-rings',
                       'CO₂ valves',
                       'Sealing components & accessories',
                       ''
                     ].map((item, i) => (
                       <li key={i} className={`flex items-start gap-3 text-[0.95rem] text-slate-700 ${!item ? 'opacity-0 select-none' : ''}`}>
                          <Check className="w-5 h-5 text-[#C5A059] shrink-0" />
                          <span>{item || 'Spacer'}</span>
                       </li>
                     ))}
                  </ul>

                  <div className="bg-gray-50 border border-gray-100 p-4 mb-6 flex items-start gap-4">
                     <ClipboardCheck className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                     <div>
                       <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">Pricing</div>
                       <div className="text-sm font-medium text-slate-900">Unit-based or contract supply</div>
                     </div>
                  </div>

                  <button className="w-full py-4 bg-[#0B1527] hover:bg-slate-800 transition-colors text-white text-sm font-semibold flex items-center justify-center gap-2">
                    Request Parts <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
               </div>
            </motion.div>

          </div>
          <p className="text-center text-sm text-slate-500 mt-8">*Turnaround time depends on service volume, inspection findings, and part availability.</p>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.6 }}
             className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-slate-900 inline-flex flex-col items-center">
              Additional Services
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { icon: Activity, title: 'Pressure Testing', desc: 'Nitrogen/air pressure testing to ensure pressure integrity.' },
              { icon: Search, title: 'Inspection & Reporting', desc: 'Detailed inspection with findings and actionable recommendations.' },
              { icon: ArrowLeftRight, title: 'Collection & Delivery', desc: 'Flexible pickup and delivery options within Addis Ababa and nearby regions.' },
              { icon: CalendarCheck, title: 'Preventive Maintenance Programs', desc: 'Planned maintenance schedules to reduce downtime and unexpected failures.' },
              { icon: HelpCircle, title: 'Technical Support', desc: 'Expert technical guidance and support for your keg operations.' },
            ].map((s, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <s.icon className="w-8 h-8 text-[#0B1527] mb-5 stroke-[1.5]" />
                <h4 className="font-semibold text-slate-900 text-[1rem] mb-3">{s.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed max-w-[220px]">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Service Process */}
      <section className="py-24 bg-[#0B1527] text-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.6 }}
             className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium inline-flex flex-col items-center">
              Our Service Process
              <div className="h-0.5 w-16 bg-[#C5A059] mt-6 opacity-90"></div>
            </h2>
          </motion.div>

          <div className="relative">
             {/* Connecting Line */}
             <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[1px] border-b border-dashed border-white/20 z-0"></div>
             
             <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-8 relative z-10">
               {[
                 { icon: ClipboardCheck, step: '1', title: 'Collection & Intake', desc: 'Kegs are collected and logged into our service system.' },
                 { icon: Search, step: '2', title: 'Inspection', desc: 'We inspect each keg for structural, hygiene, and pressure integrity.' },
                 { icon: Zap, step: '3', title: 'Service Execution', desc: 'Cleaning, repair, part replacement, and testing are performed.' },
                 { icon: ShieldCheck, step: '4', title: 'Quality Check', desc: 'Every keg is pressure tested and verified before release.' },
                 { icon: RefreshCw, step: '5', title: 'Return & Circulation', desc: 'Kegs are returned ready for optimal performance.' },
               ].map((item, idx) => (
                 <motion.div 
                   key={idx}
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true, margin: "-50px" }}
                   transition={{ duration: 0.6, delay: idx * 0.15 }}
                   className="flex flex-col items-center text-center"
                 >
                   <div className="relative mb-8 group">
                      <div className="w-24 h-24 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm group-hover:bg-white/10 transition-colors">
                         <item.icon className="w-10 h-10 text-[#C5A059] stroke-[1.5]" />
                      </div>
                      <div className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-[#C5A059] text-[#0B1527] font-bold text-sm flex items-center justify-center">
                        {item.step}
                      </div>
                   </div>
                   <h4 className="font-semibold text-[1.1rem] text-white mb-3">{item.title}</h4>
                   <p className="text-slate-400 text-sm leading-relaxed max-w-[200px]">{item.desc}</p>
                 </motion.div>
               ))}
             </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.6 }}
             className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-slate-900 inline-flex flex-col items-center">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-x-12">
             <div className="flex flex-col">
                {faqs.slice(0, 3).map((faq, i) => (
                   <FAQItem key={i} question={faq.q} answer={faq.a} />
                ))}
             </div>
             <div className="flex flex-col">
                {faqs.slice(3, 6).map((faq, i) => (
                   <FAQItem key={i} question={faq.q} answer={faq.a} />
                ))}
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}
