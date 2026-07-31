import { motion } from "framer-motion";
import { fadeSoft, fadeUp, staggerContainer } from "../../../animations/variants";
import { a } from "framer-motion/client";
import projects from "../../../data/projects";
import ProjectCard from "../../ui/ProjectCard/ProjectCard";
import "./Projects.css";

function Projects() {
    return (
        <section className="projects section" id="projects">
            <motion.div 
            className="container"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}>
                
                <div className="section-header">
                    <div>
                        <motion.div className="section-eyebrow" variants={fadeUp}>
                            <span></span>
                            <p>FEATURED PROJECTS</p>
                        </motion.div>
 
                        <motion.h2 variants={fadeUp}>
                            Projects That <br />
                            <span>Delivered Results</span>
                        </motion.h2>
                    </div>

                    {/*
                    <a href="/projects">
                        View All Projects
                    </a>
                    */}
                </div>

                <motion.div className="projects-grid" variants={staggerContainer}>

                    {projects
                        .filter(project => project.featured)
                        .map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
                        ))}

                </motion.div>
            </motion.div>
        </section>
    );
}

export default Projects;