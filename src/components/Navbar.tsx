import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Logo from './Logo';
import { motion, AnimatePresence } from 'motion/react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getLinkClass = ({ isActive }: { isActive: boolean }) => 
    isActive 
      ? "text-slate-900 border-b-[3px] border-slate-800 pb-1 -mb-1" 
      : "hover:text-slate-900 transition-colors";

  const getMobileLinkClass = ({ isActive }: { isActive: boolean }) => 
    isActive ? "text-slate-900 font-semibold" : "hover:text-slate-900 transition-colors";

  return (
    <nav className="border-b border-gray-100 py-4 md:py-5 px-6 md:px-12 bg-white sticky top-0 z-50">
       <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <Logo />
          <div className="hidden lg:flex items-center gap-10 text-[0.9rem] font-medium text-slate-700">
             <NavLink to="/" className={getLinkClass}>Home</NavLink>
             <NavLink to="/about" className={getLinkClass}>About Us</NavLink>
             <NavLink to="/services" className={getLinkClass}>Services</NavLink>
             <a href="#" className="hover:text-slate-900 transition-colors">Why Choose Us</a>
             <NavLink to="/contact" className={getLinkClass}>Contact Us</NavLink>
          </div>
          <div className="hidden lg:block">
            <button className="bg-[#C5A059] text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-[#B38F46] transition-colors shadow-sm">
              Request a Quote
            </button>
          </div>
          
          <button 
            className="lg:hidden p-2 text-slate-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
       </div>

       {/* Mobile Menu */}
       <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden bg-white border-t border-gray-100 absolute left-0 right-0 top-full shadow-lg"
          >
            <div className="flex flex-col p-6 gap-6 text-base font-medium text-slate-700">
              <NavLink to="/" className={getMobileLinkClass} onClick={() => setIsMenuOpen(false)}>Home</NavLink>
              <NavLink to="/about" className={getMobileLinkClass} onClick={() => setIsMenuOpen(false)}>About Us</NavLink>
              <NavLink to="/services" className={getMobileLinkClass} onClick={() => setIsMenuOpen(false)}>Services</NavLink>
              <a href="#" className="hover:text-slate-900 transition-colors">Why Choose Us</a>
              <NavLink to="/contact" className={getMobileLinkClass} onClick={() => setIsMenuOpen(false)}>Contact Us</NavLink>
              <button className="bg-[#C5A059] text-white px-6 py-3.5 rounded-xl text-sm font-medium hover:bg-[#B38F46] transition-colors shadow-sm mt-2 w-full">
                Request a Quote
              </button>
            </div>
          </motion.div>
        )}
       </AnimatePresence>
    </nav>
  );
}
