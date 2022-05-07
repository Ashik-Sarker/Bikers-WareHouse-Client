import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import notFoundImg from '../../images/Not-Found/not-found.jpg'

const ErrorPage = () => {
    return (
        <Container className='py-5'>
            <Row>
                <Col className='px-5 my-auto' xs={12} md={6}>
                    <span>ERROR 404</span>
                    <h1>Oops! The page you are looking for isn't here</h1>
                    <p>You might have the wrong address, or the page may have moved.</p>
                    <div>
                        <Link to={'/'}>
                            <button style={{background:"#ff422e"}} className='border-0 px-5 py-2 mt-4 text-light fs-5'>Back to home</button>
                        </Link>
                    </div>
                </Col>
                <Col
                    xs={12} md={6}>
                    <img className='w-100 my-auto' src={notFoundImg} alt="Not Found" srcset="" />
                </Col>
            </Row>
        </Container>
    );
};

export default ErrorPage;