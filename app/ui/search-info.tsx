'use client';
import { theme } from '@/app/themes';
import { filter } from '@/app/types'
import { MenuItem, Select, SelectChangeEvent, ThemeProvider } from '@mui/material';
import React from 'react'

export default function SearchInfo({
    filter,
    sortBy,
    vehicleCount,
    setFilter,
    setSorting,
    toggleFilter
}: {
    filter: filter;
    sortBy: string;
    vehicleCount: number;
    setFilter: Function;
    setSorting: Function;
    toggleFilter: Function;
}) {
    const sorters = ['Manufacturer', 'Class', 'Mileage', 'Price High to Low', 'Price Low to High']
    const filterList = Object.keys(filter)
        .filter(k => !['price', 'hp', 'rpm', 'mileage', 'top_speed'].includes(k) && filter[k].length !== 0)
        .map(x => filter[x].map((i: string) => [x, i]))
        .reduce((acc, cur) => [...acc, ...cur], []);

    const handleSorting = (event: SelectChangeEvent) => {
        setSorting(event.target.value);
    }

    return (
        <div className='min-h-24 flex items-end pt-12 pb-2 px-4 shadow-md md:pb-0 md:shadow-none'>
            <div className='w-full flex justify-between text-xs font-bold'>
                <div className='flex'>
                    <span className="material-symbols-sharp flex items-center mr-2 md:hidden" onClick={() => toggleFilter()}>
                        filter_alt
                    </span>
                    <h2 className='flex items-center mr-4'>{vehicleCount} Cars</h2>
                    <div className='hidden max-w-80 flex-wrap md:flex'>
                        {filterList.map((filter: string[]) => <FilterBox key={filter[1]} info={filter} removeFilter={setFilter} />)}
                    </div>
                </div>
                <ThemeProvider theme={theme}>
                    <div className='flex'>
                        <h2 className='flex items-center mr-4'>Sort by:</h2>
                        <Select
                            value={sortBy}
                            onChange={handleSorting}
                            inputProps={{ 'aria-label': 'Without label' }}
                            size='small'
                        >
                            {sorters.map(x => (<MenuItem key={x} value={x} >{x}</MenuItem>))}
                        </Select>
                    </div>
                </ThemeProvider>
            </div>
        </div>
    )
}

function FilterBox({ info, removeFilter }: { info: string[]; removeFilter: Function }) {
    const handleClick = () => {
        removeFilter({ type: 'remove', category: info[0], value: info[1] });
    }

    return (
        <button className='h-6 px-2 py-3.5 m-1 flex items-center bg-gray-100 rounded hover:bg-gray-200' onClick={handleClick}>
            <span className='flex text-gray-500'>
                {info[1]}
                <span className="material-symbols-outlined text-xs ml-1 flex items-center">
                    close
                </span>
            </span>
        </button>
    )
}
