import { Link, NavLink } from "react-router-dom";
import './NavBar.css';
import logo from '../../../assets/logo.png'
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from "react-tooltip";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success("User logout successfully");
            })
            .catch(error => {
                toast.error("Error occurs in logout", error);
            })
    }



    const navItems = <>
        <li className="hover:text-[#FB246A]"><NavLink to="/">Home</NavLink></li>
        <li className="hover:text-[#FB246A]"><NavLink to="/all-jobs">All Jobs</NavLink></li>
        {
            user?.email ? <>
                <li className="hover:text-[#FB246A]"><NavLink to="/applied-jobs">Applied Jobs</NavLink></li>
                <li className="hover:text-[#FB246A]"><NavLink to="/add-a-job">Add A Job</NavLink></li>
                <li className="hover:text-[#FB246A]"><NavLink to="/my-jobs">My Jobs</NavLink></li>
            </>
                : ''
        }
        <li className="hover:text-[#FB246A]"><NavLink to="/blogs">Blogs</NavLink></li>

    </>
    return (

        <div className="bg-white">
            <div className="navbar max-w-7xl mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            id="nav"
                            tabIndex={0}
                            className="menu-sm space-y-4 btn-none dropdown-content bg-none text-[#252b60] rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {
                                navItems
                            }
                        </ul>
                    </div>
                    {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
                    <img src={logo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul id="nav" className="menu-horizontal space-x-5 font-medium text-[#252b60]  px-1">
                        {
                            navItems
                        }
                    </ul>
                </div>
                <div className="navbar-end items-center">

                    {
                        user?.email ?
                            <div className="flex gap-4">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName} alt="user-icon" src={user.photoURL} />
                                        <Tooltip id="my-tooltip" />
                                    </div>
                                </div>

                                <button onClick={handleLogOut} className="btn btn-outline text-[#FB246A]">Logout</button>
                            </div>
                            : <Link to="/login"><button className="btn btn-outline text-[#FB246A]">Login</button></Link>
                    }

                    <label className="swap swap-rotate ml-4">
                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox" className="theme-controller" value="synthwave" />

                        {/* sun icon */}
                        <svg
                            className="swap-off h-8 w-8 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                        </svg>

                        {/* moon icon */}
                        <svg
                            className="swap-on h-8 w-8 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                        </svg>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default NavBar;