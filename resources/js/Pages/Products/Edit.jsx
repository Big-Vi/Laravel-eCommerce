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
        <div className="">
            <Link href="/products">Go back</Link>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input id="title" type="text" placeholder="Title" value={values.title} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="collectionsSelected">Select collections:</label>
                    <select
                        id="collectionsSelected"
                        name="collectionsSelected"
                        onChange={handleSelectChange}
                        multiple
                    >
                        <option value="">Select collections</option>
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
                <button type="submit">Update</button>
            </form>
            <button onClick={destroy}>Delete</button>
        </div>
    );
}

Edit.layout = page => <Layout children={page}/>
