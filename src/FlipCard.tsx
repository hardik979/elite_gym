import { motion } from "framer-motion";
import { useState } from "react";
const FlipCard = () => {
  const [isFlipped, setFlipped] = useState(false);
  return (
    <motion.div
      onClick={() => setFlipped(!isFlipped)}
      className="perspective-1000 "
    >
      <motion.div
        variants={{
          front: { rotateY: 0 },
          back: { rotateY: 180 },
        }}
        initial="front"
        animate={isFlipped ? "back" : "front"}
        transition={{ duration: 0.5 }}
        className="w-64 h-40 bg-white rounded-lg shadow-lg overflow-hidden transform-style-preserve-3d"
      >
        <div className="absolute inset-0 bg-white flex items-center justify-center text-xl font-bold">
          Front Side
        </div>
        <div className="absolute inset-0 bg-blue-500 text-white rotate-y-180 flex items-center justify-center text-xl font-bold">
          Back Side
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FlipCard;
