import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Inventories = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/item')
            .then(res => res.json())
            .then(data => setItems(data))
    },[])
    const navigate = useNavigate();

    const handleUserDelete = id => {
        const proceed = window.confirm('are you sure you want to delete');
        if (proceed) {
            console.log('deleting user with id', id);
            const url = `http://localhost:5000/item/${id}`
            fetch(url, {
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    console.log('deleted');
                    const remaining = items.filter(item => item._id !== id);
                    setItems(remaining);
                }
            })
        }
    }
    return (
        <div className='App'>
            <h1>Manage Inventory</h1>
            <h3>Items total: {items.length}</h3>
            <button className='my-5 w-25 border-0 bg-primary text-light p-2 fs-5' onClick={() => navigate('/addItem')}>Add New Item</button>
            <div className=" w-75 mx-auto row row-cols-4 row-cols-md-5 g-3">
                {
                    items.map(item => 
                          <div key={item._id} className="col">
                            <div className="card h-100">
                            <img src={item.img} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <p className="card-title">{item.name}</p>
                                <h5 className="card-title">{item.price}</h5>
                                <h5 className="card-title">{item.quantity}</h5>
                                <button 
                                onClick={()=>handleUserDelete(item._id)}
                                className='w-100 border-0 p-1 bg-success text-light fs-5'>delete Item</button>
                            </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Inventories;