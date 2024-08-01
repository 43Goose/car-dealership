'use client';
import React, { useState } from 'react'
import QuantitySelector from './quantity-selector';
import Image from 'next/image';
import { vehicles } from '@/app/vehicles';
import { vehicle } from '@/app/types';
import { formatPrice } from '@/app/utils';
import { Button, TextField } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { promos } from '@/app/promos';
import { theme } from '@/app/themes';

export default function ShoppingCart({ items, quantityFunc, removeFunc, clearFunc }: { items: { tag: string, quantity: number }[]; quantityFunc: Function; removeFunc: Function; clearFunc: Function }) {
    const [cartItems, setcartItems] = useState(items);

    const handleRemove = (tag: string) => {
        removeFunc(tag);
        setcartItems(cur => cur.filter(i => i.tag !== tag));
    }

    return (
        <ThemeProvider theme={theme}>
            <div className='flex flex-col md:flex-row md:justify-between'>
                <ItemDisplay
                    items={cartItems}
                    quantityFunc={quantityFunc}
                    removeFunc={handleRemove}
                />
                <Checkout items={items} clearFunc={clearFunc} />
            </div>
        </ThemeProvider>

    )
}

function ItemDisplay({ items, quantityFunc, removeFunc }: { items: { tag: string, quantity: number }[]; quantityFunc: Function; removeFunc: Function; }) {
    return (
        <div className='min-h-full mb-16 mx-8 grow'>
            {items.length === 0 ?
                <div className='w-full h-full flex justify-center items-center'>
                    <h1 className='font-bold text-2xl'>Your Cart is Empty!</h1>
                </div> :
                items.map((i, index) => {
                    const itemInfo = vehicles.find(x => x.tag === i.tag);

                    return (
                        <ItemInfo
                            key={index}
                            vehicle={itemInfo!}
                            quantityFunc={quantityFunc}
                            removeFunc={removeFunc}
                            originalQuantity={i.quantity}
                        />
                    )
                })}
        </div>
    )
}

function ItemInfo({ vehicle, originalQuantity, quantityFunc, removeFunc }: { vehicle: vehicle; quantityFunc: Function; removeFunc: Function; originalQuantity: number }) {
    const [quantity, setquantity] = useState(originalQuantity);

    const handleQuantity = (quantity: number) => {
        quantityFunc(vehicle.tag, quantity);
        setquantity(quantity);
    }

    return (
        <div className='min-h-36 max-w-xl mb-4 flex justify-between bg-gray-100 rounded-md md:min-h-48'>
            <div className='grow flex justify-between'>
                <div>
                    <div className='shrink-0 h-full w-28 p-0.5 bg-black rounded-md overflow-hidden md:w-40'>
                        <Image src={vehicle.images[0].image} alt={vehicle.model} className='h-full object-cover rounded-md' />
                    </div>
                </div>
                <div className='flex flex-col justify-between p-2 grow md:flex-row'>
                    <div>
                        <h1 className='font-bold text-lg mb-2'>{`${vehicle.manufacturer} ${vehicle.model}`}</h1>
                        <QuantitySelector quantity={quantity} setquantity={handleQuantity} />
                    </div>
                    <div>
                        <h1 className='font-bold text-lg text-red-500'>{formatPrice(vehicle.price * quantity)}</h1>
                    </div>
                </div>
            </div>
            <div className='hover:cursor-pointer' onClick={() => removeFunc(vehicle.tag)}>
                <span className="material-symbols-outlined">
                    close
                </span>
            </div>
        </div >
    )
}

function Checkout({ items, clearFunc }: { items: { tag: string, quantity: number }[]; clearFunc: Function }) {
    const [promo, setpromo] = useState('');
    const [isValid, setisValid] = useState(false);
    const prices = items.length === 0 ? [0] : items.map(i => vehicles.find(x => x.tag === i.tag)?.price! * i.quantity) as number[];

    return (
        <div className='text-center'>
            <Promos setPromo={setpromo} isValid={isValid} setIsValid={setisValid} />
            <OrderSummary prices={prices} promo={promo} isValid={isValid} />
            <Button variant='contained' href='/checkout' onClick={() => clearFunc()} className='w-3/4 p-3 mt-4'>Proceed to Purchase</Button>
        </div>
    )
}

function Promos({ setPromo, isValid, setIsValid }: { setPromo: Function; isValid: boolean; setIsValid: Function }) {
    const [promoCode, setpromoCode] = useState('');
    const [isError, setisError] = useState(false);

    const handlePromo = (event: React.ChangeEvent<HTMLInputElement>) => {
        setpromoCode(event.target.value);
    }

    const handleClick = () => {
        if (Object.keys(promos).includes(promoCode)) {
            setIsValid(true);
            setisError(false);
            setPromo(promoCode);
        } else {
            setIsValid(false);
            setisError(true);
        }
    }

    return (
        <div className='w-full bg-gray-100 py-2 px-4 text-left'>
            <h1 className='font-bold text-lg'>Apply Promo Code</h1>
            <div className='flex justify-between py-2'>
                <TextField
                    label='Promo Code'
                    variant='outlined'
                    size='small'
                    color='secondary'
                    value={promoCode}
                    error={isError}
                    onChange={handlePromo}
                    className='bg-white mr-2'
                />
                <Button variant='contained' onClick={handleClick}>Apply</Button>
            </div>
        </div>
    )
}

function OrderSummary({ prices, promo, isValid }: { prices: number[]; promo: string; isValid: boolean }) {
    const subtotal = prices.reduce((acc, cur) => acc + cur, 0);
    const tax = subtotal * 0.12;
    let total = isValid ? (subtotal + tax) * promos[promo] : subtotal + tax;

    return (
        <div className='w-full bg-gray-100 py-2 px-4 mt-4 text-left'>
            <h1 className='font-bold text-lg'>Order Summary</h1>
            <div>
                <span className='flex justify-between my-2'>
                    <p>Subtotal</p>
                    <p>{formatPrice(subtotal)}</p>
                </span>
                <span className='flex justify-between my-2'>
                    <p>Shipping</p>
                    <p>FREE</p>
                </span>
                <span className='flex justify-between my-2'>
                    <p>GST/HST</p>
                    <p>{formatPrice(tax)}</p>
                </span>
                {isValid ? (
                    <span className='flex justify-between my-2'>
                        <p>Promo {promo}</p>
                        <p>{'-' + Number(100 - (100 * promos[promo])) + '%'}</p>
                    </span>
                ) : null}
            </div>
            <div className='border-t border-dashed border-black my-4' />
            <span className='flex justify-between'>
                <h1 className='font-bold text-lg'>Total</h1>
                <h1 className='font-bold text-lg'>{formatPrice(total)}</h1>
            </span>
        </div>
    )
}