import { Card, CardContent } from "@/components/ui/card";
const About = () => {
  return <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1F1F1F] mb-8">
              About BigByte Tech
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600">
              <p>
                <strong className="text-[#1F1F1F]">From startup struggles to IT mastery.</strong> Our founder experienced firsthand the frustration of unreliable IT support that spoke in technical jargon instead of business solutions.
              </p>
              
              <p>
                That's why we built BigByte Tech differently. We believe technology should empower your business, not complicate it. Our team combines deep technical expertise with a genuine understanding of small business challenges.
              </p>
              
              <p>Today, we're proud to be the trusted IT partner for multiple small businesses, helping them leverage technology to grow, compete, and thrive in the digital age.</p>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#2978F2]">2020</div>
                <div className="text-gray-600">Founded</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#2978F2]">24/7</div>
                <div className="text-gray-600">Contactable around the clock</div>
              </div>
            </div>
          </div>

          <div className="lg:pl-8">
            <Card className="overflow-hidden rounded-2xl shadow-2xl">
              <CardContent className="p-0">
                <img src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop" alt="BigByte Tech Team" className="w-full h-96 object-cover" />
              </CardContent>
            </Card>
            
            <div className="mt-8 grid grid-cols-3 gap-4">
              <Card className="rounded-2xl overflow-hidden shadow-lg">
                <CardContent className="p-0">
                  <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=200&h=200&fit=crop&crop=face" alt="Team Member" className="w-full h-24 object-cover" />
                </CardContent>
              </Card>
              <Card className="rounded-2xl overflow-hidden shadow-lg">
                <CardContent className="p-0">
                  <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=200&h=200&fit=crop&crop=face" alt="Team Member" className="w-full h-24 object-cover" />
                </CardContent>
              </Card>
              <Card className="rounded-2xl overflow-hidden shadow-lg">
                <CardContent className="p-0">
                  <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=200&h=200&fit=crop" alt="Team Member" className="w-full h-24 object-cover" />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;