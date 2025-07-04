import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Calendar } from "lucide-react";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  business: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    business: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {

    const subject = encodeURIComponent(`IT Enquiry from ${formData.business || 'No Business Name'}`);
    const body = encodeURIComponent(
      `Name: ${formData.name || 'N/A'}\nEmail: ${formData.email || 'N/A'}\nBusiness Name: ${formData.business || 'N/A'}\n\nBrief IT Need:\n${formData.message || 'N/A'}`
    );

    window.location.href = `mailto:info@bigbytetech.com.au?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F1F1F] mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Let's discuss how BigByte Tech can transform your IT infrastructure and help your business thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="shadow-2xl rounded-2xl border-none">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-[#1F1F1F] mb-6">Send us a message</h3>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-[#1F1F1F] font-semibold">Name *</Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} className="mt-2 rounded-xl border-gray-300 focus:border-[#2978F2] focus:ring-[#2978F2]" required />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-[#1F1F1F] font-semibold">Email *</Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} className="mt-2 rounded-xl border-gray-300 focus:border-[#2978F2] focus:ring-[#2978F2]" required />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="business" className="text-[#1F1F1F] font-semibold">Business Name</Label>
                  <Input id="business" name="business" value={formData.business} onChange={handleChange} className="mt-2 rounded-xl border-gray-300 focus:border-[#2978F2] focus:ring-[#2978F2]" />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-[#1F1F1F] font-semibold">Brief IT Need *</Label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} className="mt-2 rounded-xl border-gray-300 focus:border-[#2978F2] focus:ring-[#2978F2]" placeholder="Tell us about your IT challenges or goals..." required />
                </div>
                
                <Button
                  onClick={handleSubmit}
                  className="w-full bg-[#2978F2] hover:bg-[#1F5FD4] text-white py-3 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Send Message
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-lg rounded-2xl border-none hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#2978F2] rounded-xl flex items-center justify-center">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1F1F1F]">Phone</h4>
                  <p className="text-gray-600">
                    <a href="tel:+61478831924" className="hover:underline">
                      0478 831 924
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg rounded-2xl border-none hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#2978F2] rounded-xl flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1F1F1F]">Email</h4>
                  <p className="text-gray-600">
                    <a href="mailto:info@bigbytetech.com.au" className="hover:underline">
                      info@bigbytetech.com.au
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg rounded-2xl border-none hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#2978F2] rounded-xl flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1F1F1F]">Service Area</h4>
                  <p className="text-gray-600">Brisbane and Gold Coast</p>
                </div>
              </CardContent>
            </Card>

           <Card className="shadow-lg rounded-2xl border-none bg-[#2978F2] text-white hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <Calendar className="h-12 w-12 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Give us a Call</h4>
              <p className="mb-4">Speak with one of our IT experts now</p>
              <a href="tel:+61478831924">
                <Button variant="outline" className="border-white text-black hover:bg-white hover:text-[#2978F2] rounded-xl">
                  Call Now
                </Button>
              </a>
            </CardContent>
          </Card>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;