import React from 'react';
import Border from '../Border/Border';
import github from '../../../images/social_icon/github.png';
import google from '../../../images/social_icon/google.png';
import twitter from '../../../images/social_icon/twitter.png';
import youtube from '../../../images/social_icon/youtube.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear()
    return (
        <div className='py-3 mt-5  bg-dark text-light'>
            <div className='container'>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    <div className="col">
                        <div className="card h-100 border-0 bg-light">
                        <div className="card-body bg-dark">
                            <h5 className="card-title">Guest Service</h5>
                            <p className="card-text t"><a href="#">Your Account</a></p>
                            <p className="card-text"><a href="#">Shipping</a></p>
                            <p className="card-text"><a href="#">Easy Returns</a></p>
                            <p className="card-text"><a href="#">Frequently Asked Questions</a></p>
                            <p className="card-text"><a href="#">Why Choose Bicycle Warehouse?</a></p>
                            <p className="card-text"><a href="#">Where to Ride</a></p>
                            <p className="card-text"><a href="#">Gift Cards</a></p>
                            <p className="card-text"><a href="#">Do not sell my personal information</a></p>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 border-0 bg-light">
                        <div className="card-body bg-dark">
                            <h5 className="card-title">Learn More</h5>
                            <p className="card-text"><a href="#">Store Locations</a></p>
                            <p className="card-text"><a href="#">Ready to Ride Center</a></p>
                            <p className="card-text"><a href="#">About Us</a></p>
                            <p className="card-text"><a href="#">Hiring/Careers</a></p>
                            <p className="card-text"><a href="#">Accessibility Statement</a></p>
                            <p className="card-text"><a href="#">Privacy Policy</a></p>
                            <p className="card-text"><a href="#">Our Blog</a></p>
                            <p className="card-text"><a href="#">Brands We Carry</a></p>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 border-0 bg-light">
                        <div className="card-body bg-dark">
                            <h5 className="card-title">Programs</h5>
                            <p className="card-text"><a href="#">Events</a></p>
                            <p className="card-text"><a href="#">Free Financing</a></p>
                            <p className="card-text"><a href="#">Refer a Friend, Get $10</a></p>
                            <p className="card-text"><a href="#">Rewards</a></p>
                            <p className="card-text"><a href="#">Ride Africa Project</a></p>
                            <p className="card-text"><a href="#">Service Department</a></p>
                            <p className="card-text"><a href="#">Trade In Your Bike</a></p>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 border-0 bg-light">
                        <div className="card-body bg-dark">
                            <h5 className="card-title">Lets Talk Bikes And Gear</h5>
                            <p className="card-text"><a href="#">Contact us: Online Chat,</a></p>
                            <p className="card-text"><a href="#">Info@BicycleWarehouse.com</a></p>
                            <p className="card-text"><a href="#">Stores</a></p>
                        </div>
                        </div>
                    </div>
                </div>
                < div className = 'd-flex w-25 mx-auto justify-content-center align-items-center mt-5' >
                    <img style={{width:"15%"}} className="ms-3 bg-light rounded-circle p-1" src={github} alt="" srcSet="" />
                    <img style={{width:"15%"}} className="ms-3 bg-light rounded-circle p-1" src={google} alt="" srcSet="" />
                    <img style={{width:"15%"}} className="ms-3 bg-light rounded-circle p-1" src={twitter} alt="" srcSet="" />
                    <img style={{width:"15%"}} className="ms-3 bg-light rounded-circle p-1" src={youtube} alt="" srcSet="" />
                </div>
            </div>
            <Border></Border>
            <p className='text-center'>Copyright @ {year} <span className='text-primary'>by Ashik</span></p>
        </div>
    );
};

export default Footer;