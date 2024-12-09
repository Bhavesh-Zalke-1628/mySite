import React from 'react'
import 'typeface-poppins';
import bhavesh from '../assets/Profile.jpeg'
import { FlipWords } from '../components/ui/flip-words';
import { InfiniteMovingCards } from '../components/ui/infinite-moving-cards';

import Skill from '../Component/SkillComponent'
function Home() {
    return (
        <>
            <div
                className='flex flex-col font-semibold  bg-black capitalize items-center'
            >
                <div className='flex flex-col mt-20 lg:flex-row items-center justify-center'>
                    {/* Text Section */}
                    <div className='text-center lg:text-left'>
                        <FlipWords className={"text-2xl ml-52 mb-5"} duration={2000} words={['Web Developer', 'Software Developer']} />
                        <h1 className='text-4xl text-center sm:text-6xl lg:text-7xl tracking-wide'>
                            <span className='bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text'>
                                Bhavesh Zalke
                            </span>
                        </h1>
                        <p className='hidden text-wrap md:block lg:block mt-2 text-lg max-w-4xl text-white text-center lg:text-left'>
                            Building dynamic, scalable, and user-friendly web applications, turning ideas into digital experiences with the power of the MERN stack.
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className='w-48 h-48 sm:w-60 sm:h-60 sm:rounded-none lg:w-96 lg:h-96 flex-shrink-0'>
                        <img src={bhavesh} alt="Bhavesh Zalke" className='rounded-full w-full h-full object-cover' />
                    </div>
                </div>
                <h1 className=' text-white text-4xl '>Skills</h1>
                <Skill />
            </div>
        </>
    )
}

export default Home;
