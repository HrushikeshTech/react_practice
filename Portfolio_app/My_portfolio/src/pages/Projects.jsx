import { motion } from "framer-motion";
import "./Projects.css";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A beautiful multi-page portfolio built using React Router.",
      link: "https://github.com/HrushikeshTech/react_practice.git",
    },
    {
      title: "User Dashboard App",
      description: "A dynamic dashboard using nested and dynamic routes.",
      link: "https://github.com/HrushikeshTech/react_practice.git",
    },
    {
      title: "Weather App",
      description: "A clean weather dashboard fetching live API data.",
      link: "https://github.com/HrushikeshTech/react_practice.git",
    },
  ];

  return (
    <div className="projects-container">
      <motion.h1 
        className="projects-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        My Projects
      </motion.h1>

      <div className="projects-grid">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <h2>{proj.title}</h2>
            <p>{proj.description}</p>
            <a 
              href={proj.link} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
