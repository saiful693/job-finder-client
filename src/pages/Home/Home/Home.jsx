import Banner from "../Banner/Banner";
import CategoryJob from "../CategoryJob/CategoryJob";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="max-w-7xl mx-auto mt-20">
                <CategoryJob></CategoryJob>
            </div>
        </div>
    );
};

export default Home;