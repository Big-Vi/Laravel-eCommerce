import React from 'react';
import { Link } from '@inertiajs/react'
import SearchFilter from '@/Components/SearchFilter'
import Layout from '@/Components/Layout'
import Pagination from '@/Components/Pagination';

export default function Index({ collections }) {
    return (
        <div className="">
            <SearchFilter />
            <Link className='mt-4 bg-black text-white px-4 py-2 rounded-md inline-block' href="/collections/new">Add collection</Link>
            {collections.data.map(collection =>
                <div key={collection.id} className="mt-2">
                    <Link href={`/collections/${collection.id}/edit`} className="text-blue-500">{collection.title}</Link>
                </div>
            )}
            <Pagination links={collections.links}/>
        </div>
    )
}

Index.layout = page => <Layout children={page}/>
