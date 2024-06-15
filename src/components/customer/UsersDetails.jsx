import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate'
import { Link } from 'react-router-dom'
import VisibilityIcon from '@mui/icons-material/Visibility'
import EditIcon from '@mui/icons-material/Edit'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'

export default function UsersDetails() {
    const [allUser, setUser] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const [itemsPerPage, setItemsPerPage] = useState(10)
    useEffect(() => {
        const fetchuser = async () => {
            try {
                const response = await axios.get('http://localhost:8080/user/all') // Replace with your API endpoint
                setUser(response.data) // Assuming response.data is an array of recent orders
            } catch (error) {
                console.error('Error fetching users:', error)
            }
        }

        fetchuser()
    }, []) // Empty dependency array ensures useEffect runs only once on mount
    const handlePageClick = (event) => {
        setCurrentPage(event.selected)
    }

    const handleItemsPerPageChange = (event) => {
        setItemsPerPage(Number(event.target.value))
        setCurrentPage(0) // Reset to first page when items per page changes
    }

    const offset = currentPage * itemsPerPage
    const currentuser = allUser.slice(offset, offset + itemsPerPage)
    const pageCount = Math.ceil(allUser.length / itemsPerPage)

    return (
        <div className="w full bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
            <strong className="text-gray-700 font-medium">Users</strong>

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
                            User ID
                        </th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600">
                            Name
                        </th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600">
                            Last Name
                        </th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600">
                            E-mail
                        </th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600">
                            Phone
                        </th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600">
                            Address
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
                    {allUser.map((user) => (
                        <tr key={user.id} className="hover:bg-gray-100">
                            <td className="px-6 py-4 border-b border-gray-200">{user.id}</td>
                            <td className="px-6 py-4 border-b border-gray-200">{user.name}</td>
                            <td className="px-6 py-4 border-b border-gray-200">{user.lastname}</td>{' '}
                            {/* Assuming userId is available */}
                            <td className="px-6 py-4 border-b border-gray-200">{user.email}</td>
                            <td className="px-6 py-4 border-b border-gray-200">{user.phone}</td>
                            <td className="px-6 py-4 border-b border-gray-200">{user.address}</td>
                            <td className="px-6 py-4 border-b border-gray-200">ii'll see</td>
                            <td>
                                <td className="flex space-x-2 justify-center items-center ">
                                        
                                        <button className="bg-blue-500 text-white text-sm px-0 py-0 rounded mx-1 hover:bg-blue-600 ">
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
