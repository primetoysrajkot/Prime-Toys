import { motion } from "framer-motion";
import { Phone, Mail, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Hi! I'm ${formData.name}.\n\n${formData.message}\n\nContact: ${formData.phone}`;
    const whatsappUrl = `https://wa.me/919909691291?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    toast({
      title: "Redirecting to WhatsApp!",
      description: "We'll get back to you soon.",
    });

    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 toy-pattern opacity-30" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-mint-green bg-mint-green/10 rounded-full">
            Get in Touch
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4">
            Contact{" "}
            <span className="bg-gradient-to-r from-mint-green via-primary to-electric-blue bg-clip-text text-transparent">
              Us
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about a toy? Want to check availability? We're here to help!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <h3 className="text-2xl font-display font-bold text-foreground mb-6">
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Your Name
                </label>
                <Input
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="h-12 rounded-xl"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Phone Number
                </label>
                <Input
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="h-12 rounded-xl"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  placeholder="Looking for a specific toy? Ask us anything!"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="min-h-[120px] rounded-xl resize-none"
                />
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full">
                <Send className="w-4 h-4" />
                Send via WhatsApp
              </Button>
            </form>
          </motion.div>

          {/* Quick Contact */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-display font-bold text-foreground mb-6">
              Quick Contact
            </h3>

            {/* Phone Cards */}
            <div className="glass-card p-6 group hover:shadow-card transition-all">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-primary to-electric-blue-light rounded-2xl group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Call us at</p>
                  <a href="tel:9909691291" className="text-xl font-display font-bold text-foreground hover:text-primary transition-colors">
                    9909691291
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 group hover:shadow-card transition-all">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-coral to-secondary rounded-2xl group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Alternative</p>
                  <a href="tel:8849806714" className="text-xl font-display font-bold text-foreground hover:text-secondary transition-colors">
                    8849806714
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="glass-card p-6 bg-gradient-to-br from-mint-green/10 to-mint-green/5 border-mint-green/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-mint-green to-primary rounded-2xl">
                  <MessageCircle className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-lg font-display font-bold text-foreground">
                    Prefer WhatsApp?
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Get instant replies on WhatsApp
                  </p>
                </div>
              </div>
              <Button
                variant="playful"
                size="lg"
                className="w-full"
                onClick={() =>
                  window.open(
                    "https://wa.me/919909691291?text=Hello! I'm interested in toys at Prime Toys.",
                    "_blank"
                  )
                }
              >
                <MessageCircle className="w-4 h-4" />
                Chat Now
              </Button>
            </div>

            {/* Note */}
            <div className="p-4 bg-accent/20 rounded-2xl">
              <p className="text-sm text-muted-foreground text-center">
                💡 <strong>Tip:</strong> WhatsApp is the fastest way to reach us!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
