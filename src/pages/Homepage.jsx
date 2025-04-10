import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import projects from "../projectData";
import ogImage from "../../assets/Michael-Dev.png";
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

            <div id="project-section" className="project-section gap-4 p-4 m-4">
                <Helmet>
                    <title>Michael Santiago | Full-Stack Web Developer</title>
                    <meta name="description" content="Michael Santiago is a full-stack web developer specializing in MERN stack applications. View his portfolio showcasing dynamic projects and web development skills." />
                    <meta property="og:title" content="Michael Santiago | Full-Stack Web Developer" />
                    <meta property="og:description" content="Explore the portfolio of Michael Santiago, a passionate full-stack web developer with a focus on the MERN stack." />
                    <meta property="og:image" content={ogImage} />
                    <meta property="og:url" content="https://michael-dev-portfolio.onrender.com"/>
                </Helmet>
                {projects.map((project) => (
                    <Link to={`/project/${project.id}`}>
                        <a href="#project-highlight">
                            <div key={project.id} className="project p-4">
                                <img className="project-img w-full h-60 object-cover" src={project.image || placeholderImg} alt={project.title} />
                                <h2 className=" project-title pt-3">{project.title}</h2>
                            </div>
                        </a>
                    </Link>
                ))}
            </div >
        </motion.div>
    )
}

export default Homepage;