'use client'
import { vehicle } from '@/app/types'
import { vehicles } from '@/app/vehicles'
import useCheckMobileSize from '@/app/hooks/useCheckMobileSize';
import Image from 'next/image'
import React, { useState } from 'react'

export default function ItemCarousel({ filterFn }: { filterFn: (value: vehicle, index: number, array: vehicle[]) => value is vehicle }) {
    const [index, setindex] = useState(0);
    const reccomendations: vehicle[] = vehicles.filter(filterFn);
    const isMobile = useCheckMobileSize();

    const nextItem = () => {
        setindex(i => {
            if (i >= reccomendations.length - (isMobile ? 2 : 4)) return 0
            return i + 1
        });
    }

    const prevItem = () => {
        setindex(i => {
            if (i <= 0) return reccomendations.length - (isMobile ? 2 : 4)
            return i - 1
        });
    }

    return (
        <div className='w-full flex justify-center items-center'>
            <span className="material-symbols-outlined text-4xl hover:cursor-pointer" onClick={prevItem}>
                keyboard_arrow_left
            </span>
            <div className='max-w-64 flex justify-center overflow-hidden md:max-w-lg'>
                <div className={`w-full h-full flex transition-[translate] motion-reduce:transition-none`} style={{ translate: `${(isMobile ? -50 : -25) * index}%` }}>
                    {reccomendations.map((v, i) => (
                        <Reccomendation key={i} vehicle={v} />
                    ))}
                </div>
            </div>
            <span className="material-symbols-outlined text-4xl hover:cursor-pointer" onClick={nextItem}>
                keyboard_arrow_right
            </span>
        </div>
    )
}

function Reccomendation({ vehicle }: { vehicle: vehicle }) {
    return (
        <a className='min-w-32 block rounded-lg overflow-hidden p-2 hover:bg-gray-300' href={'/showcase/' + vehicle.tag}>
            <div className='w-full h-24 overflow-hidden rounded-md'>
                <Image src={vehicle.images[0].image} alt={vehicle.images[0].alt} className='h-full object-cover' />
            </div>
            <p className='text-center'>{`${vehicle.manufacturer} ${vehicle.model}`}</p>
        </a>
    )
}
