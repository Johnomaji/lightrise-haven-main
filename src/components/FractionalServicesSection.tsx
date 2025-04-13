
import React from 'react';
import FractionalServiceCard from './FractionalServiceCard';
import { BarChart2, Briefcase, UserCog, Code } from 'lucide-react';

const FractionalServicesSection = () => {
  const fractionalServices = [
    {
      title: "Microsoft Project Management Blocks",
      description: "Access enhanced project leadership in flexible 5 to 60-day blocks. Our methodology ensures delivery on time and under budget while maximizing your Microsoft investment.",
      icon: Briefcase,
      benefits: [
        "5-day rapid assessment and roadmap planning",
        "10-day focused sprints with progress tracking",
        "20-day implementation blocks with optimized resource allocation",
        "60-day comprehensive project delivery",
        "Intelligent cross-functional alignment for Microsoft platforms"
      ]
    },
    {
      title: "Microsoft Platform Consultancy",
      description: "Specialized expertise across Microsoft's enterprise suite, delivering intelligent insights and accelerated implementation.",
      icon: BarChart2,
      benefits: [
        "PowerBI: Enhanced data visualization and business intelligence",
        "Dynamics 365: Optimized CRM and ERP implementations",
        "Teams/SharePoint: Advanced collaboration and document management",
        "Azure: Intelligent cloud infrastructure and application services",
        "Microsoft 365: Integrated productivity and security solutions with people-centered Copilot approaches to change"
      ]
    },
    {
      title: "Fractional Solution Architecture",
      description: "Access senior solution architects at a fraction of the cost of a full-time hire, delivering enterprise architecture that scales with your needs.",
      icon: Code,
      benefits: [
        "Technical roadmaps aligned to your business goals",
        "Technology selection saving 20-30% on costs",
        "Integration architecture reducing complexity by 40%",
        "Enhanced security and compliance frameworks",
        "Comprehensive documentation and knowledge transfer"
      ]
    }
  ];

  return (
    <section id="fractional" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-lightrise-blue mb-4">Microsoft Expertise in Flexible Time Blocks</h2>
          <p className="text-gray-600">
            Gain specialized Microsoft technology guidance in 5, 10, 20, or 60-day blocks, or opt for our fractional solution architecture services with ROI typically exceeding 200%.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {fractionalServices.map((service, index) => (
            <div key={index} className="animate-fade-in opacity-0" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
              <FractionalServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                benefits={service.benefits}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FractionalServicesSection;
