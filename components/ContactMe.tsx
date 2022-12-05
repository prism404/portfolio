import React from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {}

type Inputs = {
    firstName: string;
    email: string;
    subject: string;
    message: string;
};

function ContactMe({ }: Props) {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => window.location.href = `mailto:veronique.dang@epitech.eu?subject=${formData.subject}&body=Hi, my name is ${formData.firstName}.${formData.message} (${formData.email})`;
    return (
        <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-pink-200 text-2xl'>Contact</h3>

            <div className='space-y-6'>
                <div className='flex items-center space-x-5 justify-center'>
                    <PhoneIcon className='text-pink-200 h-7 w-7' />
                    <p className='text-lg'>+33 6 11 42 26 96</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                    <MapPinIcon className='text-pink-200 h-7 w-7' />
                    <p className='text-lg'>15 Avenue André Toutain</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className='text-pink-200 h-7 w-7' />
                    <p className='text-lg'>veronique.dang@epitech.eu</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}
                    className='flex flex-col space-y-2 w-fit mx-auto'>
                    <div className='flex space-x-2'>
                        <input {...register('firstName')} placeholder="Name" type="text" className='contactInput' />
                        <input {...register('email')} placeholder="Email" type="email" className='contactInput' />
                    </div>

                    <input {...register('subject')} placeholder="Subject" type="text" className='contactInput' />

                    <textarea {...register('message')} placeholder="Message" className='contactInput' />
                    <button type="submit" className='bg-blue-300 py-5 px-10 rounded-md text-black font-bold font-monotext-lg'>Submit</button>
                </form>

            </div>
        </div>
    )
}

export default ContactMe