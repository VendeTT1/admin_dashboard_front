import React from 'react'
import DashboardStatsGrid from '../components/DashboardStatsGrid'
import TransactionChart from '../components/TransactionChart'
import RecentOrders from '../components/order/RecentOrders'
import BuyerProfilePieChart from '../components/BuyerProfilePieChart'
import PopularProducts from '../components/product/PopularProducts'
import RecentUsers from '../components/customer/RecentUsers'


export default function Dashboard() {
    return (
        <div className="flex flex-col gap-4 p-4">
            <div className="flex flex-row gap-4 w-full">
                {/* Uncomment the following lines to use these components */}
                {/* <DashboardStatsGrid className="w-full" /> */}
            </div>
            <div className="flex flex-row gap-4 w-full">
                {/* Uncomment the following lines to use these components */}
                {/* <TransactionChart className="flex-1" /> */}
                {/* <BuyerProfilePieChart className="flex-1" /> */}
            </div>
            <div className="flex flex-row gap-4 w-full">
                <RecentOrders className="flex-1" />
                <PopularProducts className="flex-1" />
            </div>
            <div className="w-full">
                <RecentUsers />
            </div>
        </div>
    )
}