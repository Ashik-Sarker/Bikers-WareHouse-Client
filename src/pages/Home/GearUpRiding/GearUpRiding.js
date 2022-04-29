import React from 'react';
import image from '../../../images/banner/banner2.jpg'

const GearUpRiding = () => {
    return (
        <div className='container mt-5'>
            {/* <h2 style={{letterSpacing:"3px"}} className='mb-5'>GEAR UP YOUR NEXT RIDE</h2> */}
            <div className="row">
                <div className="col-12 col-md-4 my-auto order-2 order-md-1">
                    <h2 style={{letterSpacing:"3px"}}>GEAR UP YOUR NEXT RIDE</h2>
                    <p style={{letterSpacing:"2px"}}>Buy your bike and make everyone happy</p>
                    <button className='text-light bg-primary border-0 px-3 py-2'>Shop your bike</button>
                </div>
                <div className="col-12 col-md-8 my-4 order-1 order-md-2">
                    <img className='w-100' src={image} alt="" srcSet="" />
                </div>
            </div>
        </div>
    );
};

export default GearUpRiding;