import { navigationLink, navCategory } from '@/app/types';
import React from 'react'
import NavCategory from './nav-category';
import NavLink from './nav-link';

export default function Navmenu({ open, links }: { open: boolean; links: (navigationLink | navCategory)[] }) {
    return (
        <div className={`${open ? 'max-h-screen shadow-lg' : 'h-auto max-h-0 shadow-none'} fixed w-full top-16 transition-[max-height] overflow-hidden bg-white motion-reduce:transition-none md:rounded-br-3xl md:w-60`}>
            <div className='w-full h-full flex flex-col'>
                {links.map((link, i) => (
                    "links" in link ?
                        <NavCategory
                            key={i}
                            name={link.name}
                            className={i % 2 === 0 ? 'bg-gray-200' : 'bg-white'}
                            links={link.links}
                        /> :
                        <NavLink
                            key={i}
                            name={link.name}
                            url={link.url}
                            className={i % 2 === 0 ? 'bg-gray-200' : 'bg-white'}
                        />
                ))}
            </div>
        </div>
    )
}
