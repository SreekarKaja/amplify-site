import { useRef } from "react";
import "./experience.scss"; // CSS file for animations
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const experiences = [
  {
    id: 1,
    title: "Developer - Technology & Innovation",
    company: "Standard Chartered Bank GBS",
    location: "Chennai",
    currentlyWorking: false,
    from: "08/2020",
    to: "07/2022",
    roleDescription: "As a Techno Banker, I contributed to developing Banking Systems and Payment applications using relevant full-stack...",
    achievements: "During my tenure, I actively pursued professional development...",
  },
  {
    id: 2,
    title: "Graduate Researcher",
    company: "Kennesaw State University",
    location: "Kennesaw and Marietta",
    currentlyWorking: true,
    from: "08/2022",
    roleDescription: "Responsibilities: Research Collaboration: Collaborated closely with university professors to conduct in-depth investigations into student behavior trends spanning multiple semesters...",
    achievements: "Achievements: Research Paper Presentation: Presented a research paper at the SOTL Summit Conference, showcasing key findings and insights derived from the extensive analysis of student behavior data...",
  },
  // Add more experiences as needed
];

const SingleExperience = ({ experience }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <motion.div className="textContainer" style={{ y }}>
            <h2>{experience.title}</h2>
            <h3>{experience.company}</h3>
            <p>{experience.location}</p>
            <p>{experience.currentlyWorking ? "Currently working here" : `From ${experience.from} to ${experience.to}`}</p>
            <p>{experience.roleDescription}</p>
            <p>{experience.achievements}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="experience" ref={ref}>
      <div className="progress">
        <h1>Work Experience</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {experiences.map((experience) => (
        <SingleExperience experience={experience} key={experience.id} />
      ))}
    </div>
  );
};

export default Experience;
