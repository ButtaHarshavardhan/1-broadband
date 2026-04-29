import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Wifi, Menu, X, Check, Phone, Mail, MapPin, ArrowRight, Zap, Shield, Globe, Activity } from 'lucide-react';
import { AuraButton } from './components/AuraButton';

const SectorCard = ({ post, delay, expanded, onClick }: { post: any, delay: number, expanded: boolean, onClick: () => void, key?: React.Key }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 cursor-pointer shadow-lg hover:border-sky-500/50 transition-colors"
      onClick={onClick}
    >
      <div className="relative h-60 overflow-hidden">
        <img 
          src={post.img} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4">
           <span className="text-white backdrop-blur-md bg-black/50 border border-white/10 px-3 py-1 rounded-full text-xs font-medium">{post.category}</span>
        </div>
      </div>
      <div className="p-6">
        <h4 className="text-xl font-bold text-white transition-colors leading-snug mb-3 hover:text-sky-400">
          {post.title}
        </h4>
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              {post.content}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedSector, setExpandedSector] = useState<number | null>(null);

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
            <div className="flex items-center gap-4 ml-4">
              <AuraButton onClick={() => scrollToSection('#contact')}>
                Check Availability
              </AuraButton>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-400 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
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
                <AuraButton 
                  onClick={() => scrollToSection('#contact')}
                  className="w-full justify-center"
                >
                  Check Availability
                </AuraButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-slate-800">
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 pointer-events-none">
            <div className="w-[800px] h-[800px] bg-sky-900/20 rounded-full filter blur-[120px] opacity-70"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-7 flex flex-col justify-center gap-6"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold uppercase tracking-widest w-fit">
                  Hyper-Fast Fiber Technology
                </div>
                <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-white">
                  Connectivity <br/> Without <span className="text-sky-400 italic font-serif">Limits.</span>
                </h1>
                <p className="text-lg text-slate-400 max-w-lg mb-2">
                  Experience symmetrical gigabit speeds and zero-latency gaming. We bring next-gen fiber straight to your doorstep.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-xl w-full">
                  <input type="text" placeholder="Enter Postcode (e.g. SW1A 1AA)" className="flex-1 px-6 py-4 rounded-2xl bg-slate-800 border border-slate-700 focus:outline-none focus:ring-1 focus:ring-sky-500 text-white placeholder:text-slate-500" />
                  <AuraButton onClick={() => scrollToSection('#contact')} className="flex-shrink-0">
                    Check Availability
                  </AuraButton>
                </div>
                
                <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 mt-2">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-sky-500" /> No Hidden Fees
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-sky-500" /> 24/7 Tech Support
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-5 relative lg:h-[500px] flex items-center justify-center"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-sky-500 to-indigo-600 rounded-3xl transform rotate-3 scale-105 opacity-20 blur-xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop" 
                  alt="Happy family using fast internet" 
                  className="relative z-10 w-full h-full object-cover rounded-3xl shadow-2xl border border-slate-800"
                />
                
                {/* Floating badge */}
                <div className="absolute -bottom-6 -left-6 bg-slate-800 p-6 rounded-2xl shadow-xl border border-slate-700 z-20 flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
                  <div className="bg-sky-500/20 p-3 rounded-full">
                    <Check className="w-8 h-8 text-sky-400" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 font-medium">Customer Review</div>
                    <div className="text-lg font-bold text-white">"Incredibly fast!"</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-slate-900 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-2 md:order-1"
              >
                <div className="grid grid-cols-2 gap-4 items-start">
                  <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-xl h-64 relative">
                    <img src="https://i.ibb.co/QFq4L71t/Gemini-Generated-Image-q02fdvq02fdvq02f-1.png" alt="Fiber optic cables" className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                  <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-xl mt-8 h-64 relative">
                    <img src="https://i.ibb.co/GfytBq2J/Gemini-Generated-Image-q02fdvq02fdvq02f.png" alt="Server room" className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-1 md:order-2"
              >
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold uppercase tracking-widest w-fit mb-4">
                  About Us
                </div>
                <h3 className="text-4xl font-extrabold text-white mb-6 tracking-tight">Connecting communities since 2010.</h3>
                <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                  Led by Sreedhar R. M. and Managing Director Madhav Reddy, ONE Broadband leverages over 15 years of industry experience to deliver high-speed, future-ready internet via an advanced fiber-optic network.
                </p>
                <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                  The company is the most trusted and cost-effective choice in the market, offering premium bandwidth and integrated OTT plans at rates significantly cheaper than competitors.
                </p>
                <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                  Dedicated to serving thousands of satisfied subscribers, ONE Broadband provides a seamless and dependable digital experience built on technical excellence.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="p-4 rounded-xl border border-slate-800 bg-slate-800/50">
                    <h4 className="font-bold text-white text-3xl mb-1 flex items-baseline gap-1">99.9%</h4>
                    <p className="text-slate-400 text-sm font-medium">Uptime Guarantee</p>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-800 bg-slate-800/50">
                    <h4 className="font-bold text-white text-3xl mb-1 flex items-baseline gap-1">24/7</h4>
                    <p className="text-slate-400 text-sm font-medium">Local Support</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-slate-900 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold uppercase tracking-widest w-fit mb-4">Our Plan/ Month</div>
              <h3 className="text-4xl font-extrabold text-white mb-10 tracking-tight">Choose the perfect speed for your needs</h3>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-left bg-slate-800/50 p-8 md:p-10 rounded-3xl border border-slate-700 shadow-xl mb-12"
              >
                <h4 className="text-2xl font-bold text-white mb-8 text-center">Why choose us?</h4>
                <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
                  <div className="space-y-8 text-slate-300">
                    <div className="flex gap-4">
                      <div className="bg-sky-500/20 p-3 rounded-full text-sky-400 shrink-0 h-fit">
                        <Zap className="w-6 h-6" />
                      </div>
                      <div>
                        <strong className="text-lg text-white block mb-2">Blazing Fast Speeds</strong>
                        <p className="text-slate-400">Experience symmetrical upload and download speeds perfectly tailored for streaming, gaming, and remote work.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="bg-sky-500/20 p-3 rounded-full text-sky-400 shrink-0 h-fit">
                        <Shield className="w-6 h-6" />
                      </div>
                      <div>
                        <strong className="text-lg text-white block mb-2">Unmatched Reliability</strong>
                        <p className="text-slate-400">Backed by our 99.9% uptime SLA, your connection will stay strong exactly when you need it the most.</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-8 text-slate-300">
                    <div className="flex gap-4">
                      <div className="bg-sky-500/20 p-3 rounded-full text-sky-400 shrink-0 h-fit">
                        <Globe className="w-6 h-6" />
                      </div>
                      <div>
                        <strong className="text-lg text-white block mb-2">Unlimited Data</strong>
                        <p className="text-slate-400">No data caps, no throttling. Ever. Enjoy truly unlimited potential with every connection plan.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="bg-sky-500/20 p-3 rounded-full text-sky-400 shrink-0 h-fit">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <strong className="text-lg text-white block mb-2">Local & Dedicated Support</strong>
                        <p className="text-slate-400">Our expert team based right here is available 24/7. When you call, a real person answers.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <AuraButton onClick={() => scrollToSection('#contact')} className="px-8 py-4 text-lg">
                View Our Plans
              </AuraButton>
            </div>
          </div>
        </section>

        {/* Sectors Section */}
        <section id="sectors" className="py-24 bg-slate-900 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div className="max-w-2xl">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold uppercase tracking-widest w-fit mb-4">Industries</div>
                <h3 className="text-4xl font-extrabold text-white tracking-tight">Sectors We Serve</h3>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Education: Medical & Engineering Colleges',
                  category: 'Education',
                  img: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop',
                  content: (
                    <div className="text-sm text-slate-400 mt-4 space-y-3">
                      <p>Modern campuses require massive data throughput for high-resolution research and seamless student connectivity.</p>
                      <p><strong className="text-white">Hyper-Scale Bandwidth:</strong> Dedicated 1:1 leased lines to support thousands of concurrent users without speed drops during peak hours.</p>
                      <p><strong className="text-white">Campus-Wide WiFi:</strong> High-density mesh solutions for seamless roaming across lecture halls, laboratories, and hostels.</p>
                    </div>
                  )
                },
                {
                  title: 'Financial Sector: Banks (Ballari)',
                  category: 'Finance',
                  img: 'https://images.unsplash.com/photo-1501167733086-cb7f9c8da4c8?q=80&w=1974&auto=format&fit=crop',
                  content: (
                    <div className="text-sm text-slate-400 mt-4 space-y-3">
                      <p>For banking, uptime is a regulatory necessity. We prioritize military-grade security and zero-latency pathways.</p>
                      <p><strong className="text-white">Secure OFC Pathways:</strong> Private, encrypted fiber routes to ensure data privacy and prevent interception for core banking operations.</p>
                      <p><strong className="text-white">99.9% Uptime SLA:</strong> Proactive bandwidth maintenance and automatic failovers ensuring ATMs and servers never go offline.</p>
                    </div>
                  )
                },
                {
                  title: 'Public/Government Sector',
                  category: 'Public Sector',
                  img: 'https://images.unsplash.com/photo-1523531294919-4bab31acd8e3?q=80&w=2070&auto=format&fit=crop',
                  content: (
                    <div className="text-sm text-slate-400 mt-4 space-y-3">
                      <p>Railway environments require rugged, high-performance connectivity that can withstand extreme physical conditions.</p>
                      <p><strong className="text-white">Ruggedized OFC Cabling:</strong> Industrial-grade fiber deployment designed to handle the vibrations and environmental stress of railway tracks.</p>
                      <p><strong className="text-white">Public Hotspots &amp; Monitoring:</strong> High-capacity WiFi for passenger terminals and 24/7 NOC support to manage high-mobility traffic zones.</p>
                    </div>
                  )
                }
              ].map((post, i) => (
                <SectorCard 
                  key={i} 
                  post={post} 
                  delay={i * 0.1} 
                  expanded={expandedSector === i}
                  onClick={() => setExpandedSector(expandedSector === i ? null : i)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-slate-900 border-b border-slate-800 text-white relative overflow-hidden">
          {/* Subtle bg pattern */}
          <div className="absolute inset-0 opacity-5 blur-[100px]" style={{ backgroundImage: 'radial-gradient(#0ea5e9 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold uppercase tracking-widest w-fit mb-4">Contact Us</div>
                <h3 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Ready to switch to faster internet?</h3>
                <p className="text-lg text-slate-400 mb-10 max-w-md leading-relaxed">
                  Have questions about our plans or need help setting up? Our dedicated support team is available 24/7.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-slate-800 p-3 rounded-full shrink-0 border border-slate-700">
                      <Phone className="w-6 h-6 text-sky-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white">Call Us</h4>
                      <p className="text-slate-400 text-sm mt-1">+91 94483 23359, +91 93413 08850</p>
                      <p className="text-slate-400 text-sm">Available Mon-Fri, 8am-8pm</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-slate-800 p-3 rounded-full shrink-0 border border-slate-700">
                      <Mail className="w-6 h-6 text-sky-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white">Email Us</h4>
                      <p className="text-slate-400 text-sm mt-1">support@onebroadband.com</p>
                      <p className="text-slate-400 text-sm">sales@onebroadband.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-slate-800 p-3 rounded-full shrink-0 border border-slate-700">
                      <MapPin className="w-6 h-6 text-sky-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white">Headquarters</h4>
                      <p className="text-slate-400 text-sm mt-1">Gandhi Nagar, Ballari<br/>Karnataka, 583101</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-slate-800 border border-slate-700 rounded-3xl p-8 md:p-10 shadow-2xl text-white"
              >
                <h4 className="text-2xl font-bold mb-6">Send us a message</h4>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-400 mb-1">First Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-transparent transition-all placeholder:text-slate-500" placeholder="Jane" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-400 mb-1">Last Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-transparent transition-all placeholder:text-slate-500" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-1">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-transparent transition-all placeholder:text-slate-500" placeholder="jane@example.com" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-1">Phone Number</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-transparent transition-all placeholder:text-slate-500" placeholder="(555) 123-4567" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-1">Message</label>
                    <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-transparent transition-all resize-none placeholder:text-slate-500" placeholder="How can we help you?"></textarea>
                  </div>
                  
                  <AuraButton type="submit" className="w-full mt-2">
                    Send Message
                  </AuraButton>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
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
                <li><a href="#" className="hover:text-sky-400 transition-colors">Residential Plans</a></li>
                <li><a href="#" className="hover:text-sky-400 transition-colors">Business Solutions</a></li>
                <li><a href="#" className="hover:text-sky-400 transition-colors">Fiber Expansion</a></li>
                <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }} className="hover:text-sky-400 transition-colors">Check Availability</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="hover:text-sky-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-sky-400 transition-colors">Careers</a></li>
                <li><a href="#sectors" className="hover:text-sky-400 transition-colors">Sectors</a></li>
                <li><a href="#contact" className="hover:text-sky-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-sky-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-sky-400 transition-colors">Network Status</a></li>
                <li><a href="#" className="hover:text-sky-400 transition-colors">Pay Bill</a></li>
                <li><a href="#" className="hover:text-sky-400 transition-colors">Test Speed</a></li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between text-sm">
            <p>&copy; {new Date().getFullYear()} One Broadband. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-sky-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-sky-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-sky-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
