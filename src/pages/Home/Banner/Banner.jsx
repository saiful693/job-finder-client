import banner_img from '../../../assets/banner_img.jpg'

const Banner = () => {
    const handleSearch=()=>{

    }
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: `url(${banner_img})`,
            }}>

            <div className=" ">
                <div className="w-3/4">
                    <h1 className="mb-5 text-[#28395a] text-6xl font-black">Find the most exciting startup jobs</h1>
                    <p className="mb-5 font-semibold text-xl">
                        Instantly see top matching jobs.
                        {/* Find the jobs you miss when searching. */}
                    </p>

                </div>
                <div className='w-1/2'>
                    <div className="flex items-center space-x-4">
                        <input
                            type="text"
                            // value={searchTerm}
                            // onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search for job titles..."
                            className="input input-bordered input-primary w-full max-w-xs"
                        />
                        <button onClick={handleSearch} className="btn btn-primary">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;