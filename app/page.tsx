'use client';
import React from 'react'
import ImageSlider from './ui/image-slider'
import image1 from '@/public/home/ferrari-f40.jpg';
import image2 from '@/public/home/porsche-911.jpg';
import image3 from '@/public/home/dodge_viper.jpg';
import image4 from '@/public/home/lamborghini_gallardo.jpg';
import image5 from '@/public/home/dodge_challenger_hellcat.jpg';

import { imageData, vehicle } from './types';
import ItemCarousel from './ui/item-carousel';
import { Button, ThemeProvider, createTheme } from '@mui/material';

export default function Dealership() {
  const menuImages: imageData[] = [
    { image: image1, alt: 'Ferrari F40' },
    { image: image2, alt: 'Porsche 911 GT3' },
    { image: image3, alt: 'Dodge Viper' },
    { image: image4, alt: 'Lamborghini Gallardo' },
    { image: image5, alt: 'Dodge Hellcat' }
  ]

  const theme = createTheme({
    palette: {
      primary: {
        main: '#000',
      },
      secondary: {
        main: '#EF4444',
      },
    },
  });

  return (
    <main className='min-h-dvh'>
      <ThemeProvider theme={theme}>
        <div className='h-dvh w-full pt-16'> {/* don't know why its oversized on md+ but this fixes it so whatever*/}
          <ImageSlider images={menuImages} previews={false} />
        </div>
        <div className='w-full my-24 px-8 md:px-16'>
          <h1 className='w-full text-center text-3xl text-red-500 font-bold mb-4'>EVERYTHING YOU NEED</h1>
          <h2 className='text-center text-lg'>{"At Mach we've got a wide variety of cars to suit whatever you need. The speed of a super car, agility of a sports car, or the noise of a muscle car. You want it. We got it."}</h2>
          <div className='flex max-w-96 mx-auto mt-6 justify-evenly'>
            <Button variant='outlined' color='secondary' href='/showcase?class=super'>SUPER</Button>
            <Button variant='outlined' color='secondary' href='/showcase?class=sport'>SPORT</Button>
            <Button variant='outlined' color='secondary' href='/showcase?class=muscle'>MUSCLE</Button>
          </div>
        </div>
        <div className='w-full my-24 px-8 md:px-16'>
          <h1 className='w-full text-center text-3xl text-red-500 font-bold mb-4'>SUMMER SPECIAL</h1>
          <h2 className='text-center text-lg'>{"Shop now and save 15% on your purchase using code SUMMER15!"}</h2>
          <div className='flex justify-center my-8'>
            <Button variant='outlined' color='secondary' href='/showcase'>SHOP NOW</Button>
          </div>
        </div>
        <div className='w-full my-24 px-8 md:px-16'>
          <h1 className='w-full text-center text-3xl text-red-500 font-bold mb-4'>SUPER CARS</h1>
          <h2 className='text-center text-lg'>{"Like speed? These cars have got it."}</h2>
          <ItemCarousel filterFn={(v: vehicle): v is vehicle => { return v.class === 'Super' }} />
        </div>
      </ThemeProvider>
    </main>
  )
}