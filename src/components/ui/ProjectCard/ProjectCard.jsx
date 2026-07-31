import { motion } from "framer-motion";
import { cardReveal } from "../../../animations/variants";
import { ArrowUpRight } from "lucide-react";
import "./ProjectCard.css";

function ProjectCard({ project, index }) {
  return (
    <motion.article 
    className="project-card" 
    variants={cardReveal}
    >

      <div className="project-image">
        <img
          src={project.image}
          alt={project.title}
        />

        <div className="project-overlay"></div>
      </div>

      <div className="project-content">

        <div className="project-top">

          <span className="project-category">
            {project.category}
          </span>

          <ArrowUpRight
            className="project-arrow"
            size={22}
          />

        </div>

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="project-tech">
          {project.technologies.map((tech) => (
            <span key={tech}>
              {tech}
            </span>
          ))}
        </div>

      </div>

    </motion.article>
  );
}

export default ProjectCard;