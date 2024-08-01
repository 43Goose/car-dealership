'use client';
import { useState } from "react";
import QuantitySelector from "./quantity-selector";
import { useRouter } from "next/navigation";

export default function PurchaseFunctions({
    addToCart,
    buyNow
}: {
    addToCart: Function;
    buyNow: Function;
}) {
    const [quantity, setquantity] = useState(1);
    const router = useRouter();

    const handleAddToCart = async () => {
        await addToCart(quantity);
        router.refresh();
    }

    const handleBuyNow = async () => {
        buyNow()
        router.replace('/checkout');
    }

    return (
        <div className='w-full my-4 z-10'>
            <div className='w-full flex gap-4'>
                <QuantitySelector quantity={quantity} setquantity={setquantity} />
                <button
                    className='grow h-10 bg-black text-white rounded-md hover:bg-gray-900 hover:shadow-md focus-within:bg-gray-900 focus-within:shadow-md'
                    onClick={handleAddToCart}
                >ADD TO CART</button>
            </div>
            <button
                className='w-full h-10 mt-4 bg-red-500 text-white rounded-md hover:bg-red-600 hover:shadow-md focus-within:bg-red-600 focus-within:shadow-md'
                onClick={handleBuyNow}
            >BUY NOW</button>
        </div>
    )
}