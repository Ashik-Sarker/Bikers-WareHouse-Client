import React, { useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Border from '../../Common/Border/Border';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Common/Loading/Loading';
import { sendEmailVerification } from 'firebase/auth';
import useToken from '../../../hooks/useToken';

const Registration = () => {
    const [errors, setErrors] = useState('');
    const [agree, setAgree] = useState(false);
    const emailRef = useRef('');
    const passRef = useRef('');
    const rePassRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    
    
    console.log(agree);
    
    //registration from firebase hook
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    
    const [token] = useToken(user);
    
    //require auth section
    let from = location.state?.from?.pathname || "/";
    console.log(location);
    
    if (loading) {
        return <Loading></Loading>
    }
    if (token) {
        navigate(from, { replace: true });
    }
    
    //form handler
    const handleCreateUser = event => {
        event.preventDefault();
        const email = emailRef?.current?.value;
        const pass = passRef?.current?.value;
        const rePass = rePassRef?.current?.value;
        if (pass !== rePass) {
            setErrors('Error: your two password are not matching');
            return;
        }
        else {
            createUserWithEmailAndPassword(email, pass);
        }
    }
    return (
        <div className='w-50 mx-auto'>
            <h2 style={{letterSpacing:"2px"}} className='my-3'>Create account</h2>
            <form onSubmit={handleCreateUser}>
                <div className="mb-3">
                    <input style={{border:"1px solid #737373"}} type="text" name='fName' placeholder='FirstName' className="form-control py-2" id="exampleInputFName" aria-describedby="emailHelp" required/>
                </div>
                <div className="mb-3">
                    <input style={{border:"1px solid #737373"}} type="text" name='lName' placeholder='lastName' className="form-control py-2" id="exampleInputLName" aria-describedby="emailHelp" required/>
                </div>
                <div className="mb-3">
                    <input ref={emailRef} style={{border:"1px solid #737373"}} type="email" name='email' placeholder='Email' className="form-control py-2" id="exampleInputEmail" aria-describedby="emailHelp" required/>
                </div>
                <div className="mb-3">
                    <input ref={passRef} style={{border:"1px solid #737373"}} type="password" name='password' placeholder='Password' className="form-control py-2" id="exampleInputPassword1" required/>
                </div>
                <div className="mb-3">
                    <input ref={rePassRef} style={{border:"1px solid #737373"}} type="password" name='repeatPassword' placeholder='Re-Enter password' className="form-control py-2" id="exampleInputPassword2" required/>
                </div>

                <div className="mb-3 form-check">
                    <input 
                    onClick={()=>setAgree(!agree)}
                    style={{border:"1px solid #737373"}} type="checkbox" name='terms' className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
  
                <p className='text-danger'>{errors}</p>
                <p className='text-danger'>{error?.message}</p>
                <button disabled={!agree} type="submit" className="btn btn-primary py-2 px-5 my-3">Create</button>
            </form>

            <p>Already have an account? <span className='text-primary'><Link to='/login'>Please login</Link></span></p>
            
            <Border></Border>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Registration;