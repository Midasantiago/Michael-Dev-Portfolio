import React from "react";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaBootstrap, FaGitAlt, FaDatabase, FaNpm,
} from "react-icons/fa";
import {
  SiTailwindcss, SiJquery, SiMongodb, SiMysql, SiExpress, SiRedux,
  SiJsonwebtokens, SiMongoose, SiPostman, SiVite, SiFramer, SiAxios, SiTestinglibrary,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express", icon: <SiExpress className="text-gray-700" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "Mongoose", icon: <SiMongoose className="text-red-600" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
  { name: "ORM", icon: <FaDatabase className="text-indigo-600" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-700" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "jQuery", icon: <SiJquery className="text-blue-600" /> },
  { name: "NPM", icon: <FaNpm className="text-red-600" /> },
  { name: "API", icon: <SiAxios className="text-blue-500" /> },
  { name: "JWT Auth", icon: <SiJsonwebtokens className="text-yellow-600" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  { name: "MVC", icon: <FaDatabase className="text-gray-600" /> },
  { name: "PWA", icon: <FaReact className="text-pink-400" /> },
  { name: "AJAX", icon: <SiAxios className="text-indigo-500" /> },
  { name: "Testing", icon: <SiTestinglibrary className="text-rose-500" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-600" /> },
  { name: "Vite", icon: <SiVite className="text-purple-400" /> },
  { name: "Framer Motion", icon: <SiFramer className="text-pink-600" /> },
];

const SkillSet = () => {
  return (
    <div className="rounded-xl shadow-md p-4 my-4 w-full max-w-5xl mx-auto">
      <h1 className="text-xl font-semibold text-center mb-4">My Tech Stack</h1>
      <div className="skill-set-interior grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 gap-4 justify-items-center text-4xl">
        {skills.map((skill, index) => (
          <div key={index} title={skill.name} className="hover:scale-110 transition-transform duration-200">
            {skill.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillSet;
