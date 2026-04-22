import { Card, CardContent } from "@/components/ui/card";
import { Code2, Monitor, PhoneCall, Settings2, Smartphone, Globe, Zap, CheckCircle2 } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F1F1F] mb-6">
            Software That Works The Way You Do
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Off-the-shelf software forces you to change your business. We build custom solutions that fit it perfectly—plus the IT services to keep everything running.
          </p>
        </div>

        {/* Featured: Custom Software */}
        <Card className="border-none shadow-2xl bg-gradient-to-br from-[#2978F2] to-[#1F5FD4] text-white rounded-3xl overflow-hidden mb-8">
          <CardContent className="p-10 md:p-14">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 bg-white/15 rounded-full text-sm font-semibold">
                  <Zap className="h-4 w-4" />
                  Our Specialty
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  Custom Built Software & Mobile Apps
                </h3>
                <p className="text-lg text-white/90 mb-6 leading-relaxed">
                  From idea to launch, we engineer tailor-made web platforms, iOS &amp; Android apps, internal tools, and customer portals—designed around your workflows, not generic templates.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Web applications & SaaS",
                    "iOS & Android mobile apps",
                    "Customer & client portals",
                    "Internal business tools",
                    "API & system integrations",
                    "Ongoing maintenance",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                      <span className="text-white/95">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative hidden lg:block">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:scale-105 transition-transform">
                    <Code2 className="h-10 w-10 mb-3" />
                    <div className="font-bold text-lg">Web Platforms</div>
                    <div className="text-sm text-white/80">React, Node, modern stacks</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:scale-105 transition-transform mt-8">
                    <Smartphone className="h-10 w-10 mb-3" />
                    <div className="font-bold text-lg">Mobile Apps</div>
                    <div className="text-sm text-white/80">iOS, Android, cross-platform</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:scale-105 transition-transform">
                    <Globe className="h-10 w-10 mb-3" />
                    <div className="font-bold text-lg">Integrations</div>
                    <div className="text-sm text-white/80">Connect your tools & data</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:scale-105 transition-transform mt-8">
                    <Zap className="h-10 w-10 mb-3" />
                    <div className="font-bold text-lg">Automation</div>
                    <div className="text-sm text-white/80">Workflows that save hours</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Supporting services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Settings2,
              title: "Business Efficiency & Automation",
              description: "Streamline repetitive work with smart automations, integrations and custom workflows that free up your team.",
            },
            {
              icon: Monitor,
              title: "Managed IT Support",
              description: "Complete IT management for your team and infrastructure—proactive monitoring, fast response, no jargon.",
            },
            {
              icon: PhoneCall,
              title: "Business Phone & VoIP",
              description: "Modern internet-based phone systems that keep your business connected, from the office or anywhere.",
            },
          ].map((service, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white rounded-2xl group"
            >
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-[#2978F2]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#2978F2] transition-colors duration-300">
                  <service.icon className="h-7 w-7 text-[#2978F2] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-[#1F1F1F] mb-3">{service.title}</h3>
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
