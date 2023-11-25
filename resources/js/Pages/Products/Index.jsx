import React from 'react';

export default function Index({products}) {
    return (
        <div className="">
            {products.map(product =>
                <div key={product.id}>
                    <p>{product.id}</p>
                    <p>{product.title}</p>
                </div>
            )}
        </div>
    )
}
