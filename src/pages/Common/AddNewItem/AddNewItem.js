import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const AddNewItem = () => {
    const [user] = useAuthState(auth);

    const handleAddItem = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const img = event.target.img.value;
        const supplierName = event.target.supplierName.value;
        const quantity = event.target.quantity.value;
        const price = event.target.price.value;
        const description = event.target.description.value;

        const item = { name, email, img, supplierName, quantity, price, description };
        console.log(item);

        //send data to the server
        fetch('https://fast-plains-14687.herokuapp.com/item', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert('users added successfully');
                event.target.reset();
        })
    }
    return (
        <div>
            <h1 className='text-center my-4'>Add New Items</h1>
            <form className='text-center' onSubmit={handleAddItem}>
                <input className='my-1 p-2 w-50' type="text" name="name" placeholder='Enter your Item Name' required/><br />
                <input className='my-1 p-2 w-50' type="email" name="email" value={user.email} placeholder='email' required readOnly/><br />
                <input className='my-1 p-2 w-50' type="text" name="img" placeholder='Enter Your Image URL' required/><br />
                <input className='my-1 p-2 w-50' type="text" name="supplierName" placeholder='Enter SupplierName' required /><br />
                <input className='my-1 p-2 w-50' type="text" name="quantity" placeholder='Add Quantity' required/><br />
                <input className='my-1 p-2 w-50' type="text" name="price" placeholder='Add Price' required/><br />
                {/* <input className='my-1 p-2 w-50' type="text" name="description" placeholder='Add Item Descriptions' required /><br /> */}
                <textarea className='my-1 p-2 w-50' name="description" rows="5" cols="30" placeholder='Add Item Descriptions' required></textarea> <br />
                <input className='my-1 p-2 w-50 bg-primary text-light border-0 fs-5' type="submit" value="Create Item" />
            </form>
        </div>
    );
};

export default AddNewItem;