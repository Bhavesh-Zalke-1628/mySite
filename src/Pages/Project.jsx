import React from "react";
import { ThreeDCardDemo } from "../Component/ThreeDCard";
import projectImg1 from "../assets/image1.png";
import projectImg2 from "../assets/image2.png";
import { useNavigate } from "react-router-dom";
import PockImg from "../assets/PockImg.png";


const project = [
    {
        title: "LMS",
        description:
            "A Learning Management System (LMS) is a web application for managing courses, delivering educational content, tracking learner progress, and facilitating user interaction.",
        link: "https://lms-front-end-roan.vercel.app/",
        img: projectImg1,
    },
    {
        title: "Blog Post",
        description:
            "Building a modern web app with Appwrite and React enables seamless backend integration, authentication, and database management for a full-stack development experience.",
        img: projectImg1,
    },
    {
        title: "Ecom Demo",
        description:
            "An e-commerce demo showcasing product listings, search, cart functionality, and secure checkout for a seamless online shopping experience.",
        link: "https://ecom-six-neon.vercel.app",
        img: projectImg2,
    },
    {
        title: "Pokedex",
        description:
            "Unleash the power of React and REST APIs to craft a dynamic Pokédex – a seamless blend of design, data, and discovery! ",
        link: "https://pokedex-two-sooty.vercel.app",
        img: PockImg,
    },
];

const Project = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-black w-full min-h-screen pt-[12vh] pb-10">
            {/* Header Section */}
            <div className="flex items-center justify-center mb-6">
                <h1
                    className="text-2xl cursor-pointer text-white"
                    onClick={() => navigate(-1)}
                >
                    ⬅️ Back
                </h1>
                <h1 className="text-3xl text-white px-5">My Projects</h1>
            </div>

            {/* Projects Grid */}
            <div className="flex items-center justify-center gap-6 flex-wrap px-4">
                {project.map((pr, index) => (
                    <ThreeDCardDemo key={index} pr={pr} />
                ))}
            </div>
        </div>
    );
};

export default Project;
