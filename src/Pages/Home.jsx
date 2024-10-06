import React from 'react'
import Container from '../Component/Container/Container';
import 'typeface-poppins';
import TypingAnimator from 'react-typing-animator'
import bhavesh from '../assets/profile.jpeg'
import Skill from './Skill';
function Home() {
    return (
        <>
            <div
                className=' flex flex-col font-semibold capitalize items-center lg:mt-20'
            >
                <div className='flex flex-col lg:flex-row items-center justify-end'>
                    {/* Text Section */}
                    <div className='text-center lg:text-left'>
                        <h1 className='text-4xl text-center sm:text-6xl lg:text-7xl tracking-wide'>
                            <TypingAnimator
                                textArray={["Software Developer", "MERN Stack Developer"]}
                                style={{ fontSize: "20px", textAlign: "center", marginTop: "2px", cursor: 'none' }}
                            />
                            <span className=' bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text'>
                                Bhavesh Zalke
                            </span>
                        </h1>
                        <p className='hidden md:block lg:block mt-2 text-lg max-w-4xl text-black-300 text-center lg:text-left'>
                            Building dynamic, scalable, and user-friendly web applications, turning ideas into digital experiences with the power of the MERN stack.
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className='w-48 h-48 sm:w-60 sm:h-60 sm:rounded-none lg:w-96 lg:h-96 flex-shrink-0'>
                        <img src={bhavesh} alt="Bhavesh Zalke" className='rounded-full w-full h-full object-cover' />
                    </div>
                </div>
                <div className=' flex w-[100vw] flex-end'>
                    <div></div>
                </div>
            </div>

            <Skill />
        </>
    )
}

export default Home;
