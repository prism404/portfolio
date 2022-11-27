import React from 'react';
import { motion } from 'framer-motion';

type Props = {}

export default function BgCircles({}: Props) {
  return (
    <motion.div 
        initial={{
            opacity:0,
        }}
        animate={{
            scale: [1,2,3,4,2],
            opacity: [0.1, 0.2, 0.4, 0.7, 0.1, 0.1],
            borderRadius: ["20%", "20%", "45%", "65%", "20%"],
        }}
        transition={{
            duration: 3,
        }}
        className='relative flex justify-center items-center pt-16'
        >
        <div className='absolute border border-blue-200 rounded-full h-[200px] w-[200px] mt-52 animate-ping'/>
        <div className='absolute border border-blue-200 rounded-full h-[300px] w-[300px] mt-52 animate-ping'/>
        <div className='absolute border-2 border-white rounded-full h-[300px] w-[300px] mt-52 opacity-10 animate-pulse'/> 
    </motion.div>
  );
}