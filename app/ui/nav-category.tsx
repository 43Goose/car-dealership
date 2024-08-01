'use client';
import { navigationLink } from '@/app/types';
import React, { useState } from 'react'
import NavLink from './nav-link';

export default function NavCategory({
    name,
    className,
    links
}: {
    name: string;
    className: string;
    links: navigationLink[]
}) {
    const [open, setopen] = useState(false);

    const toggleOpen = () => {
        setopen(!open);
    }

    return (
        <div className={`${open ? 'max-h-screen' : 'max-h-[52px]'} ${className} w-full transition-[max-height] overflow-hidden`}>
            <button className={`${open ? 'border-b border-black' : ''} w-full p-3 text-lg text-left hover:bg-gray-300 focus-visible:bg-gray-300`} onClick={toggleOpen}>
                {name}
            </button>
            <div className='relative flex flex-col'>
                <div className='absolute top-0 left-8 w-px h-full flex items-center'>
                    <div className='w-full h-3/4 bg-red-500'></div>
                </div>
                {links.map((link, i) => (
                    <NavLink
                        key={i}
                        name={link.name}
                        url={link.url}
                        className='px-12'
                    />
                ))}
            </div>
        </div>
    )
}
