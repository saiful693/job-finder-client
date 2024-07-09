import { Link, NavLink } from "react-router-dom";
import './NavBar.css';
import logo from '../../../assets/logo.png'
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from "react-tooltip";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut=()=>{
        logOut()
        .then(()=>{
            toast.success("User logout successfully");
        })
        .catch(error=>{
            toast.error("Error occurs in logout",error);
        })
    }
    
    

    const navItems = <>
        <li className="hover:text-[#FB246A]"><NavLink to="/">Home</NavLink></li>
        <li className="hover:text-[#FB246A]"><NavLink to="/all-jobs">All Jobs</NavLink></li>
        <li className="hover:text-[#FB246A]"><NavLink to="/applied-jobs">Applied Jobs</NavLink></li>
        <li className="hover:text-[#FB246A]"><NavLink to="/add-a-job">Add A Job</NavLink></li>
        <li className="hover:text-[#FB246A]"><NavLink to="/my-jobs">My Jobs</NavLink></li>
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
                <div className="navbar-end">
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
                </div>
            </div>
        </div>
    );
};

export default NavBar;