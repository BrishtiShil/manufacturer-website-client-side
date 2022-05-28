import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content ">
                <h2 className='text-3xl font-bold text-purple-500'>Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    <li><Link to="/dashboard">My Order</Link></li>
                    <li><Link to="/dashboard/review">Add a Review</Link></li>
                    <li><Link to="/dashboard/manageorder">Manage All Orders</Link></li>
                    <li><Link to="/dashboard/manageproduct">Manage Product</Link></li>
                    <li><Link to="/dashboard/makeadmin">Make Admin</Link></li>
                    <li><Link to="/dashboard/myprofile">My Profile</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;