
import React from 'react';
import ServiceCard from './ServiceCard';
import { Users, Laptop, Shield, Globe, Heart, LineChart, Sparkles } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: "AI-Enhanced People Management",
      description: "Leverage Microsoft Copilot to streamline HR operations and reduce administrative costs by up to 25% while increasing employee satisfaction.",
      icon: Users,
      features: [
        "AI-powered onboarding reducing HR time investment by 40%",
        "Copilot-assisted compliance management that mitigates legal risks",
        "Intelligent payroll automation with 99.8% accuracy rate",
        "AI-driven performance insights and review systems",
        "Copilot-generated retention strategies reducing turnover by 20%"
      ]
    },
    {
      title: "Enabling Modern Work with Copilot",
      description: "Boost productivity by 35% with AI-powered tools, creating flexible, secure work environments that attract and retain top talent.",
      icon: Laptop,
      features: [
        "Microsoft 365 with Copilot optimization saving $400 per employee annually",
        "AI-enhanced hybrid work systems with 99.9% uptime",
        "Copilot-driven process automation reducing manual tasks by 60%",
        "AI collaboration tools decreasing meeting time by 30%",
        "Seamless system integration with intelligent AI connectors"
      ]
    },
    {
      title: "AI-Powered Cyber Security",
      description: "Protect your critical assets with Microsoft Copilot and enterprise-grade security that reduces breach risk by 85% and meets compliance requirements.",
      icon: Shield,
      features: [
        "AI threat detection identifying risks 200% faster than industry average",
        "Copilot-generated compliance frameworks for GDPR, HIPAA, and industry regulations",
        "Intelligent security solutions with ROI of 300% through breach prevention",
        "AI-tailored security training reducing phishing success by 90%",
        "24/7 monitoring with AI-assisted 15-minute average response time"
      ]
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video 
          className="min-h-full min-w-full absolute object-cover"
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-business-team-working-at-computers-in-an-open-office-4823-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white/90 z-10"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-lightrise-blue mb-4">AI-Powered Support 2 Days A Month For Your Business</h2>
          <p className="text-gray-600 mb-6">
            Our hands-on consulting provides direct, one-on-one guidance enhanced by Microsoft Copilot that addresses your specific challenges while delivering measurable ROI and operational excellence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="flex flex-col items-center p-4">
              <div className="h-12 w-12 rounded-full bg-lightrise-red/10 flex items-center justify-center mb-3">
                <Heart className="h-6 w-6 text-lightrise-red" />
              </div>
              <h3 className="text-lg font-semibold mb-2">AI-Personalized Approach</h3>
              <p className="text-sm text-center text-gray-600">We build relationships with your team, using Copilot to deliver customized guidance aligned with your business values.</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <div className="h-12 w-12 rounded-full bg-lightrise-amber/10 flex items-center justify-center mb-3">
                <Globe className="h-6 w-6 text-lightrise-amber" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Sustainable AI Impact</h3>
              <p className="text-sm text-center text-gray-600">Every AI-powered implementation considers long-term sustainability and positive environmental footprint.</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <div className="h-12 w-12 rounded-full bg-lightrise-purple/10 flex items-center justify-center mb-3">
                <LineChart className="h-6 w-6 text-lightrise-purple" />
              </div>
              <h3 className="text-lg font-semibold mb-2">AI-Measured Results</h3>
              <p className="text-sm text-center text-gray-600">We translate our Copilot-enhanced guidance into concrete metrics that demonstrate clear business value.</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="animate-fade-in opacity-0" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                features={service.features}
              />
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-lightrise-blue/10 to-lightrise-purple/10 rounded-lg p-6 md:p-8 animate-fade-in opacity-0 backdrop-blur-sm" style={{ animationDelay: '0.6s' }}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8">
              <h3 className="text-xl md:text-2xl font-bold text-lightrise-blue mb-3">Your Partnership Creates Global Impact</h3>
              <p className="text-gray-700 mb-4">
                With every engagement, we personally connect you to sustainable development projects aligned with the UN's 17 Sustainable Development Goals. As our client, you'll receive an annual impact report detailing how your partnership contributed to positive global change.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-lightrise-amber flex-shrink-0 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>10% of profits dedicated to UN SDG-aligned global development initiatives</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-lightrise-amber flex-shrink-0 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Personalized annual impact report showing your contributions to the SDGs</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-lightrise-amber flex-shrink-0 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Amplify your ESG initiatives through our sustainable development partnership</span>
                </li>
              </ul>
            </div>
            <div className="md:col-span-4 flex justify-center">
              <div className="w-full max-w-[200px] aspect-square bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center p-4 shadow-lg">
                <div className="text-center">
                  <p className="text-4xl font-bold text-lightrise-red">100+</p>
                  <p className="text-sm text-gray-600">Projects Supported</p>
                  <p className="text-sm text-gray-600 mt-1">Across 25 Countries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
