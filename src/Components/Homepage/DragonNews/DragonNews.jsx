import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { CiShare2 } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { FaEye, FaStar } from 'react-icons/fa';
import { FaArrowRightToBracket } from 'react-icons/fa6';

const DragonNews = ({ newes }) => {
    return (
        <div>
            <div className="card bg-base-100 mb-3 rounded-md shadow-sm">
                <div className="card-body">
                    <div className='flex justify-between items-center bg-base-300 px-3 py-2 rounded-md'>
                        <div className='flex items-center gap-2'>
                            <Image className=' rounded-full' src={newes?.author?.img} height={45} width={45} alt='imgauthor' />
                            <div>
                                <h3 className='font-semibold text-[1.10rem]'>{newes?.author?.name}</h3>
                                <p className='text-xs text-neutral-500'>{newes?.author?.published_date}</p>
                            </div>
                        </div>

                        <div className='flex gap-1'>
                            <CiBookmark />
                            <CiShare2 />
                        </div>
                    </div>

                    <div>
                        <h1 className='card-title'>{newes.title}</h1>
                    </div>

                    <div>
                        <Image className='object-contain w-full' src={newes?.image_url} height={400} width={500} alt='imgauthor' />

                        <p className='line-clamp-3 text-neutral-500 mt-4'>{newes?.details}</p>
                    </div>
                    <div className='divider'></div>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-3'>
                            <span className='flex items-center gap-1 text-yellow-500'><FaStar /> {newes?.rating?.number}</span>
                            <span className='flex items-center gap-1'><FaEye /> {newes?.total_view}</span>
                        </div>

                        <Link href={`/newsdetails/${newes._id}`}>
                            <button className='btn bg-linear-to-r from-black to-gray-500 text-white'><FaArrowRightToBracket /> See Details</button></Link>
                    </div>

                </div>
                <figure>

                </figure>
            </div>
        </div>
    );
};

export default DragonNews;