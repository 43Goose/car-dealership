'use server';

import { cookies } from "next/headers";

export default async function getCart() {
    return cookies().get('cart');
}

export async function getCartItemsAsArray(): Promise<{ tag: string, quantity: number }[]> {
    if (await checkCart()) {
        const cart = await getCart();
        const cartArray = cart?.value.split(',') as string[];
        const returnArray = cartArray.map(i => {
            const iSplit = i.split('_');
            return { tag: iSplit[0], quantity: Number(iSplit[1]) };
        });
        return returnArray;
    } else return [];
}

export async function addToCart(itemTag: string, quantity: number) {
    let newCart = [];

    if (await checkCart()) {
        const cart = await getCart();
        const cartArray = cart?.value.split(',') as string[];
        const itemRegex = new RegExp(itemTag + '_\\d');

        if (cartArray.find(i => i.match(itemRegex))) {
            const currentQuantity = Number(cartArray.find(i => i.match(itemRegex))?.split('_')[1]);
            const cartWithoutItem = cartArray.filter(i => !i.match(itemRegex));
            const newQuantity = (currentQuantity + quantity) <= 5 ? currentQuantity + quantity : 5;
            newCart = [...cartWithoutItem, `${itemTag}_${newQuantity}`];
        } else {
            newCart = [...cartArray, `${itemTag}_${quantity}`];
        }
    } else {
        newCart.push(`${itemTag}_${quantity}`);
    }

    cookies().set('cart', newCart.toString(), { secure: true });
}

export async function RemoveFromCart(itemTag: string) {
    if (await checkCart()) {
        const cart = await getCart();
        const cartArray = cart?.value.split(',') as string[];
        if (cartArray.length === 1) {
            clearCart();
        } else {
            cookies().set('cart', cartArray.filter(i => !i.match(new RegExp(itemTag + '_\\d'))).toString(), { secure: true });
        }
    }
}

export async function UpdateItemQuantity(itemTag: string, newQuantity: number) {
    if (await checkCart()) {
        const cart = await getCart();
        const cartArray = cart?.value.split(',') as string[];
        const cartWithoutItem = cartArray.filter(i => !i.match(new RegExp(itemTag + '_\\d')));
        const newCart = [...cartWithoutItem, itemTag + '_' + newQuantity];

        cookies().set('cart', newCart.toString(), { secure: true });
    }
}

export async function clearCart() {
    cookies().delete('cart');
}

export async function checkCart() {
    return cookies().has('cart');
}