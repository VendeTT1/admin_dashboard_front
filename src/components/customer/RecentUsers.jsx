import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


export default function RecentUsers() {
    const [allUser, setUser] = useState([])

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
  
    return (
        <div className="w full bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
            <strong className="text-gray-700 font-medium">Recent Users</strong>
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
                         
                        </tr>
                    ))}
                </tbody>
            </table>
          
            {/* </div> */}
        </div>
    )
}
