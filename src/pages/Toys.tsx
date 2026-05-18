import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { getCategories } from '@/data/toys';
import { ChevronRight } from 'lucide-react';

const Toys = () => {
  const categories = getCategories();

  return (
    <section id="categories" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 toy-pattern opacity-50" />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-primary bg-primary/10 rounded-full">
            Our Collection
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4">
            Explore Toy{" "}
            <span className="bg-gradient-to-r from-primary via-purple-pop to-secondary bg-clip-text text-transparent">
              Categories
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover thousands of toys across all categories - from educational STEM kits to
            action-packed playsets!
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link to={`/toys/${category.id}`} key={category.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative"
              >
                <div className="glass-card p-6 h-full cursor-pointer transition-all duration-500 hover:shadow-card hover:-translate-y-2 overflow-hidden">
                   <div className="relative z-10">
                    <motion.div
                      transition={{ type: "spring", stiffness: 300 }}
                      className="text-5xl mb-4"
                    >
                      {category.icon}
                    </motion.div>
                    <h3 className="text-lg font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <motion.div
                      className="flex items-center gap-1 text-sm font-semibold text-primary"
                    >
                      Explore <ChevronRight className="w-4 h-4" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Toys;
