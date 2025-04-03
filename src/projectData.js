import eldenRingImage from "./assets/er-build-manager.png"

const projects = [
    {
        id: "elden-ring-build-manager",
        title: "Elden Ring Build Manager",
        description: "Track and compare multiple character stats and equipment.",
        image: eldenRingImage,
        technologies: ["React", "Node.js", "MongoDB", "Tailwind"],
        link: "/projects/elden-ring-build-manager",
        githubLink: "https://github.com/Midasantiago/ER-Stat-Checker",
        deployedLink: "https://er-stat-checker.onrender.com",
    },
    {
        id: "zombies-guide",
        title: "Call of Duty Zombies Guide",
        description: "Interactive guide for map details and completing Easter Eggs.",
        image: "",
        technologies: ["React", "Redux", "Firebase"],
        link: "/projects/zombies-guide",
    },
    {
        id: "terraria-class-progression",
        title: " Terraria Class Progression",
        description: "Track gear for current world progression per class",
    }
];

export default projects;