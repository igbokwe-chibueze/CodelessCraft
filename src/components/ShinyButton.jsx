import { motion } from "framer-motion";

const buttonVariants = {
    hidden: {
      "--x": "100%",
      scale: 1
    },
    visible: {
      "--x": "-100%",
      transition: {
        "--x":{
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 1,
        type: "spring",
        stiffness: 20,
        damping: 15,
        mass: 2
        },
        scale: {
        type: "spring",
        stiffness: 10,
        damping: 5,
        mass: 0.1
        }
      }
    },
};

const ShinyButton = () => {
  return (
    <motion.button
      variants={buttonVariants}
      initial="hidden"
      animate="visible"
      whileTap={{ scale: 0.97 }}
      whileHover={{ scale: 1.05 }}
      className="px-6 py-2 rounded-md relative radial-gradient"
    >
      <span className="text-neutral-100 tracking-wide font-light h-full w-full block relative linear-mask">
        Subscribe
      </span>
      <span className="block absolute inset-0 rounded-md p-px linear-overlay" />
    </motion.button>
  );
};

export default ShinyButton;