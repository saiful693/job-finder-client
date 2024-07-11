import { Link } from 'react-router-dom';
import banner_img from '../../assets/all-banner.png'
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const MyJobs = () => {
    const [jobs,setJobs]=useState(null);
    const {user}=useContext(AuthContext);

    function dateFormater(dateString) {
        const date = new Date(dateString);

        const day = date.getUTCDate();
        const month = date.toLocaleString('default', { month: 'long', timeZone: 'UTC' });
        const year = date.getUTCFullYear();
        const formattedDate = `${day} ${month} ${year}`;
        return formattedDate;
    }

    useEffect(()=>{
        fetch(`http://localhost:5000/my-jobs?user_email=${user.email}`)
        .then(res => res.json())
        .then(data =>{
            setJobs(data);
        })
    },[user.email])

    const handleUpdate=()=>{

    }

    return (
        <div
            className="bg-cover bg-center grid min-h-screen"
            style={{
                backgroundImage: `url(${banner_img})`,
            }}>
            <div className="flex justify-center mt-16">
                <div className="max-w-md text-center">
                    <h1 className="mb-5 text-5xl font-bold">My Jobs</h1>
                </div>
            </div>
            <div className="w-3/4 mx-auto">
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr className="text-xl text-[#28395a] font-semibold">
                                <th>Job Title</th>
                                <th>Posting Date</th>
                                <th>Salary Range</th>
                                <th>Application Deadline</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className="space-y-3">
                            {
                                jobs?.map(job => <tr className="h-32 mb-4 text-lg border-1 border-blue-200 space-y-3 hover:bg-gray-300" key={job._id}>
                                    <td>{job.job_title}</td>
                                    <td>{dateFormater(job.job_PostingDate)}</td>
                                    <td>{job.salary_range}</td>
                                    <td><strong>{dateFormater(job.application_Deadline)}</strong></td>
                                    <td><Link to={`/jobDetails/${job._id}`}><button onClick={handleUpdate} className="btn  bg-primary text-white">Update</button></Link></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyJobs;