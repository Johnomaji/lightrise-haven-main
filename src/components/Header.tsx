
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-lightrise-blue-dark font-bold text-xl md:text-2xl">
              Lightrise<span className="text-lightrise-amber">Consulting</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          {/* <nav className="hidden md:flex space-x-8">
            <a href="#testimonials" className="text-gray-700 hover:text-lightrise-amber transition-colors font-medium">Client Success</a>
            <a href="#our-story" className="text-gray-700 hover:text-lightrise-amber transition-colors font-medium">Our Story</a>
            <a href="#services" className="text-gray-700 hover:text-lightrise-amber transition-colors font-medium">How We Help</a>
            <a href="#fractional" className="text-gray-700 hover:text-lightrise-amber transition-colors font-medium">Blocks of Help</a>
            <a href="#sustainability" className="text-gray-700 hover:text-lightrise-amber transition-colors font-medium">Our Impacts</a>
            <a href="#about" className="text-gray-700 hover:text-lightrise-amber transition-colors font-medium">Results</a>
          </nav> */}

          {/* CTA Button */}
          {/* <div className="hidden md:block">
            <Button 
              variant="default" 
              className="bg-lightrise-red hover:bg-lightrise-red-light text-white"
              asChild
            >
              <a href="#contact">Schedule a Chat</a>
            </Button>
          </div> */}

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none" 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#testimonials" className="text-gray-700 font-medium py-2" onClick={toggleMobileMenu}>Client Success</a>
            <a href="#our-story" className="text-gray-700 font-medium py-2" onClick={toggleMobileMenu}>Our Story</a>
            <a href="#services" className="text-gray-700 font-medium py-2" onClick={toggleMobileMenu}>How We Help</a>
            <a href="#fractional" className="text-gray-700 font-medium py-2" onClick={toggleMobileMenu}>Blocks of Help</a>
            <a href="#sustainability" className="text-gray-700 font-medium py-2" onClick={toggleMobileMenu}>Our Impacts</a>
            <a href="#about" className="text-gray-700 font-medium py-2" onClick={toggleMobileMenu}>Results</a>
            <Button 
              variant="default" 
              className="bg-lightrise-red hover:bg-lightrise-red-light text-white w-full"
              asChild
            >
              <a href="#contact">Schedule a Chat</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
