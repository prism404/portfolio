import { motion } from 'framer-motion';
import React from 'react';
import ProjectsCard from './ProjectsCard';

type Props = {}

function Projects({ }: Props) {
  return (
    <motion.div 
    initial={{
      opacity: 0
    }}
    whileInView={{
      opacity: 1
    }}
    transition={{
      duration: 1.5
    }}
    viewport={{ once:true }}
    className='h-screen flex flex-col relative overflow-hidden text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-pink-200 text-2xl'>Projects</h3>

      <div className='w-full flex space-x-8 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-500/10 scrollbar-thumb-blue-200/80'>
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
      </div>
    </motion.div>
  )
}

export default Projects;