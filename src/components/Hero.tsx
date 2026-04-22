import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Smartphone, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50/30 to-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#2978F2] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#2978F2] rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10 pt-20">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-[#2978F2]/10 text-[#2978F2] rounded-full text-sm font-semibold">
            <Sparkles className="h-4 w-4" />
            Custom Software Development Studio
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-[#1F1F1F] mb-6 leading-tight">
            Custom Software{" "}
            <span className="text-[#2978F2] relative">
              Built for Your Business
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[#2978F2] rounded-full opacity-30"></div>
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            We design and build bespoke web platforms, mobile apps, and automation tools that solve real business problems—backed by full IT support.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a href="#contact">
              <Button className="bg-[#2978F2] hover:bg-[#1F5FD4] text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl group">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="#services">
              <Button variant="outline" className="border-2 border-[#2978F2] text-[#2978F2] hover:bg-[#2978F2] hover:text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 hover:scale-105 group">
                <Code2 className="mr-2 h-5 w-5" />
                Explore Services
              </Button>
            </a>
          </div>

          {/* Capability badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { label: "Web Apps", icon: Code2 },
              { label: "Mobile Apps", icon: Smartphone },
              { label: "Automation", icon: Sparkles },
              { label: "IT Support", icon: ArrowRight },
            ].map((item, i) => (
              <div
                key={item.label}
                className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl py-3 px-4 flex items-center justify-center gap-2 shadow-sm hover:shadow-md hover:border-[#2978F2] transition-all animate-fade-in"
                style={{ animationDelay: `${0.1 * i}s` }}
              >
                <item.icon className="h-4 w-4 text-[#2978F2]" />
                <span className="text-sm font-semibold text-[#1F1F1F]">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
