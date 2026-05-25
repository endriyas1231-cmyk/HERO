import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import BlurImage from '../components/BlurImage';
import { MapPin, Phone, Mail, Clock, Smartphone, ArrowRight } from 'lucide-react';
import contactHeroImage from '../assets/images/contact_hero_keg_1779709340047.png';

export default function Contact() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-[#0B1527] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={contactHeroImage}
            alt="Contact Hero"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 md:px-12 py-20 md:py-32 h-[650px] flex flex-col justify-center">
          <div className="max-w-2xl pb-10">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-sans font-bold tracking-tight leading-[1.1] mb-8 text-white drop-shadow-md">
              Contact Us
            </h1>

            <p className="text-base sm:text-lg text-slate-100 leading-relaxed max-w-xl drop-shadow-md font-medium">
               We're here to support your brewery operations. Reach out to our team for maintenance, repairs, parts supply, or technical support.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column: Get in Touch */}
          <div className="lg:col-span-5 flex flex-col">
             <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
             >
                <h2 className="text-3xl md:text-4xl font-sans font-bold tracking-tight text-slate-900 mb-6">Get in Touch</h2>
                <p className="text-slate-600 text-base leading-relaxed mb-12">
                   Whether you need a one-time service, regular maintenance, or technical support, our team is ready to help.
                </p>

                <div className="space-y-10 mb-12">
                   {/* Location */}
                   <div className="flex items-start gap-5">
                      <div className="w-12 h-12 bg-[#0B1527] rounded-full flex items-center justify-center shrink-0">
                         <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                         <h4 className="text-slate-900 font-semibold mb-1">Location</h4>
                         <p className="text-slate-600 text-sm leading-relaxed">
                            Bole Sub-City<br />
                            Addis Ababa, Ethiopia
                         </p>
                      </div>
                   </div>

                   {/* Phone */}
                   <div className="flex items-start gap-5">
                      <div className="w-12 h-12 bg-[#0B1527] rounded-full flex items-center justify-center shrink-0">
                         <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                         <h4 className="text-slate-900 font-semibold mb-1">Phone</h4>
                         <p className="text-slate-600 text-sm">+251 934 567 890</p>
                      </div>
                   </div>

                   {/* Email */}
                   <div className="flex items-start gap-5">
                      <div className="w-12 h-12 bg-[#0B1527] rounded-full flex items-center justify-center shrink-0">
                         <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div>
                         <h4 className="text-slate-900 font-semibold mb-1">Email</h4>
                         <p className="text-slate-600 text-sm">your@gmail.com</p>
                      </div>
                   </div>

                   {/* Working Hours */}
                   <div className="flex items-start gap-5">
                      <div className="w-12 h-12 bg-[#0B1527] rounded-full flex items-center justify-center shrink-0">
                         <Clock className="w-5 h-5 text-white" />
                      </div>
                      <div>
                         <h4 className="text-slate-900 font-semibold mb-1">Working Hours</h4>
                         <p className="text-slate-600 text-sm leading-relaxed">
                            Monday – Friday<br />
                            8:30 AM – 5:30 PM EAT
                         </p>
                      </div>
                   </div>
                </div>

                {/* Support Box */}
                <div className="bg-gray-50 border border-gray-100 p-8 rounded-sm">
                   <div className="flex items-center gap-4 mb-4">
                      <Smartphone className="w-8 h-8 text-slate-800 shrink-0" />
                      <h4 className="text-xl font-sans font-bold tracking-tight text-slate-900">Need Technical<br/>Support?</h4>
                   </div>
                   <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      Have a technical question about keg maintenance or parts?
                   </p>
                   <button className="w-full bg-white border border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059] hover:text-white transition-colors py-3.5 px-6 font-semibold text-sm flex items-center justify-center gap-2">
                       Ask Technical Question <ArrowRight className="w-4 h-4" />
                   </button>
                </div>
             </motion.div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
             <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
             >
                <h2 className="text-3xl md:text-4xl font-sans font-bold tracking-tight text-slate-900 mb-6">Send Us a Message</h2>
                <p className="text-slate-600 text-base leading-relaxed mb-10">
                   Fill out the form below and we will get back to you as soon as possible.
                </p>

                <form className="space-y-6">
                   <div className="grid sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                         <label className="text-sm font-semibold text-slate-900">Full Name <span className="text-red-500">*</span></label>
                         <input type="text" placeholder="Enter your full name" className="border border-gray-200 rounded-sm px-4 py-3.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#C5A059] focus:border-[#C5A059] transition-all" />
                      </div>
                      <div className="flex flex-col gap-2">
                         <label className="text-sm font-semibold text-slate-900">Company Name <span className="text-red-500">*</span></label>
                         <input type="text" placeholder="Enter your company name" className="border border-gray-200 rounded-sm px-4 py-3.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#C5A059] focus:border-[#C5A059] transition-all" />
                      </div>
                      <div className="flex flex-col gap-2">
                         <label className="text-sm font-semibold text-slate-900">Email Address <span className="text-red-500">*</span></label>
                         <input type="email" placeholder="Enter your email" className="border border-gray-200 rounded-sm px-4 py-3.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#C5A059] focus:border-[#C5A059] transition-all" />
                      </div>
                      <div className="flex flex-col gap-2">
                         <label className="text-sm font-semibold text-slate-900">Phone Number <span className="text-red-500">*</span></label>
                         <input type="tel" placeholder="Enter your phone number" className="border border-gray-200 rounded-sm px-4 py-3.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#C5A059] focus:border-[#C5A059] transition-all" />
                      </div>
                      <div className="flex flex-col gap-2">
                         <label className="text-sm font-semibold text-slate-900">Service Required <span className="text-red-500">*</span></label>
                         <select className="border border-gray-200 rounded-sm px-4 py-3.5 text-sm text-slate-500 focus:outline-none focus:ring-1 focus:ring-[#C5A059] focus:border-[#C5A059] transition-all appearance-none bg-white">
                            <option value="">Select a service</option>
                            <option value="maintenance">Keg Maintenance</option>
                            <option value="repair">Keg Repair</option>
                            <option value="parts">Parts Supply</option>
                         </select>
                      </div>
                      <div className="flex flex-col gap-2">
                         <label className="text-sm font-semibold text-slate-900">Number of Kegs (Optional)</label>
                         <input type="text" placeholder="Approximate number of kegs" className="border border-gray-200 rounded-sm px-4 py-3.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#C5A059] focus:border-[#C5A059] transition-all" />
                      </div>
                   </div>

                   <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-slate-900">Subject <span className="text-red-500">*</span></label>
                      <input type="text" placeholder="Tell us more about your requirement" className="border border-gray-200 rounded-sm px-4 py-3.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#C5A059] focus:border-[#C5A059] transition-all" />
                   </div>

                   <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-slate-900">Message <span className="text-red-500">*</span></label>
                      <textarea rows={5} placeholder="Type your message here..." className="border border-gray-200 rounded-sm px-4 py-3.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#C5A059] focus:border-[#C5A059] transition-all resize-none"></textarea>
                   </div>

                   {/* reCAPTCHA Placeholder */}
                   <div className="inline-flex items-center gap-4 bg-gray-50 border border-gray-200 p-4 rounded-sm min-w-[280px]">
                      <div className="w-6 h-6 border-2 border-gray-300 rounded-sm bg-white shrink-0"></div>
                      <span className="text-sm text-slate-700 font-medium">I'm not a robot</span>
                      <div className="ml-auto flex flex-col items-center">
                         <div className="w-8 h-8 bg-gray-200 mb-1 flex items-center justify-center">
                            <span className="text-[0.5rem] text-slate-400">reCAPTCHA</span>
                         </div>
                         <span className="text-[0.55rem] text-slate-500">Privacy - Terms</span>
                      </div>
                   </div>

                   {/* Consent Checkbox */}
                   <div className="flex items-start gap-3">
                      <input type="checkbox" id="consent" className="mt-1 w-4 h-4 text-[#0B1527] focus:ring-[#0B1527] border-gray-300 rounded-sm shrink-0" />
                      <label htmlFor="consent" className="text-sm text-slate-600">
                         I agree to be contacted about my inquiry.
                      </label>
                   </div>

                   <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4">
                      <p className="text-xs text-slate-500 w-full sm:w-auto"><span className="text-red-500">*</span> Required fields</p>
                      <button type="submit" className="w-full sm:w-auto bg-[#0B1527] hover:bg-slate-800 text-white transition-colors py-3.5 px-8 text-sm font-semibold flex items-center justify-center gap-2 rounded-sm shadow-sm">
                         Send Inquiry <ArrowRight className="w-4 h-4 font-bold" />
                      </button>
                   </div>
                </form>
             </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative h-[600px] bg-slate-200 overflow-hidden w-full">
         <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.728310532834!2d38.78410537569099!3d8.997128589485625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8502fe44f345%3A0x209cbe597069517f!2sEdna%20Mall!5e0!3m2!1sen!2set!4v1779602939723!5m2!1sen!2set" 
            className="w-full h-full"
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
         ></iframe>
      </section>
    </main>
  );
}
