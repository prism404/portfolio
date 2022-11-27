import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import picture from "./img/henlo.jpg";

type Props = {}

function About({ }: Props) {
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1,
            }}
            className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-pink-200 text-2xl'>
                About
            </h3>

            <motion.div
                initial={{
                    x: -200,
                    opacity: 0,
                }}
                whileInView={{
                    x: 0,
                    opacity: 1,
                }}
                transition={{
                    duration: 1,
                }}
                className='-mb-20 md:mb-0 flex-shrink-0 rounded-full w-2/5 h-2/5 object-cover md:rounded-lg xl:w-[500px]'
            >
                <Image src={picture} alt="">
                </Image>
            </motion.div>

            <div className='space-y-8 px-0 md:px-10'>
                <h4 className='text-4xl text-blue-200 font-mono'>
                    Who are you ?
                </h4>
                <p className='text-base font-mono'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, itaque, nostrum fugiat quisquam hic exercitationem necessitatibus magnam dignissimos consectetur maxime sed unde delectus! Sapiente, ipsam enim nihil quam sed corrupti beatae ea reiciendis vitae ipsa numquam pariatur debitis quisquam quaerat nulla quas amet, praesentium a minima, quod adipisci odit iusto impedit!
                    <br /><br />
                    Quidem, doloribus asperiores et cum blanditiis repellat debitis! Eligendi facere fugit in ratione quasi quidem iure omnis nulla sapiente qui explicabo esse debitis deleniti facilis ex nostrum nobis, harum excepturi culpa incidunt ea aliquam! Incidunt quo aliquid nostrum consequatur ipsa fuga provident excepturi? Cum aut temporibus veritatis dicta ullam ✨
                </p>
            </div>


        </motion.div>
    )
}

export default About