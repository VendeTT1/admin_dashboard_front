import React from 'react'
import RecentOrders from '../components/order/RecentOrders'
import OrderDetails from '../components/order/OrderDetails';

export default function Orders() {
    return (
        <>
            <div>Orders</div>
            <div className="flex flex-row gap-4 w-full">
                {/* <RecentOrders /> */}
                <OrderDetails/>
            </div>
        </>
    )
}
