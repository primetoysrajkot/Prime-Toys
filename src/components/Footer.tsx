import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    "Action Figures",
    "Dolls & Accessories",
    "Building Sets",
    "Educational Toys",
    "Outdoor Toys",
    "Board Games",
  ];

  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-8xl">🧸</div>
        <div className="absolute top-20 right-20 text-6xl">🎮</div>
        <div className="absolute bottom-20 left-1/4 text-7xl">🚗</div>
        <div className="absolute bottom-10 right-1/4 text-6xl">🎨</div>
      </div>

      <div className="container relative z-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-display font-bold mb-4 bg-gradient-to-r from-primary via-purple-pop to-secondary bg-clip-text text-transparent">
              PRIME TOYS
            </h3>
            <p className="text-background/70 mb-6">
              Where Fun Meets Imagination! Rajkot's premier destination for quality toys and endless play.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Youtube, href: "#" },
                { icon: Twitter, href: "#" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="p-2.5 bg-background/10 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-display font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href="#categories"
                    className="text-background/70 hover:text-primary transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-display font-bold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-background/70 text-sm">
                  Real Prime Complex, Beside Mann Meet Studio, Mavadi Main Road, Rajkot
                </span>
              </li>
              <li>
                <a
                  href="tel:9909691291"
                  className="flex items-center gap-3 text-background/70 hover:text-secondary transition-colors"
                >
                  <Phone className="w-5 h-5 text-secondary" />
                  9909691291
                </a>
              </li>
              <li>
                <a
                  href="tel:8849806714"
                  className="flex items-center gap-3 text-background/70 hover:text-secondary transition-colors"
                >
                  <Phone className="w-5 h-5 text-secondary" />
                  8849806714
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-lg font-display font-bold mb-4">Store Hours</h4>
            <ul className="space-y-2 text-background/70">
              <li className="flex justify-between">
                <span>Mon - Sat</span>
                <span className="text-accent">10AM - 9PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-accent">11AM - 8PM</span>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-background/10 rounded-xl">
              <p className="text-sm text-background/80">
                🎉 Special holiday hours may apply. Call ahead to confirm!
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
            <p>© {currentYear} Prime Toys. All rights reserved.</p>
            <p className="flex items-center gap-2">
              Made with <span className="text-secondary">❤️</span> for happy kids everywhere
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
