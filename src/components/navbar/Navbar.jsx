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
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          RaviKant
        </motion.span>
        <motion.div
          className="social"
          variants={socialIconVariants}
          initial="initial"
          animate="animate"
        >
          <motion.a href="#" variants={socialIconVariants}>
            <motion.div className="imageContainer">
              <motion.img src="/github-mark.png" alt="" />
            </motion.div>
          </motion.a>
          <motion.a href="#" variants={socialIconVariants}>
            <motion.div className="imageContainer">
              <motion.img src="/Instagram_icon.png" alt="" />
            </motion.div>
          </motion.a>
          <motion.a href="#" variants={socialIconVariants}>
            <motion.div className="imageContainer">
              <motion.img src="/Twitter.png" alt="" />
            </motion.div>
          </motion.a>
          <motion.a href="#" variants={socialIconVariants}>
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
