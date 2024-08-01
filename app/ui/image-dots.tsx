'use client';
import { imageData } from '@/app/types';
import React from 'react';

export default function ImageDots({ images, currentIndex, displayDesktop }: { images: imageData[]; currentIndex: number; displayDesktop: boolean }) {
    return (
        <div className={`absolute flex items-center gap-1.5 bottom-2 left-1/2 -translate-x-1/2 ${displayDesktop ? null : 'md:hidden'}`}>
            {images.map((_, index) => (
                <Circle key={index} current={index === currentIndex} />
            ))}
        </div>
    )
}

function Circle({ current }: { current: boolean }) {
    return (
        <div className={`${current ? 'w-4' : 'w-2'} h-2 bg-gray-200 rounded-full`} />
    )
}