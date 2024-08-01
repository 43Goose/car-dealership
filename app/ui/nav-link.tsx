import React from 'react'

export default function NavLink({ name, url, className }: { name: string; url: string; className?: string; }) {
    return (
        <a
            href={url}
            className={`${className} w-full p-3 text-lg hover:bg-gray-300 focus-visible:bg-gray-300`}
        >
            {name}
        </a>
    )
}
