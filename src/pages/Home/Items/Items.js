import { Container, Row } from 'react-bootstrap';
import useItems from '../../../hooks/useItems';
import Item from '../Item/Item';

const Items = () => {
    const [items] = useItems();
    return (
        <div className='mt-5'>
            <Container>
            <h1 style={{letterSpacing:"6px"}} className='mb-5 text-primary text-center'>MOST POPULAR ITEMS</h1>
            <Row xs={1} md={3} className="g-4">
                {
                    items.slice(0, 6).map(item => <Item
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