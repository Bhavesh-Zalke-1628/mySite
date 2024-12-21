import { Css3Original, Html5Original, JavascriptOriginal, MongodbOriginal, NodejsOriginal, PostmanOriginal, ReactOriginal, ReduxOriginal, NextjsOriginal, MysqlOriginal } from 'devicons-react';
import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'

function SkillComponent() {
    const iconsRef = useRef([]);

    useEffect(() => {
        // GSAP animation to move icons from different positions
        gsap.from(iconsRef.current, {
            x: (index) => (index % 2 === 0 ? -100 : 200), // Different x position for each icon
            y: (index) => (index % 2 === 0 ? -100 : 100), // Different y position for each icon
            z: (index) => (index % 2 === 0 ? -100 : 100), // Different y position for each icon
            opacity: 0,
            duration: 2,
            stagger: 0.1, // Delay between each icon's animation
            ease: "power3.out", // Smooth easing

        });
    }, []);

    return (
        <>
            <h1 className=" text-4xl mt-20 mb-6 text-white text-center">Skills</h1>
            <div className="flex flex-wrap space-x-4 w-full h-full mt-4 justify-center transform ease-in-out duration-300">

                {/* Reference the icons in an array */}
                <div
                    ref={(el) => (iconsRef.current[0] = el)}>
                    <Html5Original size={72} className=' rounded-full' />
                </div>
                <div
                    ref={(el) => (iconsRef.current[1] = el)}>
                    <Css3Original size={72} />
                </div>
                <div
                    ref={(el) => (iconsRef.current[2] = el)}>
                    <JavascriptOriginal size={72} className=' rounded-full' />
                </div>
                <div
                    ref={(el) => (iconsRef.current[9] = el)}>
                    <NextjsOriginal size={72} />
                </div>
                <div
                    ref={(el) => (iconsRef.current[3] = el)}>
                    <ReactOriginal size={72} />
                </div>

                <div
                    ref={(el) => (iconsRef.current[4] = el)}>
                    <NodejsOriginal size={72} />
                </div>
                <div
                    ref={(el) => (iconsRef.current[6] = el)}>
                    <MongodbOriginal size={72} />
                </div><div
                    ref={(el) => (iconsRef.current[7] = el)}>
                    <MysqlOriginal size={72} />
                </div>
                <div
                    ref={(el) => (iconsRef.current[8] = el)}>
                    <ReduxOriginal size={72} />
                </div>
                <div
                    ref={(el) => (iconsRef.current[9] = el)}>
                    <PostmanOriginal size={72} />
                </div>
            </div>
        </>

    );
}

export default SkillComponent
