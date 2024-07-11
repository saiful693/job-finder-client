import { Link } from "react-router-dom";
import banner_img from '../../assets/all-banner.png'
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const AllJob = () => {
    const { user } = useContext(AuthContext)
    const [jobs, setJobs] = useState(null)
    const [search, setSearch] = useState('');


    function dateFormater(dateString) {
        const date = new Date(dateString);

        const day = date.getUTCDate();
        const month = date.toLocaleString('default', { month: 'long', timeZone: 'UTC' });
        const year = date.getUTCFullYear();
        const formattedDate = `${day} ${month} ${year}`;
        return formattedDate;
    }


    const handleCard = () => {
        if (!user) {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "You have to log in first to view details",
                showConfirmButton: false,
                timer: 2500
            });
        }
    }



    const handleSearchChange = (e) => {
        const searchText = e.target.value;
        setSearch(searchText)
    }

    useEffect(() => {
        fetch(`http://localhost:5000/search-jobs?job_title=${search}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setJobs(data);
            })
    }, [search])



    return (
        <div
            className="bg-cover bg-center grid min-h-screen"
            style={{
                backgroundImage: `url(${banner_img})`,
            }}>
            <div className="flex justify-center mt-16">
                <div className="max-w-md text-center p-2 ">
                    <h1 className="mb-5 text-3xl md:text-5xl font-bold">View All Jobs</h1>
                    <p className="mb-5">
                        Looking for jobs? Browse our latest job openings to view & apply to the best jobs today!
                    </p>
                    <input onChange={handleSearchChange} className="p-3 w-full rounded-lg border-1 placeholder:font-semibold border-[#28395a]" type="text" placeholder="Search by job title" />
                </div>
            </div>
            <div className="w-3/4 mx-auto my-16">
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr className="text-xl text-[#28395a] font-semibold">
                                <th>Job Title</th>
                                <th className="hidden lg:table-cell">Posting Date</th>
                                <th className="hidden lg:table-cell">Salary Range</th>
                                <th className="hidden md:table-cell">Application Deadline</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className="space-y-3">
                            {
                                jobs?.map(job => <tr className="h-32 mb-4 text-lg border-1 border-blue-200 space-y-3 hover:bg-gray-300" key={job._id}>
                                    <td>{job.job_title}</td>
                                    <td className="hidden lg:table-cell">{dateFormater(job.job_PostingDate)}</td>
                                    <td className="hidden lg:table-cell">{job.salary_range}</td>
                                    <td className="hidden md:table-cell"><strong>{dateFormater(job.application_Deadline)}</strong></td>
                                    <td><Link to={`/jobDetails/${job._id}`}><button onClick={handleCard} className="btn  bg-primary text-white">View Details</button></Link></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllJob;