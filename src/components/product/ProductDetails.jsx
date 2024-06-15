// import classNames from 'classnames';
// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios'; // Assuming you're using axios for HTTP requests

// const PopularProducts = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     // Fetch data from the server
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get('http://localhost:8080/product/all') // Replace with your API endpoint
//         setProducts(response.data);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchProducts();
//   }, []);


// const popularProducts = [
//     {
//         id: '3432',
//         product_name: 'Macbook M1 Pro 14"',
//         product_thumbnail:
//             'images.asos-media.com/products/levis-big-tall-501-original-straight-fit-jeans-in-blue/201030240-1-blue',
//         product_price: '$1499.00',
//         product_stock: 341
//     }
// ]

// // function PopularProducts() {
//     return (
//         <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
//             <strong className="text-gray-700 font-medium">Popular Products</strong>
//             <div className="border-x border-gray-200 rounded-sm mt-3">
//                 <table className="w-full text-gray-700">
//                     <thead>
//                         <tr>
//                             <th>ID</th>
//                             <th>Name</th>
//                             <th>Price</th>
//                             <th>Stock</th>
//                             <th>Brand Name</th>
//                             <th>Production Date</th>
//                             <th>Total Review Count</th>
//                             <th>Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {popularProducts.map((product) => (
//                             <tr key={product.id}>
//                                 <td>{product.id}</td>
//                                 <td>{product.product_name}</td>
//                                 <td>{product.product_price}</td>
//                                 <td>
//                                     <span
//                                         className={classNames(
//                                             product.product_stock === 0
//                                                 ? 'text-red-500'
//                                                 : product.product_stock > 50
//                                                 ? 'text-green-500'
//                                                 : 'text-orange-500',
//                                             'text-xs font-medium'
//                                         )}
//                                     >
//                                         {product.product_stock === 0
//                                             ? 'Out of Stock'
//                                             : product.product_stock + 'n Stock'}
//                                     </span>
//                                 </td>
//                                 <td>
//                                     brand name
//                                     {/* {product.totalreviewcount} */}
//                                 </td>
//                                 <td>production date</td>
//                                 <td>review count </td>
//                                 <td><button>click me !</button></td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     )
// }
// export default PopularProducts
// import classNames from 'classnames'
// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
// import axios from 'axios' // Assuming you're using axios for HTTP requests

// const PopularProducts = () => {
//     const [products, setProducts] = useState([])

//     useEffect(() => {
//         // Fetch data from the server
//         const fetchProducts = async () => {
//             try {
//                 const response = await axios.get('http://localhost:8080/product/all') // Replace with your API endpoint
//                 setProducts(response.data)
//             } catch (error) {
//                 console.error('Error fetching products:', error)
//             }
//         }

//         fetchProducts()
//     }, [])

//     return (
//         <div
//             className="w-full bg-white p-4 rounded-sm border border-gray-200 overflow-x-auto"
//             // style={{ marginLeft: '275px', padding: '20px', width: 'calc(100% - 275px)', height: '100vh' }}
//         >
//             <strong className="text-gray-700 font-medium">Popular Products</strong>
//             <table className="min-w-full mt-4 bg-white">
//                 <thead>
//                     <tr>
//                         <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600">
//                             ID
//                         </th>
//                         <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600">
//                             Name
//                         </th>
//                         <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600">
//                             Price
//                         </th>
//                         <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600">
//                             Stock
//                         </th>
//                         <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600">
//                             Brand Name
//                         </th>
//                         <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600">
//                             Production Date
//                         </th>
//                         <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600">
//                             Total Review Count
//                         </th>
//                         <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600">
//                             Action
//                         </th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {products.map((product) => (
//                         <tr key={product.id} className="hover:bg-gray-100">
//                             <td className="px-6 py-4 border-b border-gray-200">{product.id}</td>
//                             <td className="px-6 py-4 border-b border-gray-200">
//                                 <Link
//                                     to={`/product/${product.id}`}
//                                     className="text-sm text-gray-800 hover:no-underline"
//                                 >
//                                     {product.name}
//                                 </Link>
//                             </td>
//                             <td className="px-6 py-4 border-b border-gray-200">${product.price}</td>
//                             <td className="px-6 py-4 border-b border-gray-200">
//                                 <span
//                                     className={classNames(
//                                         product.isinstock ? 'text-green-500' : 'text-red-500',
//                                         'text-xs font-medium'
//                                     )}
//                                 >
//                                     {product.isinstock ? 'In Stock' : 'Out of Stock'}
//                                 </span>
//                             </td>
//                             <td className="px-6 py-4 border-b border-gray-200">{product.brandname}</td>
//                             <td className="px-6 py-4 border-b border-gray-200">
//                                 {new Date(product.productiondate).toLocaleDateString()}
//                             </td>
//                             <td className="px-6 py-4 border-b border-gray-200">{product.totalreviewcount}</td>
//                             <td>add buttons here after </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     )
// }

