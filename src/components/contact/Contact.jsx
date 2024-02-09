import { useRef } from "react";
import "./contact.scss";
import { motion } from "framer-motion";

const Contact = () => {
  const ref = useRef();
  return (
    <motion.div ref={ref} className="contact">
      <motion.div className="textContainer">
        <motion.h1>Lets Work Together</motion.h1>
        <motion.div className="item">
          <h2>Mail&nbsp;:&nbsp;</h2>
          <span>ravikant2311@outlook.com</span>
        </motion.div>
        <motion.div className="item">
          <h2>Phone&nbsp;:&nbsp;</h2>
          <span>+91- 8800438662</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
