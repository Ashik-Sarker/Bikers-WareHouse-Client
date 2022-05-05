import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useItems from '../../hooks/useItems';

const MyItems = () => {
    const [myItems, setMyItems] = useState([]);
    const [user] = useAuthState(auth);
    const email = user?.email;
    const [items, setItems] = useItems();

    useEffect(() => {
        const url = `http://localhost:5000/myItem?email=${email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMyItems(data);
            })
    }, [user]);

    const handleUserDelete = id => {
        const proceed = window.confirm('are you sure you want to delete');
        if (proceed) {
            console.log('deleting user with id', id);
            const url = `http://localhost:5000/item/${id}`;
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
            <h1 className='text-center mt-4'>My Items{myItems.length}</h1>
            <div class="row row-cols-2 row-cols-md-4 g-3 mt-4">
                {
                    myItems.map(item => 
                        <div class="col">
                            <div class="card">
                            <img src={item.img} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">{item.name}</h5>
                                <p>{item.supplierName}</p>
                                <p>{item.quantity}</p>
                                <p>{item.price}</p>
                                <p class="card-text">{item.description}</p>
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