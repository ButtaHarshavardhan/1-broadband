import React, { useEffect } from 'react';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 bg-slate-900 border-b border-slate-800 min-h-screen text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold mb-8 tracking-tight">Privacy Policy</h1>
        
        <div className="prose prose-invert prose-slate max-w-none space-y-6">
          <p className="text-slate-400"><strong>Last Updated:</strong> {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">1. Information We Collect</h2>
          <p className="text-slate-400 leading-relaxed">
            One Broadband ("we," "our," or "us") respects your privacy and is committed to protecting it through this Privacy Policy.
            We collect personal information that you provide to us, such as name, address, contact information, and payment details.
            We also automatically collect certain information when you visit, use, or navigate our services, including IP addresses,
            device characteristics, operating systems, and browser types.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">2. How We Use Your Information</h2>
          <p className="text-slate-400 leading-relaxed">
            We use personal information collected via our website or services for a variety of business purposes, including:
          </p>
          <ul className="list-disc pl-6 text-slate-400 space-y-2">
            <li>To facilitate account creation and logon process.</li>
            <li>To send administrative information to you.</li>
            <li>To fulfill and manage your orders and connectivity requests.</li>
            <li>To request feedback and contact you about your use of our Services.</li>
            <li>To protect our Services from fraud or unauthorized access.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">3. Will Your Information Be Shared?</h2>
          <p className="text-slate-400 leading-relaxed">
            We only share information with your consent, to comply with laws, to provide you with services, to protect your rights,
            or to fulfill business obligations. We securely process your data and do not sell your personal information to third-party marketing companies.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">4. Data Retention</h2>
          <p className="text-slate-400 leading-relaxed">
            We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">5. Contact Us</h2>
          <p className="text-slate-400 leading-relaxed">
            If you have questions or comments about this policy, you may email us at:
            <br />
            <strong>Email:</strong> Ballarionebroadband@gmail.com
            <br />
            <strong>Address:</strong> Amogha towers, second floor, 3rd road, Parvati nagar, Ballari, Karnataka 583101
          </p>
        </div>
      </div>
    </div>
  );
}
