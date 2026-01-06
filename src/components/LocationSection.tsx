import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Navigation, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from 'react';

const LocationSection = () => {
  const [copied, setCopied] = useState(false);
  const handleGetDirections = () => {
    window.open(
      "https://maps.app.goo.gl/X7WwyHF598vHnF4T6",
      "_blank"
    );
  };

  const handleCall = (number: string) => {
    navigator.clipboard.writeText(number).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
      window.location.href = `tel:${number}`;
    });
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/919909691291?text=Hello! I'm interested in toys at Prime Toys.", "_blank");
  };

  return (
    <section id="location" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-secondary bg-secondary/10 rounded-full">
            Visit Us
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4">
            Find Our{" "}
            <span className="bg-gradient-to-r from-secondary via-coral to-accent bg-clip-text text-transparent">
              Showroom
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the magic of toys in person at Rajkot's largest toy showroom!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-2 h-full min-h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.883835624103!2d70.773594!3d22.28253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cb46ac184063%3A0xb528c0ba4205b32a!2sPrime%20Toys!5e0!3m2!1sen!2sin!4v17176656 Prime Toys!5e0!3m2!1sen!2sin!4v1717665666768!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: "1rem", minHeight: "380px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Prime Toys Location"
            />
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Address Card */}
            <div className="glass-card p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-2xl">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-foreground mb-2">Our Address</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    First Floor, Prime Toys, Bapa Sitaram Chowk, PRIME TOYS, Real Prime Complex, Mavdi Main Road, beside Mann Meet Studio, Mavdi Village, Mavdi, Rajkot, Gujarat 360004
                  </p>
                  <Button variant="hero" size="lg" className="mt-4" onClick={handleGetDirections}>
                    <Navigation className="w-4 h-4" />
                    Get Directions
                  </Button>
                </div>
              </div>
            </div>

            {/* Phone Numbers */}
            <div className="glass-card p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 rounded-2xl">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-display font-bold text-foreground mb-3">Call Us</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <Button
                      variant="coral"
                      size="lg"
                      className="w-full"
                      onClick={() => handleCall("9909691291")}
                    >
                      <Phone className="w-4 h-4" />
                      {copied ? "Copied!" : "9909691291"}
                    </Button>
                    <Button
                      variant="coral"
                      size="lg"
                      className="w-full"
                      onClick={() => handleCall("8849806714")}
                    >
                      <Phone className="w-4 h-4" />
                      {copied ? "Copied!" : "8849806714"}
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="glass-card p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/20 rounded-2xl">
                  <Clock className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-foreground mb-2">Business Hours</h3>
                  <div className="space-y-1 text-muted-foreground">
                    <p>Monday - Sunday: 9:00 AM - 9:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <Button
              variant="playful"
              size="xl"
              className="w-full"
              onClick={handleWhatsApp}
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;