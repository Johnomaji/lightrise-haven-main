import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Lock, Cookie, Mail, ChevronRight } from 'lucide-react';

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "Purpose",
      icon: <Shield className="h-5 w-5 text-lightrise-blue" />,
      content: (
        <>
          <p className="mb-4">This privacy policy informs users of our Site about:</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            {["Personal data we collect", "Use of collected data", "Who accesses the data", 
              "User rights", "Cookie policy"].map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <p>This policy supplements our Site's terms and conditions.</p>
        </>
      )
    },
    {
      title: "GDPR Compliance",
      icon: <Lock className="h-5 w-5 text-lightrise-purple" />,
      highlight: true,
      content: (
        <>
          <p className="mb-4">
            We adhere to GDPR (EU 2016/679) for EU users and the Data Protection Act 2018 for UK users.
          </p>
          <p>
            No Data Protection Officer appointed as we don't meet Article 37 requirements.
          </p>
        </>
      )
    },
    {
      title: "Your Data",
      icon: <Mail className="h-5 w-5 text-lightrise-amber" />,
      content: (
        <>
          <h3 className="font-semibold mb-2 mt-4">What We Collect</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {["First/last name", "Email address", "Phone number", 
              "Address", "Payment info"].map((item, i) => (
              <div key={i} className="flex items-center">
                <ChevronRight className="h-4 w-4 text-lightrise-blue mr-2" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <h3 className="font-semibold mb-2">Collection Methods</h3>
          <p>Contact forms and booking systems</p>
        </>
      )
    },
    {
      title: "Cookie Policy",
      icon: <Cookie className="h-5 w-5 text-lightrise-red" />,
      highlight: true,
      content: (
        <>
          <p className="mb-4">
            Cookies are small files stored on your device to track browsing habits. 
            You can disable them but this may affect site functionality.
          </p>
          <div className="space-y-3">
            {[
              { type: "Analytical", desc: "Improve site design and functionality" },
              { type: "Targeting", desc: "Personalize your experience" },
              { type: "Third-party", desc: "Tailor advertisements" }
            ].map((cookie, i) => (
              <div key={i} className="bg-white/50 p-3 rounded-lg">
                <h4 className="font-semibold text-lightrise-blue">{cookie.type} Cookies</h4>
                <p className="text-sm">{cookie.desc}</p>
              </div>
            ))}
          </div>
        </>
      )
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-lightrise-blue mb-2">
            Privacy Policy
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-lightrise-blue to-lightrise-purple mx-auto rounded-full" />
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Last updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>

        <div className="mb-8 p-6 bg-gradient-to-r from-lightrise-blue/5 to-lightrise-purple/10 rounded-xl">
          <div className="flex items-start">
            <div className="bg-lightrise-blue/10 p-3 rounded-full mr-4">
              <Shield className="h-6 w-6 text-lightrise-blue" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-lightrise-blue mb-2">
                Lightrise Consulting Ltd
              </h2>
              <p className="text-gray-700">
                Owner and operator of www.lightriseconsulting.com
              </p>
              <p className="mt-2">
                <span className="font-medium">Contact:</span> hello@lightriseconsulting.com
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {sections.map((section, index) => (
            <div 
              key={index}
              className={`rounded-xl p-6 ${section.highlight 
                ? 'bg-gradient-to-r from-lightrise-blue/5 to-lightrise-purple/5 border border-lightrise-blue/20' 
                : 'bg-white shadow-sm border border-gray-100'}`}
            >
              <div className="flex items-center mb-4">
                {section.icon}
                <h2 className="text-xl font-bold ml-2 text-lightrise-blue">
                  {section.title}
                </h2>
              </div>
              <div className="text-gray-700">
                {section.content}
              </div>
            </div>
          ))}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-lightrise-blue mb-3">
                Your Rights
              </h3>
              <ul className="space-y-2">
                {["Right to be informed", "Right of access", "Right to rectification",
                  "Right to erasure", "Right to restrict processing", 
                  "Right to data portability", "Right to object"].map((right, i) => (
                  <li key={i} className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-lightrise-blue mr-2 mt-0.5 flex-shrink-0" />
                    <span>{right}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-lightrise-blue mb-3">
                Contact & Complaints
              </h3>
              <p className="mb-4">
                For privacy concerns or to exercise your rights, contact our Privacy Officer:
              </p>
              <div className="bg-lightrise-blue/5 p-4 rounded-lg mb-4">
                <p className="font-semibold">Gareth Jones</p>
                <p>hello@lightriseconsulting.com</p>
              </div>
              <Button className="w-full bg-lightrise-blue hover:bg-lightrise-blue/90">
                <Mail className="h-4 w-4 mr-2" /> Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;