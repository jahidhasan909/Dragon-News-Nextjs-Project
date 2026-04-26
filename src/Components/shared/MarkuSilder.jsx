import React from 'react';
import Marquee from "react-fast-marquee";


const news = [
    {
        id: 1,
        title: 'Tucker Carlson Swears Vladimir Putin Is Winning The War In Ukraine'
    },
    {
        id: 2,
        title: 'Joe Biden announces $3 billion in Ukraine weapons aid'
    },
    {
        id: 3,
        title: 'U.S. announces largest weapons package for Ukraine'
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