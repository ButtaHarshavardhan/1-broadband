import React, { useEffect } from 'react';

export default function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 bg-slate-900 border-b border-slate-800 min-h-screen text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold mb-8 tracking-tight">Terms of Service</h1>
        
        <div className="prose prose-invert prose-slate max-w-none space-y-6">
          <p className="text-slate-400"><strong>Last Updated:</strong> {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">1. Agreement to Terms</h2>
          <p className="text-slate-400 leading-relaxed">
            By using the services provided by One Broadband ("we," "our," or "us"), you agree to abide by these Terms of Service.
            If you do not agree with any of these terms, you are prohibited from using or accessing our broadband services and the site.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">2. Use License</h2>
          <p className="text-slate-400 leading-relaxed">
            Payment for services grants you a non-exclusive, non-transferable license to access our internet services strictly for residential or commercial use based on the plan selected. You may not:
          </p>
          <ul className="list-disc pl-6 text-slate-400 space-y-2">
            <li>Resell the bandwidth or services provided by One Broadband.</li>
            <li>Use the services for any illegal or unauthorized purpose.</li>
            <li>Attempt to decompile or reverse engineer any software or hardware provided.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">3. Service Uptime and Limits</h2>
          <p className="text-slate-400 leading-relaxed">
            While we strive for a 99.9% uptime, occasional disruptions may occur due to maintenance or acts of nature. We offer unlimited data usage for most plans; however, actual speeds may vary based on network load, hardware, and external factors.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">4. Billing and Payment</h2>
          <p className="text-slate-400 leading-relaxed">
            Services are billed on a prepaid basis depending on the duration selected. Failure to make payments on time will result in temporary suspension of the connection until dues are cleared.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">5. Governing Law</h2>
          <p className="text-slate-400 leading-relaxed">
            These terms and conditions are governed by and construed in accordance with the laws of India. Any disputes will be subject to the exclusive jurisdiction of the courts located in Ballari, Karnataka.
          </p>
        </div>
      </div>
    </div>
  );
}
