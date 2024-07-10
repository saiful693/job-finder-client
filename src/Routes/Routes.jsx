import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import AddAJob from "../pages/AddAJob/AddAJob";
import PrivateRoute from "./PrivateRoute";
import JobDetails from "../pages/Shared/JobDetails/JobDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
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
                path: '/add-a-job',
                element: <PrivateRoute><AddAJob></AddAJob></PrivateRoute>
            },
            {
                path: '/jobDetails/:id',
                element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
                loader: ({ params} ) =>fetch(`http://localhost:5000/jobDetails/${params.id}`)    
            }
            
        ]
    },
]);

export default router;