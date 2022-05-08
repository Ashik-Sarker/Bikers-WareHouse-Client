import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useItems from '../../hooks/useItems';
import { signOut } from 'firebase/auth';

const MyItems = () => {
    const [myItems, setMyItems] = useState([]);
    const [user] = useAuthState(auth);
    const email = user?.email;
    const [items, setItems] = useItems();
    const navigate = useNavigate();

    useEffect(() => {
        const getItem = async () => {
            const url = `https://fast-plains-14687.herokuapp.com/myItem?email=${email}`;
            try {
                const { data } = await axios.get(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            setMyItems(data)
            }
            catch(error) {
                console.log(error.message);
                if (error.response.status === 403 || error.response.status === 401) {
                    signOut(auth);
                    navigate('/login');
                }
            }
        }
        getItem();
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         setMyItems(data);
        //     })
    }, [user]);

    const handleUserDelete = id => {
        const proceed = window.confirm('are you sure you want to delete');
        if (proceed) {
            console.log('deleting user with id', id);
            const url = `https://fast-plains-14687.herokuapp.com/item/${id}`;
            fetch(url, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log('deleted');
                        const remaining = items.filter(item => item._id !== id);
                        const remainingMyItem = myItems.filter(item => item._id !== id);
                        setMyItems(remainingMyItem);
                        setItems(remaining);
                    }
                })
        }
    }
    
    return (
        <div className='w-75 mx-auto'>
            <h1 className='text-center mt-5'>My Items ({myItems.length})</h1>
            <div className="row row-cols-1 row-cols-md-3 g-3 mt-4">
                {
                    myItems.map(item => 
                        <div className="col" key={item._id}>
                            <div className="card h-100">
                            <img src={item.img} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p>Supplier: {item.supplierName}</p>
                                <p>Product ID: {item._id}</p>
                                <p>Quantity: {item.quantity}</p>
                                <p>Price: ${item.price}</p>
                                <p className="card-text">{item.description}</p>
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

export default MyItems;