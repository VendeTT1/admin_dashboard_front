import React from 'react'
import UsersDetails from '../components/customer/UsersDetails'

export default function Users() {
    return (
        <>
            <div>Users</div>
            <div className="flex flex-row gap-4 w-full">
                <UsersDetails />
            </div>
        </>
    )
}
