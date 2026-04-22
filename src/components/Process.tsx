import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, PenTool, Code2, Headphones } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Discover",
    description: "We dig into your business, your users, and the problem you're solving—then scope it clearly.",
  },
  {
    icon: PenTool,
    title: "Design",
    description: "We map workflows, design the UX, and agree the architecture before a single line of code is written.",
  },
  {
    icon: Code2,
    title: "Build",
    description: "We engineer your software in iterative sprints with regular demos so you see progress, not surprises.",
  },
  {
    icon: Headphones,
    title: "Launch & Support",
    description: "We deploy, train your team, and stay on for ongoing support, improvements, and new features.",
  },
];

const Process = () => {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F1F1F] mb-6">
            How We Build Your Software
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A proven, transparent delivery process from idea to live product—and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index}>
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white rounded-2xl group h-full relative">
                <CardContent className="p-8 text-center flex flex-col h-full">
                  <div className="absolute top-4 right-4 text-5xl font-bold text-[#2978F2]/10 group-hover:text-[#2978F2]/20 transition-colors">
                    {String(index + 1).padStart(2, "0")}
                  </div>
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
