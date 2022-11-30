import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import { BsMailbox } from "react-icons/bs";
import Link from 'next/link';

type Props = {}

function Header({ }: Props) {
    return (
        <header className='sticky top-0 py-4 px-8 flex items-start justify-between maw-w-7xl max-auto z-20 xl:items-center'>
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1.5,
                }}
                className='flex flex-row items-center'>

                {/* Social Icons */}
                <SocialIcon url="https://twitter.com/prism_rivr"
                    target='_blank'
                    fgColor='pink'
                    bgColor='transparent' />

                <SocialIcon url="https://www.instagram.com/akiya.____/"
                    target='_blank'
                    fgColor='pink'
                    bgColor='transparent' />

                <SocialIcon url="https://www.linkedin.com/in/veronique-dang-devweb/"
                    target='_blank'
                    fgColor='pink'
                    bgColor='transparent' />

                <SocialIcon url="https://github.com/prism404"
                    target='_blank'
                    fgColor='pink'
                    bgColor='transparent' />
            </motion.div>

            <Link href="#contact">
            <motion.div 
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1.5,
                }}
                className='flex flex-row items-center text-pink-200 cursor-pointer'>
                <BsMailbox className='text-3xl mr-2' />
                <p className='text-pink-200 uppercase hidden md:inline-flex text-sm font-mono'>Get in touch</p>
            </motion.div>
            </Link>
        </header>
    );
}

export default Header