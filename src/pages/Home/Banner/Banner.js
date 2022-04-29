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
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;