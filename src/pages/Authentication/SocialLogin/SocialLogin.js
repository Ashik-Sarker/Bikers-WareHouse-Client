import React from 'react';

const SocialLogin = () => {
    return (
        <div>
            <div>
                <button style={{letterSpacing:"3px",background:"#e24646"}} className='border-0 w-100 my-2 py-2 text-light fs-5 rounded fw-bold'>Sign in with google</button>
            </div>
            <div>
                <button style={{letterSpacing:"3px",background:"#30c403"}} className='border-0 w-100 my-2 py-2 text-light fs-5 rounded fw-bold'>Sign in with github</button>
            </div>
            <div>
                <button style={{letterSpacing:"3px",background:"#0d5aa8"}} className='border-0 w-100 my-2 py-2 text-light fs-5 rounded fw-bold'>Sign in with facebook</button>
            </div>
            <div>
                <button style={{letterSpacing:"3px",background:"#1b81a3"}} className='border-0 w-100 my-2 py-2 text-light fs-5 rounded fw-bold'>Sign in with linkedin</button>
            </div>
        </div>
    );
};

export default SocialLogin;