"use client"

import { TypeAnimation } from "react-type-animation"

export const AnimationBlock = () => {
    return (
        <div className="bg-indigo-700 p-2">
            <TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'Frontend',
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    'Backend',
                    1000,
                    'Fullstack',
                    1000,
                    'Mobile',
                    1000,
                    'DevOps',
                    1000,
                    'Data',
                    1000
                ]}
                wrapper="span"
                speed={50}
                className="text-5xl md:text-6xl font-extrabold text-center"
                repeat={Infinity}
            />
        </div>
    )
}
