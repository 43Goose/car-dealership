'use client';
import './css/image-slider.css';
import { imageData } from '@/app/types';
import Image, { StaticImageData } from 'next/image';
import React, { MouseEventHandler, useEffect, useRef } from 'react'
import { useState } from 'react';
import ImageDots from './image-dots';

export default function ImageSlider(
  {
    images,
    previews
  }: {
    images: imageData[];
    previews: boolean;
  }) {
  const [index, setIndex] = useState<number>(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carouselLocal = carousel;
    const handleScroll = () => {
      const scrolledIndex = carouselLocal.current?.scrollLeft! / carouselLocal.current?.offsetWidth!;
      if (scrolledIndex % 1 === 0) {
        setIndex(scrolledIndex);
      }
    };

    carouselLocal.current?.addEventListener('scroll', handleScroll);

    return () => {
      carouselLocal.current?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const changeImage = (delta: number) => {
    if (carousel.current) {
      const nextIndex = (index + delta) < 0 ? images.length - 1 : (index + delta) > (images.length - 1) ? 0 : index + delta;

      const width = carousel.current.offsetWidth;
      carousel.current.scrollTo(width * nextIndex, 0);

      setIndex(nextIndex);
    }
  }

  const previewClick = (index: number) => {
    if (carousel.current) {
      const width = carousel.current.offsetWidth;
      carousel.current.scrollTo(width * index, 0);

      setIndex(index);
    }
  }

  return (
    <div className='relative w-full h-full'>
      <div className='rlative w-full h-full'>
        <div
          className='w-screen h-full flex items-stretch duration-300 ease-in-out overflow-x-scroll snap-x snap-mandatory scroll-smooth motion-reduce:scroll-auto no-scrollbar'
          ref={carousel}
        >
          {images.map((img, i) => (
            <div key={i} className='w-screen snap-start shrink-0 grow-0'>
              <Image
                src={img.image}
                alt={img.alt}
                className='h-full w-auto object-cover 2xl:w-full'
              ></Image>
            </div>
          ))}
        </div>
        <button className='hidden absolute top-0 bottom-0 p-2 cursor-pointer left-0 md:block' onClick={() => changeImage(-1)}>
          <span className='material-symbols-outlined text-4xl text-white flex items-center justify-center h-9 w-9 bg-black bg-opacity-25 rounded-full'>
            keyboard_arrow_left
          </span>
        </button>
        <button className='hidden absolute top-0 bottom-0 p-2 cursor-pointer right-0 md:block' onClick={() => changeImage(1)}>
          <span className='material-symbols-outlined text-4xl text-white flex items-center justify-center h-9 w-9 bg-black bg-opacity-25 rounded-full'>
            keyboard_arrow_right
          </span>
        </button>
      </div>
      <div className={`hidden absolute bottom-0 w-full h-16 bg-black bg-opacity-50 z-10 ${previews ? 'md:block' : null}`}>
        <div className='w-80 h-full flex justify-evenly items-center m-auto'>
          {images.map((img, i) => (
            <ImagePreview key={i} image={img.image} alt={img.alt} clickFunc={() => previewClick(i)} />
          ))}
        </div>
      </div>
      <ImageDots images={images} currentIndex={index} displayDesktop={!previews} />
    </div>
  )
}

function ImagePreview({ image, alt, clickFunc }: { image: StaticImageData; alt: string; clickFunc: MouseEventHandler<HTMLAnchorElement> }) {
  return (
    <a className='w-12 h-12 block rounded-lg border-2 border-gray-400 hover:border-white overflow-hidden cursor-pointer' onClick={clickFunc}>
      <Image
        src={image}
        alt={alt + ' preview.'}
        className='h-full object-cover opacity-85 hover:opacity-100'
      />
    </a>
  )
}