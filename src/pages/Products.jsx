import React from 'react'
import ProductDetails from '../components/product/ProductDetails'

export default function Products() {
    return (
        <>
            <div>Products page</div>
            <div className="flex flex-row gap-4 w-full">
                <ProductDetails />
            </div>
        </>
    )
}
