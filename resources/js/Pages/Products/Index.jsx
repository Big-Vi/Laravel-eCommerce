import React from 'react';
import { Link } from '@inertiajs/react'
import SearchFilter from '@/Components/SearchFilter'
import Layout from '@/Components/Layout'
import Pagination from '@/Components/Pagination';

export default function Index({ products }) {
    return (
        <div className="my-4">
            <SearchFilter />
             <Link href="/products/new" className="mt-4 bg-black text-white px-4 py-2 rounded-md inline-block">Add Product</Link>
            {products.data.map(product => (
                <div key={product.id} className="mt-2">
                <Link href={`/products/${product.id}/edit`} className="text-blue-500">
                    {product.title}
                </Link>
                </div>
            ))}
            <Pagination links={products.links}/>
        </div>
    )
}

Index.layout = page => <Layout children={page}/>
