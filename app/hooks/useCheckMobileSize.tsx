'use client'
import { useEffect, useState } from 'react'

export default function useCheckMobileSize() {
    const [width, setWidth] = useState(0);

    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        handleWindowSizeChange();
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    });

    return (width <= 768);
}
