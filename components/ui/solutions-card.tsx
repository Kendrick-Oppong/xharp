"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Solution } from "@/interfaces/homepage";

export const SolutionCard = ({ solution }: { solution: Solution }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="relative h-[419px] w-full perspective-1000">
      <AnimatePresence mode="wait">
        {!isFlipped ? (
          <motion.div
            key="front"
            initial={{ rotateY: 0 }}
            animate={{ rotateY: 0 }}
            exit={{ rotateY: 90 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute inset-0 backface-hidden"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div
              className="h-full bg-cover bg-center bg-no-repeat rounded-[20px] relative group"
              style={{ backgroundImage: `url(${solution.image})` }}
            >
              {/* Dark overlay  */}
              <div className="absolute inset-0 bg-black/20 rounded-[20px]" />

              {/* gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-[20px]" />

              <h3 className="absolute top-3 left-4 text-white text-[50px] font-serif italic z-10">
                {solution.title}
              </h3>

              <button
                onClick={() => setIsFlipped(true)}
                className="absolute bottom-4 right-4 w-[43px] h-[44px] rounded-full bg-white/10 flex items-center justify-center text-white text-2xl font-bold shadow-[inset_2px_1px_10px_0px_rgba(255,255,255,0.65)] hover:shadow-[inset_2px_1px_15px_0px_rgba(255,255,255,0.8)] transition-all z-10"
                aria-label="Expand card"
              >
                +
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="back"
            initial={{ rotateY: -90 }}
            animate={{ rotateY: 0 }}
            exit={{ rotateY: -90 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute inset-0 backface-hidden"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="h-full bg-[#739B07] rounded-[20px] p-4 relative flex flex-col">
              <h3 className="text-[50px] font-serif italic mb-2">
                {solution.title}
              </h3>
              <p className=" leading-relaxed flex-1">{solution.description}</p>
              <button
                onClick={() => setIsFlipped(false)}
                className="absolute bottom-4 right-5 w-[43px] h-[44px] rounded-full bg-white/10 flex items-center justify-center text-white text-lg font-bold shadow-[inset_2px_1px_10px_0px_rgba(255,255,255,0.65)] hover:shadow-[inset_2px_1px_15px_0px_rgba(255,255,255,0.8)] transition-all"
                aria-label="Close card"
              >
                ✕
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
