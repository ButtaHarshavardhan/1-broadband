import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Wifi, Menu, X, Check, Phone, Mail, MapPin, ArrowRight, Zap, Shield, Globe, Activity } from 'lucide-react';
import { Routes, Route, useNavigate, useLocation, Link } from 'react-router-dom';
import { AuraButton } from './components/AuraButton';
import Plans from './Plans';
import Home from './Home';
import PrivacyPolicy from './PrivacyPolicy';
import TermsOfService from './TermsOfService';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    
    if (location.pathname !== '/') {
      navigate('/' + href);
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="font-sans text-slate-100 bg-slate-900 min-h-screen">
      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          isScrolled ? 'bg-slate-900/90 backdrop-blur-md shadow-sm border-slate-800 py-3' : 'bg-slate-900/50 border-slate-800 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('#home')}>
            <img src="https://i.ibb.co/B20Xw2zc/1broadband-logo.png" alt="One Broadband Logo" className="h-10 w-auto object-contain" />
            <span className="text-xl font-bold tracking-tight text-white uppercase mt-1">
              One <span className="text-sky-400">Broadband</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center gap-6 ml-4">
              <a href="tel:+919341308850" className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-sky-400" />
                +91 93413 08850
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <a href="tel:+919341308850" className="p-2 text-sky-400 hover:text-sky-300 transition-colors">
              <Phone className="w-5 h-5" />
            </a>
            <button
              className="p-2 text-slate-400 hover:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-slate-900 pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-2xl font-semibold text-white border-b border-slate-800 pb-4"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col gap-4 mt-4">
                <a 
                  href="tel:+919341308850"
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-slate-800 border border-slate-700 text-white font-semibold text-lg hover:bg-slate-700 transition"
                >
                  <Phone className="w-5 h-5 text-sky-400" />
                  +91 93413 08850
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        <Routes>
          <Route path="/" element={<Home scrollToSection={scrollToSection} />} />
          <Route path="/plans" element={<Plans scrollToSection={scrollToSection} />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-slate-900">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-3 mb-4 cursor-pointer" onClick={() => scrollToSection('#home')}>
                <img src="https://i.ibb.co/B20Xw2zc/1broadband-logo.png" alt="One Broadband Logo" className="h-10 w-auto object-contain" />
                <span className="text-xl font-bold tracking-tight text-white uppercase mt-1">
                  One <span className="text-sky-400">Broadband</span>
                </span>
              </div>
              <p className="text-sm leading-relaxed mb-6">
                Connecting the world with ultra-fast, reliable, and affordable fiber internet.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/plans" className="hover:text-sky-400 transition-colors">Residential Plans</Link></li>
                <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }} className="hover:text-sky-400 transition-colors">Check Availability</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="hover:text-sky-400 transition-colors">About Us</a></li>
                <li><a href="#contact" className="hover:text-sky-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-sky-400 transition-colors">Help Center</a></li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between text-sm gap-4">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left">
              <p>&copy; {new Date().getFullYear()} One Broadband. All rights reserved.</p>
              <span className="hidden md:inline text-slate-800">|</span>
              <p className="text-slate-500">
                Designed and Built by{' '}
                <a 
                  href="https://vertexflows.in" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-medium text-slate-400 hover:text-sky-400 transition-colors"
                >
                  Vertex Flows
                </a>
              </p>
            </div>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link to="/privacy" className="hover:text-sky-400 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-sky-400 transition-colors">Terms of Service</Link>
              <Link to="/privacy" className="hover:text-sky-400 transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
