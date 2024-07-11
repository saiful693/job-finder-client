import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './CategoryJob.css';
import { useEffect, useState } from 'react';
import JobCard from '../../Shared/JobCard/JobCard';

const CategoryJob = () => {
    const [selectedTab, setSelectedTab] = useState('All Jobs');
    const [jobs, setJobs] = useState([]);

    const handleSelect = (index) => {
        const jobTypes = ['All Jobs','On Site', 'Remote', 'Hybrid', 'Part-Time'];
        setSelectedTab(jobTypes[index])
    }
    //    console.log(typeof(selectedTab))

    useEffect(() => {
        if(selectedTab === 'All Jobs'){
            fetch('http://localhost:5000/jobs')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setJobs(data);
            })
        }else{
            fetch(`http://localhost:5000/category-jobs?job_category=${selectedTab}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setJobs(data);
            })
        }
        
    }, [selectedTab])

    console.log(jobs)



    return (
        <div>
            <h1 className='text-[#28395a] my-10 text-center text-3xl lg:text-5xl font-bold'>Browse Top Categories</h1>
            <Tabs onSelect={handleSelect}>
                <TabList className="lg:text-xl ml-1 lg:ml-0 font-semibold">
                    <Tab>All Jobs</Tab>
                    <Tab>On-Site</Tab>
                    <Tab>Remote</Tab>
                    <Tab>Hybrid</Tab>
                    <Tab>Part-Time</Tab>
                </TabList>

                <TabPanel>
                    {jobs.length > 0 ? (
                        <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                            {
                                jobs.map(job => <JobCard key={job._id} job={job}></JobCard>)
                            }
                        </div>
                    ) : (
                        <p>No jobs found for On-Site Job</p>
                    )}
                </TabPanel>

                <TabPanel>
                    {jobs.length > 0 ? (
                        <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                            {
                                jobs.map(job => <JobCard key={job._id} job={job}></JobCard>)
                            }
                        </div>
                    ) : (
                        <p>No jobs found for On-Site Job</p>
                    )}
                </TabPanel>
                <TabPanel>
                    {jobs.length > 0 ? (
                        <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                            {
                                jobs.map(job => <JobCard key={job._id} job={job}></JobCard>)
                            }
                        </div>
                    ) : (
                        <p>No jobs found for Remote Job</p>
                    )}
                </TabPanel>
                <TabPanel>
                    {jobs.length > 0 ? (
                        <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                            {
                                jobs.map(job => <JobCard key={job._id} job={job}></JobCard>)
                            }
                        </div>
                    ) : (
                        <p>No jobs found for Hybrid Job</p>
                    )}
                </TabPanel>
                <TabPanel>
                    {jobs.length > 0 ? (
                        <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                            {
                                jobs.map(job => <JobCard key={job._id} job={job}></JobCard>)
                            }
                        </div>
                    ) : (
                        <p>No jobs found for Part-Time Job</p>
                    )}
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default CategoryJob;