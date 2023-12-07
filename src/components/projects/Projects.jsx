import { useRef } from "react";
import "./projects.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
const items = [
  {
    id: 1,
    title: "React commerce",
    img: "https://images.pexels.com/photos/17041394/pexels-photo-17041394/free-photo-of-sea-waves-at-rocky-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus cumque nostrum architecto eveniet adipisci suscipit molestias ratione aspernatur nesciunt molestiae.",
  },
  {
    id: 2,
    title: "NextJs commerce",
    img: "https://images.pexels.com/photos/16552418/pexels-photo-16552418/free-photo-of-moody-pnw-landscape.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus cumque nostrum architecto eveniet adipisci suscipit molestias ratione aspernatur nesciunt molestiae.",
  },
  {
    id: 3,
    title: "Vanilla commerce",
    img: "https://images.pexels.com/photos/19296984/pexels-photo-19296984.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus cumque nostrum architecto eveniet adipisci suscipit molestias ratione aspernatur nesciunt molestiae.",
  },
];

const SingleSection = ({ item }) => {
  const singleRef = useRef();
  const { scrollYProgress } = useScroll({
    target: singleRef,
    offset: [
      "end end","start start"
    ]
  });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  console.log(scrollYProgress);
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageConatiner" ref={singleRef}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2 style={{ y: y }}>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See More</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end","start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="projects" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <SingleSection item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Projects;
