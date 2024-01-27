import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          
        </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/sreekar-kaja/">
            <img src="/linkdin.png" alt="" />
          </a>
          <a href="https://twitter.com/sreekar_kaja">
            <img src="/x3.png" alt="" />
          </a>
          <a href="https://github.com/SreekarKaja">
            <img src="/github.png" alt="" />
          </a>
          <a href="#">
            <img src="/dribbble.png" alt="" />
          
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
