import "./hero.scss";
import { motion } from "framer-motion";
const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};
const imageVariant = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};
const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>RAVIKANT</motion.h2>
          <motion.h1 variants={textVariants}>Developer</motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.a href="#Projects">
              <motion.button variants={textVariants}>
                See the Latest Works
              </motion.button>
            </motion.a>
            <motion.a href="#Contact">
              <motion.button variants={textVariants}>Contact me</motion.button>
            </motion.a>
          </motion.div>
          <motion.img
            src="/scroll.png"
            alt=""
            animate="scrollButton"
            variants={textVariants}
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Web Developer Software Developer
      </motion.div>
      <motion.div
        className="imageContainer"
        variants={imageVariant}
        initial="initial"
        animate="animate"
      >
        <img src="./hero.png" alt="" />
      </motion.div>
    </div>
  );
};

export default Hero;

// 52:41
