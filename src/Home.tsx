import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Wifi, Menu, X, Check, Phone, Mail, MapPin, ArrowRight, Zap, Shield, Globe, Activity, Sun, Wrench, Briefcase, Trophy, Clock } from 'lucide-react';
import { AuraButton } from './components/AuraButton';
import { SectorCard } from './components/SectorCard';
import { useNavigate } from 'react-router-dom';

export default function Home({ scrollToSection }: { scrollToSection: (href: string) => void }) {
  const [expandedSector, setExpandedSector] = useState<number | null>(null);
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-slate-800">
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
                Led by Madhav Reddy and Sreedhar R.M., ONE Broadband leverages over 15 years of industry experience to deliver high-speed, future-ready internet via an advanced fiber-optic network.
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
            
            <div className="flex justify-center w-full">
              <AuraButton onClick={() => navigate('/plans')} className="px-8 py-4 text-lg">
                View Our Plans
              </AuraButton>
            </div>
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
                img: 'https://i.ibb.co/VcXfNnQw/Bank-Image-2026-05-01-at-7-11-42-PM.jpg',
                content: (
                  <div className="text-sm text-slate-400 mt-4 space-y-3">
                    <p>For banking, uptime is a regulatory necessity. We prioritize military-grade security and zero-latency pathways.</p>
                    <p><strong className="text-white">Secure OFC Pathways:</strong> Private, encrypted fiber routes to ensure data privacy and prevent interception for core banking operations.</p>
                    <p><strong className="text-white">99.9% Uptime SLA:</strong> Proactive bandwidth maintenance and automatic failovers ensuring ATMs and servers never go offline.</p>
                  </div>
                )
              },
              {
                title: 'State Government / Central Government',
                category: 'Public Sector',
                img: 'https://i.ibb.co/234jpVf0/Gemini-Generated-Image-hz9qfshz9qfshz9q.png',
                content: (
                  <div className="text-sm text-slate-400 mt-4 space-y-3">
                    <p>ONE Broadband provides high-speed internet to the Bellary ZP office, specifically supporting the Assistant Executive Engineers in the Rural Development department with dedicated, reliable connectivity. Our robust fiber-optic network streamlines essential engineering operations and digital administration, ensuring the efficient execution of vital rural infrastructure projects. By powering these key departments, we remain a trusted partner in bridging the digital gap for district-level government initiatives.</p>
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
                    <p className="text-slate-400 text-sm mt-1">+91 93413 08850, +91 94483 23359</p>
                    <p className="text-slate-400 text-sm">Available Mon-Fri, 8am-8pm</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-slate-800 p-3 rounded-full shrink-0 border border-slate-700">
                    <Mail className="w-6 h-6 text-sky-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Email Us</h4>
                    <p className="text-slate-400 text-sm mt-1">Ballarionebroadband@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-slate-800 p-3 rounded-full shrink-0 border border-slate-700">
                    <MapPin className="w-6 h-6 text-sky-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Headquarters</h4>
                    <p className="text-slate-400 text-sm mt-1">Amogha towers, second floor, 3rd road, Parvati nagar, Ballari.</p>
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
              <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
                <input type="hidden" name="access_key" value="4c6e69f3-5edf-44d1-87d2-50b0fd2e4144" />
                <input type="hidden" name="subject" value="New Submission from One Broadband Contact Form" />
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-1">First Name</label>
                    <input type="text" name="first_name" required className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-transparent transition-all placeholder:text-slate-500" placeholder="Jane" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-1">Last Name</label>
                    <input type="text" name="last_name" required className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-transparent transition-all placeholder:text-slate-500" placeholder="Doe" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1">Email Address</label>
                  <input type="email" name="email" required className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-transparent transition-all placeholder:text-slate-500" placeholder="jane@example.com" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1">Phone Number</label>
                  <input type="tel" name="phone" className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-transparent transition-all placeholder:text-slate-500" placeholder="(555) 123-4567" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1">Message</label>
                  <textarea rows={4} name="message" required className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-transparent transition-all resize-none placeholder:text-slate-500" placeholder="How can we help you?"></textarea>
                </div>
                
                <AuraButton type="submit" className="w-full mt-2">
                  Send Message
                </AuraButton>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Srimadhav Solartech Section */}
      <section id="solartech" className="py-24 bg-amber-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 bg-white border border-yellow-500 rounded-3xl p-8 md:p-12 shadow-2xl">
            {/* Left Column - Details */}
            <div className="space-y-8 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center px-4 py-1 rounded-full border border-yellow-600 text-yellow-700 text-xs font-bold uppercase tracking-widest w-fit mb-6">
                  <span className="w-2 h-2 rounded-full bg-yellow-600 mr-2"></span> SOLAR ENERGY TECH
                </div>
                <h3 className="text-4xl md:text-5xl font-serif font-bold mb-2 text-slate-900">
                  SRIMADHAV <br className="hidden md:block"/>
                  <span className="text-yellow-600">SOLARTECH</span>
                </h3>
                <p className="text-xs font-bold tracking-[0.2em] text-slate-800 uppercase mb-8">
                  BALLARI &bull; HARNESS THE POWER OF THE SUN
                </p>
                <p className="text-slate-600 mb-8 max-w-md leading-relaxed">
                  Premium solar panel installation, maintenance & subsidy assistance for homes and businesses across Ballari region.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3 p-3 rounded-xl border border-yellow-200 bg-yellow-50/50">
                    <Sun className="w-5 h-5 text-yellow-600" />
                    <span className="text-sm font-semibold text-slate-800">Solar Installation</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl border border-yellow-200 bg-yellow-50/50">
                    <Clock className="w-5 h-5 text-slate-400" />
                    <span className="text-sm font-semibold text-slate-800">AMC & Maintenance</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl border border-yellow-200 bg-yellow-50/50">
                    <Briefcase className="w-5 h-5 text-amber-700" />
                    <span className="text-sm font-semibold text-slate-800">Govt. Subsidy Help</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl border border-yellow-200 bg-yellow-50/50">
                    <Activity className="w-5 h-5 text-red-500" />
                    <span className="text-sm font-semibold text-slate-800">Net Metering</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-xl border border-yellow-200 bg-yellow-50/50 mb-10 text-yellow-800 font-medium">
                  <Trophy className="w-5 h-5 text-yellow-600" />
                  <span>Trusted Solar Energy Partner in Ballari</span>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold tracking-widest text-yellow-700 mb-6 uppercase">Contact Information</h4>
                
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-yellow-100">
                  <div className="w-12 h-12 rounded-full bg-yellow-600 flex items-center justify-center text-white font-bold text-lg">
                    MR
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Managing Director</p>
                    <p className="text-lg font-bold text-slate-900">Madhav Reddy</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="p-2 border border-yellow-200 rounded-lg text-slate-500">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-yellow-700 uppercase tracking-widest">Phone</p>
                      <p className="text-sm font-bold text-slate-800">+91 93413 08850</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-2 border border-yellow-200 rounded-lg text-slate-500">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-yellow-700 uppercase tracking-widest">Gmail</p>
                      <p className="text-sm font-bold text-slate-800">srimadhavsolartech2025@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-2 border border-yellow-200 rounded-lg text-sky-500">
                      <Globe className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-yellow-700 uppercase tracking-widest">Website</p>
                      <p className="text-sm font-bold text-slate-800">www.srimadhavsolartech.in</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-2 border border-yellow-200 rounded-lg text-slate-500">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-yellow-700 uppercase tracking-widest">Hours</p>
                      <p className="text-sm font-bold text-slate-800">Mon – Sat | 9 AM – 6 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Email Form */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 h-full flex flex-col justify-center">
              <h4 className="text-2xl font-bold mb-2 text-slate-900">Request a Solar Quote</h4>
              <p className="text-sm text-slate-500 mb-8">Fill out the form below and our solar experts will get back to you with a free consultation.</p>
              
              <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
                <input type="hidden" name="access_key" value="4c6e69f3-5edf-44d1-87d2-50b0fd2e4144" />
                <input type="hidden" name="subject" value="New Solar Quote Request" />
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">First Name</label>
                    <input type="text" name="first_name" required className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all placeholder:text-slate-400 text-slate-800" placeholder="Jane" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Last Name</label>
                    <input type="text" name="last_name" required className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all placeholder:text-slate-400 text-slate-800" placeholder="Doe" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Email Address</label>
                  <input type="email" name="email" required className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all placeholder:text-slate-400 text-slate-800" placeholder="jane@example.com" />
                </div>
                
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Phone Number</label>
                  <input type="tel" name="phone" className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all placeholder:text-slate-400 text-slate-800" placeholder="+91 98765 43210" />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Property Type</label>
                  <select name="property_type" className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all text-slate-800">
                    <option value="Residential Home">Residential Home</option>
                    <option value="Commercial Building">Commercial Building</option>
                    <option value="Industrial Facility">Industrial Facility</option>
                    <option value="Agricultural Land">Agricultural Land</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Message</label>
                  <textarea rows={4} name="message" required className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all resize-none placeholder:text-slate-400 text-slate-800" placeholder="Tell us about your energy needs..."></textarea>
                </div>
                
                <button type="submit" className="w-full mt-4 bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl shadow-yellow-600/30">
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
