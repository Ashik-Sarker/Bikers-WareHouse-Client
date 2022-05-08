import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import useToken from '../../../hooks/useToken';
import Loading from '../../Common/Loading/Loading';

const SocialLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [token] = useToken(user);
    let errorElement;

    if (error) {
        errorElement = <div>
            <p className='text-danger'>Error: {error.message}</p>
        </div>
    }
    // if (loading) {
    //     return <Loading></Loading>
    // }
    if (token) {
        navigate(from, { replace: true });
    }

    return (
        <div>
            {loading && <p className='text-primary'>loading...</p>}
            {errorElement}
            <div>
                <button onClick={() => signInWithGoogle()} style={{letterSpacing:"3px",background:"#e24646"}} className='border-0 w-100 my-2 py-2 text-light fs-5 rounded fw-bold'>Sign in with google</button>
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