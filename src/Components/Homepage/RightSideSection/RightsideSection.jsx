"use client"
import { authClient } from '@/lib/auth-client';
import React from 'react';
import { FaGoogle, FaGithub, FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import classroom from '@/assets/class.png'
import swimming from '@/assets/swimming.png'
import playground from '@/assets/playground.png'
import bg from '@/assets/bg.png'
import Image from 'next/image';






const RightsideSection = () => {


    const handleGoogleLogin = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
        console.log(data);

    }
    const handleGitHubLogin = async () => {
        const data = await authClient.signIn.social({
            provider: "github"
        })
        console.log(data);

    }


    return (
        <div>
            <div className='flex flex-col gap-2'>
                <button onClick={handleGoogleLogin} className='flex items-center btn'><FaGoogle /> Login With Google</button>
                <button onClick={handleGitHubLogin} className='flex items-center btn'><FaGithub /> Login With Github</button>
            </div>
            <div>
                <h3 className='text-xl font-semibold mt-4 mb-2'>Find Us On</h3>
                <div className='border'>
                    <span className='flex items-center gap-3 border-b p-2'><FaFacebookSquare /> Facebook</span>
                    <span className='flex items-center gap-3 border-b p-2'><FaSquareXTwitter /> Twitter</span>
                    <span className='flex items-center gap-3 p-2'><FaInstagram /> Instagram</span>
                </div>
            </div>
            <div className='bg-base-300 container mx-auto my-5 py-3 flex flex-col items-center gap-3 rounded-md'>
                <h2 className='text-xl font-semibold'>Q-Zone</h2>
                <Image src={classroom} width={250} height={200} alt=''></Image>
                <Image src={swimming} width={250} height={200} alt=''></Image>
                <Image src={playground} width={250} height={200} alt=''></Image>
            </div>
            <Image className='w-full rounded-md' src={bg} width={200} height={200} alt=''></Image>
        </div>
    );
};

export default RightsideSection;