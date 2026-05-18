import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getToy } from '@/data/toys';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Toy = () => {
  const { categoryName, toyId } = useParams();
  const toy = getToy(categoryName || "", toyId || "");
  const [currentImage, setCurrentImage] = useState(0);

  if (!toy) {
    return (
        <div className="container mx-auto px-4 py-8 text-center">
            <h1 className="text-3xl font-bold">Toy not found</h1>
        </div>
    );
  }

  const nextImage = () => {
    setCurrentImage((prev) => (prev === toy.images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? toy.images.length - 1 : prev - 1));
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
         <div className="absolute inset-0 toy-pattern opacity-50" />
        <div className="container relative z-10 mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
                    <div className="relative">
                        <div className="aspect-square w-full overflow-hidden rounded-2xl bg-gray-200 shadow-lg">
                            <img
                            src={toy.images[currentImage]}
                            alt={toy.name}
                            className="w-full h-full object-cover object-center"
                            />
                        </div>
                        {toy.images.length > 1 && (
                        <>
                            <Button
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full"
                            variant="outline"
                            size="icon"
                            >
                            <ChevronLeft className="h-6 w-6" />
                            </Button>
                            <Button
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full"
                            variant="outline"
                            size="icon"
                            >
                            <ChevronRight className="h-6 w-6" />
                            </Button>
                        </>
                        )}
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                    <h1 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
                        {toy.name}
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        {toy.description}
                    </p>
                </motion.div>
            </div>
        </div>
    </section>
  );
};

export default Toy;
