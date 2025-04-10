import React from "react";
import GitHubLogo from "../assets/github-6980894_640.webp";
import LinkedInLogo from "../assets/LinkedIn_logo_initials.png.webp";
import { useNavigate } from "react-router-dom";
import SkillSet from "./SkillSet";


const Header = () => {

    const navigate = useNavigate();

    return (
        <div className="flex flex-col md:flex-row gap-10">
            <div className="hero w-full md:w-2/3 p-4">
                <div className="name-role">
                    <h1 className="text-3xl">Michael Santiago</h1>
                    <h1 className="text-2xl">Web Developer</h1>
                </div>
                <div className="tagline">
                    <h2 className="leading-tight">Web Developer Creating with MongoDB, Express, React, and Node</h2>
                    <h2>Seeking Opportunities To Excel</h2>
                </div>
                <div className="flex gap-8 pt-4">
                    <a href="https://github.com/Midasantiago" target="_blank">
                        <img className="hero-icon" src={GitHubLogo} alt="GitHub Logo"></img>
                    </a>
                    <a href="https://www.linkedin.com/in/michael-santiago-0046942b2/" target="_blank">
                        <img className="hero-icon" src={LinkedInLogo} alt="LinkedIn Logo"></img>
                    </a>
                </div>
                <nav>
                    <ul className="flex gap-4 pt-4">
                        <li onClick={() => navigate('/')} className="nav-button">Projects</li>
                        <li onClick={() => navigate('/contact')} className="nav-button">Contact</li>
                    </ul>
                </nav>
            </div>
            <div className="skill-set-box w-full md:w-1/2">
                <SkillSet />
            </div>
        </div>
    )
}

export default Header;