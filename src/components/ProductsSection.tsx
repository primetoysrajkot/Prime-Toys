import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { getProducts } from "@/data";
import { Button } from "./ui/button";

const ProductsSection = () => {
  const products = getProducts().slice(0, 4);

  return (
    <section id="products" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 toy-pattern opacity-50" />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-primary bg-primary/10 rounded-full">
            Our Bestsellers
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-primary via-purple-pop to-secondary bg-clip-text text-transparent">
              Products
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Check out some of our most popular toys and games, loved by kids and parents alike!
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                <div className="relative">
                  <img src={product.image} alt={product.name} className="w-full h-56 object-cover"/>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-lg font-bold text-foreground mb-2">{product.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">{product.description}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xl font-bold text-primary">${product.price.toFixed(2)}</span>
                    <Link to={`/toys/${product.id}`}>
                      <Button>View</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-16"
        >
          <Link to="/toys">
            <Button size="lg" className="font-bold py-6 px-8">Explore All Products</Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
