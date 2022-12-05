import React from "react";
import Image from "next/image";
import BgCircles from "./BgCircles";
import avatar from "./img/avatart.png";
import Link from "next/link";

type Props = {}

export default function Focus({ }: Props) {
    return (
        <div className="h-screen flex flex-col space-y-4 items-center justify-center text-center overflow-hidden">
            <BgCircles />
            <Image
                className="relative rounded-full h-3/12 w-3/12 md:h-200 md:w-200 mx-auto object-cover"
                src={avatar} alt="avatar" />
            <div className='z-20'>
                <h2 className="text-sm uppercase pb-2 text-blue-200 tracking-[6px]">Web Developer Front-end</h2>
                <h1 className="text-3xl lg:text-4xl font-semibold scroll-px-10 pb-1">Hi, I'm Veronique</h1>
                <span className="text-xs font-mono min-[320px]:invisible sm:invisible md:visible">But you can call me Vero</span>

                <div className="pt-5">
                    <Link href="#about">
                        <button className="focus_btn">About</button>
                    </Link>
                    <Link href="#education">
                        <button className='focus_btn'>Education</button>
                    </Link>
                    <Link href="#projects">
                        <button className='focus_btn'>Projects</button>
                    </Link>
                    <Link href="#skills">
                        <button className='focus_btn'>Skills</button>
                    </Link>
                    <Link href="https://drive.google.com/file/d/1A5LQIsofZptm2B5xC9vU4H_jQsHRt8Fv/view?usp=sharing">
                        <button className='focus_btn'>Resume</button>
                    </Link>
                    <Link href="#contact">
                        <button className='focus_btn'>Contact</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}