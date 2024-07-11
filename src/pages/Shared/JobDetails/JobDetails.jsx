import { useLoaderData } from 'react-router-dom';
import jobDetailsBanner from '../../../assets/job_details.jpg';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import Modal from 'react-modal';
import Swal from 'sweetalert2';



const JobDetails = () => {
    const job = useLoaderData();
    const { user } = useContext(AuthContext);
    const { _id, job_picture, job_title, user_name, job_category, salary_range, job_desc, job_Applicants, job_PostingDate, application_Deadline } = job;


    const [isModalOpen, setIsModalOpen] = useState(false);

    function dateFormater(dateString) {
        const date = new Date(dateString);

        const day = date.getUTCDate();
        const month = date.toLocaleString('default', { month: 'long', timeZone: 'UTC' });
        const year = date.getUTCFullYear();
        const formattedDate = `${day} ${month} ${year}`;
        return formattedDate;
    }

    const isDeadlinePassed = () => {
        return Date.now() > new Date(application_Deadline);
    }

    const handleApplyClick = () => {
        if (isDeadlinePassed()) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Application deadline is over!",
            });
        }
        else if (user.displayName === user_name) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Employer is not allow to apply for his job",
            });
        }
        else {
            setIsModalOpen(true)
        }
    }


    // modal style
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            maxWidth: '100%',
            padding: '50px',
            maxHeight: '90vh',
            overflowY: 'auto',
        },
    };



    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const resumeLink = form.resumeLink.value;
        const appliedJob = { job_id: _id, job_title, job_category, job_desc, salary_range, user_name: user.displayName, user_email: user.email, resumeLink, job_PostingDate }

        fetch('http://localhost:5000/appliedJob', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appliedJob),
        })
            .then(res => res.json())
            .then(() => {
                fetch(`http://localhost:5000/jobs/${_id}`, {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.modifiedCount) {
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Your application submitted",
                                showConfirmButton: false,
                                timer: 2000
                            });
                        }
                        setIsModalOpen(false)
                    })


            })

    }


    return (
        <div>
            <div
                className="hero min-h-[450px]"
                style={{
                    backgroundImage: `url(${jobDetailsBanner})`,
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Job Details</h1>
                    </div>
                </div>
            </div>
            {/*  */}
            <div className='max-w-7xl mx-auto space-y-4 p-2 my-20 flex flex-col md:flex-row justify-between'>
                <div className='md:w-1/2'>
                    <div className='flex items-center gap-12'>
                        <img className='w-48 h-32' src={job_picture} alt="" />
                        <div className='space-y-4'>
                            <h2 className='text-3xl'>{job_title}</h2>
                            <div className='flex gap-8 text-[#808080]'>
                                <p>{job_category}</p>
                                <p>Applicants: {job_Applicants}</p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-8'>
                        <h4 className='text-lg font-semibold'>Job Description</h4>
                        <p className='mt-2'>{job_desc}</p>
                    </div>
                </div>
                {/* 2nd div */}
                <div className='border p-6 md:w-2/5 space-y-5'>
                    <h4 className='text-lg font-semibold'>Job OverView</h4>
                    <div>
                        <div className='flex justify-between'>
                            <div className='space-y-5'>
                                <p>Posted date :</p>
                                <p>Salary :</p>
                                <p>Application date :</p>
                            </div>
                            <div className='space-y-5'>
                                <p>{dateFormater(job_PostingDate)}</p>
                                <p>{salary_range}</p>
                                <p>{dateFormater(application_Deadline)}</p>
                            </div>
                        </div>
                    </div>
                    <button onClick={handleApplyClick} className='btn btn-block text-white bg-[#FB246A]'>Apply Now</button>
                    {/* modal */}
                    <div >
                        <Modal
                            isOpen={isModalOpen}
                            onRequestClose={() => setIsModalOpen(false)}
                            style={customStyles}
                        >
                            <div className=''>
                                <h3 className="font-bold text-lg">Apply for Job</h3>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">User Name</span>
                                        </label>
                                        <input type="text" value={user.displayName} className="input input-bordered" readOnly />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" value={user.email} className="input input-bordered" readOnly />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Resume Link:</span>
                                        </label>
                                        <input type="url" name='resumeLink' className="input input-bordered" required />
                                    </div>
                                    <button className='btn mt-5 text-white bg-[#FB246A] btn-md' type="submit">Submit Application</button>
                                </form>

                                <div className="modal-action">
                                    <button className='btn ' onClick={() => setIsModalOpen(false)}>Close</button>
                                </div>
                            </div>
                        </Modal>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;