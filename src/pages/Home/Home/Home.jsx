// import { Helmet } from 'react-helmet-async';
import ApplyProcess from "../ApplyProcess/ApplyProcess";
import Portfolio from "../ApplyProcess/Portfolio/Portfolio";
import Banner from "../Banner/Banner";
import CategoryJob from "../CategoryJob/CategoryJob";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="max-w-7xl mx-auto mt-20">
                <CategoryJob></CategoryJob>
            </div>
            <ApplyProcess></ApplyProcess>
            <div className="max-w-7xl mx-auto mt-20">
                <Portfolio></Portfolio>
            </div>
        </div>
    );
};

export default Home;