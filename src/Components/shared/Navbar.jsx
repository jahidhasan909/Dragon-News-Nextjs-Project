"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import manlogo from '@/assets/user.png'
import Navlink from './Navlink';
import { useSession } from '@/lib/auth-client';
import { signOut } from 'better-auth/api';



const Navbar = () => {

    const { data, ispanding } = useSession()
    

    if (ispanding) {
        return <div>
            loging...
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
                {user ? <div>
                    <Image className=' rounded-full' src={user.image || manlogo} width={40} height={10} alt='man'></Image>
                    <p className='text-black'>{user.name}</p>
                    <button onClick={()=>signOut()} className='btn'>SingOut</button>
                </div>
                    : <Link href={'/login'}><button className='btn bg-linear-to-r from-black to-gray-500 text-white'>Login</button></Link>}

            </div>
        </div>
    );
};

export default Navbar;