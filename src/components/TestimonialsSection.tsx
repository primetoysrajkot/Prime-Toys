import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Mom of 2",
    content: "Amazing collection! My kids love this store. The staff is so helpful and the toys are of great quality.",
    rating: 5,
    avatar: "👩",
  },
  {
    name: "Rajesh Patel",
    role: "Father",
    content: "Best toy shop in Rajkot! Found rare LEGO sets that weren't available anywhere else. Highly recommended!",
    rating: 5,
    avatar: "👨",
  },
  {
    name: "Meera Joshi",
    role: "Grandmother",
    content: "Wonderful experience shopping for my grandchildren. Great variety and reasonable prices.",
    rating: 5,
    avatar: "👵",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 text-8xl opacity-5">⭐</div>
        <div className="absolute bottom-20 right-10 text-8xl opacity-5">💝</div>
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-accent-foreground bg-accent/20 rounded-full">
            Happy Customers
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4">
            What Parents{" "}
            <span className="bg-gradient-to-r from-accent via-coral to-secondary bg-clip-text text-transparent">
              Say
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of happy families who trust Prime Toys for their children's joy!
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 relative group hover:shadow-card hover:-translate-y-2 transition-all duration-500"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 p-3 bg-gradient-to-br from-primary to-electric-blue-light rounded-2xl opacity-20 group-hover:opacity-100 transition-opacity">
                <Quote className="w-5 h-5 text-primary-foreground" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <span className="text-3xl">{testimonial.avatar}</span>
                <div>
                  <p className="font-display font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap justify-center items-center gap-8"
        >
          {[
            { number: "5.0", label: "Google Rating" },
            { number: "10K+", label: "Happy Customers" },
            { number: "15+", label: "Years Experience" },
          ].map((badge, idx) => (
            <div key={idx} className="text-center">
              <div className="text-3xl font-display font-bold text-primary">{badge.number}</div>
              <div className="text-sm text-muted-foreground">{badge.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
