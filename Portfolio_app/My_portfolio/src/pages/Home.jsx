import { motion } from "framer-motion";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">

      
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="hero-content"
      >
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Hrushikesh</span> 👋
        </h1>

        <p className="hero-subtitle">
          A passionate <span>Web Developer</span> who loves creating beautiful
          and functional web experiences using React.
        </p>

        
        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <a href="/projects" className="btn-primary">See My Projects</a>
          <a href="/contact" className="btn-secondary">Contact Me</a>
        </motion.div>
      </motion.div>
    </div>
  );
}
