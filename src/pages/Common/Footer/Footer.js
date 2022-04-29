import React from 'react';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear()
    return (
        <div className='py-3 mt-5'>
            <p>Copyright @ {year} <span className='text-primary'>by Ashik</span></p>
        </div>
    );
};

export default Footer;