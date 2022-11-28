import Image from 'next/image';
import React from 'react';
import webac from './img/webac.png';
import doranco from "./img/doranco.png";
import simplon from "./img/simplon.png";

type Props = {}

function Education({ }: Props) {
    return (
        <div className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center z-0'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-pink-200 text-2xl'>Education</h3>

            <div className='-mb-20 md:mb-0 flex-row flex-shrink-0 rounded-full w-2/5 h-2/5 object-cover md:rounded-lg xl:w-[500px] z-10'>
                    <div className='pb-12'>
                    <Image src={webac} alt="" className='w-2/4' />
                    <h4 className='text-base font-mono'>Web@cademie by Epitech</h4>
                    </div>

                    <div className='pb-12 ml-24'>
                    <Image src={doranco} alt="" className='w-2/3' />
                    <h4 className='text-base font-mono'>Doranco Espace Multimédia</h4>
                    </div>

                    <div className=''>
                    <Image src={simplon} alt="" className='w-2/5' />
                    <h4 className='text-base font-mono'>Les Hackeuses</h4>
                    </div>
                   
            </div>

            <div className='w-full absolute top-[30%] bg-pink-200/20 left-0 h-[500px] -skew-y-12'>
            </div>
        </div>
    )
}

export default Education