import { motion } from "framer-motion";
import { useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FeaturedToy {
  id: string;
  name: string;
  category: string;
  price: string;
  rating: number;
  badge?: string;
  emoji: string;
  gradient: string;
}

const featuredToys: FeaturedToy[] = [
  {
    id: "1",
    name: "Super Robot Builder",
    category: "STEM & Educational",
    price: "₹1,999",
    rating: 4.9,
    badge: "Bestseller",
    emoji: "🤖",
    gradient: "from-primary to-electric-blue-light",
  },
  {
    id: "2",
    name: "Princess Castle Set",
    category: "Dolls & Playsets",
    price: "₹2,499",
    rating: 4.8,
    badge: "New Arrival",
    emoji: "🏰",
    gradient: "from-playful-pink to-purple-pop",
  },
  {
    id: "3",
    name: "Racing Car Collection",
    category: "Vehicles & RC",
    price: "₹899",
    rating: 4.7,
    emoji: "🏎️",
    gradient: "from-coral to-secondary",
  },
  {
    id: "4",
    name: "Art Studio Kit",
    category: "Arts & Crafts",
    price: "₹1,299",
    rating: 4.9,
    badge: "Popular",
    emoji: "🎨",
    gradient: "from-accent to-sunny-yellow",
  },
  {
    id: "5",
    name: "Dinosaur World Set",
    category: "Action Figures",
    price: "₹1,599",
    rating: 4.8,
    emoji: "🦕",
    gradient: "from-mint-green to-primary",
  },
  {
    id: "6",
    name: "Music Band Kit",
    category: "Musical Toys",
    price: "₹1,799",
    rating: 4.6,
    badge: "Fun!",
    emoji: "🎸",
    gradient: "from-purple-pop to-playful-pink",
  },
];

const FeaturedSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 340;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="categories" className="py-24 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-12"
        >
          <div>
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-coral bg-coral/10 rounded-full">
              Featured
            </span>
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground">
              Popular{" "}
              <span className="bg-gradient-to-r from-coral to-secondary bg-clip-text text-transparent">
                Picks
              </span>
            </h2>
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("left")}
              className="rounded-full border-2"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("right")}
              className="rounded-full border-2"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </motion.div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {featuredToys.map((toy, index) => (
            <motion.div
              key={toy.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex-shrink-0 w-72 snap-start"
            >
              <div className="glass-card group cursor-pointer hover:shadow-card hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                {/* Image Area */}
                <div className={`relative h-48 bg-gradient-to-br ${toy.gradient} flex items-center justify-center`}>
                  {toy.badge && (
                    <span className="absolute top-4 left-4 px-3 py-1 text-xs font-bold bg-card text-foreground rounded-full shadow-soft">
                      {toy.badge}
                    </span>
                  )}
                  <motion.span
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="text-7xl"
                  >
                    {toy.emoji}
                  </motion.span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                    {toy.category}
                  </p>
                  <h3 className="text-lg font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {toy.name}
                  </h3>

                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-primary">{toy.price}</span>
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="w-4 h-4 fill-accent text-accent" />
                      <span className="font-semibold">{toy.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
