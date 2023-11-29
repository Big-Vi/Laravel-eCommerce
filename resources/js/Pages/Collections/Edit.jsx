import React, { useState } from 'react';
import { router } from '@inertiajs/react'
import { Link } from '@inertiajs/react'
import Layout from '@/Components/Layout'

export default function Edit({ collection }) {
    const [values, setValues] = useState({
        title: collection.data.title
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
        router.put(`/collections/${collection.data.id}`, values)
    }

    const destroy = (e) => {
        e.preventDefault()
        router.delete(`/collections/${collection.data.id}`)
    }

    return (
        <div className="max-w-md mx-auto mt-8 p-4">
            <Link href="/collections" className="text-blue-500 hover:underline mb-4 block">Go back</Link>
            
            <form onSubmit={handleSubmit} className="mb-4">
                <label htmlFor="title" className="block text-gray-700">Title</label>
                <input
                id="title"
                type="text"
                placeholder="Title"
                value={values.title}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
                
                <button
                type="submit"
                className="bg-black text-white px-4 py-2 mt-2 rounded-md hover:bg-blue-600"
                >
                Update
                </button>
            </form>
            
            <button
                onClick={destroy}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
            >
                Delete
            </button>
        </div>
    )
}

Edit.layout = page => <Layout children={page}/>
