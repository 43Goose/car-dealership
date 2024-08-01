import { StaticImageData } from "next/image";

export interface imageData {
    image: StaticImageData,
    alt: string
}

export interface navigationLink {
    name: string,
    url: string
}

export interface navCategory {
    name: string,
    links: navigationLink[]
}

export interface vehicle {
    [key: string]: any,
    tag: string,
    manufacturer: string,
    model: string,
    class: 'Super' | 'Sport' | 'Muscle',
    color: string[],
    price: number,
    description: string,
    engine: string,
    transmission: string,
    turbo: 'single' | 'twin' | 'quad' | 'none' | 'supercharger',
    hp: number,
    rpm: number,
    mileage: number,
    top_speed: number,
    images: imageData[]
}

export interface filter {
    [key: string]: any,
    manufacturer: string[],
    class: string[],
    color: string[],
    price: number[],
    engine: string[],
    transmission: string[],
    turbo: string[],
    hp: number[],
    rpm: number[],
    mileage: number[],
    top_speed: number[]
}