
import React from 'react';
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-lightrise-blue/20 to-lightrise-amber/20 rounded-lg transform -rotate-3"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-lightrise-blue-dark rounded-lg overflow-hidden shadow-xl">
                <div className="aspect-w-16 aspect-h-9 bg-gray-800">
                  <div className="p-8 md:p-12 text-white">
                    <h3 className="text-2xl font-bold mb-6">The Lightrise Advantage</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <svg className="h-6 w-6 text-lightrise-amber flex-shrink-0 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Senior leadership team with 75+ years combined experience</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-6 w-6 text-lightrise-amber flex-shrink-0 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Integrated approach reducing vendor management by 60%</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-6 w-6 text-lightrise-amber flex-shrink-0 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Solutions that deliver average 250% ROI within 12 months</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-6 w-6 text-lightrise-amber flex-shrink-0 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Sustainability initiatives that enhance brand value by 15%</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-2xl md:text-3xl font-bold text-lightrise-blue mb-4">Executive-Focused Solutions</h2>
            <p className="text-gray-600 mb-6">
              Lightrise Consulting partners with directors and executive teams who need strategic technology solutions that deliver measurable business outcomes and competitive advantage.
            </p>
            <p className="text-gray-600 mb-6">
              Founded by former CIOs and HR executives, we understand the pressures of leadership and the need for solutions that align with board-level objectives while delivering operational excellence.
            </p>
            <p className="text-gray-600 mb-6">
              Our clients typically achieve cost reductions of 20-35% in their first year while simultaneously improving service quality, security posture, and sustainability metrics that matter to modern stakeholders.
            </p>
            <Button 
              className="bg-lightrise-blue hover:bg-lightrise-blue-light text-white" 
              asChild
            >
              <a href="#contact">Schedule an Executive Briefing</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
