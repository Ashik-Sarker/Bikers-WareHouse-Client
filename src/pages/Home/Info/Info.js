import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import like from '../../../images/icon/like.png'
import star from '../../../images/icon/star.png'
import love from '../../../images/icon/love.png'
import vehicle from '../../../images/icon/vehicle.png'

const Info = () => {
    return (
        <div className='bg-light p-5 App'>
            <div className='container'>
            <h3 className='mb-5'>Enriching lives through more freedom, fitness, and fun!</h3>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                <div className="col ">
                    <div className="card h-100 border-0">
                    <img style={{width:'50px'}} src={like} className="card-img-top  mx-auto" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Since 1992</h5>
                        <p className="card-text">Our 30 years means you get the right advice.</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 border-0">
                    <img style={{width:'40px'}} src={star} className="card-img-top  mx-auto" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">1000s of 5-Star Reviews</h5>
                        <p className="card-text">We always appreciate and value you.</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 border-0">
                    <img style={{width:'40px'}} src={love} className="card-img-top  mx-auto" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Love It Guarantee</h5>
                        <p className="card-text">We have your back and will always make things right!</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 border-0">
                    <img style={{width:'50px'}} src={vehicle} className="mx-auto card-img-top " alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Free Shipping</h5>
                        <p className="card-text">We save you money with free shipping on most orders over $50</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Info;