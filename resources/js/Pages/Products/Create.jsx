import React, { useState } from 'react';
import { router } from '@inertiajs/react'
import { Link } from '@inertiajs/react'
import Layout from '@/Components/Layout'

export default function Create({ collections }) {
    const [values, setValues] = useState({
        title: "",
        collectionsSelected: []
    })

    const handleChange = (e) => {
        const key = e.target.id;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        router.post('/products', values)
    }

    const handleSelectChange = (e) => {
        const key = e.target.id;
        const selectedOptions = Array.from(e.target.selectedOptions, option => parseInt(option.value))
        setValues(values => ({
            ...values,
            [key]: selectedOptions,
        }))
    }

    return (
        <div className="max-w-md mx-auto mt-8 p-4">
            <Link href="/products" className="text-blue-500 hover:underline mb-4 block">Go back</Link>
            
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                <label htmlFor="title" className="block text-gray-700 mb-1">Title</label>
                <input
                    id="title"
                    type="text"
                    placeholder="Title"
                    value={values.title}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
                </div>

                <div className="mb-4">
                <label htmlFor="collectionsSelected" className="block text-gray-700 mb-1">Select collections:</label>
                <select
                    id="collectionsSelected"
                    name="collectionsSelected"
                    onChange={handleSelectChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    multiple
                >
                    {collections.data.map(collection => (
                    <option value={collection.id} key={collection.id}>{collection.title}</option>
                    ))}
                </select>
                </div>

                <button
                type="submit"
                className="bg-black text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                Submit
                </button>
            </form>
        </div>
    )
}

Create.layout = page => <Layout children={page}/>
