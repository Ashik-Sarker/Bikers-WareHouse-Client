import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../../src/images/banner/Background-resize-1.png';
import banner2 from '../../../../src/images/banner/banner1.jpg';
import banner3 from '../../../../src/images/banner/banner3.jpg';
import banner5 from '../../../../src/images/banner/banner5.jpg';

const Banner = () => {
    return (
        <Carousel fade className='pb-5'>
            <Carousel.Item>
                <img
                style={{height:"800px"}}
                className="d-block w-100"
                src={banner1}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3 className='fs-1 text-info fw-bold' style={{letterSpacing:"10px"}}>1400CC Segment</h3>
                <p className="fs-5">This is our most popular resale bike</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                style={{ height: "800px" }}
                className="d-block w-100"
                src={banner2}
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3 className='fs-1 text-info fw-bold' style={{letterSpacing:"10px"}}>We have all bike accessories</h3>
                <p className="fs-5">Enjoy you favorite vehicle and ride with friends and nearest one.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                style={{height:"800px"}}
                className="d-block w-100"
                src={banner3}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3 className='fs-1 text-info fw-bold' style={{letterSpacing:"10px"}}>Find Your Best Tourist Bike</h3>
                <p className="fs-5">Ride with confidence and make tour with nature</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;