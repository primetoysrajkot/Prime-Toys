import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { getCategory } from '@/data/toys';
import { ChevronRight } from 'lucide-react';

const ToyCategory = () => {
  const { categoryName } = useParams();
  const category = getCategory(categoryName || "");

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 toy-pattern opacity-50" />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4">
            {category.name}
          </h2>
        </motion.div>
        {category.toys.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {category.toys.map((toy, index) => (
              <Link to={`/toys/${category.id}/${toy.id}`} key={toy.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group relative"
                >
                  <div className="glass-card p-6 h-full cursor-pointer transition-all duration-500 hover:shadow-card hover:-translate-y-2 overflow-hidden">
                    <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                      <img
                        src={toy.images[0]}
                        alt={toy.name}
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                      />
                    </div>
                    <div className="relative z-10 mt-4">
                      <h3 className="text-lg font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {toy.name}
                      </h3>
                      <motion.div
                        className="flex items-center gap-1 text-sm font-semibold text-primary"
                      >
                        View Details <ChevronRight className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-lg text-muted-foreground">No toys in this category yet. Check back soon!</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ToyCategory;
