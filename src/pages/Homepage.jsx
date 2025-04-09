import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import projects from "../projectData"
import placeholderImg from "../assets/image-coming-soon-placeholder.webp";

const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
};

const Homepage = () => {
    return (
        <motion.div
            className="p-4"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit">
                
            <div className="project-section gap-4 p-4 m-4">
                {projects.map((project) => (
                    <Link to={`/project/${project.id}`}>
                        <div key={project.id} className="project p-4">
                            <img className="project-img w-full h-60 object-cover" src={project.image || placeholderImg} alt={project.title} />
                            <h2 className=" project-title pt-3">{project.title}</h2>
                        </div>
                    </Link>
                ))}
            </div >
        </motion.div>
    )
}

export default Homepage;