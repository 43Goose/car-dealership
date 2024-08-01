'use client';
import React, { Suspense } from 'react';
import CarShowcase from '../ui/car-showcase';

export default function Showcase() {
  return (
    <main className='min-h-screen'>
      <Suspense>
        <CarShowcase />
      </Suspense>
    </main>
  )
}
