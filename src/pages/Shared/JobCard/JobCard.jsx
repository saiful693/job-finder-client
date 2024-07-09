

const JobCard = ({job}) => {
    const {job_picture, job_title, user_name,  salary_range,  job_Applicants, job_PostingDate, application_Deadline}=job;
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src={job_picture}
                    alt="job-banner" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {job_title}
                    
                    <div className="badge badge-secondary">Applicants-{job_Applicants}</div>
                </h2>
                <p>Posted by: <strong>{user_name}</strong></p>
                <p>Posting Date: <strong>{new Date(job_PostingDate).toLocaleDateString()}</strong></p>
                <p>Application Deadline: <strong className="text-red-400">{new Date(application_Deadline).toLocaleDateString()}</strong></p>
                <p className="">Salary Range: <strong className="text-[#28395a]">{salary_range}</strong></p>
                <div className="card-actions justify-end">
                    <div className="btn btn-block bg-primary text-white">View Details</div>
                </div>
            </div>
        </div>
    );
};

export default JobCard;