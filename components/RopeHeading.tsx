"use client";

import { motion} from "framer-motion"; // ✅ import Variants type
const text = "Personal Finance Visualizer";

const dropVariants = {
  hidden: {
    y: -60,
    opacity: 0,
  },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 20,
      delay: i * 0.05,
    },
  }),
};

export default function RopeHeading() {
  return (
    <h1 className="text-4xl font-bold flex flex-wrap gap-2 pl-[30px]">
      {text.split("").map((char, i) => (
        <div key={i} className="flex flex-col items-center w-[1ch]">
          {/* Visible rope */}
          {char !== " " ? (
            <div className="h-6 w-[2px] RopeHead bg-black mb-1" />
          ) : (
            <div className="h-6 w-[2px] invisible mb-1" />
          )}

          {/* Animated letter */}
          <motion.span
            custom={i}
            initial="hidden"
            animate="visible"
            variants={dropVariants}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        </div>
      ))}
    </h1>
  );
}
