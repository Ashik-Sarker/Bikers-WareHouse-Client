import React, { useRef} from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Border from '../../Common/Border/Border';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
// import Loading from '../../Common/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Login = () => {
    const emailRef = useRef('');
    const passRef = useRef('');
    //require auth section
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    // let err;

    //login with react firebase hooks
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    //reset passs
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
   

    // if (loading) {
    //     return <Loading></Loading>
    // }
    if (user) {
        navigate(from, { replace: true });
    }

    //form handler
    const handleUser = async event => {
        event.preventDefault();
        const email = emailRef?.current?.value;
        const pass = passRef?.current?.value;

        await signInWithEmailAndPassword(email, pass);
        const { data } = await axios.post('https://fast-plains-14687.herokuapp.com/login', { email });
        console.log(data);
    }

    const resetPassword = async() => {
        const email = emailRef?.current?.value;
        await sendPasswordResetEmail(email);
        if (email) {
            // alert('send email');
            toast("send email to your account")
        }
        else {
            // alert('Please add email first');
            toast('Please add email first then reset pass')
        }
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

                <p className='text-danger'>{error?.message}</p>
                {
                    loading && <p className='text-danger'>Loading...</p>
                }
                <button type="submit" className="btn btn-primary my-3 py-2 px-5">Login</button>


                <p>Forget password? <span className='text-primary'><Link to='/login' onClick={resetPassword} className='text-decoration-none'>Reset Password</Link></span></p>


                <p>Are you new? <span className='text-primary'><Link to='/registration' state={location.state} className='text-decoration-none'>Please create an account</Link></span></p>
            </form>
            <ToastContainer />
            <Border></Border>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;