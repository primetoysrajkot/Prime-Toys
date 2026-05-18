export const categories = [
  {
    id: "action-figures",
    name: "Action Figures & Playsets",
    icon: "🦸",
    toys: [
      {
        id: "action-figure-1",
        name: "Superhero Action Figure",
        description: "A super-powered hero to save the day!",
        images: [
          "/images/toys/action-figures/figure-1-1.jpg",
          "/images/toys/action-figures/figure-1-2.jpg",
        ],
      },
    ],
  },
  {
    id: "dolls",
    name: "Dolls & Accessories",
    icon: "🎀",
    toys: [],
  },
  {
    id: "building",
    name: "Building Sets & Blocks",
    icon: "🧱",
    toys: [
       {
        id: "building-set-1",
        name: "Creative Building Blocks",
        description: "Build anything you can imagine with this 500-piece set.",
        images: [
          "/images/toys/building-sets/set-1-1.jpg",
          "/images/toys/building-sets/set-1-2.jpg",
          "/images/toys/building-sets/set-1-3.jpg",
        ],
      },
    ],
  },
  {
    id: "educational",
    name: "Educational & STEM Toys",
    icon: "🔬",
    toys: [],
  },
  {
    id: "arts",
    name: "Arts & Crafts",
    icon: "🎨",
    toys: [],
  },
  {
    id: "puzzles",
    name: "Puzzles & Brain Teasers",
    icon: "🧩",
    toys: [],
  },
  {
    id: "vehicles",
    name: "Vehicles & Remote Control",
    icon: "🚗",
    toys: [],
  },
  {
    id: "board-games",
    name: "Board Games & Card Games",
    icon: "🎲",
    toys: [],
  },
  {
    id: "plush",
    name: "Plush & Stuffed Animals",
    icon: "🧸",
    toys: [],
  },
  {
    id: "outdoor",
    name: "Outdoor & Sports Toys",
    icon: "⚽",
    toys: [],
  },
  {
    id: "pretend-play",
    name: "Pretend Play & Dress-Up",
    icon: "👑",
    toys: [],
  },
  {
    id: "electronic",
    name: "Electronic & Tech Toys",
    icon: "🤖",
    toys: [],
  },
  {
    id: "musical",
    name: "Musical Toys",
    icon: "🎵",
    toys: [],
  },
  {
    id: "baby",
    name: "Baby & Toddler Toys",
    icon: "👶",
    toys: [],
  },
  {
    id: "collectibles",
    name: "Collectibles & Miniatures",
    icon: "💎",
    toys: [],
  },
];

export const getCategories = () => categories;

export const getCategory = (id: string) => categories.find((c) => c.id === id);

export const getToy = (categoryId: string, toyId: string) => {
  const category = getCategory(categoryId);
  return category?.toys.find((t) => t.id === toyId);
};
