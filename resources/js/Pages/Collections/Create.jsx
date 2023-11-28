import React, { useState } from 'react';
import { router } from '@inertiajs/react'
import { Link } from '@inertiajs/react'
import Layout from '@/Components/Layout'

export default function Create() {
    const [values, setValues] = useState({
        title: ""
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
        router.post('/collections', values)
    }

    return (
        <div className="">
            <Link href="/collections">Go back</Link>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input id="title" type="text" placeholder="Title" value={values.title} onChange={handleChange}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

Create.layout = page => <Layout children={page}/>
