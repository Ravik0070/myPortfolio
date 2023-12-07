import { useRef } from "react";
import "./skills.scss";
import { motion, useInView } from "framer-motion";
const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duratiion: 1,
      staggerChildren: 0.1,
    },
  },
};

const bagdeVariants = {
  initial: { opacity: 0, x: -500 },
  animate: { opacity: 1, x: 0, transition: { type: "spring" , duration:1.5, delayChildren: 0.2} },
};
const Skills = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      ref={ref}
      className="skills"
      variants={variants}
      initial="initial"
      //   animate="animate"
      //   whileInView="animate"
      animate={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.p>
          I focus on learing new technologies,approaches,
          <br />
          knowledge to grow and move forward.
        </motion.p>
        <hr />
      </motion.div>
      <motion.div className="titleConatiner" variants={variants}>
        <h1>
          <motion.b whileHover={{ color: "orange" }}>Skills</motion.b> &{" "}
          <motion.b whileHover={{ color: "orange" }}>Technologies</motion.b>
        </h1>
      </motion.div>
      <motion.div className="badgesContainer" variants={bagdeVariants}>
        <motion.div className="imageContainer" variants={bagdeVariants}>
          <motion.img src="./js.png" alt="" />
        </motion.div>
        <motion.div className="imageContainer" variants={bagdeVariants}>
          <motion.img src="./node.png" alt=""  variants={bagdeVariants}/>
        </motion.div>
        <motion.div className="imageContainer" variants={bagdeVariants}>
          <motion.img src="./react.png" alt=""  variants={bagdeVariants}/>
        </motion.div>
        <motion.div className="imageContainer" variants={bagdeVariants}>
          <motion.img src="./mongo.png" alt=""  variants={bagdeVariants}/>
        </motion.div>
        <motion.div className="imageContainer" variants={bagdeVariants}>
          <motion.img src="./sass.png" alt=""  variants={bagdeVariants}/>
        </motion.div>
        <motion.div className="imageContainer" variants={bagdeVariants}>
          <motion.img src="./restfulapi.png" alt=""  variants={bagdeVariants}/>
        </motion.div>
        <motion.div className="imageContainer" variants={bagdeVariants}>
          <motion.img src="./sql.png" alt=""  variants={bagdeVariants}/>
        </motion.div>
        <motion.div className="imageContainer" variants={bagdeVariants}>
          <motion.img src="./bootstrap.png" alt=""  variants={bagdeVariants}/>
        </motion.div>
        <motion.div className="imageContainer" variants={bagdeVariants}>
          <motion.img src="./html5.png" alt=""  variants={bagdeVariants}/>
        </motion.div>
        <motion.div className="imageContainer" variants={bagdeVariants}>
          <motion.img src="./mern.png" alt=""  variants={bagdeVariants}/>
        </motion.div>
        <motion.div className="imageContainer" variants={bagdeVariants}>
          <motion.img src="./more.png" alt=""  variants={bagdeVariants}/>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
