import React from 'react';
import { Link } from '@inertiajs/react'

export default function Index({products}) {
    return (
        <div className="">
            {products.map(product =>
                <div key={product.id}>
                    <Link href={`/products/${product.id}/edit`}>{product.title}</Link>
                </div>
            )}
            <Link href="/products/new">Add product</Link>
        </div>
    )
}
