
import { Facebook, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1F1F1F] text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="text-3xl font-bold mb-4">
              BigByte<span className="text-[#2978F2]">Tech</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Your trusted IT partner, providing comprehensive technology solutions for small businesses. 
              Focus on growth while we handle your IT.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-[#2978F2] rounded-full flex items-center justify-center hover:bg-[#1F5FD4] transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#2978F2] rounded-full flex items-center justify-center hover:bg-[#1F5FD4] transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#2978F2] rounded-full flex items-center justify-center hover:bg-[#1F5FD4] transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-300 hover:text-[#2978F2] transition-colors">Services</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-[#2978F2] transition-colors">About Us</a></li>
              <li><a href="#process" className="text-gray-300 hover:text-[#2978F2] transition-colors">Our Process</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-[#2978F2] transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#2978F2] transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#2978F2]" />
                <span className="text-gray-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#2978F2]" />
                <span className="text-gray-300">hello@bigbytetech.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#2978F2] mt-1" />
                <span className="text-gray-300">123 Business Center Dr.<br />Suite 100, City, ST 12345</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 BigByte Tech. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-[#2978F2] text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-[#2978F2] text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-[#2978F2] text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
