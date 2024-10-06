import React, { useState } from 'react';
import SkillComponent from '../Component/SkillComponent';

const Skill = () => {
    const [enable, setEnable] = useState(false);

    return (
        <div
            onMouseEnter={() => setEnable(true)}  // Set true on hover
            onMouseLeave={() => setEnable(false)} // Set false when hover ends
            className="flex space-x-4 flex-col items-center w-full h-full justify-center cursor-pointer">


            <h1 className="font-customCursive text-5xl">
                Skill
            </h1>
            {enable ?
                <div>
                    <SkillComponent />
                </div> :
                <></>}
        </div>
    );
};

export default Skill;
