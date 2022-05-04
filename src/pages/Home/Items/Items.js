import { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Item from '../Item/Item';

const Items = () => {
    const [items,setItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/mostPopularItem')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div className='mt-5'>
            <Container>
            <h1 style={{letterSpacing:"6px"}} className='mb-5 text-primary text-center'>MOST POPULAR ITEMS</h1>
            <Row xs={1} md={3} className="g-4">
                {
                    items.map(item => <Item
                        key={item._id}
                        item={item}
                    ></Item>)
                }
            </Row>
            </Container>
        </div>
    );
};

export default Items;