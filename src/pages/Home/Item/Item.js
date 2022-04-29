import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Item = ({ item }) => {
    const { _id, name, price, quantity, img, description, supplierName } = item;
    const navigate = useNavigate();
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Card.Text>{price}</Card.Text>
                    <Card.Text>Supplier Name:  {supplierName}</Card.Text>
                    <Card.Text>Quantity:  {quantity}</Card.Text>
                    <Button onClick={()=>navigate(`/stockupdate/${_id}`)} className='w-100 py-2' variant="primary">Stock Update</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Item;