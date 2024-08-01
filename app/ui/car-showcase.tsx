import React, { useEffect, useState } from 'react'
import { vehicles } from '../vehicles';
import { useSearchParams } from 'next/navigation';
import { formatTitle } from '../utils';
import { vehicle, filter } from '../types';
import banner_image from '@/public/home/porsche-911.jpg';
import Banner from './banner';
import Filters from './filters';
import SearchInfo from './search-info';
import ShowcaseItem from './showcase-item';

export default function CarShowcase() {
    const params = useSearchParams();
    const manufacturer = params.has('manufacturer') ? [params.get('manufacturer')] as string[] : [];
    const classFilter = params.has('class') ? [formatTitle(params.get('class') as string)] as string[] : [];
    const color = params.has('color') ? [params.get('color')] as string[] : [];
    const price = params.has('price') ? [Number(params.get('price')?.split('-')[0]), Number(params.get('price')?.split('-')[1])] as number[] : [];
    const engine = params.has('engine') ? [params.get('engine')] as string[] : [];
    const transmission = params.has('transmission') ? [params.get('transmission')] as string[] : [];
    const turbo = params.has('turbo') ? [params.get('turbo')] as string[] : [];
    const hp = params.has('hp') ? [Number(params.get('hp')?.split('-')[0]), Number(params.get('hp')?.split('-')[1])] as number[] : [];
    const rpm = params.has('rpm') ? [Number(params.get('rpm')?.split('-')[0]), Number(params.get('rpm')?.split('-')[1])] as number[] : [];
    const mileage = params.has('mileage') ? [Number(params.get('mileage')?.split('-')[0]), Number(params.get('mileage')?.split('-')[1])] as number[] : [];
    const topSpeed = params.has('top-speed') ? [Number(params.get('top-speed')?.split('-')[0]), Number(params.get('top-speed')?.split('-')[1])] as number[] : [];

    const [filterOpen, setfilterOpen] = useState(false);
    const [filteredList, setfilteredList] = useState(vehicles);
    const [sortBy, setsortBy] = useState('Manufacturer');
    const [filter, setFilter] = useState<filter>({
        manufacturer: manufacturer,
        class: classFilter,
        color: color,
        price: price,
        engine: engine,
        transmission: transmission,
        turbo: turbo,
        hp: hp,
        rpm: rpm,
        mileage: mileage,
        top_speed: topSpeed
    });

    const getFilteredVehicles = () => {
        return vehicles.filter((i: vehicle) => {
            let res = true;
            Object.keys(filter).map((x: any) => {
                if (filter[x].length === 0) return;
                if (['price', 'hp', 'rpm', 'mileage', 'top_speed'].includes(x)) {
                    if (filter[x].min > i[x] || filter[x].max < i[x]) res = false;
                } else if (x === 'engine') {
                    if (!filter.engine.includes(i.engine.slice(i.engine.indexOf('L') + 1))) res = false;
                } else if (x === 'transmission') {
                    if (filter.transmission[0].toLowerCase() !== i.transmission.split(' ')[1]) res = false;
                } else if (x === 'turbo') {
                    if (filter.turbo[0].toLowerCase() !== i.turbo) res = false;
                } else if (x === 'color') {
                    if (!filter.color.every(c => i.color.includes(c))) res = false;
                } else {
                    if (!filter[x].includes(i[x])) res = false;
                }
            });
            return res;
        });
    }

    useEffect(() => {
        setfilteredList(vehicles.filter((i: vehicle) => {
            let res = true;
            Object.keys(filter).map((x: any) => {
                if (filter[x].length === 0) return;
                if (['price', 'hp', 'rpm', 'mileage', 'top_speed'].includes(x)) {
                    if (filter[x].min > i[x] || filter[x].max < i[x]) res = false;
                } else if (x === 'engine') {
                    if (!filter.engine.includes(i.engine.slice(i.engine.indexOf('L') + 1))) res = false;
                } else if (x === 'transmission') {
                    if (filter.transmission[0].toLowerCase() !== i.transmission.split(' ')[1]) res = false;
                } else if (x === 'turbo') {
                    if (filter.turbo[0].toLowerCase() !== i.turbo) res = false;
                } else if (x === 'color') {
                    if (!filter.color.every(c => i.color.includes(c))) res = false;
                } else {
                    if (!filter[x].includes(i[x])) res = false;
                }
            });
            return res;
        }));
        sortList(sortBy);
    }, [filter, sortBy]);



    const changeFilter = (action: any) => {
        // Creates a temporary filter based on the current and applies the changes passed to the function
        let tempFilter = filter;
        if (action.type === 'add') {
            tempFilter[action.category].push(action.value);
        } else if (action.type === 'remove') {
            console.log(action.category);
            tempFilter[action.category] = tempFilter[action.category].filter((val: any) => val != action.value);
        } else if (action.type === 'slider') {
            tempFilter[action.category] = action.value;
        }

        // Sets the temporary filter to be the new filter
        setFilter(tempFilter);

        // Creates a new list of vehicles based on the new filter
        const newList = getFilteredVehicles();

        // Sets sites list of vehicles to be the new filtered list
        setfilteredList(newList);
        sortList(sortBy);
    }

    const changeSorting = (newSorter: string) => {
        setsortBy(newSorter);
        sortList(newSorter);
    }

    const sortList = (sorter: string) => {
        const fSorter = sorter.split(' ')[0].toLowerCase();
        setfilteredList(list => {
            switch (fSorter) {
                case 'mileage':
                    return list.toSorted((a, b) => a[fSorter] - b[fSorter]);

                case 'price':
                    return sorter === 'Price High to Low' ? list.toSorted((a, b) => b[fSorter] - a[fSorter]) : list.toSorted((a, b) => a[fSorter] - b[fSorter]);

                default:
                    return list.toSorted((a, b) => a[fSorter].localeCompare(b[fSorter]));
            }
        });
    }

    return (
        <div>
            <div className='pt-16'>
                <Banner image={banner_image} title='SHOWCASE' />
            </div>
            <div className='w-full flex'>
                <div className={`${filterOpen ? 'translate-x-0' : '-translate-x-72'} fixed transition-transform bg-white z-10 md:static md:bg-transparent md:translate-x-0 md:z-0`}>
                    <Filters filter={filter} setFilter={changeFilter} toggleFilter={() => setfilterOpen(!filterOpen)} />
                </div>
                <div className='grow flex flex-col'>
                    <SearchInfo filter={filter} sortBy={sortBy} vehicleCount={filteredList.length} setFilter={changeFilter} setSorting={changeSorting} toggleFilter={() => setfilterOpen(!filterOpen)} />
                    <div className='w-full grid grid-cols-1 gap-4 pt-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                        {filteredList.map((v, i) => (
                            <ShowcaseItem key={i} vehicle={v} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
