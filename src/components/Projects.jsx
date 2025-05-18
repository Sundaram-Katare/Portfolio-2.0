import React, { useState, useEffect } from "react";
import * as motion from "motion/react-client";

const urbanimg = ["../images/urban.png", "../images/urban2.png"];
const chatimg = ["../images/chat1.png", "../images/chat2.png"];
const typingimg = ["../images/typo1.png", "../images/typo2.png"];
const userimg = ["../images/user1.png", "../images/user2.png"];

const projectData = [
    {
        id: 1,
        title: "Urban Fold",
        description: "Urban Fold is a modern and stylish clothing e-commerce platform built using the MERN stack. It offers users a smooth shopping experience with features like dynamic product listings, category filtering, a responsive design, and a secure checkout process using Stripe.",
        images: urbanimg,
        link: "https://urban-fold-frontend.vercel.app/",
        github: "https://github.com/Sundaram-Katare/UrbanFoldFrontend",
        direction: "flex-row-reverse",
    },
    {
        id: 2,
        title: "Chat Cord",
        description: "Chat Cord is a real-time chat application built with React, Node.js, and Socket.io. It allows users to create rooms, send messages, and share images instantly. The app features a responsive design and supports multiple chat rooms.",
        images: chatimg,
        link: "https://chatcord-gg3o.onrender.com",
        github: "https://github.com/Sundaram-Katare/chatCord",
        direction: "flex-row",
    },
    {
        id: 3,
        title: "User Authentication",
        description: "User Authentication is a web application that allows users to register, log in, and manage their profiles. It uses JWT for secure authentication and provides a user-friendly interface for managing user data.",
        images: userimg,
        link: "https://frontend-as-seven.vercel.app/",
        github: "https://github.com/Sundaram-Katare/frontend-AS",
        direction: "flex-row-reverse",
    },
    {
        id: 4,
        title: "Typo",
        description: "Typing Speed Test is a web application that allows users to test their typing speed and accuracy. It provides a user-friendly interface with real-time feedback on performance, including words per minute (WPM) and accuracy percentage.",
        images: typingimg,
        link: "https://typo-tau.vercel.app/",
        github: "https://github.com/Sundaram-Katare/Typo",
        direction: "flex-row",
    },
]

export default function Projects() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [sequence, setSequence] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === urbanimg.length - 1 ? 0 : prevIndex + 1
            );
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {

    })

    return (
        <>
            <div className="flex flex-col bg-[#E4E4E4] w-full transition duration-500 ease-in-out">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mt-5">Projects</h1>
                <div className="flex flex-col items-center justify-center mt-10 px-4">
                    {projectData.map((project, index) => {
                        const direction = index % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row';

                        return (
                            <div key={index} className="flex flex-col items-center mb-16 w-full">
                                <div className={`flex flex-col ${direction} gap-10 lg:gap-20 w-full max-w-6xl`}>

                                    {/* Text Section */}
                                    <div className="flex flex-col gap-2 justify-center px-2 md:px-6">
                                        <h2 className="text-lg sm:text-xl lg:text-4xl font-bold text-black underline decoration-pink-500">
                                            {project.id}. {project.title}
                                        </h2>
                                        <p className="mt-3 text-xs sm:text-sm lg:text-xl max-w-2xl">
                                            {project.description}
                                        </p>
                                        <div className="flex gap-6 flex-wrap mt-5">
                                            <button
                                                className="text-xs sm:text-sm lg:text-xl font-bold bg-purple-800 text-white border rounded-lg px-4 py-2"
                                                onClick={() => window.open(project.link, "_blank")}
                                            >
                                                Live
                                            </button>
                                            <button
                                                className="text-xs sm:text-sm lg:text-xl font-bold bg-purple-800 text-white border rounded-lg px-4 py-2"
                                                onClick={() => window.open(project.github, "_blank")}
                                            >
                                                GitHub
                                            </button>
                                        </div>
                                    </div>

                                    {/* Image Section */}
                                    <motion.div className="flex flex-col items-center justify-center px-2">
                                        <motion.img
                                            key={currentImageIndex}
                                            src={project.images[currentImageIndex]}
                                            alt={project.title}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.8, ease: "easeInOut" }}
                                            className="border rounded-lg w-full max-w-[90vw] sm:max-w-[440px] md:max-w-[500px] lg:max-w-[600px] h-auto"
                                        />
                                    </motion.div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

        </>
    );
}