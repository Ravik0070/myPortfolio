import { useRef } from "react";
import "./project.scss";
import { motion, useInView } from "framer-motion";
const items = [
  {
    id: 1,
    title: "MERN E-Commerce Store app(AccessoryEmpoium) ",
    img: "./accessoryemporium.png",
    desc: "This project is shows how to create a MERN stack project, where React is used for the client side i.e. UI , for the backend Node & Express API is used along with the JWT authentication for login/register. Mongo is used as database.",
    gitlink: "https://github.com/Ravik0070/AccessoryEmpoium",
    link: "",
  },
  {
    id: 2,
    title: "ReactJs Recipe Search app (RecipeFinder)",
    img: "./foodRecipe.png",
    desc: "This project is shows how to create a reactjs project, where React is used for the client side i.e. UI , for api calls Axios is used and context api is used for maintaining data.",
    gitlink: "https://github.com/Ravik0070/RecipeFinder",
    link: "",
  },
  {
    id: 3,
    title: "MERN Blog App (RavisBlog)",
    img: "./blogapp.png",
    desc: "This project is shows how to create a MERN stack project, where React is used for the client side i.e. UI , for the backend Node & Express API is used along with the JWT authentication for login/register. MongoDB is used as database (Atlas mongo{web version}).",
    gitlink: "https://github.com/Ravik0070/RavisBlog",
    link: "",
  },
];
const variant = {
  initial: {
    opacity: 0,
    x: -500,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.5,
      staggerChilden: 0.1,
    },
  },
};
const itemVariant = {
  initial: {
    rotate: 0,
  },
  animateleft: {
    rotate: -4,
    scale:0.9,
    transition: {
      type: "spring",
      duration: 1.5,
      delay: 1,
      staggerChilden: 0.1,
    },
  },
  animateright: {
    rotate: 4,
    scale:0.9,
    transition: {
      type: "spring",
      duration: 1.5,
      delay: 1,
      staggerChilden: 0.1,
    },
  },
};
const Projects = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      className="projects"
      ref={ref}
      variants={variant}
      initial="initial"
      animate={isInView && "animate"}
    >
      <motion.h1 variants={variant}>
        Few Works & for more &rarr;
        <a href="https://github.com/Ravik0070?tab=repositories">
          &nbsp;
          <motion.img src="./github-mark.png" alt="" />
        </a>
      </motion.h1>
      <motion.div className="wrapper">
        {items.map((item) => (
          <motion.div
            className="projectContainer"
            key={item.id}
            variants={itemVariant}
            initial="initial"
            animate={
              item.id == 1
                ? "animateleft"
                : item.id == 3
                ? "animateright"
                : "initial"
            }
          >
            <motion.div className="imageContainer">
              <img src={item.img} alt="" />
            </motion.div>
            <motion.div className="textContainer">
              <motion.h1>{item.title}</motion.h1>
              <p>{item.desc}</p>
              <motion.div className="buttons">
                <a href={item.gitlink}>
                  <button>Go to repo</button>
                </a>
                {item.link && (
                  <a href={item.link}>
                    <button>See Demo</button>
                  </a>
                )}
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
