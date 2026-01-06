import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronRight, ArrowLeft } from "lucide-react";

interface SubCategory {
  name: string;
  image: string;
}

interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
  subCategories: SubCategory[];
}

const categories: Category[] = [
  {
    id: "action-figures",
    name: "Action Figures & Playsets",
    icon: "🦸",
    color: "from-primary to-electric-blue-light",
    subCategories: [
      { name: "Superheroes", image: "/images/categories/action-figures/superheroes.jpg" },
      { name: "Movie & TV Characters", image: "/images/categories/action-figures/movie-tv-characters.jpg" },
      { name: "Collectible Figures", image: "/images/categories/action-figures/collectible-figures.jpg" },
    ],
  },
  {
    id: "dolls",
    name: "Dolls & Accessories",
    icon: "🎀",
    color: "from-playful-pink to-purple-pop",
    subCategories: [
        { name: "Fashion Dolls", image: "/images/categories/dolls/fashion-dolls.jpg" },
        { name: "Baby Dolls", image: "/images/categories/dolls/baby-dolls.jpg" },
        { name: "Dollhouses & Furniture", image: "/images/categories/dolls/dollhouses-furniture.jpg" },
    ],
  },
  {
    id: "building",
    name: "Building Sets & Blocks",
    icon: "🧱",
    color: "from-coral to-coral-light",
    subCategories: [
        { name: "LEGO", image: "/images/categories/building/lego.jpg" },
        { name: "Building Bricks", image: "/images/categories/building/building-bricks.jpg" },
        { name: "Magnetic Tiles", image: "/images/categories/building/magnetic-tiles.jpg" },
    ],
  },
  {
    id: "educational",
    name: "Educational & STEM Toys",
    icon: "🔬",
    color: "from-mint-green to-primary",
    subCategories: [
        { name: "Science Kits", image: "/images/categories/educational/science-kits.jpg" },
        { name: "Coding Robots", image: "/images/categories/educational/coding-robots.jpg" },
        { name: "Math & Logic Games", image: "/images/categories/educational/math-logic-games.jpg" },
    ],
  },
  {
    id: "arts",
    name: "Arts & Crafts",
    icon: "🎨",
    color: "from-purple-pop to-playful-pink",
    subCategories: [
        { name: "DIY Kits", image: "/images/categories/arts/diy-kits.jpg" },
        { name: "Paint Sets", image: "/images/categories/arts/paint-sets.jpg" },
        { name: "Modeling Clay", image: "/images/categories/arts/modeling-clay.jpg" },
        { name: "Craft Supplies", image: "/images/categories/arts/craft-supplies.jpg" },
    ],
  },
  {
    id: "puzzles",
    name: "Puzzles & Brain Teasers",
    icon: "🧩",
    color: "from-accent to-sunny-yellow",
    subCategories: [
        { name: "Jigsaw Puzzles", image: "/images/categories/puzzles/jigsaw-puzzles.jpg" },
        { name: "3D Puzzles", image: "/images/categories/puzzles/3d-puzzles.jpg" },
        { name: "Rubik's Cubes", image: "/images/categories/puzzles/rubiks-cubes.jpg" },
    ],
  },
  {
    id: "vehicles",
    name: "Vehicles & Remote Control",
    icon: "🚗",
    color: "from-electric-blue to-primary",
    subCategories: [
        { name: "Cars & Trucks", image: "/images/categories/vehicles/cars-trucks.jpg" },
        { name: "Trains", image: "/images/categories/vehicles/trains.jpg" },
        { name: "RC Cars", image: "/images/categories/vehicles/rc-cars.jpg" },
        { name: "RC Drones & Helicopters", image: "/images/categories/vehicles/rc-drones-helicopters.jpg" },
    ],
  },
  {
    id: "board-games",
    name: "Board Games & Card Games",
    icon: "🎲",
    color: "from-secondary to-coral",
    subCategories: [
        { name: "Family Games", image: "/images/categories/board-games/family-games.jpg" },
        { name: "Strategy Games", image: "/images/categories/board-games/strategy-games.jpg" },
        { name: "Trading Card Games", image: "/images/categories/board-games/trading-card-games.jpg" },
    ],
  },
  {
    id: "plush",
    name: "Plush & Stuffed Animals",
    icon: "🧸",
    color: "from-coral-light to-playful-pink",
    subCategories: [
        { name: "Teddy Bears", image: "/images/categories/plush/teddy-bears.jpg" },
        { name: "Character Plushies", image: "/images/categories/plush/character-plushies.jpg" },
        { name: "Soft Toys", image: "/images/categories/plush/soft-toys.jpg" },
    ],
  },
  {
    id: "outdoor",
    name: "Outdoor & Sports Toys",
    icon: "⚽",
    color: "from-mint-green to-accent",
    subCategories: [
        { name: "Bikes", image: "/images/categories/outdoor/bikes.jpg" },
        { name: "Scooters", image: "/images/categories/outdoor/scooters.jpg" },
        { name: "Balls", image: "/images/categories/outdoor/balls.jpg" },
        { name: "Water Toys", image: "/images/categories/outdoor/water-toys.jpg" },
        { name: "Sports Sets", image: "/images/categories/outdoor/sports-sets.jpg" },
    ],
  },
  {
    id: "pretend-play",
    name: "Pretend Play & Dress-Up",
    icon: "👑",
    color: "from-purple-pop to-primary",
    subCategories: [
        { name: "Kitchen Sets", image: "/images/categories/pretend-play/kitchen-sets.jpg" },
        { name: "Tool Sets", image: "/images/categories/pretend-play/tool-sets.jpg" },
        { name: "Costumes", image: "/images/categories/pretend-play/costumes.jpg" },
        { name: "Play Tents", image: "/images/categories/pretend-play/play-tents.jpg" },
    ],
  },
  {
    id: "electronic",
    name: "Electronic & Tech Toys",
    icon: "🤖",
    color: "from-primary to-mint-green",
    subCategories: [
        { name: "Kids Tablets", image: "/images/categories/electronic/kids-tablets.jpg" },
        { name: "Interactive Pets", image: "/images/categories/electronic/interactive-pets.jpg" },
        { name: "Electronic Games", image: "/images/categories/electronic/electronic-games.jpg" },
    ],
  },
  {
    id: "musical",
    name: "Musical Toys",
    icon: "🎵",
    color: "from-playful-pink to-accent",
    subCategories: [
        { name: "Toy Instruments", image: "/images/categories/musical/toy-instruments.jpg" },
        { name: "Karaoke Sets", image: "/images/categories/musical/karaoke-sets.jpg" },
    ],
  },
  {
    id: "baby",
    name: "Baby & Toddler Toys",
    icon: "👶",
    color: "from-electric-blue-light to-mint-green",
    subCategories: [
        { name: "Rattles", image: "/images/categories/baby/rattles.jpg" },
        { name: "Teething Toys", image: "/images/categories/baby/teething-toys.jpg" },
        { name: "Activity Gyms", image: "/images/categories/baby/activity-gyms.jpg" },
        { name: "Walkers", image: "/images/categories/baby/walkers.jpg" },
    ],
  },
  {
    id: "collectibles",
    name: "Collectibles & Miniatures",
    icon: "💎",
    color: "from-accent to-coral",
    subCategories: [
        { name: "Blind Box Figures", image: "/images/categories/collectibles/blind-box-figures.jpg" },
        { name: "Mini Collectibles", image: "/images/categories/collectibles/mini-collectibles.jpg" },
    ],
  },
];

