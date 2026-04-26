"use client"
import { authClient } from '@/lib/auth-client';
import React from 'react';
import { FaGoogle, FaGithub, FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";





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
        </div>
    );
};

export default RightsideSection;