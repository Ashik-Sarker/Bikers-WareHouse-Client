import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const StockUpdate = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [item, setItem] = useState({});
    // console.log(typeof(item.quantity)); string
    const quantityRef = useRef();
    // const quantity = quantityRef.current.value;

    useEffect(() => {
        fetch(`https://fast-plains-14687.herokuapp.com/item/${id}`)
            .then(res => res.json())
            .then(data => setItem(data))
    },[item])
    
    //Add quantity
    const quantityUpdateOperation = (q) => {
        const name = item.name;
        const email = item.email;
        const img = item.img;
        const supplierName = item.supplierName;
        const quantity = (parseInt(item.quantity) + parseInt(q)).toString();
        const price = item.price;
        const description = item.description;
        item.quantity = quantity;
        const updatedItem = {
            name,
            email,
            img,
            supplierName,
            quantity,
            price,
            description
        };
        //send data to the server
        fetch(`https://fast-plains-14687.herokuapp.com/item/${id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updatedItem)
            })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert('users updated successfully');  
            })
    }

    const decByOne = () => {
        const q = -1;
        quantityUpdateOperation(q)
    }
    const handleUpdateItem = event => {
        event.preventDefault();
        const q = quantityRef.current.value;
        quantityUpdateOperation(q);
        event.target.reset();
    }

    return (
        <div className="container">
            <div className="card my-5">
                <div className="row g-0">
                    <div className="col-md-6">
                    <img src={item.img} className="img-fluid h-100 rounded-start rounded" alt="..."/>
                    </div>
                    <div className="col-md-6 px-5">
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">Supplier Name: {item.supplierName}</p>
                            <p>Product ID: {item._id}</p>
                            
                            <p className="card-text">Email: {item.email}</p>
                            <p className="card-text">Prduct Quantity:  {item.quantity}</p>
                            <p className="card-text">Price: {item.price}</p>
                            <p className="card-text">{item.description}</p>
                            
                            <div>
                                <button onClick={decByOne} className='w-100 border-warning bg-primary text-light my-2 py-2 rounded'>Delivered</button><br />
                                <form onSubmit={handleUpdateItem}>
                                    <input ref={quantityRef} className='w-50 border-warning p-2 border-end-0 rounded-start' type="number" name="number" placeholder='Quantity' />
                                    <button type='submit' className='w-50 bg-primary text-light border-warning p-2 border-start-0 rounded-end'>Restock The Item</button><br />
                                </form>
                                <button onClick={()=>navigate('/inventories')} className='w-100 border-warning bg-success text-light my-2 py-2 rounded'>Manage Inventory</button>
                            </div>
                            
                        </div>
                    </div>
                    <p className="card-text bg-light p-3 text-center" > <small className="text-muted " > Last updated 3 mins ago
                    </small></p >
                </div>
            </div>
        </div>
    );
};

export default StockUpdate;