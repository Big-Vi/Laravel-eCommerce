import React from 'react';
import { Link } from '@inertiajs/react'
import SearchFilter from '@/Components/SearchFilter'
import Layout from '@/Components/Layout'
import Pagination from '@/Components/Pagination';

export default function Index({ collections }) {
    return (
        <div className="">
            <SearchFilter />
            <Link href="/collections/new">Add collection</Link>
            {collections.data.map(collection =>
                <div key={collection.id}>
                    <Link href={`/collections/${collection.id}/edit`}>{collection.title}</Link>
                </div>
            )}
            <Pagination links={collections.links}/>
        </div>
    )
}

Index.layout = page => <Layout children={page}/>
