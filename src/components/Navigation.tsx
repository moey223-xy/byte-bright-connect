
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-lg py-3' 
        : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="text-2xl font-bold text-[#1F1F1F]">
          BigByte<span className="text-[#2978F2]">Tech</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-[#1F1F1F] hover:text-[#2978F2] transition-colors">Services</a>
          <a href="#about" className="text-[#1F1F1F] hover:text-[#2978F2] transition-colors">About</a>
          <a href="#process" className="text-[#1F1F1F] hover:text-[#2978F2] transition-colors">Process</a>
          <a href="#contact" className="text-[#1F1F1F] hover:text-[#2978F2] transition-colors">Contact</a>
        </div>

        <a href="#contact">
          <Button className="bg-[#2978F2] hover:bg-[#1F5FD4] text-white px-6 py-2 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg">
            Get Started
          </Button>
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
