import { Link } from "react-router-dom";
import { Mail, Phone, Clock } from "lucide-react";
import alphaLogo from "@/assets/alpha-logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-navy pt-16 pb-8">
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-white/10">
          {/* Brand Column */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-md bg-amber flex items-center justify-center overflow-hidden">
                <img 
                  src={alphaLogo} 
                  alt="ALPHA Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white tracking-wide">ALPHA</span>
                <span className="text-xs text-amber tracking-wider">AUTOMOTIVE EXCELLENCE</span>
              </div>
            </Link>
            <p className="text-sm text-white/70 leading-relaxed">
              Delivering excellence to those who drive it. An exclusive social and lifestyle club for automotive professionals and leaders.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/membership" className="footer-link">Become a Member</Link></li>
              <li><Link to="/partners" className="footer-link">Partner with Us</Link></li>
              <li><Link to="/sponsors" className="footer-link">Our Sponsor</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy-policy" className="footer-link">Privacy Policy</Link></li>
              <li><Link to="/terms-conditions" className="footer-link">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber flex-shrink-0" />
                <a href="mailto:info@alphaclub.ae" className="footer-link">info@alphaclub.ae</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber flex-shrink-0" />
                <span className="footer-link">+971 XXX XXX XXXX</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-amber flex-shrink-0 mt-0.5" />
                <div className="text-sm text-amber">
                  <p>Monday - Friday</p>
                  <p>9:00 AM - 5:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center">
          <p className="text-sm text-white/50">
            © 2024 ALPHA - Automotive Leaders and Professional Hub Association. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
