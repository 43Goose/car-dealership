'use client';
import React, { Suspense } from 'react';
import CarShowcase from '../ui/car-showcase';

export default function Showcase() {
  return (
    <main className='min-h-dvh'>
      <Suspense>
        <CarShowcase />
      </Suspense>
    </main>
  )
}
