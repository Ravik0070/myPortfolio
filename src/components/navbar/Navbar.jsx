import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
const socialIconVariants = {
  initial: {
    x: -300,
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
};
const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.div
          className="social"
          variants={socialIconVariants}
          initial="initial"
          animate="animate"
        >
          <motion.a
            href="https://github.com/Ravik0070?tab=repositories"
            target="_blank"
            variants={socialIconVariants}
          >
            <motion.div className="imageContainer">
              <motion.img src="/github-mark.png" alt="" />
            </motion.div>
          </motion.a>
          <motion.a
            href="https://instagram.com/messedup8?igshid=YTQwZjQ0NmI0OA=="
            target="_blank"
            variants={socialIconVariants}
          >
            <motion.div className="imageContainer">
              <motion.img src="/Instagram_icon.png" alt="" />
            </motion.div>
          </motion.a>
          <motion.a
            href="https://twitter.com/Ravikan36914427"
            target="_blank"
            variants={socialIconVariants}
          >
            <motion.div className="imageContainer">
              <motion.img
                src="/twitter2.png"
                alt=""
                style={{ transform: "scale(1.3)" }}
              />
            </motion.div>
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/ravi-kant-8237561b6/"
            target="_blank"
            variants={socialIconVariants}
          >
            <motion.div className="imageContainer">
              <motion.img src="/linkedIn.png" alt="" />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
