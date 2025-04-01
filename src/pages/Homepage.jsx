import React from "react";
import { Link } from "react-router-dom";
import projects from "../projectData"
import placeholderImg from "../assets/image-coming-soon-placeholder.webp";

const Homepage = () => {
    return (
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
    )
}

export default Homepage;