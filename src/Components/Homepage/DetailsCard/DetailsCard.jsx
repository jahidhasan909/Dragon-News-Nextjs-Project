import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRightToBracket } from 'react-icons/fa6';

const DetailsCard = ({ details }) => {
    return (
        <div>
            <div className="card bg-base-100 mb-3 rounded-md shadow-sm">
                <div className="card-body">

                    <div>
                        <Image className='object-contain w-full' src={details?.image_url} height={400} width={500} alt='imgauthor' />

                        <div>
                            <h1 className='card-title mt-4 text-xl'>{details.title}</h1>
                        </div>
                        <p className='text-neutral-500 mt-4'>{details?.details}</p>
                    </div>

                    <div className='divider'></div>
                    <Link href={`/news/${details.category_id}`}>
                        <button className='btn bg-linear-to-r from-black to-gray-500 text-white'><FaArrowRightToBracket /> All news in this category</button></Link>

                </div>
                <figure>

                </figure>
            </div>
        </div>
    );
};

export default DetailsCard;