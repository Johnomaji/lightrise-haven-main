
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
        variant: "default",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });
      
      setLoading(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-lightrise-blue mb-4">Get In Touch</h2>
          <p className="text-gray-600">
            Ready to transform your business with our managed and fractional services? Contact us today to schedule a chat.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg h-full">
              <h3 className="text-xl font-semibold text-lightrise-blue mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-lightrise-amber/10 p-3 rounded-full mr-4">
                    <Mail className="h-5 w-5 text-lightrise-amber" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Email</p>
                    <a href="mailto:info@lightriseconsulting.com" className="text-lightrise-blue hover:text-lightrise-amber transition-colors">
                      info@lightriseconsulting.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-lightrise-amber/10 p-3 rounded-full mr-4">
                    <Phone className="h-5 w-5 text-lightrise-amber" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Phone</p>
                    <a href="tel:+11234567890" className="text-lightrise-blue hover:text-lightrise-amber transition-colors">
                      (123) 456-7890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-lightrise-amber/10 p-3 rounded-full mr-4">
                    <MapPin className="h-5 w-5 text-lightrise-amber" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Address</p>
                    <address className="not-italic text-gray-700">
                      123 Business Avenue<br />
                      Tech District, ST 12345
                    </address>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-gradient-to-br from-lightrise-blue to-lightrise-blue-dark rounded-lg text-white">
                <h4 className="font-medium mb-2">Business Hours</h4>
                <p className="text-sm">Monday - Friday: 9am - 5pm</p>
                <p className="text-sm">Saturday & Sunday: Closed</p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6 border">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(123) 456-7890"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company Ltd."
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your business needs..."
                  rows={5}
                  required
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-lightrise-blue hover:bg-lightrise-blue-light text-white"
                disabled={loading}
              >
                {loading ? "Sending..." : "Schedule a Chat"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
