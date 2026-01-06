import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, Truck, Gift } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Premium Quality",
    description: "Only the best brands and authentic toys for your little ones",
    gradient: "from-primary to-electric-blue-light",
  },
  {
    icon: ShieldCheck,
    title: "100% Safe",
    description: "All toys meet international safety standards",
    gradient: "from-mint-green to-primary",
  },
  {
    icon: Truck,
    title: "Local Delivery",
    description: "Fast delivery across Rajkot city",
    gradient: "from-coral to-secondary",
  },
  {
    icon: Gift,
    title: "Gift Wrapping",
    description: "Beautiful gift wrapping for special occasions",
    gradient: "from-playful-pink to-purple-pop",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card p-6 text-center h-full hover:shadow-card hover:-translate-y-1 transition-all duration-300">
                <div
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-4 group-hover:scale-110 transition-transform`}
                >
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-display font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
