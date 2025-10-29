import { motion } from "framer-motion";

const BorderBeam = () => {
  return (
    <div className="absolute inset-0 rounded-lg pointer-events-none overflow-hidden">
      {/* Right Beam */}
      <motion.div
        className="absolute top-0 right-0 w-[4px] h-20 bg-gradient-to-b from-transparent via-primary to-transparent"
        animate={{
          y: ["-100%", "200%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
          delay: 0.75,
        }}
      />

      {/* Left Beam */}
      <motion.div
        className="absolute top-0 left-0 w-[4px] h-20 bg-gradient-to-b from-transparent via-primary to-transparent"
        animate={{
          y: ["100%", "-200%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
          delay: 1.35,
        }}
      />

      <motion.div
        className="absolute top-0 left-0 h-[4px] w-20 bg-gradient-to-r from-transparent via-green-400 to-transparent"
        animate={{
          x: ["-100%", "200%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
          delay: 0,
        }}
      />

      {/* Right Beam */}

      {/* Bottom Beam */}
      <motion.div
        className="absolute bottom-0 right-0 h-[4px] w-20 bg-gradient-to-l from-transparent via-green-400 to-transparent"
        animate={{
          x: ["100%", "-200%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
          delay: 0,
        }}
      />
    </div>
  );
};

export default BorderBeam;
