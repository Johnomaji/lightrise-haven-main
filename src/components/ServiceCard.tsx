
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

const ServiceCard = ({ title, description, icon: Icon, features }: ServiceCardProps) => {
  return (
    <Card className="h-full transition-all duration-300 hover:shadow-lg border-transparent hover:border-lightrise-red/30">
      <CardHeader className="pb-2">
        <div className="bg-gradient-to-br from-lightrise-blue to-lightrise-blue-light p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <CardDescription className="text-gray-600 mt-2">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg className="h-5 w-5 text-lightrise-red flex-shrink-0 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
