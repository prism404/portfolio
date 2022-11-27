import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import socketio from "./img/socketio.png";
import mongodb_icon from "./img/mongodb.png";

type Props = {
    directionLeft?: boolean;
}

function Skill({ directionLeft }: Props) {
  return (
    <motion.div
    initial={{
        x: directionLeft ? -200 : 200,
        opacity: 0,
    }}
    transition={{
        duration: 1
    }}
    whileInView={{
        opacity: 1,
        x: 0,
    }}
    className='group relative flex cursor-pointer'>
        <div className='w-24 h-24 xl:w-32 xl:h-32 rounded-full object-cover filter group-hover:grayscale transition duration-300 ease-in-out'>
            <Image src={mongodb_icon} alt=""/>
        </div>

        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-pink-200 h-12 w-12 md:w-22 md:h-22 xl:w-31 xl:h-31 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-2xl'>💗</p>
            </div>
        </div>

    </motion.div>
  )
}

export default Skill