import classNames from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'

const popularProducts = [
    {
        id: '3432',
        product_name: 'Macbook M1 Pro 14"',
        product_thumbnail:
            'images.asos-media.com/products/levis-big-tall-501-original-straight-fit-jeans-in-blue/201030240-1-blue',
        product_price: '$1499.00',
        product_stock: 341
    },
    {
        id: '7633',
        product_name: 'Samsung Galaxy Buds 2',
        product_thumbnail: 'https://source.unsplash.com/100x100?earbuds',
        product_price: '$399.00',
        product_stock: 24
    },
    {
        id: '6534',
        product_name: 'Asus Zenbook Pro',
        product_thumbnail: 'https://source.unsplash.com/100x100?laptop',
        product_price: '$899.00',
        product_stock: 56
    },
    {
        id: '9234',
        product_name: 'LG Flex Canvas',
        product_thumbnail: 'https://source.unsplash.com/100x100?smartphone',
        product_price: '$499.00',
        product_stock: 98
    },
    {
        id: '4314',
        product_name: 'Apple Magic Touchpad',
        product_thumbnail: 'https://source.unsplash.com/100x100?touchpad',
        product_price: '$699.00',
        product_stock: 0
    },
    {
        id: '4342',
        product_name: 'Nothing Earbuds One',
        product_thumbnail: 'https://source.unsplash.com/100x100?earphone',
        product_price: '$399.00',
        product_stock: 453
    }
]

// function PopularProducts() {
// 	return (
// 		<div className="w-[20rem] bg-white p-4 rounded-sm border border-gray-200">
// 			<strong className="text-gray-700 font-medium">Popular Products</strong>
// 			<div className="mt-4 flex flex-col gap-3">
// 				{popularProducts.map((product) => (
// 					<Link
// 						key={product.id}
// 						to={`/product/${product.id}`}
// 						className="flex items-start hover:no-underline"
// 					>
// 						<div className="w-10 h-10 min-w-[2.5rem] bg-gray-200 rounded-sm">
// 							<img
// 								className="w-full h-full object-cover rounded-sm"
// 								src={product.product_thumbnail}
// 								alt={product.product_name}
// 							/>
// 						</div>
// 						<div className="ml-4 flex-1">
// 							<p className="text-sm text-gray-800">{product.product_name}</p>
// 							<span
// 								className={classNames(
// 									product.product_stock === 0
// 										? 'text-red-500'
// 										: product.product_stock > 50
// 										? 'text-green-500'
// 										: 'text-orange-500',
// 									'text-xs font-medium'
// 								)}
// 							>
// 								{product.product_stock === 0 ? 'Out of Stock' : product.product_stock + ' in Stock'}
// 							</span>
// 						</div>
// 						<div className="text-xs text-gray-400 pl-1.5">{product.product_price}</div>
// 					</Link>
// 				))}
// 			</div>
// 		</div>
// 	)
// }
function PopularProducts() {
    return (
        <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1 ">
            <strong className="text-gray-700 font-medium">Popular Products</strong>
            <div className="border-x border-gray-200 rounded-sm mt-3">
                <table className="w-full text-gray-700">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Stock</th>
                        </tr>
                    </thead>
                    <tbody>
                        {popularProducts.map((product) => (
                            <tr key={product.id}>
                                <td>
                                    <Link to={`/product/${product.id}`}>
                                        {/* <img
                                            src={product.product_thumbnail}
                                            alt={product.product_name}
                                            className="w-10 h-10 rounded-sm"
                                        /> */}
                                        <span className="ml-2">{product.product_name}</span>
                                    </Link>
                                </td>
                                <td>{product.product_price}</td>
                                <td>
                                    <span
                                        className={classNames(
                                            product.product_stock === 0
                                                ? 'text-red-500'
                                                : product.product_stock > 50
                                                ? 'text-green-500'
                                                : 'text-orange-500',
                                            'text-xs font-medium'
                                        )}
                                    >
                                        {product.product_stock === 0
                                            ? 'Out of Stock'
                                            : product.product_stock + 'n Stock'}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default PopularProducts
