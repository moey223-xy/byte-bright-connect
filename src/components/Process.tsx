import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, FileText, Rocket, Headphones } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Consult",
    description: "We listen to your needs and assess your current IT infrastructure to understand your challenges."
  },
  {
    icon: FileText,
    title: "Plan",
    description: "We create a customized strategy tailored to your business goals and requirements."
  },
  {
    icon: Rocket,
    title: "Deploy",
    description: "We implement solutions with minimal disruption to your daily business operations."
  },
  {
    icon: Headphones,
    title: "Support",
    description: "We provide ongoing support and monitoring to ensure peak performance and reliability."
  }
];

const Process = () => {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F1F1F] mb-6">
            Our Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A proven methodology that ensures smooth implementation and lasting results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index}>
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white rounded-2xl group h-full">
                <CardContent className="p-8 text-center flex flex-col h-full">
                  <div className="w-16 h-16 bg-[#2978F2] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1F1F1F] mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed flex-grow">{step.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;