const CategoryCard = ({ category, index, onExplore }: { category: Category; index: number; onExplore: () => void; }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onExplore}
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
            {category.subCategories.slice(0, 3).map((sub, idx) => (
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
            {category.subCategories.length > 3 && (
              <span className="text-xs text-muted-foreground">
                +{category.subCategories.length - 3} more
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
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  const handleSelectCategory = (category: Category) => {
    setSelectedCategory(category);
  };

  const handleBack = () => {
    setSelectedCategory(null);
  };

  return (
    <section id="categories" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 toy-pattern opacity-50" />
      <div className="container relative z-10">
        {!selectedCategory ? (
          <>
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
                <CategoryCard key={category.id} category={category} index={index} onExplore={() => handleSelectCategory(category)} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center">
             <motion.button
                onClick={handleBack}
                className="flex items-center gap-2 text-primary font-semibold mb-8 group"
              >
                <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                Back to Categories
              </motion.button>
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-2">{selectedCategory.name}</h2>
            <p className="text-lg text-muted-foreground mb-12">Explore sub-categories for {selectedCategory.name}.</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {selectedCategory.subCategories.map((subCategory, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="relative aspect-square bg-muted rounded-lg mb-4 overflow-hidden transform transition-transform duration-300 group-hover:scale-105">
                     <img src={subCategory.image} alt={subCategory.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-semibold text-foreground text-lg">{subCategory.name}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CategoriesSection;
