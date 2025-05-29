
import { Card, CardContent } from "@/components/ui/card";
import { Clock, DollarSign, Users } from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "24/7 Rapid Response SLA",
    description: "Lightning-fast support when you need it most, with guaranteed response times."
  },
  {
    icon: DollarSign,
    title: "Fixed-Fee Transparent Pricing",
    description: "No surprises. Clear, predictable pricing that fits your budget."
  },
  {
    icon: Users,
    title: "Local Experts Who Speak Business",
    description: "Technology solutions explained in terms that make sense for your business."
  }
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
            We're not just another IT company. We're your technology partners, committed to your success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-blue-50/30 rounded-2xl group">
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
