import React from 'react';

const JoinTheRide = () => {
    return (
        <div className='App m-5 bg-light py-5'>
            <h2 style={{ letterSpacing: "5px" }}>Join The Ride!</h2>
            <p style={{letterSpacing:"3px", width:"50%", margin:"auto"}}>Be the first to know when new products arrive, news, discounts and when you've earned rewards points.</p>
            <input style={{width:"30%"}} className="p-2 m-3" type="email" placeholder='Enter Your Email Address' />
            <br />
            <input className='px-5 py-2 bg-primary border-0 text-light fs-5' type="button" value="Continue" />
        </div>
    );
};

export default JoinTheRide;