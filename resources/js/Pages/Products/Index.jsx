import React from 'react';
import { Link } from '@inertiajs/react'
import SearchFilter from '@/Components/SearchFilter'

export default function Index({products}) {
    return (
        <div className="">
            <SearchFilter />
            <Link href="/products/new">Add product</Link>
            {products.data.map(product =>
                <div key={product.id}>
                    <Link href={`/products/${product.id}/edit`}>{product.title}</Link>
                </div>
            )}
            {products.links.length > 3 ?
                <nav>
                    <ul className="pagination">
                        {products.links.map(({active, label, url}) => {
                            return (
                                <li key={label} className={active ? 'active' : ''}>
                                    <a href={url}><span dangerouslySetInnerHTML={{ __html: label }}></span></a>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
                :
                null
            }
        </div>
    )
}
