'use client';
import React, { useState } from 'react'
import './css/quantity-selector.css'

export default function QuantitySelector({
    quantity,
    setquantity
}: {
    quantity: number;
    setquantity: Function;
}) {
    const [open, setopen] = useState(false);

    const selectQuantity = (q: number) => {
        setquantity(q);
        setopen(!open);
    }

    return (
        <div className='relative w-16 h-10'>
            <div className={`${open ? 'box-open' : 'box-closed rounded-md'} w-full h-full flex items-center justify-between px-2 border border-black rounded-t-md hover:cursor-pointer`} onClick={() => setopen(!open)}>
                <p className='text-center w-3'>{quantity}</p>
                {open ? <span className="material-symbols-outlined">
                    keyboard_arrow_up
                </span> : <span className="material-symbols-outlined">
                    keyboard_arrow_down
                </span>}
            </div>
            <div className={`${open ? 'max-h-[120px]' : 'max-h-0 border-0'} transition-[max-height] absolute w-full shadow-md border-t-0 border-black rounded-b-md overflow-hidden motion-reduce:transition-none`}>
                {[1, 2, 3, 4, 5].map((n, i) => (
                    <div key={i} className={`${n === quantity ? 'bg-gray-200' : 'bg-white'} hover:bg-gray-300 focus-within:bg-gray-300`}>
                        <button className='w-full px-2 flex items-center justify-start' onClick={() => selectQuantity(n)}>
                            <p className='text-center w-3'>{n}</p>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}
