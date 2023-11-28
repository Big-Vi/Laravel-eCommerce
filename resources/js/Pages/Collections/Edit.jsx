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
        <div className="">
            <Link href="/collections">Go back</Link>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input id="title" type="text" placeholder="Title" value={values.title} onChange={handleChange}/>
                <button type="submit">Update</button>
            </form>
            <button onClick={destroy}>Delete</button>
        </div>
    )
}

Edit.layout = page => <Layout children={page}/>
