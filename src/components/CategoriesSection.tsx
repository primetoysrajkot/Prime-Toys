import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronRight } from "lucide-react";

interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
  subCategories: string[];
}

const categories: Category[] = [
  {
    id: "action-figures",
    name: "Action Figures & Playsets",
    icon: "🦸",
    color: "from-primary to-electric-blue-light",
    subCategories: ["Superheroes", "Movie & TV Characters", "Collectible Figures"],
  },
  {
    id: "dolls",
    name: "Dolls & Accessories",
    icon: "🎀",
    color: "from-playful-pink to-purple-pop",
    subCategories: ["Fashion Dolls", "Baby Dolls", "Dollhouses & Furniture"],
  },
  {
    id: "building",
    name: "Building Sets & Blocks",
    icon: "🧱",
    color: "from-coral to-coral-light",
    subCategories: ["LEGO", "Building Bricks", "Magnetic Tiles"],
  },
  {
    id: "educational",
    name: "Educational & STEM Toys",
    icon: "🔬",
    color: "from-mint-green to-primary",
    subCategories: ["Science Kits", "Coding Robots", "Math & Logic Games"],
  },
  {
    id: "arts",
    name: "Arts & Crafts",
    icon: "🎨",
    color: "from-purple-pop to-playful-pink",
    subCategories: ["DIY Kits", "Paint Sets", "Modeling Clay", "Craft Supplies"],
  },
  {
    id: "puzzles",
    name: "Puzzles & Brain Teasers",
    icon: "🧩",
    color: "from-accent to-sunny-yellow",
    subCategories: ["Jigsaw Puzzles", "3D Puzzles", "Rubik's Cubes"],
  },
  {
    id: "vehicles",
    name: "Vehicles & Remote Control",
    icon: "🚗",
    color: "from-electric-blue to-primary",
    subCategories: ["Cars & Trucks", "Trains", "RC Cars", "RC Drones & Helicopters"],
  },
  {
    id: "board-games",
    name: "Board Games & Card Games",
    icon: "🎲",
    color: "from-secondary to-coral",
    subCategories: ["Family Games", "Strategy Games", "Trading Card Games"],
  },
  {
    id: "plush",
    name: "Plush & Stuffed Animals",
    icon: "🧸",
    color: "from-coral-light to-playful-pink",
    subCategories: ["Teddy Bears", "Character Plushies", "Soft Toys"],
  },
  {
    id: "outdoor",
    name: "Outdoor & Sports Toys",
    icon: "⚽",
    color: "from-mint-green to-accent",
    subCategories: ["Bikes", "Scooters", "Balls", "Water Toys", "Sports Sets"],
  },
  {
    id: "pretend-play",
    name: "Pretend Play & Dress-Up",
    icon: "👑",
    color: "from-purple-pop to-primary",
    subCategories: ["Kitchen Sets", "Tool Sets", "Costumes", "Play Tents"],
  },
  {
    id: "electronic",
    name: "Electronic & Tech Toys",
    icon: "🤖",
    color: "from-primary to-mint-green",
    subCategories: ["Kids Tablets", "Interactive Pets", "Electronic Games"],
  },
  {
    id: "musical",
    name: "Musical Toys",
    icon: "🎵",
    color: "from-playful-pink to-accent",
    subCategories: ["Toy Instruments", "Karaoke Sets"],
  },
  {
    id: "baby",
    name: "Baby & Toddler Toys",
    icon: "👶",
    color: "from-electric-blue-light to-mint-green",
    subCategories: ["Rattles", "Teething Toys", "Activity Gyms", "Walkers"],
  },
  {
    id: "collectibles",
    name: "Collectibles & Miniatures",
    icon: "💎",
    color: "from-accent to-coral",
    subCategories: ["Blind Box Figures", "Mini Collectibles"],
  },
];

const CategoryCard = ({ category, index }: { category: Category; index: number }) => {
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
        {/* Gradient Background on Hover */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0.1 : 0 }}
          className={`absolute inset-0 bg-gradient-to-br ${category.color}`}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Icon */}
          <motion.div
            animate={{ scale: isHovered ? 1.1 : 1, rotate: isHovered ? 5 : 0 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-5xl mb-4"
          >
            {category.icon}
          </motion.div>

          {/* Title */}
          <h3 className="text-lg font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
            {category.name}
          </h3>

          {/* Subcategories */}
          <div className="space-y-1.5 mb-4">
            {category.subCategories.slice(0, 3).map((sub, idx) => (
              <motion.div
                key={idx}
                initial={{ x: 0 }}
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.color}`} />
                {sub}
              </motion.div>
            ))}
            {category.subCategories.length > 3 && (
              <span className="text-xs text-muted-foreground">
                +{category.subCategories.length - 3} more
              </span>
            )}
          </div>

          {/* View More */}
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
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 toy-pattern opacity-50" />

      <div className="container relative z-10">
        {/* Section Header */}
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

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
