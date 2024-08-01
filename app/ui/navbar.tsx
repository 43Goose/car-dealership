'use client';
import React, { useEffect, useState } from 'react'
import Navmenu from './navmenu'
import { navCategory, navigationLink } from '@/app/types';
import { checkCart } from '@/app/cart-manager';

export default function DealershipNavbar() {
  const [menuOpen, setmenuOpen] = useState(false);
  const [hasCart, sethasCart] = useState(false);

  useEffect(() => {
    const handleCartInfo = async () => {
      sethasCart(await checkCart());
    }
    handleCartInfo();
  })


  const navTree: (navCategory | navigationLink)[] = [
    {
      name: 'Home',
      url: '/'
    },
    {
      name: 'Showcase',
      links: [
        { name: 'All', url: '/showcase' },
        { name: 'Super', url: '/showcase?class=super' },
        { name: 'Sport', url: '/showcase?class=sport' },
        { name: 'Muscle', url: '/showcase?class=muscle' }
      ]
    },
    {
      name: 'Contact',
      url: '/contact'
    }
  ]

  const toggleMenu = () => {
    setmenuOpen(!menuOpen);
  }

  return (
    <div className='fixed w-full h-16 flex items-center bg-white border-b border-black z-50'>
      <a className='m-auto text-2xl text-red-500 font-bold' href="/">
        <h1>MACH</h1>
      </a>
      <a className='absolute left-8 flex items-center cursor-pointer' onClick={toggleMenu}>
        <span className='material-symbols-outlined text-3xl'>
          menu
        </span>
      </a>
      <Navmenu open={menuOpen} links={navTree}></Navmenu>
      <a className='absolute right-8' href='/cart'>
        <span className="material-symbols-sharp text-3xl">
          shopping_cart
        </span>
        {hasCart ? <div className='absolute w-2 h-2 right-1 top-1 bg-red-500 rounded-full shadow shadow-red-500' /> : null}
      </a>
    </div>
  )
}
