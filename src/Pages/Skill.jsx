import React, { useState } from 'react';
import SkillComponent from '../Component/SkillComponent';

const Skill = () => {
    const [enable, setEnable] = useState(false);

    return (
        <div
            onMouseEnter={() => setEnable(true)}  // Set true on hover
            onMouseLeave={() => setEnable(false)} // Set false when hover ends
            className="flex flex-col items-center w-full h-full justify-center cursor-pointer"
        >
            <h1 className="font-customCursive text-5xl">
                Skill
            </h1>
            {
                enable ? (
                    <div className="transition ease-in-out duration-300">
                        <SkillComponent />
                    </div>
                ) : (
                    <div className='text-xl w-[70vw] capitalize mt-2 transition ease-in-out duration-300 opacity-75'>
                        "Harnessing the power of the <span className='  bg-gradient-to-r font-bold from-yellow-700 to-pink-800 text-transparent bg-clip-text'>MERN </span>  stack, I transform ideas into dynamic, scalable web applications that elevate user experiences and drive innovation."
                    </div>
                )
            }
        </div>
    );
};

export default Skill;
