import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Check, Wifi, Shield, Globe } from 'lucide-react';
import { AuraButton } from './components/AuraButton';
import { useNavigate } from 'react-router-dom';

export default function Plans({ scrollToSection }: { scrollToSection: (href: string) => void }) {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const plans = [
    { speed: '50 Mbps', price: '499' },
    { speed: '60 Mbps', price: '599' },
    { speed: '75 Mbps', price: '699' },
    { speed: '100 Mbps', price: '799', popular: true },
    { speed: '150 Mbps', price: '899' },
    { speed: '200 Mbps', price: '999' },
  ];

  return (
    <div className="pt-32 pb-24 bg-slate-900 border-b border-slate-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold uppercase tracking-widest w-fit mb-4">Our Plans / Month</div>
          <h1 className="text-5xl font-extrabold text-white mb-6 tracking-tight">Choose the perfect speed for your needs</h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            All are residential plans featuring Unlimited Data and symmetrical upload and download speeds. We provide a Dual Band Router for plans up to 100 Mbps, and a Gigabit Router for plans above 100 Mbps.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const isGigabit = parseInt(plan.speed) > 100;
            return (
              <motion.div
                key={plan.speed}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`${plan.popular ? 'bg-gradient-to-br from-sky-600 to-indigo-700 border border-white/10 shadow-2xl relative transform md:-translate-y-4' : 'bg-slate-800 border-slate-700 shadow-lg'} p-8 rounded-3xl border relative overflow-hidden`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-white text-indigo-700 px-4 py-1.5 rounded-bl-xl text-xs font-bold uppercase tracking-wider shadow-md">
                    Most Popular
                  </div>
                )}
                
                <h4 className="text-2xl font-bold text-white mb-2">{plan.speed} Plan</h4>
                
                <div className={`mb-6 pb-6 border-b ${plan.popular ? 'border-white/20' : 'border-slate-800'}`}>
                  <span className="text-5xl font-extrabold text-white">₹{plan.price}</span>
                  <span className={`${plan.popular ? 'text-blue-200' : 'text-slate-500'} font-medium`}>/mo</span>
                </div>
                
                <ul className={`space-y-4 mb-8 ${plan.popular ? 'text-blue-50' : 'text-slate-300'}`}>
                  <li className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 mt-0.5 ${plan.popular ? 'text-white' : 'text-sky-500'}`} />
                    <span>{plan.speed} Symmetrical Speeds</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 mt-0.5 ${plan.popular ? 'text-white' : 'text-sky-500'}`} />
                    <span>Unlimited Data</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Wifi className={`w-5 h-5 shrink-0 mt-0.5 ${plan.popular ? 'text-white' : 'text-sky-500'}`} />
                    <span>{isGigabit ? 'Gigabit Router Included' : 'Dual Band Router Included'}</span>
                  </li>
                </ul>
                
                <AuraButton 
                  onClick={() => scrollToSection('#contact')} 
                  className="w-full"
                >
                  Select Plan
                </AuraButton>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
