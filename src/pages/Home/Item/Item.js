import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Item = ({ item }) => {
    const { name, price, quantity, img, description, supplierName } = item;
    console.log(item);
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
                    <Button className='w-100 py-2' variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Item;