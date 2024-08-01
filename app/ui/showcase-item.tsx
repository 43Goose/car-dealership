import { vehicle } from '@/app/types'
import { formatPrice } from '@/app/utils'
import Image from 'next/image'
import React from 'react'

export default function ShowcaseItem({ vehicle }: { vehicle: vehicle }) {
  return (
    <a
      href={'/showcase/' + vehicle.tag}
      className='w-5/6 max-w-xs mx-auto rounded-xl border-2 border-black overflow-hidden md:w-64 2xl:w-80'
    >
      <Image
        src={vehicle.images[0].image}
        alt={vehicle.tag}
        className='h-44 object-cover border-b-2 border-red-500'
      />
      <div className='flex flex-col items-start justify-between px-6 py-2 text-lg md:items-center md:flex-row'>
        <span className='mr-2'>
          <h2 className='font-bold'>{vehicle.manufacturer}</h2>
          <h3 className='ml-2'>{vehicle.model}</h3>
        </span>
        <h2 className='text-2xl text-red-500'>{formatPrice(vehicle.price)}</h2>
      </div>
    </a>
  )
}
