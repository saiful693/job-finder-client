import { Link } from 'react-router-dom';
import loginBanner from '../../assets/login-banner.svg'

const Login = () => {
    return (
            <div>
                <img className='w-full bg-[#230939]' src={loginBanner} alt="" />
                <div className='flex justify-center'>
                    <div className='flex bg-white rounded-2xl py-10 justify-center w-1/2 -mt-52  z-10 '>
                        <div className='w-3/4'>
                            <div className="text-center">
                                <h1 className="text-5xl font-bold">Login now!</h1>
                            </div>
                            <div className="card  w-full  shrink-0 shadow-2xl">
                                <form className="card-body pb-0">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" placeholder="email" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" placeholder="password" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary">Login</button>
                                    </div>
                                </form>
                                <p className='pl-10 py-8'>New to Job finder? <Link className='text-orange-400 font-bold' to='/signup'>Sign Up</Link> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    );
};

export default Login;