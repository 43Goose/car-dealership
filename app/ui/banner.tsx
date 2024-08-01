import Image, { StaticImageData } from 'next/image'
import React from 'react'

export default function Banner({ image, title }: { image: StaticImageData; title: string; }) {
  return (
    <div className='relative w-full h-24 flex items-center justify-center shadow-xl md:h-48'>
      <Image src={image} alt={title} className='h-full object-cover' />
      <h1 className='absolute text-white text-2xl font-bold md:text-4xl'>{title}</h1>
    </div>
  )
}
