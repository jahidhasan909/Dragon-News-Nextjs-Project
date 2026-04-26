import Link from 'next/link';
import React from 'react';


const LeftSideSection = ({ categories, activeId }) => {
    return (
        <div>
            <ul className='flex flex-col px-4'>
                <li><Link className={`block mb-4 py-2 px-3 ${activeId === categories.category_id ? 'bg-neutral-300 font-semibold rounded-md' : 'text-neutral-500'}`} href={`/news/${categories.category_id}`}>{categories.category_name}</Link></li>
            </ul>
           
        </div>
    );
};

export default LeftSideSection;