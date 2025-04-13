
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, BarChart, Building2, TrendingUp, Users, Calendar, Lock } from 'lucide-react';

const OurStorySection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = React.useState(false);

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };

  return (
    <section id="our-story" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-lightrise-blue mb-3">Our Story</h2>
          <div className="w-20 h-1 bg-lightrise-amber mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From vision to reality — how we're helping businesses across the UK, US and Europe achieve 
            their technology transformation goals while creating positive social impact.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative rounded-xl overflow-hidden shadow-2xl bg-black aspect-video order-2 md:order-1">
            {isVideoPlaying ? (
              <iframe 
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                title="Lightrise Consulting Story"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Technology Consultants Meeting" 
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <Button 
                  onClick={handlePlayVideo}
                  className="bg-lightrise-amber hover:bg-lightrise-amber-light text-white rounded-full w-20 h-20 flex items-center justify-center z-10 shadow-lg transition-transform transform hover:scale-110"
                >
                  <Play className="h-10 w-10" />
                </Button>
              </div>
            )}
          </div>

          <div className="order-1 md:order-2">
            <Card className="bg-white border-none shadow-lg p-2 mb-6 rounded-xl">
              <div className="p-6 border-l-4 border-lightrise-blue rounded-lg bg-gray-50">
                <p className="text-gray-700 mb-4 text-lg font-medium">
                  Lightrise Consulting began with a simple mission: to bring enterprise-level expertise to organisations of all sizes without the overwhelming costs or complexity, while being a business for good.
                </p>
                <p className="text-gray-700">
                  Founded by technology leaders with decades of enterprise experience, we recognised that many businesses struggle to bridge the gap between their strategic vision and technological implementation, especially in the rapidly evolving worlds of AI and Microsoft Cloud solutions.
                </p>
              </div>
            </Card>
            
            <p className="text-gray-600 mb-6 pl-4 border-l border-gray-300">
              Today, we provide your SMB with support from implementation to enhancement, with sustainable cloud business applications that deliver measurable business outcomes and making a positive impacts aligned with the 17 UN Sustainable Development Goals. Our approach combines deep technical knowledge with practical business acumen, ensuring that every solution we design creates lasting value for both our clients and society.
            </p>
            
            <p className="text-gray-700 font-medium pl-4 border-l-2 border-lightrise-amber">
              We believe in partnerships, not just projects—working alongside our clients across the UK, US, and Europe to illuminate paths to success that were previously hidden in technological complexity while contributing to a better world through responsible business practices.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-gray-50 rounded-xl p-8 shadow-md">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-lightrise-blue">The Microsoft Cloud Advantage</h3>
            <p className="text-gray-600 mt-2">Our solutions leverage Microsoft's powerful ecosystem to drive your success</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="mx-auto w-14 h-14 bg-lightrise-blue/10 rounded-full flex items-center justify-center mb-4">
                <BarChart className="h-7 w-7 text-lightrise-blue" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">85%</h4>
              <p className="text-gray-600 text-sm">of Fortune 100 companies use Microsoft AI solutions to transform their businesses</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="mx-auto w-14 h-14 bg-lightrise-amber/10 rounded-full flex items-center justify-center mb-4">
                <Building2 className="h-7 w-7 text-lightrise-amber" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">47%</h4>
              <p className="text-gray-600 text-sm">cost savings on average when businesses migrate their infrastructure to Microsoft Cloud</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="mx-auto w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="h-7 w-7 text-green-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">4x</h4>
              <p className="text-gray-600 text-sm">faster cloud migration with Microsoft's proven methodology and partner ecosystem</p>
            </div>
          </div>
          
          <div className="mt-8 text-center text-gray-500 text-sm">
            <p>Source: Microsoft Digital Transformation and Cloud Business Impact Studies, 2023</p>
          </div>
        </div>

        <div className="mt-12 bg-lightrise-blue/5 rounded-xl p-8 shadow-sm border border-lightrise-blue/20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8">
              <h3 className="text-2xl font-bold text-lightrise-blue mb-4">Join Our Exclusive Client Community</h3>
              <p className="text-gray-700 mb-4">
                When you partner with Lightrise Consulting, you gain more than just expert guidance—you become part of our thriving client community with exclusive benefits:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-full bg-lightrise-blue/10 flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 text-lightrise-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Peer Network</h4>
                    <p className="text-sm text-gray-600">Connect with leaders facing similar challenges across industries</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-full bg-lightrise-amber/10 flex items-center justify-center flex-shrink-0">
                    <Calendar className="h-5 w-5 text-lightrise-amber" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Private Events</h4>
                    <p className="text-sm text-gray-600">Invitation-only workshops, roundtables and networking sessions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Lock className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Early Access</h4>
                    <p className="text-sm text-gray-600">Preview new Microsoft technologies before public release</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Exclusive Resources</h4>
                    <p className="text-sm text-gray-600">Access to proprietary research, templates and playbooks</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-4 flex items-center justify-center">
              <div className="bg-white p-6 rounded-lg shadow-md max-w-xs">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-lightrise-blue/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-lightrise-blue">
                      <circle cx="9" cy="9" r="5"></circle>
                      <path d="M15 5h4v4"></path>
                      <path d="m19 5-7 7"></path>
                      <path d="M5 15v4h4"></path>
                      <path d="m5 19 7-7"></path>
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800">90%</h4>
                  <p className="text-gray-600 text-sm mb-2">of clients actively participate in our community events</p>
                  <div className="h-1 w-16 bg-lightrise-amber mx-auto my-3 rounded-full"></div>
                  <p className="text-xs text-gray-500 italic">Based on 2023 client engagement metrics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
