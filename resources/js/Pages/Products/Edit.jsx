import React, { useState } from 'react';
import { router } from '@inertiajs/react'
import { Link } from '@inertiajs/react'
import Layout from '@/Components/Layout'

export default function Edit({ product, collections, collectionsSelected }) {
    const [values, setValues] = useState({
        title: product.data.title,
        collectionsSelected: collectionsSelected.data.map(collection => collection.id),
    })

    const handleChange = (e) => {
        const key = e.target.id;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        router.put(`/products/${product.data.id}`, values);
    }

    const destroy = (e) => {
        e.preventDefault();
        router.delete(`/products/${product.data.id}`);
    }

    const handleSelectChange = (e) => {
        const key = e.target.id;
        const selectedOptions = Array.from(e.target.selectedOptions, (option) => parseInt(option.value));
        setValues((values) => ({
            ...values,
            [key]: selectedOptions,
        }));
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
                    <option value="" className="">Select collections</option>
                    {collections.data.map((collection) => (
                    <option
                        value={collection.id}
                        key={collection.id}
                        style={{
                            fontWeight: values.collectionsSelected.includes(collection.id) ? 'bold' : 'normal',
                        }}
                    >
                        {collection.title}
                    </option>
                    ))}
                </select>
                </div>

                <button
                type="submit"
                className="bg-black text-white px-4 py-2 rounded-md hover:bg-blue-600 mr-2 mb-2"
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
    );
}

Edit.layout = page => <Layout children={page}/>
