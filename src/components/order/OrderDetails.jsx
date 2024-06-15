// import React from 'react'
// import { format } from 'date-fns'
// import { Link } from 'react-router-dom'
// import { getOrderStatus } from '../lib/helpers'



// export default function RecentOrders() {
//     return (
//         <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
//             <strong className="text-gray-700 font-medium">Recent Orders</strong>
//             <div className="border-x border-gray-200 rounded-sm mt-3">
//                 <table className="w-full text-gray-700">
//                     <thead>
//                         <tr>
//                             <th>ID</th>
//                             <th>Product ID</th>
//                             <th>Customer Name</th>
//                             <th>Order Date</th>
//                             <th>Order Total</th>
//                             <th>Shipping Address</th>
//                             <th>Order Status</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {recentOrderData.map((order) => (
//                             <tr key={order.id}>
//                                 <td>
//                                     <Link to={`/order/${order.id}`}>#{order.id}</Link>
//                                 </td>
//                                 <td>
//                                     <Link to={`/product/${order.product_id}`}>#{order.product_id}</Link>
//                                 </td>
//                                 <td>
//                                     <Link to={`/customer/${order.customer_id}`}>{order.customer_name}</Link>
//                                 </td>
//                                 <td>{format(new Date(order.order_date), 'dd MMM yyyy')}</td>
//                                 <td>{order.order_total}</td>
//                                 <td>{order.shipment_address}</td>
//                                 <td>{getOrderStatus(order.current_order_status)}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     )
// }
// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// import { format } from 'date-fns'
// import { Link } from 'react-router-dom'
// import { getOrderStatus } from '../lib/helpers'

// export default function OrderDetails() {
//     const [recentOrders, setRecentOrders] = useState([])

//     useEffect(() => {
//         const fetchRecentOrders = async () => {
//             try {
//                 const response = await axios.get('http://localhost:8080/orders/all') // Replace with your API endpoint
//                 setRecentOrders(response.data) // Assuming response.data is an array of recent orders
//             } catch (error) {
//                 console.error('Error fetching recent orders:', error)
//             }
//         }

//         fetchRecentOrders()
//     }, []) // Empty dependency array ensures useEffect runs only once on mount

//     return (
//         <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
//             <strong className="text-gray-700 font-medium">Recent Orders</strong>
//             <div className="border-x border-gray-200 rounded-sm mt-3">
//                 <table className="w-full text-gray-700">
//                     <thead>
//                         <tr>
//                             <th>ID</th>
//                             <th>Product ID</th>
//                             <th>Customer Name</th>
//                             <th>Order Date</th>
//                             <th>Order Total</th>
//                             <th>Shipping Address</th>
//                             <th>Order Status</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {recentOrders.map((order) => (
//                             <tr key={order.id}>
//                                 <td>
//                                     <Link to={`/order/${order.id}`}>#{order.id}</Link>
//                                 </td>
//                                 <td>
//                                     <Link to={`/product/${order.product_id}`}>#{order.product_id}</Link>
//                                 </td>
//                                 <td>
//                                     <Link to={`/customer/${order.customer_id}`}>{order.customer_name}</Link>
//                                 </td>
//                                 <td>{format(new Date(order.order_date), 'dd MMM yyyy')}</td>
//                                 <td>{order.order_total}</td>
//                                 <td>{order.shipment_address}</td>
//                                 <td>{getOrderStatus(order.current_order_status)}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     )
// }
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate'
import VisibilityIcon from '@mui/icons-material/Visibility'
import EditIcon from '@mui/icons-material/Edit'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'
import { getOrderStatus } from '../../lib/helpers'


export default function RecentOrders() {
    const [recentOrders, setRecentOrders] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const [itemsPerPage, setItemsPerPage] = useState(10)
    useEffect(() => {
        const fetchRecentOrders = async () => {
            try {
                const response = await axios.get('http://localhost:8080/orders/all') // Replace with your API endpoint
                setRecentOrders(response.data) // Assuming response.data is an array of recent orders
            } catch (error) {
                console.error('Error fetching recent orders:', error)
            }
        }

        fetchRecentOrders()
    }, []) // Empty dependency array ensures useEffect runs only once on mount
    const handlePageClick = (event) => {
        setCurrentPage(event.selected)
    }

    const handleItemsPerPageChange = (event) => {
        setItemsPerPage(Number(event.target.value))
        setCurrentPage(0) // Reset to first page when items per page changes
    }

    const offset = currentPage * itemsPerPage
    const currentOrder = recentOrders.slice(offset, offset + itemsPerPage)
    const pageCount = Math.ceil(recentOrders.length / itemsPerPage)

    return (
        <div className="w full bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
            <strong className="text-gray-700 font-medium">Orders</strong>
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
            {/* <div className="border-x border-gray-200 rounded-sm mt-3"> */}
            <table className="min-w-full mt-4 bg-white">
                <thead>
                    <tr>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600">
                            Order ID
                        </th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600">
                            Subtotal
                        </th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600">
                            User ID
                        </th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600">
                            Product ID
                        </th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600">
                            Amount
                        </th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600">
                            Selected Size
                        </th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600">
                            Order Status
                        </th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {recentOrders.map((order) => (
                        <tr key={order.id} className="hover:bg-gray-100">
                            <td className="px-6 py-4 border-b border-gray-200">{order.id}</td>
                            <td className="px-6 py-4 border-b border-gray-200">{order.subtotal}</td>
                            <td className="px-6 py-4 border-b border-gray-200">{order.userId}</td>{' '}
                            {/* Assuming userId is available */}
                            <td className="px-6 py-4 border-b border-gray-200">{order.cartItem[0].productId}</td>
                            <td className="px-6 py-4 border-b border-gray-200">{order.cartItem[0].amount}</td>
                            <td className="px-6 py-4 border-b border-gray-200">{order.cartItem[0].selectedsize}</td>
                            {/* <td className="px-6 py-4 border-b border-gray-200">{order.orderstatus}</td> */}
                            <td className="px-6 py-4 border-b border-gray-200">{getOrderStatus(order.orderstatus)}</td>
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
            {/* </div> */}
        </div>
    )
}
