import banner_img from '../../assets/all-banner.png'
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Modal from 'react-modal';
import DatePicker from 'react-datepicker';
import Swal from 'sweetalert2';



const MyJobs = () => {
    const [jobs, setJobs] = useState(null);
    const { user } = useContext(AuthContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedJob, setSelectedJob] = useState(null)
    const [update,setUpdate]=useState(0)


    const [job_PostingDate, setjob_PostingDate] = useState(new Date());
    const [application_Deadline, setapplication_Deadline] = useState(new Date());

    function dateFormater(dateString) {
        const date = new Date(dateString);

        const day = date.getUTCDate();
        const month = date.toLocaleString('default', { month: 'long', timeZone: 'UTC' });
        const year = date.getUTCFullYear();
        const formattedDate = `${day} ${month} ${year}`;
        return formattedDate;
    }



    useEffect(() => {
        fetch(`http://localhost:5000/my-jobs?user_email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setJobs(data);
            })
            
    }, [user.email,update])


    // modal style
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '50%',
            padding: '50px',
            maxHeight: '80vh',
            overflowY: 'auto',
        },
    };



    const handleUpdateClick = async(id) => {
        console.log(id)
       await fetch(`http://localhost:5000/jobDetails/${id}`)
            .then(res => res.json())
            .then(data => {
                setSelectedJob(data)
                setjob_PostingDate(new Date(data.job_PostingDate))
                setapplication_Deadline(new Date(data.application_Deadline))
            })
        setIsModalOpen(true)
   
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const job_picture = form.job_picture.value;
        const job_title = form.job_title.value;
        const job_category = form.job_category.value;
        const salary_range = form.salary_range.value;
        const job_desc = form.job_desc.value;
        const job_Applicants = 0;

        console.log(selectedJob._id)

        const updated_job = { job_picture, job_title, job_category, salary_range, job_desc, job_Applicants, job_PostingDate, application_Deadline }


        fetch(`http://localhost:5000/my-jobs/${selectedJob._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updated_job)
        }).then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Your Job Updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    });
                    setUpdate(!update);
                }
            })
    }


    // handle delete
    
    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/jobs/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount != 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Job has been deleted.",
                                icon: "success"
                            });
                            const remaining =jobs.filter(job => job._id !==id);
                            setJobs(remaining)
                        }
                    })

            }
        });
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
                                    <td><button onClick={() => handleUpdateClick(job._id)} className='btn btn-block text-white bg-[#28395a] hover:bg-green-400'>Update</button></td>
                                    <td><button onClick={() => handleDelete(job._id)} className='btn btn-block text-white bg-red-400 hover:bg-red-600'>Update</button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                    <Modal
                        isOpen={isModalOpen}
                        onRequestClose={() => setIsModalOpen(false)}
                        style={customStyles}
                    >
                        <h3 className="font-bold text-2xl text-[#28395a] text-center">Update Job</h3>
                        <form onSubmit={handleSubmit} className="card-body pb-0">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Picture URL of the Job Banner</span>
                                </label>
                                <input type="text" name="job_picture" defaultValue={selectedJob?.job_picture} placeholder="Job Banner Picture" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Job Title</span>
                                </label>
                                <input type="text" name="job_title" defaultValue={selectedJob?.job_title} placeholder="Title" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">User Name</span>
                                </label>
                                <input type="text" value={user.displayName} className="input input-bordered" readOnly required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">User Email</span>
                                </label>
                                <input type="text" value={user.email} className="input input-bordered" readOnly required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Job Category</span>
                                </label>
                                <select
                                    name='job_category'
                                    defaultValue={selectedJob?.job_category}
                                    className="select select-bordered w-full"
                                    required
                                >
                                    <option value="" disabled>Select Category</option>
                                    <option value="On Site">On Site</option>
                                    <option value="Remote">Remote</option>
                                    <option value="Part-Time">Part-Time</option>
                                    <option value="Hybrid">Hybrid</option>
                                </select>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Salary Range</span>
                                </label>
                                <input type="text" name="salary_range" defaultValue={selectedJob?.salary_range} placeholder='salary range' className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Job Description</span>
                                </label>
                                <textarea
                                    name="job_desc"
                                    defaultValue={selectedJob?.job_desc}
                                    placeholder='description'
                                    className="textarea textarea-bordered w-full"
                                    required
                                ></textarea>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Job Posting date</span>
                                </label>
                                <DatePicker
                                    selected={job_PostingDate}
                                    onChange={(date) => setjob_PostingDate(date)}
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Application Deadline</span>
                                </label>
                                <DatePicker
                                    selected={application_Deadline}
                                    onChange={(date) => setapplication_Deadline(date)}
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>

                            <div className="form-control my-6">
                                <button type='submit' className="btn btn-primary">Submit</button>
                            </div>
                        </form>


                        <div className="modal-action">
                            <button className='btn ' onClick={() => setIsModalOpen(false)}>Close</button>
                        </div>

                    </Modal>

                </div>
            </div>
        </div>
    );
};

export default MyJobs;