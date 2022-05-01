import React, { useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Border from '../../Common/Border/Border';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Common/Loading/Loading';

const Login = () => {
    const emailRef = useRef('');
    const passRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    //require auth section
     let from = location.state?.from?.pathname || "/";

    //login with react firebase hooks
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    if (loading) {
        return <Loading></Loading>
    }
    if (user) {
        navigate(from, { replace: true });
    }

    //form handler
    const handleUser = event => {
        event.preventDefault();
        const email = emailRef?.current?.value;
        const pass = passRef?.current?.value;
        signInWithEmailAndPassword(email, pass);
        console.log(error.message);
    }

    return (
        <div className='w-50 mx-auto'>
            <h2 style={{letterSpacing:"2px"}} className='my-3'>Login</h2>
            <form onSubmit={handleUser}>
                <div className="mb-3">
                    <input ref={emailRef} style={{border:"1px solid #737373"}} type="email" name='email' placeholder='Email' className="form-control py-2" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                </div>
                <div className="mb-3">
                    <input ref={passRef} style={{border:"1px solid #737373"}} type="password" name='password' placeholder='Password' className="form-control py-2" id="exampleInputPassword1" required/>
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