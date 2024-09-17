import { vehicles } from '../../vehicles'
import ImageSlider from '@/app/ui/image-slider';
import { vehicle } from '../../types';
import { formatPrice } from '../../utils';
import { addToCart, clearCart } from '../../cart-manager';
import PurchaseFunctions from '@/app/ui/purchase-functions';
import SimilarItems from '@/app/ui/similar-items';

export default function Vehicle({ params }: { params: { tag: string } }) {
    const vehicle: vehicle = vehicles.filter(v => v.tag === params.tag)[0];
    const disclaimer = 'The cars on this site are NOT for sale. This is a personal website made for a portfolio. I am in no way selling nor do I own any of the cars on this website. All cars were picked by personal choice with no affiliation or sponsorship from the brands/manufacturers. Some of the vehicle information may not be accurate.'

    const addToCartFunc = async (quantity: number) => {
        'use server';
        addToCart(vehicle.tag, quantity);
    }

    const buyNowFunc = async () => {
        'use server';
        clearCart();
    }

    return (
        <main className='min-h-dvh'>
            <div className='relative pt-16 pb-4 w-full md:flex md:flex-row md:justify-center'>
                <div className='max-h-96 md:sticky md:top-0 md:pl-4'>
                    <div className='h-full md:max-w-xl'>
                        <ItemPath item={vehicle} className='hidden md:block md:pt-8 md:pb-4' />
                        <div className='w-full h-full md:max-h-[1000px] md:overflow-hidden md:border-2 md:border-red-500'>
                            <ImageSlider images={vehicle.images} previews />
                        </div>
                    </div>
                </div>
                <ItemPath item={vehicle} className='p-2 md:p-0 md:hidden' />
                <div className='min-h-[calc(100vh_-_4rem)] w-full flex flex-col gap-2 px-2 md:max-w-md md:px-4 md:pt-24'>
                    <h1 className='text-xl'>{`${vehicle.manufacturer} ${vehicle.model}`}</h1>
                    <h2 className='text-2xl font-bold text-red-500'>{formatPrice(vehicle.price)}</h2>
                    <ColorsDisplay colors={vehicle.color} />
                    <PurchaseFunctions addToCart={addToCartFunc} buyNow={buyNowFunc} />
                    <VehicleDetails vehicle={vehicle} />
                </div>
            </div>
            <SimilarItems vehicle={vehicle} />
            <div className='flex flex-col py-4 border-t border-gray-300'>
                <h1 className='w-full text-center text-xl text-red-500 font-bold'>DISCLAIMER!</h1>
                <div className='max-w-xl p-8 m-auto'>
                    <p className='text-center'>{disclaimer}</p>
                </div>
            </div>
        </main>
    )
}

function ItemPath({ item, className }: { item: vehicle; className?: string }) {
    return (
        <div className={className}>
            <span>
                <a className='underline hover:cursor-pointer hover:text-red-500'>{item.class}</a>
                {' / '}
                <a className='underline hover:cursor-pointer hover:text-red-500'>{item.manufacturer}</a>
                {' / '}
                <a className='underline hover:cursor-pointer hover:text-red-500'>{`${item.manufacturer} ${item.model}`}</a>
            </span>
        </div>
    )
}

function ColorsDisplay({ colors }: { colors: string[] }) {
    const colorVariants: { [key: string]: string } = {
        black: 'bg-black',
        white: 'bg-white',
        blue: 'bg-blue-500',
        red: 'bg-red-500',
        green: 'bg-green-500',
        yellow: 'bg-yellow-400',
        orange: 'bg-orange-500',
        sky: 'bg-sky-500',
        slate: 'bg-slate-300'
    }

    return (
        <div className='flex items-center'>
            <h2>Colors</h2>
            <div className='pl-2 flex gap-2'>
                {colors.map(color => (
                    <div key={color} className={`${colorVariants[color]} w-8 h-8 rounded-full border-2 border-gray-400`} />
                ))}
            </div>
        </div>
    )
}

function VehicleDetails({ vehicle }: { vehicle: vehicle }) {
    return (
        <div className='w-full'>
            <p>Vehicle Details</p>
            <div className='w-full flex md:flex-row'>
                <p className='w-1/2 font-bold py-4'>Class</p>
                <p className='w-1/2 pl-2 py-4'>{vehicle.class}</p>
            </div>
            <div className='w-full flex md:flex-row'>
                <p className='w-1/2 font-bold py-4'>Engine</p>
                <p className='w-1/2 pl-2 py-4'>{vehicle.engine}</p>
            </div>
            <div className='w-full flex md:flex-row'>
                <p className='w-1/2 font-bold py-4'>Transmission</p>
                <p className='w-1/2 pl-2 py-4'>{vehicle.transmission}</p>
            </div>
            <div className='w-full flex md:flex-row'>
                <p className='w-1/2 font-bold py-4'>Turbo</p>
                <p className='w-1/2 pl-2 py-4'>{vehicle.turbo}</p>
            </div>
            <div className='w-full flex md:flex-row'>
                <p className='w-1/2 font-bold py-4'>Engine RPM</p>
                <p className='w-1/2 pl-2 py-4'>{vehicle.hp} rpm</p>
            </div>
            <div className='w-full flex md:flex-row'>
                <p className='w-1/2 font-bold py-4'>Engine Horsepower</p>
                <p className='w-1/2 pl-2 py-4'>{vehicle.hp} hp</p>
            </div>
            <div className='w-full flex md:flex-row'>
                <p className='w-1/2 font-bold py-4'>Top Speed</p>
                <p className='w-1/2 pl-2 py-4'>{vehicle.top_speed} km/h</p>
            </div>
            <div className='w-full flex md:flex-row'>
                <p className='w-1/2 font-bold py-4'>Mileage</p>
                <p className='w-1/2 pl-2 py-4'>{vehicle.mileage} km</p>
            </div>
            <div className='w-full flex md:flex-row'>
                <p className='w-1/2 font-bold py-4'>Description</p>
                <p className='w-1/2 pl-2 py-4'>{vehicle.description}</p>
            </div>
        </div>
    )
}