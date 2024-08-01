import React from 'react'
import { RemoveFromCart, UpdateItemQuantity, clearCart, getCartItemsAsArray } from '../cart-manager'
import ShoppingCart from '@/app/ui/shopping-cart'

export default async function Cart() {
    const cartItems = await getCartItemsAsArray();

    const changeQuantity = async (tag: string, newQuantity: number) => {
        'use server';
        UpdateItemQuantity(tag, newQuantity);
    }

    const removeItem = async (tag: string) => {
        'use server';
        RemoveFromCart(tag);
    }

    return (
        <main className='min-h-[calc(100vh_-_96px)] pt-16'>
            <div className='mt-16 md:px-24 lg:px-40 xl:px-60 2xl:px-96'>
                <ShoppingCart items={cartItems} quantityFunc={changeQuantity} removeFunc={removeItem} clearFunc={clearCart} />
            </div>
        </main>
    )
}
