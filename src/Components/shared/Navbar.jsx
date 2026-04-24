import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import manlogo from '@/assets/user.png'
import Navlink from './Navlink';



const Navbar = () => {
    return (
        <div className='flex container mx-auto justify-between items-center my-5'>
            <div></div>
            <ul className='flex gap-3'>
                <li><Navlink href='/'>Home</Navlink></li>
                <li><Navlink href='/about'>About</Navlink></li>
                <li><Navlink href='/career'>Career</Navlink></li>
            </ul>
            <div className='flex items-center gap-2'>
                <Image src={manlogo} width={40} height={40} alt='man'></Image>
                <button className='btn bg-linear-to-r from-black to-gray-500 text-white'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;