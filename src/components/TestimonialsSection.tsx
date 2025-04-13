
import React from 'react';
import TestimonialCard from './TestimonialCard';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Lightrise delivered 40% cost savings in our HR operations while enhancing employee experience metrics. Their executive-level reporting made showcasing ROI to our board straightforward.",
      author: "Sarah Johnson",
      role: "Chief People Officer",
      company: "TechVision Global",
      imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&h=200&auto=format&fit=crop"
    },
    {
      quote: "The fractional CIO service aligned our technology roadmap with business objectives, eliminated redundant systems, and delivered $1.2M in savings in the first year alone.",
      author: "Michael Chen",
      role: "CEO",
      company: "Innovate Partners",
      imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&h=200&auto=format&fit=crop"
    },
    {
      quote: "Their cybersecurity team identified critical vulnerabilities our previous provider missed for years. Implementation was smooth, and we now have metrics-driven reporting for our compliance requirements.",
      author: "David Williams",
      role: "IT Director",
      company: "Secure Financial Group",
      imageUrl: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=200&h=200&auto=format&fit=crop"
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-lightrise-blue mb-4">What Our Clients Say</h2>
          <p className="text-gray-600">
            Our clients achieve measurable business results while enhancing operational excellence. Here's what fellow leaders have experienced.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="animate-fade-in opacity-0" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
              <TestimonialCard
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                company={testimonial.company}
                imageUrl={testimonial.imageUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
