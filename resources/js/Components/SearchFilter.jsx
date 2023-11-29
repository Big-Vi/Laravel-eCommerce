import React, { useState, useEffect, useRef } from 'react';
import { router } from '@inertiajs/react'
import usePrevious from '@/Hooks/usePrevious';

export default function SearchFilter() {
    const [values, setValues] = useState({
        search: ''
    })

    const prevValues = usePrevious(values);

    const handleChange = (e) => {
        const key = e.target.id;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }

    useEffect(() => {
        let filteredValues = Object.fromEntries(
            Object.entries(values).filter(([_, value]) => value != null && value != undefined && value != '')
        )

        const query = Object.keys(filteredValues).length ? filteredValues : ''

        router.get(route(route().current()), query, {
            replace: true,
            preserveState: true
        });
    }, [values, prevValues]);

    return (
        <div>
            <input
                className=""
                id="search"
                autoComplete="off"
                type="text"
                name="search"
                value={values.search}
                onChange={handleChange}
                placeholder="Search"
            />
        </div>
    )
}