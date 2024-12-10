import React from "react";
import "typeface-poppins";
import bhavesh from "../assets/Profile.jpeg";
import { FlipWords } from "../components/ui/flip-words";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";
import Skill from "../Component/SkillComponent";

function Home() {
    return (
        <div className="flex flex-col font-semibold bg-black text-white capitalize items-center px-4 sm:px-8">
            <div className="flex flex-col-reverse mt-10 lg:flex-row items-center justify-center gap-8 lg:gap-16">

                {/* Text Section */}
                <div className="text-center lg:text-left">
                    <FlipWords
                        className="text-2xl mb-5 lg:ml-0"
                        duration={2000}
                        words={["Web Developer", "Software Developer"]}
                    />
                    <h1 className="text-4xl sm:text-6xl lg:text-7xl tracking-wide">
                        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
                            Bhavesh Zalke
                        </span>
                    </h1>
                    <p className=" md:block mt-4 text-lg max-w-2xl lg:max-w-4xl mx-auto lg:mx-0">
                        Building dynamic, scalable, and user-friendly web applications, turning ideas into digital experiences with the power of the MERN stack.
                    </p>
                </div>

                {/* Image Section */}
                <div className="w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 flex-shrink-0">
                    <img
                        src={bhavesh}
                        alt="Bhavesh Zalke"
                        className="rounded-full w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Skills Section */}
            <h1 className="text-4xl mt-10 mb-6">Skills</h1>
            <Skill />
        </div>
    );
}

export default Home;
