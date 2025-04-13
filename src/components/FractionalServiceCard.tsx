
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface FractionalServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  benefits: string[];
}

const FractionalServiceCard = ({ title, description, icon: Icon, benefits }: FractionalServiceCardProps) => {
  return (
    <Card className="relative overflow-hidden h-full border-transparent hover:border-lightrise-purple/30 transition-all duration-300 hover:shadow-lg">
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-lightrise-purple to-lightrise-blue"></div>
      <CardHeader className="pb-2">
        <div className="bg-gradient-to-br from-lightrise-purple to-lightrise-purple-dark p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <CardDescription className="text-gray-600 mt-2">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Benefits:</h4>
        <ul className="space-y-2">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <svg className="h-5 w-5 text-lightrise-purple flex-shrink-0 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-gray-600">{benefit}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default FractionalServiceCard;
