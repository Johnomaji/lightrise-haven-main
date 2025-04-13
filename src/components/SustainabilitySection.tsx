
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Globe, Heart, Droplets, Zap, Building, Recycle } from 'lucide-react';

const SustainabilitySection = () => {
  const sdgGoals = [
    {
      icon: Zap,
      title: "Affordable and Clean Energy",
      description: "We optimize energy usage in IT infrastructure to reduce carbon footprint.",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: Building,
      title: "Industry, Innovation and Infrastructure",
      description: "We build resilient infrastructure and foster innovation in businesses.",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Heart,
      title: "Good Health and Well-being",
      description: "We promote wellness through balanced digital workplace practices.",
      color: "from-red-400 to-red-600"
    },
    {
      icon: Globe,
      title: "Climate Action",
      description: "We implement cloud solutions that reduce on-premise infrastructure needs.",
      color: "from-green-400 to-green-600"
    },
    {
      icon: Recycle,
      title: "Responsible Consumption",
      description: "We embrace sustainable IT practices and proper e-waste management.",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: Droplets,
      title: "Clean Water and Sanitation",
      description: "We support water conservation through optimized data center usage.",
      color: "from-blue-300 to-teal-500"
    }
  ];

  return (
    <section id="sustainability" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-lightrise-blue mb-4">Our Impacts</h2>
          <p className="text-gray-600 mb-6">
            At Lightrise Consulting, we're committed to making a positive impact through our work. Our services
            are aligned with the UN Sustainable Development Goals.
          </p>
          <div className="w-20 h-1 bg-lightrise-amber mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sdgGoals.map((goal, index) => (
            <div key={index} className="animate-fade-in opacity-0" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
              <Card className="h-full border-transparent hover:border-lightrise-amber/30 transition-all duration-300 hover:shadow-lg">
                <CardContent className="pt-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${goal.color} flex items-center justify-center mb-4`}>
                    <goal.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-lightrise-blue mb-2">{goal.title}</h3>
                  <p className="text-gray-600">{goal.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
