import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { getCategories } from "@/data/toys"; // Import the getCategories function

interface SubCategory {
  name: string;
  image: string;
}

interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
  toys: SubCategory[];
}

const CategoryCard = ({ category, index }: { category: Category; index: number; }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <div className="glass-card p-6 h-full cursor-pointer transition-all duration-500 hover:shadow-card hover:-translate-y-2 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0.1 : 0 }}
          className={`absolute inset-0 bg-gradient-to-br ${category.color}`}
        />
        <div className="relative z-10">
          <motion.div
            animate={{ scale: isHovered ? 1.1 : 1, rotate: isHovered ? 5 : 0 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-5xl mb-4"
          >
            {category.icon}
          </motion.div>
          <h3 className="text-lg font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
            {category.name}
          </h3>
          <div className="space-y-1.5 mb-4">
            {category.toys.slice(0, 3).map((sub, idx) => (
              <motion.div
                key={idx}
                initial={{ x: 0 }}
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.color}`} />
                {sub.name}
              </motion.div>
            ))}
            {category.toys.length > 3 && (
              <span className="text-xs text-muted-foreground">
                +{category.toys.length - 3} more
              </span>
            )}
          </div>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
            className="flex items-center gap-1 text-sm font-semibold text-primary"
          >
            Explore <ChevronRight className="w-4 h-4" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};


const CategoriesSection = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      setIsLoading(true);
      const fetchedCategories = await getCategories();
      setCategories(fetchedCategories as Category[]);
      setIsLoading(false);
    };
    fetchCategories();
  }, []);

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
        {isLoading ? (
          <div className="text-center">
            <p>Loading categories...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link to={`/category/${category.id}`} key={category.id}>
                <CategoryCard category={category} index={index} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CategoriesSection;
