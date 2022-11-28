import React from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm } from "react-hook-form";

type Props = {}

type FormData = {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
};

function ContactMe({ }: Props) {
    const { register, handleSubmit } = useForm<FormData>();
    const onSubmit = handleSubmit(formData => console.log(formData));
    return (
        <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-pink-200 text-2xl'>Contact</h3>

            <div className='space-y-10'>
                <div className='flex items-center space-x-5 justify-center'>
                    <PhoneIcon className='text-pink-200 h-7 w-7' />
                    <p className='text-2xl'>+33 6 11 42 26 96</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                    <MapPinIcon className='text-pink-200 h-7 w-7' />
                    <p className='text-2xl'>15 Avenue André Toutain</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className='text-pink-200 h-7 w-7' />
                    <p className='text-2xl'>veronique.dang@epitech.eu</p>
                </div>

                <form 
                    className='flex flex-col space-y-2 w-fit mx-auto'>
                    <div className='flex space-x-2'>
                        <input {...register('firstName')} placeholder="Name" type="text" className='contactInput' />
                        <input {...register('email')} placeholder="Email" type="email" className='contactInput' />
                    </div>

                    <input {...register('message')} placeholder="Subject" type="text" className='contactInput' />

                    <textarea placeholder="Message" className='contactInput' />
                    <button className='bg-blue-300 py-5 px-10 rounded-md text-black font-bold font-monotext-lg'>Submit</button>
                </form>

            </div>
        </div>
    )
}

export default ContactMe