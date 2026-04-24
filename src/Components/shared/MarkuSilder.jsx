import React from 'react';
import Marquee from "react-fast-marquee";


const news = [
    {
        id: 1,
        title: 'Lorem ipsum dolor sit amet consectetur'
    },
    {
        id: 2,
        title: 'Lorem ipsum dolor sit amet consectetur'
    },
    {
        id: 3,
        title: 'Lorem ipsum dolor sit amet consectetur'
    }
]

const MarkuSilder = () => {
    return (
        <div className=' container mx-auto flex justify-between gap-3 bg-neutral-200 py-3 px-2 rounded-md'>
            <button className='btn btn-error'>Latest</button>
            <Marquee pauseOnHover={true} speed={100}>
                <p>{news.map(n => <span key={n.id}>{n.title}</span>)}</p>
            </Marquee>
        </div>
    );
};

export default MarkuSilder;