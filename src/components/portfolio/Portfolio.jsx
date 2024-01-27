import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Graduate Researcher",
    img: "https://collegevine.imgix.net/4bd25f0c-e812-4ce9-92f5-7f6eeb3fe2af.jpg?h=300&fit=crop&crop=edges&auto=format",
    desc: "In the realm of academia, I collaborated with esteemed professors to unravel the intricacies of student behavior trends through extensive research. Employing advanced statistical analysis and data imputation techniques, I enhanced the accuracy and completeness of datasets, delving into the nuances of academic patterns. My role extended to the development of predictive models, utilizing diverse machine learning algorithms to forecast future trends in student behavior. Ensuring privacy and accuracy, I presented key findings at the SOTL Summit Conference, earning recognition for my impactful contributions and innovative insights. My journey encompasses not just data analysis but a commitment to advancing academic understanding and fostering a dynamic research environment.",
  },
  {
    id: 2,
    title: "Developer - Technology & Innovation",
    img: "https://av.sc.com/corp-en/nr/content/images/A-Standard-Chartered-building-with-our-logo-Our-locations-hero-L2-scaled.jpg",
    desc: "As a Techno Banker, I orchestrated the development of cutting-edge Banking Systems and Payment applications across global landscapes. From seamlessly deploying Microservices in regions spanning the Middle East to Europe, I utilized Java, Maven, Spring Boot, and JDBC, ensuring flawless operations. Employing Kafka and Solace messaging, I crafted comprehensive test cases, delved into data flow analysis, and utilized Elasticsearch and Kibana for robust insights. Beyond coding, my role extended to mentorship, defect coordination, and spearheading new talent integration. Acknowledged for steering pivotal projects, my expertise resonates in the successful deployment of services tailored for the Middle East and Asia, marking my journey with innovation and excellence.",
  },
  {
    id: 3,
    title: "Indian Institute of Technology, Madras",
    img: "https://blog.adobe.com/en/publish/2022/01/13/media_12fdd48294a941ffd78a6ee352d887a1715fc78bb.jpeg?width=750&format=jpeg&optimize=medium",
    desc: "Engaged in comprehensive guidance and instruction for undergraduate students, fostering their mastery of machining techniques and experiments in the laboratory course. Played a pivotal role in organizing and executing laboratory sessions, ensuring a seamless learning experience. Undertook invigilation duties during mid and end-semester exams, upholding a secure and controlled testing environment for departmental course assessments.",
  },
  {
    id: 4,
    title: "Vijayawada Thermal Power Station",
    img: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Dr_Narla_Tata_Rao_Thermal_Power_Station_in_January_2015.JPG",
    desc: "Conducted a comprehensive study of Thermal Power Plant operations, delving into the intricate workflow, major components, and their functions. Identified and analyzed operational lags in the 210MW stage-1 boiler operations through meticulous examination of data logs, performance metrics, and on-site observations. Introduced strategic suggestions for operational enhancement, implementing impactful changes in protocols to streamline processes and optimize efficiency. Actively participated in day-to-day operations within the control room, gaining practical experience in monitoring critical parameters. Additionally, engaged in on-field activities, collaborating with operations and maintenance teams, translating theoretical knowledge into practical application in power plant management.",
  },
  {
    id: 5,
    title: "Edar Labs",
    img: "https://media.licdn.com/dms/image/C510BAQFNg5vDqnEB7Q/company-logo_200_200/0/1630631155338?e=2147483647&v=beta&t=4h2_vmwzZXiAfVUKWaLkJI7c6VyMmgt9GUYSeC3yjqI",
    desc: "During my internship at Edarlabs Learning Pvt Ltd, I played a crucial role in preprocessing customer data, ensuring its cleanliness and conducting exploratory data analysis (EDA). I adeptly built a robust machine learning model for product acceptance segmentation, showcasing proficiency in data-driven decision-making. Utilizing advanced clustering techniques, such as K-means clustering and the elbow method, I effectively grouped customers based on behavior. Key contributions include data preprocessing to maintain dataset quality, developing a practical understanding of ML algorithms, and providing valuable insights for targeted marketing through customer segmentation. Additionally, I created detailed presentations and pitched potential customers to investors, emphasizing the business value derived from the analysis.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See More</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
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
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
