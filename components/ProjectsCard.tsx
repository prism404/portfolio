import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import spotify from "./img/spotifylogo.png";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact, FaDocker } from "react-icons/fa";

type Props = {}

export default function ProjectsCard({ }: Props) {
    return (
        <motion.article
            initial={{
                y: -100,
                opacity: 0,
            }}
            transition={{
                duration: 1.2
            }}
            whileInView={{
                opacity: 1,
                y: 0
            }}
            className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[300px] md:w-[400px] xl:h-[700px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden'
        >
            <div className='w-50 h-50 xl:w-[400px] xl:h-[600px] object-cover object-center'>
                <Image src={spotify} alt="" />
            </div>
            
            <div className='px-0 md:px-10'>
                <h4 className='uppercase text-3xl font-light my-2'>Spotify</h4>
                <p className='text-sm my-2'>
                    Create a media player inspired by Spotify by exploiting
                    an API in React. Then we had to configure our API where a
                    docker image is provided to us.
                </p>
                <div className='flex space-x-4 my-4'>
                    <span className='text-blue-200 text-2xl'><IoLogoJavascript /></span>
                    <span className='text-blue-200 text-2xl'><FaReact /></span>
                    <span className='text-blue-200 text-2xl'><FaDocker /></span>
                </div>

                <ul className='list-none space-y-4 ml-5 text-lg'>
                    <li>2 days</li>
                    <li>Teamwork of 3 people</li>
                    <li>First time using React</li>
                </ul>

            </div>
        </motion.article>
    );
}