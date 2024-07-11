import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginBanner from '../../assets/login-banner.svg'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcGoogle } from "react-icons/fc";

const Login = () => {

    const { logIn, logInWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then(result => {
                const user = result.user;
                toast.success(`${user.displayName} is successfully login`);
                navigate(location?.state ? location?.state : '/')
            })
            .catch(error => {
                toast.error('Error in user login:', error);
            })
    }


    const handleGoogleLogin = () => {
        logInWithGoogle()
            .then(() => {
                toast.success("User google login successfully!");
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                toast.error("Error registering user: " + error.message);
            })
    }


    return (
        <div>
            <img className='w-full bg-[#230939]' src={loginBanner} alt="" />
            <div className='flex justify-center'>
                <div className='flex bg-white rounded-2xl py-10 justify-center w-full lg:w-1/2 lg:-mt-52  z-10 '>
                    <div className='w-3/4'>
                        <div className="text-center">
                            <h1 className="text-5xl font-bold">Login now!</h1>
                        </div>
                        <div className="card  w-full  shrink-0 shadow-2xl">
                            <form onSubmit={handleLogIn} className="card-body pb-0">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </form>
                            <div className='flex justify-center mt-6'>
                                <button onClick={handleGoogleLogin} className="mb-2 btn border border-blue-200">
                                    <FcGoogle />
                                    Login with Google
                                </button>
                            </div>
                            <p className='pl-10 py-8'>New to Job Finder? <Link className='text-orange-400 font-bold' to='/signup'>Sign Up</Link> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;