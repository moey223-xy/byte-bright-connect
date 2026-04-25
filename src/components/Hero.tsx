import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50/30 to-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#2978F2] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#2978F2] rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10 pt-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-[#1F1F1F] mb-6 leading-tight">
            IT Peace of Mind for{" "}
            <span className="text-[#2978F2] relative">
              Small Businesses
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[#2978F2] rounded-full opacity-30"></div>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Managed support, rock-solid security, and cloud expertise—so you can focus on growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            
            <a href="#contact">
              <Button className="bg-[#2978F2] hover:bg-[#1F5FD4] text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl group">
                Get Your Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="#services">
              <Button variant="outline" className="border-2 border-[#2978F2] text-[#2978F2] hover:bg-[#2978F2] hover:text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 hover:scale-105 group">
                <Play className="mr-2 h-5 w-5" />
                See Our Services
              </Button>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center">
            <div className="animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
              <div className="text-3xl font-bold text-[#2978F2]">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
            <div className="animate-fade-in" style={{
            animationDelay: '0.4s'
          }}>
              <div className="text-3xl font-bold text-[#2978F2]">99.9%</div>
              <div className="text-gray-600">Uptime</div>
            </div>
            <div className="animate-fade-in" style={{
            animationDelay: '0.6s'
          }}>
              <div className="text-3xl font-bold text-[#2978F2]">100+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;