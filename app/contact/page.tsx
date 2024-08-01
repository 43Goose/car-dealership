'use client';
import { Button, TextField, ThemeProvider } from '@mui/material'
import React, { useState } from 'react'
import { theme } from '../themes'
import { useRouter } from 'next/navigation';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [validInputs, setValidInputs] = useState<{ [key: string]: boolean }>({
        name: true,
        email: true,
        phone: true
    });
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData({
            ...formData, [id]: value
        });
    }

    const handleSubmit = () => {
        if (checkValidity()) {
            router.refresh();
            alert('Form submitted!');
        } else {
            alert('Invalid form!');
        }
    }

    const checkValidity = () => {
        const validity: { [key: string]: boolean } = {
            name: formData.name.match(/^[a-zA-Z]+(?:\s[a-zA-Z]+)+$/) !== null && formData.name.length > 0,
            email: formData.email.match(/^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/) !== null && formData.email.length > 0,
            phone: formData.phone.length === 0 || formData.phone.match(/(?:([+]\d{1,4})[-.\s]?)?(?:[(](\d{1,3})[)][-.\s]?)?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})/g) !== null
        };

        setValidInputs(validity);

        return Object.keys(validity).filter(x => validity[x]).length === 3;
    }

    return (
        <main className='min-h-[calc(100vh_-_96px)] pt-16'>
            <ThemeProvider theme={theme}>
                <div className='max-w-80 flex flex-col items-center px-8 py-4 mt-20 mx-auto bg-gray-100 rounded-xl shadow-md shadow-gray-300 md:mt-40 md:px-16 md:max-w-md'>
                    <h1 className='text-2xl font-bold text-red-500 mb-4'>CONTACT</h1>
                    <TextField size='small' label='Full Name' id='name' onChange={handleChange} error={!validInputs.name} fullWidth required className='my-3' />
                    <TextField size='small' label='Email' id='email' onChange={handleChange} error={!validInputs.email} fullWidth required className='my-3' />
                    <TextField size='small' label='Phone #' id='phone' onChange={handleChange} error={!validInputs.phone} fullWidth className='my-3' />
                    <TextField size='small' label='Message' id='message' onChange={handleChange} fullWidth multiline minRows={3} className='my-3' />
                    <Button variant='contained' color='secondary' onClick={handleSubmit} className='w-40 my-3'>SUBMIT</Button>
                </div>
            </ThemeProvider>
        </main>
    )
}
