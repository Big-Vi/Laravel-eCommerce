import React from 'react';
import { Link } from '@inertiajs/react'
import SearchFilter from '@/Components/SearchFilter'
import Layout from '@/Components/Layout'
import Pagination from '@/Components/Pagination';

export default function Index({ products }) {
    return (
        <div className="">
            <SearchFilter />
            <Link href="/products/new">Add product</Link>
            {products.data.map(product =>
                <div key={product.id}>
                    <Link href={`/products/${product.id}/edit`}>{product.title}</Link>
                </div>
            )}
            <Pagination links={products.links}/>
        </div>
    )
}

Index.layout = page => <Layout children={page}/>
