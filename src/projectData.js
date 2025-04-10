import eldenRingImage from "./assets/er-build-manager.png"
import eldenRingGif from "./assets/Er-Gif.gif"

const projects = [
    {
        id: "elden-ring-build-manager",
        title: "Elden Ring Build Manager",
        description: "An interactive web application that allows users to track and compare multiple Elden Ring character builds, including stats, equipment, and scaling. The tool helps players optimize their builds based on in-game requirements.",
        image: eldenRingGif,
        technologies: ["React", "Node.js", "MongoDB", "GraphQL", "Tailwind CSS", "Express", "JSON Web Token", "BCrypt"],
        link: "/projects/elden-ring-build-manager",
        githubLink: "https://github.com/Midasantiago/ER-Stat-Checker",
        deployedLink: "https://er-stat-checker.onrender.com",
    },
    {
        id: "zombies-guide",
        title: "Call of Duty Zombies Guide | Coming Soon",
        description: "Interactive guide for map details and completing Easter Eggs.",
        image: "",
        technologies: ["React", "Redux", "Firebase"],
        link: "/projects/zombies-guide",
    },
    {
        id: "terraria-class-progression",
        title: " Terraria Class Progression | Coming Soon",
        description: "Track gear for current world progression per class",
    }
];

export default projects;