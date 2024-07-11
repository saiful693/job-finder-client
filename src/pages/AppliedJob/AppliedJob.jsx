import { useContext, useEffect, useState } from 'react';
import banner_img from '../../assets/all-banner.png'
import { AuthContext } from '../../providers/AuthProvider';

const AppliedJob = () => {
    const { user } = useContext(AuthContext)
    const [category, setCategory] = useState('');
    const [appliedJob, setAppliedJob] = useState(null)
   

    const handleCategory = (event) => {
        setCategory(event.target.value);
        console.log(event.target.value)
    };

    
    function dateFormater(dateString) {
        const date = new Date(dateString);

        const day = date.getUTCDate();
        const month = date.toLocaleString('default', { month: 'long', timeZone: 'UTC' });
        const year = date.getUTCFullYear();
        const formattedDate = `${day} ${month} ${year}`;
        return formattedDate;
    }


    useEffect(() => {
        if (!category) {
            fetch(`http://localhost:5000/appliedJob?user_email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setAppliedJob(data) 
        })
        }else{
            fetch(`http://localhost:5000/appliedJob?user_email=${user.email}&job_category=${category}`)
            .then(res => res.json())
            .then(data => {
                setAppliedJob(data) 
    })
        }


    }, [user.email, category])




    return (
        <div
            className="bg-cover bg-center grid"
            style={{
                backgroundImage: `url(${banner_img})`,
            }}>
            <div className="flex justify-center mt-16">
                <div className="max-w-md text-center">
                    <h1 className="mb-5 text-5xl font-bold">Applied Job</h1>
                </div>
            </div>

            {/* search by category */}
            <div className='max-w-7xl mx-auto border my-10 flex items-center rounded-2xl'>
                <select className="select select-info w-full max-w-md" value={category} onChange={handleCategory}>
                    <option  selected>Select category</option>
                    <option value="On Site">On Site</option>
                    <option value="Remote">Remote</option>
                    <option value="Part-Time">Part-Time</option>
                    <option value="Hybrid">Hybrid</option>
                </select>
            </div>

            <div className="w-3/4 mx-auto mb-16">
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr className="text-xl text-[#28395a] font-semibold">
                                <th>Job Title</th>
                                <th>Job Category</th>
                                <th>Description</th>
                                <th>Salary Range</th>
                                <th>Posting Date</th>
                                <th>Resume Link</th> 
                            </tr>
                        </thead>
                        <tbody className="space-y-3">
                            {
                                appliedJob?.map(job => <tr className="h-32 mb-4 text-lg border-1 border-blue-200 space-y-3 hover:bg-gray-300" key={job._id}>
                                    <td>{job.job_title}</td>
                                    <td>{job.job_category}</td>
                                    <td>{job.job_desc}</td>
                                    <td>{job.salary_range}</td>
                                    <td>{dateFormater(job.job_PostingDate)}</td>
                                    <td>{job.resumeLink}</td>
                                    
                                    {/* <td><strong>{dateFormater(job.application_Deadline)}</strong></td> */}

                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AppliedJob;