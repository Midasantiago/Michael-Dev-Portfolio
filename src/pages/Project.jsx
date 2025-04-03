import React from "react";
import { useParams } from "react-router-dom";
import placeholderImg from "../assets/image-coming-soon-placeholder.webp"
import projects from "../projectData";

const Project = () => {

    const { id } = useParams();

    const project = projects.find((p) => p.id === id);

    if (!project) {
        return (
            <div className="text-center mt-10">
                <h1 className="text-3xl text-red-500">Project Not Found</h1>
                <p className="text-lg">The project you are looking for does not exist.</p>
            </div>
        );
    }


    return (
        <div className=" project-highlight flex flex-col md:flex-row gap-4 justify-center items-center m-4 p-4">
            <div className="flex gap-4 justify-center">
                <div className=" side-info p-4 m-4">
                    <h1 className=" project-title text-3xl">{project.title || "Coming Soon"}</h1>
                    <p className="pt-4 text-xl">{project.description || "Coming Soon"}</p>
                </div>
                <div className="">
                    <a href={project.deployedLink || "#"} target="_blank" rel="noopener noreferrer"><img className="project-gif w-full h-60 object-cover" src={project.image || placeholderImg} alt={project.title || "Placeholder Image"} /></a>
                </div>
            </div>
            <div className="bottom-section flex gap-8">
                <div className="tech-used p-4 m-4">
                    <h1 className="text-xl">Technologies Used:</h1>
                    <ul className="list-disc pl-5">
                        {(project.technologies || []).map((tech, index) => (
                            <li key={`${project.id}-${index}`} className="text-xl">{tech}</li>
                        ))}
                    </ul>
                </div>
                <div className="project-links p-4 m-4">
                    <a href={project.githubLink || "#"} target="_blank" rel="noopener noreferrer" title={project.githubLink ? "View GitHub Repository" : "GitHub Link Coming Soon"}><p className=" link pt-2 pb-4"><span>GitHub Link: --- </span>{project.githubLink || "Coming Soon"}</p></a>
                    <a href={project.deployedLink || "#"} target="_blank" rel="noopener noreferrer" title={project.deployedLink ? "View Deployed Link:" : "Deployed Link Coming Soon"}><p className="link pb-2"><span>Deployed Site: --- </span>{project.deployedLink || "Coming Soon"}</p></a>
                </div>
            </div>
        </div>
    )
}

export default Project;