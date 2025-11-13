"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Solution } from "@/interfaces/homepage";

export const SolutionCard = ({ solution }: { solution: Solution }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Resetting flip state on viewport resize to prevent stuck cards
  useEffect(() => {
    const handleResize = () => {
      setIsFlipped(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative h-[419px] w-full [perspective:1000px]">
      <AnimatePresence mode="wait" initial={false}>
        {!isFlipped ? (
          <motion.div
            key="front"
            initial={{ rotateY: 0, opacity: 1 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: 90, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute inset-0 [backface-visibility:hidden]"
            style={{
              transformStyle: "preserve-3d",
              WebkitBackfaceVisibility: "hidden",
              backfaceVisibility: "hidden",
            }}
          >
            <div
              className="h-full bg-cover bg-center bg-no-repeat rounded-[20px] relative group"
              style={{ backgroundImage: `url(${solution.image})` }}
            >
              {/* Dark overlay  */}
              <div className="absolute inset-0 bg-black/20 rounded-[20px]" />

              {/* gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-[20px]" />

              <h3 className="absolute top-3 left-4 text-white text-[45px] font-serif italic z-10">
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
            initial={{ rotateY: -90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: -90, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute inset-0 [backface-visibility:hidden]"
            style={{
              transformStyle: "preserve-3d",
              WebkitBackfaceVisibility: "hidden",
              backfaceVisibility: "hidden",
            }}
          >
            <div className="h-full bg-[#739B07] rounded-[20px] p-4 relative flex flex-col">
              <h3 className="text-[45px] font-serif italic mb-2">
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
