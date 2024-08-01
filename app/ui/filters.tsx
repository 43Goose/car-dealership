'use client';
import { filter } from '@/app/types';
import { formatTitle } from '@/app/utils';
import { vehicles } from '@/app/vehicles';
import React, { useState } from 'react';
import { Slider, Checkbox, ThemeProvider, TextField } from '@mui/material';
import { theme } from '@/app/themes';

export default function Filters({ filter, setFilter, toggleFilter }: { filter: filter; setFilter: Function; toggleFilter: Function }) {
    const options: filter = {
        manufacturer: [...new Set(vehicles.map(v => v.manufacturer))],
        class: [...new Set(vehicles.map(v => v.class))],
        color: ['black', 'white', 'blue', 'red', 'green', 'orange', 'yellow', 'sky', 'slate'],
        price: [Math.min(...[...new Set(vehicles.map(v => v.price))]), Math.max(...[...new Set(vehicles.map(v => v.price))])],
        engine: [...new Set(vehicles.map(v => v.engine.slice(v.engine.indexOf('L') + 1)))],
        transmission: ['Automatic', 'Manual', 'Auto/Manual'],
        turbo: ['Single', 'Twin', 'Quad', 'Supercharger', 'None'],
        hp: [Math.min(...[...new Set(vehicles.map(v => v.hp))]), Math.max(...[...new Set(vehicles.map(v => v.hp))])],
        rpm: [Math.min(...[...new Set(vehicles.map(v => v.rpm))]), Math.max(...[...new Set(vehicles.map(v => v.rpm))])],
        mileage: [Math.min(...[...new Set(vehicles.map(v => v.mileage))]), Math.max(...[...new Set(vehicles.map(v => v.mileage))])],
        top_speed: [Math.min(...[...new Set(vehicles.map(v => v.top_speed))]), Math.max(...[...new Set(vehicles.map(v => v.top_speed))])]
    }

    return (
        <div className='w-72 min-h-screen p-4 shadow-md cursor-pointer md:shadow-none md:mt-11'>
            <ThemeProvider theme={theme} >
                <div className='w-full flex justify-between'>
                    <h2 className='mb-4 text-sm'>FILTER BY</h2>
                    <span className="material-symbols-outlined text-sm px-3 md:hidden" onClick={() => toggleFilter()}>
                        close
                    </span>
                </div>
                {Object.keys(options).map(option => ['price', 'hp', 'rpm', 'mileage', 'top_speed'].includes(option.toLowerCase()) ?
                    (
                        <SliderFilter key={option} title={option} min={options[option][0]} max={options[option][1]} setFilter={setFilter} />
                    ) : (
                        <SelectFilter key={option} title={option} options={options[option]} filter={filter} setFilter={setFilter} />
                    ))
                }
            </ThemeProvider>
        </div>
    )
}

function Filter({ children, title }: { children: React.ReactNode; title: string }) {
    const [open, setopen] = useState(false);

    return (
        <div className='w-full border-t'>
            <h2 className='text-lg w-full m-2' onClick={() => setopen(!open)}>{formatTitle(title)}</h2>
            <div className={`${open ? 'max-h-screen' : 'max-h-0'} px-2 transition-[max-height] w-full overflow-hidden motion-reduce:transition-none`}>
                {children}
            </div>
        </div>
    )
}

function SelectFilter({ title, options, filter, setFilter }: { title: string; options: any; filter: filter; setFilter: Function; }) {
    const changeFilter = (option: string, setting: boolean) => {
        setFilter({ type: setting ? 'add' : 'remove', category: title, value: option })
    }

    const handleClick = (option: string, e: React.ChangeEvent<HTMLInputElement>) => {
        changeFilter(option, e.currentTarget.checked);
    }

    const isChecked = (name: string) => filter[title].includes(name);

    return (
        <Filter title={title}>
            <div className='w-full'>
                {options.map((option: string) => (
                    <div key={option} className='py-1 flex items-center'>
                        <Checkbox
                            disableRipple
                            color='primary'
                            onChange={(e) => handleClick(option, e)}
                            checked={isChecked(option)}
                        />
                        <h2>{option}</h2>
                    </div>
                ))}
            </div>
        </Filter>
    )
}

function SliderFilter({ title, min, max, setFilter }: { title: string; min: number; max: number; setFilter: Function }) {
    const [value, setvalue] = useState([0, 100]);
    const [numValues, setNumValues] = useState([min, max]);

    const getNumFromSlider = (sliderValue: number) => Math.floor(min + ((max - min) * (sliderValue / 100)));

    const getSliderFromNum = (num: number) => ((num - min) / (max - min)) * 100;

    const handleSliderChange = (event: Event, newValue: number | number[]) => {
        const valArr = newValue as number[];
        setvalue(newValue as number[]);
        setFilter({ type: 'slider', category: title, value: { min: getNumFromSlider(valArr[0]), max: getNumFromSlider(valArr[1]) } });
    }

    const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>, isMin: boolean) => {
        const num = Number(event.currentTarget.value);
        let sliderValue = 0;
        if (isMin) sliderValue = num < min ? getSliderFromNum(min) : getSliderFromNum(num);
        else sliderValue = num > max ? getSliderFromNum(max) : getSliderFromNum(num);

        const newNumValues = isMin ? [num, numValues[1]] : [numValues[0], num];
        const newValues = isMin ? [sliderValue, value[1]] : [value[0], sliderValue];
        const newFilter = isMin ? { min: event.currentTarget.value, max: getNumFromSlider(value[1]) } : { min: getNumFromSlider(value[0]), max: event.currentTarget.value }

        setNumValues(newNumValues);
        setvalue(newValues);
        setFilter({ type: 'slider', category: title, value: newFilter });
    }

    return (
        <Filter title={title}>
            <div className='w-full'>
                <div className='w-full py-2 flex justify-between'>
                    <TextField
                        label='Min'
                        size='small'
                        className='max-w-28'
                        type='number'
                        value={numValues[0]}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleNumberChange(e, true)}
                    />
                    <TextField
                        label='Max'
                        size='small'
                        className='max-w-28'
                        type='number'
                        value={numValues[1]}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleNumberChange(e, false)}
                    />
                </div>
                <div className='p-2'>
                    <Slider
                        getAriaLabel={() => `${title} range`}
                        value={value}
                        onChange={handleSliderChange}
                        valueLabelDisplay="off"
                        color='secondary'
                    />
                </div>
            </div>
        </Filter>
    )
}

function FilterCheckbox({ label, changeFilter }: { label: string; changeFilter: Function }) {
    const [checked, setchecked] = useState(false);

    const onChange = () => {
        changeFilter(label, !checked);
        setchecked(!checked);
    }

    return (
        <div className='flex'>

            <h2 className='ml-2'>{label}</h2>
        </div>
    )
}
