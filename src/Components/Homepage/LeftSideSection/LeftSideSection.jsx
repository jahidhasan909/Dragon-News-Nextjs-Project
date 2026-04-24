import Link from 'next/link';
import React from 'react';

const LeftSideSection = ({ categories }) => {
    return (
        <div>
            <ul className='flex flex-col px-5'>
                <li><Link className='inline-block mb-4' href={`/news/${categories.category_id}`}>{categories.category_name}</Link></li>
            </ul>
        </div>
    );
};

export default LeftSideSection;