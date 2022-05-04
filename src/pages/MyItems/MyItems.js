import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItems = () => {
    const [items, setItems] = useState([]);
    const [user] = useAuthState(auth);
    const email = user?.email;

    useEffect(() => {
        const url = `http://localhost:5000/myItem?email=${email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setItems(data);
            })
    }, [user]);
    
    return (
        <div className='w-75 mx-auto'>
            <h1 className='text-center mt-4'>My Items{items.length}</h1>
            <div class="row row-cols-2 row-cols-md-4 g-3 mt-4">
                {
                    items.map(item => 
                        <div class="col">
                            <div class="card">
                            <img src={item.img} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">{item.name}</h5>
                                <p>{item.supplierName}</p>
                                <p>{item.quantity}</p>
                                <p>{item.price}</p>
                                    <p class="card-text">{item.description}</p>
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