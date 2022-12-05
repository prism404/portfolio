import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
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
            className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
            <h3 className="absolute top-20 uppercase tracking-[20px] text-pink-200 text-2xl md:invisible lg: visible">
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
                className="-mb-20 md:mb-0 flex-shrink-0 rounded-full w-2/5 h-2/5 object-cover md:rounded-lg xl:w-[500px]"
            >
                <Image src={picture} alt="" className="min-[320px]:invisible md:visible lg:visible">
                </Image>
            </motion.div>

            <div className="space-y-6 px-2 md:px-10">
                <h4 className="text-4xl text-blue-200 font-mono">
                    Who are you ?
                </h4>
                <p className="text-base font-mono">
                    I'm Veronique Dang and i'm a fresh web developer. 
                    Today, i'm looking for a work-study contract where i can be 3 weeks at the company and 1 week at my campus. <br />
                    I'm currently based in Paris and my goal is to join a dynamic and motivated company where i'll put my knowledge in practice. 
                    <br /><br />
                    Hardworking, organized and endowed with an analytical mind, I will take care to assimilate the different needs of your group and will easily be able to integrate myself.
                    <br /><br />
                    And can't wait to jump right into it ✨
                </p>
            </div>

        </motion.div>
    )
}

export default About