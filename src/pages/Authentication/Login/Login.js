import React from 'react';
import { Link } from 'react-router-dom';
import Border from '../../Common/Border/Border';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    return (
        <div className='w-25 mx-auto'>
            <h2 style={{letterSpacing:"2px"}} className='my-3'>Login</h2>
            <form>
                <div className="mb-3">
                    <input style={{border:"1px solid #737373"}} type="email" name='email' placeholder='Email' className="form-control py-2" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <input style={{border:"1px solid #737373"}} type="password" name='password' placeholder='Password' className="form-control py-2" id="exampleInputPassword1"/>
                </div>
                <p className='text-primary'>Forget your password?</p>
                
                <button type="submit" className="btn btn-primary my-3 py-2 px-5">Login</button>

                <p>Are you new? <span className='text-primary'><Link to='/registration'>Please create an account</Link></span></p>
            </form>
            <Border></Border>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;