// export default PopularProducts
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import ReactPaginate from 'react-paginate'
import classNames from 'classnames'
import VisibilityIcon from '@mui/icons-material/Visibility'
import EditIcon from '@mui/icons-material/Edit'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'


const PopularProducts = () => {
    const [products, setProducts] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const [itemsPerPage, setItemsPerPage] = useState(10)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:8080/product/all')
                setProducts(response.data)
            } catch (error) {
                console.error('Error fetching products:', error)
            }
        }

        fetchProducts()
    }, [])

    const handlePageClick = (event) => {
        setCurrentPage(event.selected)
    }

    const handleItemsPerPageChange = (event) => {
        setItemsPerPage(Number(event.target.value))
        setCurrentPage(0) // Reset to first page when items per page changes
    }

    const offset = currentPage * itemsPerPage
    const currentProducts = products.slice(offset, offset + itemsPerPage)
    const pageCount = Math.ceil(products.length / itemsPerPage)

    return (
        <div className="w-full bg-white p-4 rounded-sm border border-gray-200 overflow-x-auto">
            <strong className="text-gray-700 font-medium">Products</strong>
            <div className="flex justify-between items-center mt-4">
                <label>
                    Items per page:
                    <select
                        value={itemsPerPage}
                        onChange={handleItemsPerPageChange}
                        className="ml-2 border rounded px-2 py-1"
                    >
                        <option value={10}>10</option>
                        <option value={25}>25</option>
                        <option value={50}>50</option>
                    </select>
                </label>
            </div>
            <table className="min-w-full mt-4 bg-white">
                <thead>
                    <tr>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600">
                            ID
                        </th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600">
                            Name
                        </th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600">
                            Price
                        </th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600">
                            Stock
                        </th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600">
                            Brand Name
                        </th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600">
                            Production Date
                        </th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600">
                            Total Review Count
                        </th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {currentProducts.map((product) => (
                        <tr key={product.id} className="hover:bg-gray-100">
                            <td className="px-6 py-4 border-b border-gray-200">{product.id}</td>
                            <td className="px-6 py-4 border-b border-gray-200">
                                <Link
                                    to={`/product/${product.id}`}
                                    className="text-sm text-gray-800 hover:no-underline"
                                >
                                    {product.name}
                                </Link>
                            </td>
                            <td className="px-6 py-4 border-b border-gray-200">{product.price}$</td>
                            <td className="px-6 py-4 border-b border-gray-200">
                                <span
                                    className={classNames(
                                        product.isinstock ? 'text-green-500' : 'text-red-500',
                                        'text-xs font-medium'
                                    )}
                                >
                                    {product.isinstock ? 'In Stock' : 'Out of Stock'}
                                </span>
                            </td>
                            <td className="px-6 py-4 border-b border-gray-200">{product.brandname}</td>
                            <td className="px-6 py-4 border-b border-gray-200">
                                {new Date(product.productiondate).toLocaleDateString()}
                            </td>
                            <td className="px-6 py-4 border-b border-gray-200">{product.totalreviewcount}</td>
                            <td>
                                <td className="flex space-x-2 justify-center items-center ">
                                    <button
                                        className="bg-blue-500 text-white text-sm px-0 py-0 rounded mx-1 hover:bg-blue-600 "
                                        // to={`/daret_view_admin/${darets.id}`}
                                    >
                                        <VisibilityIcon className="text-sm px-0 py-0" />
                                    </button>
                                    <button
                                        className="border border-blue-500 text-blue-500 text-sm px-0 py-0 rounded mx-1 hover:bg-blue-500 hover:text-white"
                                        // to={`/daret_edit/${darets.id}`}
                                    >
                                        <EditIcon className="text-sm px-0 py-0" />
                                    </button>
                                    <button
                                        className="bg-red-500 text-white text-sm  px-0 py-0 rounded mx-1 hover:bg-red-600"
                                        // onClick={() => deleteDaret(darets.id)}
                                    >
                                        <RemoveCircleOutlineIcon className="text-sm px-0 py-0" />
                                    </button>
                                </td>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <ReactPaginate
                previousLabel={'Previous'}
                nextLabel={'Next'}
                breakLabel={'...'}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName={'flex justify-center'}
                activeClassName={'bg-blue-500 bg-opacity-75'}
                pageClassName={'mx-1'}
                pageLinkClassName={'py-2 px-4 block text-blue-500'}
                previousClassName={'mx-1'}
                previousLinkClassName={'py-2 px-4 block text-blue-500'}
                nextClassName={'mx-1'}
                nextLinkClassName={'py-2 px-4 block text-blue-500'}
                breakClassName={'mx-1'}
                breakLinkClassName={'py-2 px-4 block text-blue-500'}
            />
        </div>
    )
}

export default PopularProducts
