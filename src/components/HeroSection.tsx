import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, MapPin, ArrowRight, Instagram } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden toy-pattern">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-40 right-20 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute bottom-40 left-1/4 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-1/3 w-36 h-36 bg-playful-pink/10 rounded-full blur-3xl animate-float-delayed" />
        
        {/* Floating toy shapes */}
        <motion.div
          className="absolute top-1/4 left-[15%] w-8 h-8 bg-primary rounded-lg"
          animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 right-[20%] w-6 h-6 bg-secondary rounded-full"
          animate={{ y: [0, -15, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute bottom-1/3 left-[10%] w-10 h-10 bg-accent rounded-xl rotate-45"
          animate={{ y: [0, -25, 0], rotate: [45, 225, 405] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute bottom-1/4 right-[15%] w-7 h-7 bg-mint-green rounded-lg"
          animate={{ y: [0, -18, 0], x: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
      </div>

      {/* Main Content */}
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 shadow-soft"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-muted-foreground">Rajkot's Premier Toy Destination</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-bold mb-6"
          >
            <span className="text-foreground">Welcome to</span>
            <br />
            <span className="bg-gradient-to-r from-primary via-purple-pop to-secondary bg-clip-text text-transparent">
              PRIME TOYS
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-10 font-medium"
          >
            Where Fun Meets Imagination ✨
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col items-center justify-center gap-4"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="hero" size="xl" asChild className="group">
                <a href="#categories">
                    Explore Toys
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
                </Button>
                <Button variant="heroSecondary" size="xl" asChild className="group">
                <a href="#location">
                    <MapPin className="w-5 h-5" />
                    Visit Store
                </a>
                </Button>
            </div>
            <Button variant="instagram" size="xl" asChild className="group">
                <a href="https://www.instagram.com/primetoysrajkot?igsh=amFseHJwY3Z2dnp1" target="_blank" rel="noreferrer">
                    <Instagram className="w-5 h-5 mr-2" />
                    Follow on Instagram
                </a>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto"
          >
            {[
              { value: "5000+", label: "Toys" },
              { value: "50+", label: "Brands" },
              { value: "10K+", label: "Happy Kids" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-primary rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
