import React from 'react';
import image from '../../../images/banner/banner1.jpg'

const PerfectTour = () => {
    return (
        <div className='container mt-5'>
            <div className="row">
                <div className="col-12 col-md-8 my-5">
                    <img className='w-100' src={image} alt="" srcSet="" />
                </div>
                <div className="col-12 col-md-4 my-auto">
                    <h2 style={{letterSpacing:"3px"}}>EXPLORE THE WORLD WITH FRIENDS</h2>
                    <p style={{letterSpacing:"2px"}}>Buy your bike and make everyone happy</p>
                    <button className='text-light bg-primary border-0 px-3 py-2'>Shop your bike</button>
                </div>
            </div>
        </div>
    );
};

export default PerfectTour;