import { motion, useMotionValue, useTransform } from "framer-motion";

const AddCard = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const backgroundImage = useTransform(
    x,
    [-200, 200],
    ["url(/pexels.jpg)", "url(/tech.jpg)"]
  );
  return (
    <motion.div
      className="h-40 w-40 rounded-lg  flex items-center justify-center"
      drag
      dragConstraints={{ left: -300, top: -300, right: 300, bottom: 300 }}
      style={{ x, y, background: backgroundImage, backgroundSize: "cover" }}
    >
      <div className="text-white">Drag me</div>
    </motion.div>
  );
};

export default AddCard;
