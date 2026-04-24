import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">

                <img className='mx-auto h-[330px]' src="https://i.ibb.co.com/G39g3wgx/error-404-modified.png" alt="" />

                <h2 className="text-2xl md:text-3xl font-semibold mt-4">
                    Oops, page not found!
                </h2>

                <p className="text-gray-500 mt-2 max-w-md">
                    The page you are looking for is not available.</p>

                <Link
                    href="/"
                    className="mt-6 px-6 py-3  text-white transition"
                >
                    <button className='bg-linear-to-r px-3 from-black font-bold h-[50px] to-neutral-600 rounded-md'>Go Back Home!</button>
                </Link>

            </div>
        </div>
    );
};

export default NotFound;