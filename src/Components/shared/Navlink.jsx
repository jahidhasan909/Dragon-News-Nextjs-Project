'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navlink = ({ href, children }) => {

    const pathname = usePathname();



    let isActive = href === pathname;
    return (
        <div>
            <Link className={`${isActive ? ' underline font-semibold' : 'text-neutral-500'}`} href={href}>{children}</Link>
        </div>
    );
};

export default Navlink;