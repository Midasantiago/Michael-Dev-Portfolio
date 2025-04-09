import React from "react";
import { motion } from "framer-motion";
import Resume from "../assets/NEWRESUME_3_17_25.pdf";

const glitchFlash = {
    initial: {
      opacity: 0,
      scale: 0.98,
      filter: "brightness(1.5)",
    },
    animate: {
      opacity: 1,
      scale: 1,
      filter: "brightness(1)",
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 1.02,
      filter: "brightness(1.2)",
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
};

const Contact = () => {
    return (
        <motion.div
            className="p-4"
            variants={glitchFlash}
            initial="initial"
            animate="animate"
            exit="exit">
            <div className=" contact m-4 p-4">
                <div className="contact-top flex gap-4 flex-col md:flex-row items-center md:items-start">
                    <div className="bio-sec max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg">
                        <h1 className=" about-me text-2xl mb-4">About Me</h1>
                        <p className="leading-relaxed">
                            I'm a full-stack web developer focused on building clean, functional apps using the MERN stack.
                            Since starting my journey in late 2023, I've been passionate about solving real-world problems with responsive design,
                            dynamic interfaces, and clean code. Whether it's crafting interactive tools like my Elden Ring Stat Tracker or learning new technologies like Redux,
                            I'm always looking to grow and create meaningful digital experiences.
                        </p>
                    </div>
                    <div className="contact-sheet max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg">
                        <h2 className="contact-info text-2xl font-semibold mb-4 text-center">Contact Information</h2>
                        <div className="space-y-4">
                            <p>
                                <span className="font-medium text-xl">Email: </span>
                                <a className='contact-link' href="mailto:mida.santiago98@gmail.com">mida.santiago98@gmail.com</a>
                            </p>
                            <p>
                                <span className="font-medium text-xl">LinkedIn: </span>
                                <a className="contact-link" href="https://www.linkedin.com/in/michael-santiago-0046942b2/" target="_blank" rel="noopener noreferrer">linkedin.com/in/michael-santiago-0046942b2/</a>
                            </p>
                            <p>
                                <span className="font-medium text-xl">Github: </span>
                                <a className="contact-link" href="https://github.com/Midasantiago" target="_blank" rel="noopener noreferrer">github.com/Midasantiago</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="resume w-1/3 p-4 m-4 ">
                    <a className="resume-down" href={Resume} download='NEWRESUME_3_17_25.pdf'>
                        Download My Resume Here!
                    </a>
                </div>
            </div>
        </motion.div>
    )
};

export default Contact;