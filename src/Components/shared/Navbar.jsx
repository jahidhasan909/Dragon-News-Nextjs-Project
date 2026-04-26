"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import manlogo from '@/assets/user.png'
import Navlink from './Navlink';
import { signOut, useSession } from '@/lib/auth-client';
import { HashLoader } from 'react-spinners';



const Navbar = () => {

    const { data, isPending } = useSession()


    if (isPending) {
        return <div className='flex  items-center justify-center min-h-screen'>
            <HashLoader />
        </div>
    }

    const user = data?.user

    return (
        <div className='flex container mx-auto justify-between items-center my-5'>
            <div></div>
            <ul className='flex gap-3'>
                <li><Navlink href='/'>Home</Navlink></li>
                <li><Navlink href='/about'>About</Navlink></li>
                <li><Navlink href='/career'>Career</Navlink></li>
            </ul>
            <div className='flex items-center gap-2'>
                {user ? <div className='flex items-center gap-2'>
                    <div className='flex items-center gap-2'>
                        <Image className=' rounded-full' src={user.image || manlogo} width={40} height={10} alt='man'></Image>
                        <div>
                            <p className='text-black'>{user.name}</p>
                            <p className='text-xs'>{user.email}</p>
                        </div>
                    </div>
                    <button onClick={() => signOut()} className='btn'>SingOut</button>
                </div>
                    : <Link href={'/login'}><button className='btn bg-linear-to-r from-black to-gray-500 text-white'>Login</button></Link>}

            </div>
        </div>
    );
};

export default Navbar;