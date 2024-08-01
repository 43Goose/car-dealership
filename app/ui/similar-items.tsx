'use client';
import { vehicle } from '@/app/types';
import React from 'react'
import ItemCarousel from './item-carousel';

export default function SimilarItems({ vehicle }: { vehicle: vehicle }) {
    const filterFn = (v: vehicle): v is vehicle => {
        return (v.class === vehicle.class || v.manufacturer === vehicle.manufacturer) && v !== vehicle;
    }

    return (
        <div className='flex flex-col py-4 border-t border-gray-300'>
            <div className='w-full'>
                <h1 className='w-full text-center text-xl text-red-500 font-bold mb-4'>SIMILAR CARS</h1>
                <ItemCarousel filterFn={filterFn} />
            </div>
        </div>
    )
}
