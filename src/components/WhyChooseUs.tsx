import { Card, CardContent } from "@/components/ui/card";
import { Code2, Users, Layers } from "lucide-react";

const reasons = [
  {
    icon: Code2,
    title: "Builders, Not Resellers",
    description: "We write the code. Your software is engineered in-house with modern, maintainable tech—no white-labelled templates.",
  },
  {
    icon: Layers,
    title: "End-to-End Technology Partner",
    description: "From custom apps to the IT infrastructure that runs them, you get one team that owns the whole stack.",
  },
  {
    icon: Users,
    title: "Local Experts Who Speak Business",
    description: "We translate technology into outcomes—clear scope, fixed quotes, and solutions that match how you actually work.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F1F1F] mb-6">
            Why BigByte Tech?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A development studio with the IT muscle of a managed service provider—committed to your business outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-blue-50/30 rounded-2xl group"
            >
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-[#2978F2] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#1F1F1F] mb-4">{reason.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
