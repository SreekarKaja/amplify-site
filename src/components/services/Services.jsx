import { useRef } from "react";
import "./services.scss";
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
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          An IIT Madras Alumni
          <br /> and much more
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>MY</motion.b> Education
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>Education</motion.b> Background.
          </h1>
          <a href="/Resume_Sreekar_K.pdf" target="_blank" rel="noopener noreferrer">
            <button>My Resume</button>
          </a>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>M.S in Coputer Science from Kennesaw State University</h2>
          <p>
          "Kennesaw State University (KSU), located in Georgia, USA, is renowned for its vibrant academic community and commitment to excellence. The Computer Science Department at KSU stands as a pillar of innovation and learning. With state-of-the-art facilities, esteemed faculty, and cutting-edge research opportunities, the department offers students a dynamic environment to explore diverse aspects of computer science. From rigorous academic programs to collaborative research initiatives, KSU's Computer Science Department fosters a culture of creativity and intellectual growth. Graduates emerge with not only a robust understanding of computer science principles but also practical skills, positioning them as leaders in the ever-evolving tech landscape."          </p>
          <a href="https://facultydevelopment.kennesaw.edu/scholarly-teaching/sotl-summit/2023/program/2023%20SoTL%20Summit%20Day%201%20Program.pdf" target="_blank" rel="noopener noreferrer">
            <button>Kennesaw State University</button>
            </a>
        </motion.div>
        {/* <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Standard Chartered GBS</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?
          </p>
          <a href="https://www.sc.com/en/" target="_blank" rel="noopener noreferrer">
          <button>Standard Chartered GBS</button>
          </a>
          
        </motion.div> */}
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Dual Degree in Mechanical Engineering</h2>
          <h3>Indian Institute of Technology, Madras</h3>
          <p>
          "IIT Madras, located in Chennai, India, is a premier institute renowned for its excellence in engineering, technology, and research. Established in 1959, it consistently ranks among the top educational institutions globally. With a commitment to fostering innovation and producing outstanding graduates, IIT Madras holds a prestigious reputation for its rigorous academic programs, distinguished faculty, and impactful contributions to various fields of science and technology."
          </p>
          <a href="https://www.linkedin.com/company/edarlabs/about/" target="_blank" rel="noopener noreferrer">
            <button>Indian Institute of Technology, Madras</button>
          </a>
        </motion.div>
        {/* <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Vijayawada Thermal Power Station</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?
          </p>
          <a href="https://en.wikipedia.org/wiki/Dr._Narla_Tata_Rao_Thermal_Power_Station" target="_blank" rel="noopener noreferrer">
            <button>Go</button>
          </a>
        </motion.div> */}
      </motion.div>
    </motion.div>
  );
};

export default Services;
