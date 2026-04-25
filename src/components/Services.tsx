import { Card, CardContent } from "@/components/ui/card";
import { Monitor, PhoneCall, Cloud, Settings2 } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Managed IT Support Services",
    description: "Complete IT management and support for your entire technology infrastructure."
  },
  {
    icon: PhoneCall,
    title: "Business Phone & VoIP Solutions",
    description: "Setup and management of Internet based phone systems for seamless communication."
  },
  {
    icon: Cloud,
    title: "Cloud Migration & Backup",
    description: "Seamless cloud transitions with reliable backup and disaster recovery."
  },
  {
    icon: Settings2,
    title: "Business Efficiency & Automation",
    description: "Implement smart business automations that save time and boost productivity."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F1F1F] mb-6">
            Comprehensive IT Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything your business needs to stay secure, efficient, and competitive in today's digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white rounded-2xl group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#2978F2]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#2978F2] transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-[#2978F2] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-[#1F1F1F] mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
