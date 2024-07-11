import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginBanner from '../../assets/login-banner.svg'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {

    const { createUser } = useContext(AuthContext);
    const location=useLocation();
    const navigate=useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        // console.log(name,email,photo,password);

        try {
            const result = await createUser(email, password);
            const user = result.user;

           await updateProfile(user,{
                displayName: name,
                photoURL: photo,
            });
            // console.log(user);
            toast.success("User profile created successfully");
            navigate(location?.state? location?.state: '/login')
        }catch(error){
            toast.error('Error creating user:', error);
        }

        }

    return (
        <div>
            <img className='w-full bg-[#230939]' src={loginBanner} alt="" />
            <div className='flex justify-center'>
                <div className='flex bg-white rounded-2xl py-10 justify-center w-full lg:w-1/2 lg:-mt-52  z-10 '>
                    <div className='w-3/4'>
                        <div className="text-center">
                            <h1 className="text-5xl font-bold">SignUp Here</h1>
                        </div>
                        <div className="card  w-full  shrink-0 shadow-2xl">
                            <form onSubmit={handleSignUp} className="card-body pb-0">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" name="photo" placeholder="Photo" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Sign Up</button>
                                </div>
                            </form>
                            <p className='pl-10 py-8'>Already have an Account? Please  <Link className='text-orange-400 font-bold' to='/login'>Login</Link> </p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default SignUp;