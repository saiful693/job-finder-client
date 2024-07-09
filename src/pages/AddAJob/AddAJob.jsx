import loginBanner from '../../assets/login-banner.svg'
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Swal from 'sweetalert2';

const AddAJob = () => {
    const { user } = useContext(AuthContext)
    const [job_PostingDate, setjob_PostingDate] = useState(new Date());
    const [application_Deadline, setapplication_Deadline] = useState(new Date());
    const handleAddJob = (e) => {
        e.preventDefault();
        const form = e.target;
        const job_picture = form.job_picture.value;
        const job_title = form.job_title.value;
        const user_name = user.displayName;
        const user_email = user.email;
        const job_category = form.job_category.value;
        const salary_range = form.salary_range.value;
        const job_desc = form.job_desc.value;
        const job_Applicants = 0;

        const new_job = { job_picture, job_title, user_name, user_email, job_category, salary_range, job_desc, job_Applicants, job_PostingDate, application_Deadline };

        fetch('http://localhost:5000/jobs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(new_job)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your Job has been added",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })

    }
    return (
        <div>
            <img className='w-full bg-[#230939]' src={loginBanner} alt="" />
            <div className='flex justify-center'>
                <div className='flex bg-white rounded-2xl py-10 justify-center w-1/2 -mt-52  z-10 '>
                    <div className='w-3/4'>
                        <div className="text-center mb-6">
                            <h1 className="text-5xl font-bold">Add A Job</h1>
                        </div>
                        <div className="card  w-full  shrink-0 shadow-2xl">
                            <form onSubmit={handleAddJob} className="card-body pb-0">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Picture URL of the Job Banner</span>
                                    </label>
                                    <input type="text" name="job_picture" placeholder="Job Banner Picture" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Job Title</span>
                                    </label>
                                    <input type="text" name="job_title" placeholder="Title" className="input input-bordered" required />
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
                                    <input type="text" name="salary_range" placeholder='salary range' className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Job Description</span>
                                    </label>
                                    <textarea
                                        name="job_desc"
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

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AddAJob;