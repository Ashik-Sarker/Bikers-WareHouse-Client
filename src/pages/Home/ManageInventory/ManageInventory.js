import React from 'react';
import logo from '../../../images/logo/logo.png'

const ManageInventory = () => {
    return (
        <div className = 'bg-light my-5 py-4 App'>
            <div className=''>
                <img  style={{width:"200px"}} src={logo} alt="" />
                <h2 style={{letterSpacing:"10px"}} className='fw-bold '>WHERE ALL RIDERS BELONG</h2>
                <p>Things are better as a member. Get first and exclusive access to the newest styles and innovations, birthday rewards, points for purchases and more.</p>
                <button className='px-5 py-2 fs-3 rounded border-0 bg-primary text-light'>Manage Inventory</button>
            </div>
        </div>
    );
};

export default ManageInventory;