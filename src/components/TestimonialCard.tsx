
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  imageUrl?: string;
}

const TestimonialCard = ({ quote, author, role, company, imageUrl }: TestimonialCardProps) => {
  // Generate initials from the author's name
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };

  return (
    <Card className="h-full border-transparent hover:border-lightrise-blue/30 transition-all duration-300 hover:shadow-lg">
      <CardContent className="pt-6">
        <div className="flex items-center mb-4">
          <Avatar className="h-12 w-12 border-2 border-lightrise-amber mr-3">
            {imageUrl ? (
              <AvatarImage src={imageUrl} alt={author} />
            ) : (
              <AvatarFallback className="bg-lightrise-blue text-white">
                {getInitials(author)}
              </AvatarFallback>
            )}
          </Avatar>
          <svg className="h-6 w-6 text-lightrise-blue" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
        <p className="text-gray-700 italic mb-6">{quote}</p>
      </CardContent>
      <CardFooter className="border-t pt-4">
        <div>
          <p className="font-semibold text-lightrise-blue">{author}</p>
          <p className="text-sm text-gray-600">{role}, {company}</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default TestimonialCard;
