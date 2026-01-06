import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Background Toy Icons and Gradients */}
      <div className="absolute inset-0 z-0 opacity-10">
        <motion.span
          className="absolute top-[10%] left-[5%] text-6xl" 
          animate={{ y: [0, -15, 0], rotate: [-10, 10, -10] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          🏎️
        </motion.span>
        <motion.span
          className="absolute top-[20%] right-[10%] text-5xl"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          🔫
        </motion.span>
        <motion.span
          className="absolute bottom-[15%] left-[15%] text-6xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          🎎
        </motion.span>
        <motion.span
          className="absolute bottom-[25%] right-[20%] text-5xl"
          animate={{ rotate: [0, 15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          🧸
        </motion.span>
        <motion.span
          className="absolute top-1/2 left-1/4 text-6xl"
          animate={{ y: [0, -25, 0], x: [0, 10, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        >
          🎲
        </motion.span>
         <motion.span
          className="absolute top-1/3 right-1/4 text-6xl"
          animate={{ y: [0, 25, 0], x: [0, -10, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        >
          🚂
        </motion.span>
      </div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground">
            About{" "}
            <span className="bg-gradient-to-r from-primary via-purple-pop to-secondary bg-clip-text text-transparent">
              Prime Toys
            </span>
          </h2>
        </motion.div>

        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto glass-card p-8 md:p-12 leading-relaxed text-center"
        >
          <p className="text-lg text-muted-foreground">
            Prime Toys is a one-stop destination for kids’ happiness and learning, offering a wide variety of high-quality toys for all age groups. From educational and brain-development toys to fun and entertaining play items, our showroom is designed to inspire creativity, imagination, and joyful play. We carefully select toys that support mental growth, skill development, and active play, ensuring kids learn while having fun.
          </p>
          <p className="mt-6 text-lg text-muted-foreground">
            Our collection includes metal toys, RC toys, sports items, board games, dolls, pretend-play sets like kitchen and doctor kits, and many more exciting categories. At Prime Toys, quality and safety are our top priorities, so every product meets high standards of durability and child safety. Whether you are looking for a gift or everyday play essentials, Prime Toys promises great variety, trusted quality, and a delightful shopping experience for both kids and parents.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
