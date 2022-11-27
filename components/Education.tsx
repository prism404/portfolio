import Image from 'next/image';
import React from 'react';
import webac from './img/webac.png'

type Props = {}

function Education({}: Props) {
    const formations = [1, 2, 3, 4, 5];
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-pink-200 text-2xl'>Education</h3>

        {/* <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
            {formations.map((formation) => {
                <div>
                    <Image src={webac} alt=""/>

                    <div><h4></h4></div>
                </div>
            })}
        </div> */}

        <div className='w-full absolute top-[30%] bg-pink-200/20 left-0 h-[500px] -skew-y-12'>
        </div>
    </div>
  )
}

export default Education