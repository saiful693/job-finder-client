import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import AddAJob from "../pages/AddAJob/AddAJob";
import PrivateRoute from "./PrivateRoute";
import JobDetails from "../pages/Shared/JobDetails/JobDetails";
import AllJob from "../pages/AllJob/AllJob";
import Blogs from "../pages/Blogs/Blogs";
import MyJobs from "../pages/MyJobs/MyJobs";
import AppliedJob from "../pages/AppliedJob/AppliedJob";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/all-jobs',
                element: <AllJob></AllJob>,
                loader: ()=>fetch('https://job-finder-server-indol.vercel.app/jobs')
            },
            {
                path: '/add-a-job',
                element: <PrivateRoute><AddAJob></AddAJob></PrivateRoute>
            },
            {
                path: '/jobDetails/:id',
                element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
                loader: ({ params} ) =>fetch(`https://job-finder-server-indol.vercel.app/jobDetails/${params.id}`)    
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/my-jobs',
                element: <PrivateRoute><MyJobs></MyJobs></PrivateRoute>,
    
            },
            {
                path: '/applied-job',
                element: <PrivateRoute><AppliedJob></AppliedJob></PrivateRoute>
            }
            
        ]
    },
]);

export default router;