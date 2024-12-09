import React from 'react'
import { ThreeDCardDemo } from '../Component/ThreeDCard'
import projectImg1 from '../assets/image1.png'
import projectImg2 from '../assets/image2.png'
import { useNavigate } from 'react-router-dom'

const project = [
    {
        title: "LMS",
        description: "A Learning Management System(LMS) is a web application for managing courses, delivering educational content, tracking learner progress, and facilitating user interaction.",
        link: "https://lms-front-end-roan.vercel.app/",
        img: projectImg1
    },
    {
        title: "Blog Post",
        description: "Building a modern web app with Appwrite and React enables seamless backend integration, authentication, and database management for a full-stack development experience.",
        img: projectImg1

    },
    {
        title: "Ecom Demo",
        description: "An e-commerce demo showcasing product listings, search, cart functionality, and secure checkout for a seamless online shopping experience.",
        link: "https://ecom-six-neon.vercel.app",
        img: projectImg2
    },
]

const Project = () => {

    const navigate = useNavigate()
    return (
        <div className=' bg-black w-full h-full min-h-screen'>
            <div className=' flex items-center justify-center'>
                <h1 className=' text-2xl mt-4 cursor-pointer'
                    onClick={() => navigate(-1)}
                >
                    ⬅️ Back
                </h1>
                <h1
                    className=' text-3xl mt-4 text-white px-5'
                >
                    My project
                </h1>
            </div>
            <div className=' flex items-center justify-center gap-2 flex-wrap'>
                {
                    project.map((pr, index) => {
                        return <ThreeDCardDemo key={index} pr={pr} />
                    })
                }
            </div>
        </div>
    )
}

export default Project
