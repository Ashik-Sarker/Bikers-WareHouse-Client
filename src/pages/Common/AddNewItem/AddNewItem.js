import React from 'react';

const AddNewItem = () => {

    const handleAddUser = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const img = event.target.img.value;
        const supplierName = event.target.supplierName.value;
        const quantity = event.target.quantity.value;
        const price = event.target.price.value;
        const description = event.target.description.value;

        const item = { name, email, img, supplierName, quantity, price, description };

        //send data to the server
        fetch('http://localhost:5000/item', {
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
            <h1 className='text-center'>Add New Items</h1>
            <form className='text-center' onSubmit={handleAddUser}>
                <input className='my-1 p-2 w-50' type="text" name="name" placeholder='name' required/><br />
                <input className='my-1 p-2 w-50' type="email" name="email" placeholder='email' required/><br />
                <input className='my-1 p-2 w-50' type="text" name="img" placeholder='image' required/><br />
                <input className='my-1 p-2 w-50' type="text" name="supplierName" placeholder='supplierName' required /><br />
                <input className='my-1 p-2 w-50' type="text" name="quantity" placeholder='quantity' required/><br />
                <input className='my-1 p-2 w-50' type="text" name="price" placeholder='price' required/><br />
                <input className='my-1 p-2 w-50' type="text" name="description" placeholder='description' required /><br />
                <input className='my-1 p-2 w-50 bg-primary text-light border-0 fs-5' type="submit" value="Create Item" />
            </form>
        </div>
    );
};

export default AddNewItem;