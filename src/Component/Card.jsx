import React from "react";
import { HoverEffect } from "../components/ui/card-hover-effect";

export function Card() {
    return (
        <div className="max-w-5xl mx-auto px-8">
            <HoverEffect items={projects} />
        </div>
    );
}

export const projects = [
    {
        title: "LMS",
        description: "A Learning Management System(LMS) is a web application for managing courses, delivering educational content, tracking learner progress, and facilitating user interaction.",
        link: "https://lms-front-end-roan.vercel.app/",
    },
    {
        title: "Blog Post",
        description: "Building a modern web app with Appwrite and React enables seamless backend integration, authentication, and database management for a full-stack development experience.",
    },
    {
        title: "Ecom Demo",
        description: "An e-commerce demo showcasing product listings, search, cart functionality, and secure checkout for a seamless online shopping experience.",
        link: "https://ecom-six-neon.vercel.app",
    },
];
