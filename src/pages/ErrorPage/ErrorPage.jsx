import { Link } from "react-router-dom";
import error_img from '../../assets/error.webp'


const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center">
            <div>
                <img src={error_img} alt="" />
                <p className="text-2xl font-semibold flex justify-center">Go back to <Link className="text-blue-400 ml-2">Home</Link> </p>
            </div>
        </div>
    );
};

export default ErrorPage;