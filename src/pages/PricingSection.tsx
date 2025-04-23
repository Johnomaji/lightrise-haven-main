import React, { useState } from 'react';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Shield, Zap, Globe, Star, BadgeCheck } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const pricingTiers = [
    {
      name: "CybersSecure™",
      price: {
        monthly: "$79.99",
        annual: "$63.99" // 20% off
      },
      description: "Fortify your vision and environment with comprehensive security",
      features: [
        "Advanced threat intelligence and monitoring",
        "Proactive information protection",
        "Management dashboard access",
        "Remote Management & Training",
        "Regular updates and reports",
        "24/7 Security Support",
        "Dedicated Account Manager",
        "Tailored Solutions Recommendations",
        "Monthly security monitoring",
        "Annual Security Impact Report"
      ],
      icon: Shield,
      featured: false,
      accentColor: "lightrise-blue"
    },
    {
      name: "Modern Work",
      price: {
        monthly: "$23.99",
        annual: "$19.19" // 20% off
      },
      description: "Transform applications and activities for modern users",
      features: [
        "Strategic Planning and Roadmapping",
        "Financial and operational optimization",
        "Automation and process improvement",
        "Risk and challenge management",
        "Strategic alignment tools",
        "Product collaboration features",
        "Self-Support portal",
        "Dedicated Account Manager",
        "Business Requirements & Customization",
        "Annual Position Impact Report"
      ],
      icon: Zap,
      featured: true,
      accentColor: "lightrise-amber"
    },
    {
      name: "SkySecureHR™",
      price: {
        monthly: "$9.99",
        annual: "$7.99" // 20% off
      },
      description: "Manage profiles, presentations and compliance effortlessly",
      features: [
        "Energy and resource management",
        "Information architecture tools",
        "Legal and compliance team support",
        "Performance evaluation systems",
        "Workflow automation",
        "All-in-one employee portal",
        "Development progress tracking",
        "Monthly implementation support",
        "Office & Release management",
        "Annual Compliance Report"
      ],
      icon: Globe,
      featured: false,
      accentColor: "lightrise-purple"
    }
  ];

  return (
    <>
      <Header /> {/* Add the Header component here */}
    <section id="pricing" className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-white via-white/95 to-white/90">
      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-lightrise-blue mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-600 mb-6">
            Choose the plan that fits your needs. All plans include our AI-powered support and sustainable development contributions.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-8">
            <span className={`mr-3 font-medium ${billingCycle === 'monthly' ? 'text-lightrise-blue' : 'text-gray-500'}`}>Monthly</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer" 
                checked={billingCycle === 'annual'}
                onChange={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-lightrise-blue"></div>
            </label>
            <span className={`ml-3 font-medium ${billingCycle === 'annual' ? 'text-lightrise-blue' : 'text-gray-500'}`}>
              Annual <span className="text-lightrise-amber">(20% off)</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <div 
              key={index} 
              className={`animate-fade-in opacity-0 ${tier.featured ? 'md:mt-[-1rem]' : ''}`} 
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <Card className={`h-full border-transparent hover:border-${tier.accentColor}/30 transition-all duration-300 hover:shadow-xl group relative overflow-hidden ${tier.featured ? 'ring-2 ring-lightrise-amber' : ''}`}>
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${tier.accentColor}/5 to-lightrise-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {tier.featured && (
                  <div className="absolute top-0 right-0 bg-lightrise-amber text-white px-3 py-1 text-xs font-bold rounded-bl-lg">
                    MOST POPULAR
                  </div>
                )}

                <CardHeader className="border-b p-6">
                  <div className="flex items-center mb-2">
                    <tier.icon className={`h-5 w-5 mr-2 text-${tier.accentColor}`} />
                    <h3 className="text-xl font-bold text-lightrise-blue">{tier.name}</h3>
                  </div>
                  <div className="flex items-end">
                    <span className="text-3xl font-bold">{tier.price[billingCycle]}</span>
                    <span className="text-gray-600 ml-1">/user/month</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">{tier.description}</p>
                </CardHeader>
                
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex">
                        <Check className={`h-5 w-5 text-${tier.accentColor} mr-2 mt-0.5 flex-shrink-0`} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                <CardFooter className="p-6">
                  <Button 
                    className={`w-full bg-${tier.accentColor} hover:bg-${tier.accentColor}/90 transition-all group-hover:shadow-lg group-hover:-translate-y-0.5`}
                  >
                    Start Free Trial
                    {tier.featured && <Star className="ml-2 h-4 w-4 fill-white" />}
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-lightrise-blue/10 to-lightrise-purple/10 rounded-lg p-6 md:p-8 animate-fade-in opacity-0 backdrop-blur-sm" style={{ animationDelay: '0.6s' }}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8">
              <h3 className="text-xl md:text-2xl font-bold text-lightrise-blue mb-3">All Plans Include</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <BadgeCheck className="h-5 w-5 text-lightrise-amber mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Sustainable Impact</h4>
                    <p className="text-sm text-gray-600">10% of your payment supports UN SDG projects</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <BadgeCheck className="h-5 w-5 text-lightrise-amber mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">AI Support</h4>
                    <p className="text-sm text-gray-600">Copilot-enhanced assistance in all plans</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-4 flex justify-center">
              <div className="w-full max-w-[200px] aspect-square bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center p-4 shadow-lg">
                <div className="text-center">
                  <p className="text-4xl font-bold text-lightrise-red">30</p>
                  <p className="text-sm text-gray-600">Day Free Trial</p>
                  <p className="text-sm text-gray-600 mt-1">No Credit Card Needed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </section>
    <Footer />
    </>
    
    
  );
};

export default PricingSection;