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
        <div className="">
            <Link href="/products">Go back</Link>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input id="title" type="text" placeholder="Title" value={values.title} onChange={handleChange}/>
                </div>

                <div>
                    <label htmlFor="collectionsSelected">Select collections:</label>
                    <select id="collectionsSelected" name="collectionsSelected" onChange={handleSelectChange} multiple>
                        {collections.data.map(collection => 
                            <option value={collection.id} key={collection.id}>{collection.title}</option>
                        )}
                    </select>
                </div>

                <button type="submit">Submit</button>
            </form>

        </div>
    )
}

Create.layout = page => <Layout children={page}/>
