'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const LoagingPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const handleForm = async(data) => {
          const {email, password} = data
                const { data: res, error } = await authClient.signIn.email({
                    email: email, // required
                    password: password, // required
                    callbackURL: '/',
                });
        
                if (res) {
                    toast.success('LogIn successful')
                }
                if (error) {
                    toast.error(error.message)
                }

    }



    return (
        <div className='container mx-auto flex justify-center my-4 bg-base-300  rounded-md'>
            <form onSubmit={handleSubmit(handleForm)} className='bg-white my-20 w-[470px] h-[440px] rounded-md '>
                <fieldset className="fieldset px-5 py-5">
                    <h1 className='text-center font-semibold text-2xl mt-5'>Login your account</h1>
                    <div className='divider'></div>
                    <label className="label font-semibold text-black">Email address</label>
                    <input type="email" className="input w-full" placeholder="Enter your email address" {...register('email', { required: 'This field is required' })} />
                    {errors.email && <span className='text-red-400'>{errors.email.message}</span>}
                    <label className="label font-semibold text-black">Password</label>
                    <input type="password" className="input w-full" placeholder="Enter your password" {...register('password', { required: 'This field is required' })} />
                    {errors.password && <span className='text-red-400'>{errors.password.message}</span>}
                    <button type='submit' className="btn btn-neutral mt-4">Login</button>
                    <p className='text-center mt-2'>Dont’t Have An Account ? <Link className='text-red-400' href={'/register'}>Register</Link></p>
                </fieldset>
            </form>
        </div>
    );
};

export default LoagingPage;