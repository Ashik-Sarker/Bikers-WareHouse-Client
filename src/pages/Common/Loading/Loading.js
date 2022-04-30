import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className='w-100 d-flex justify-content-center align-items-center' style={{height:"200px"}}>
            <Spinner animation="border" variant="success" />
        </div>
    );
};

export default Loading;