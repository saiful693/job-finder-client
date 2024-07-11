
import apply_img from '../../../assets/how-applybg.png'
import talent from '../../../assets/talent.png'
import human from '../../../assets/human-resources.png'
import get_job from '../../../assets/get_job.png'
import { motion } from 'framer-motion';
const ApplyProcess = () => {
    return (
        <div className="mt-10 py-32" style={{
            backgroundImage: `url(${apply_img})`,
        }}>
            <div className="flex justify-center text-center text-white">
                <div className="">
                    <h4 className='font-medium mb-5 text-[#fb246a]'>APPLY PROCESS</h4>
                    <h1 className="text-5xl font-bold mb-10">How it works</h1>
                    <div className='grid gap-6 grid-cols-1 md:grid-cols-3'>
                        {/* card 1 */}
                        <div className="card bg-blue-900 mx-2 lg:w-96 shadow-xl">
                             <figure className="px-10 pt-8">
                             <motion.div
                                style={{ width: '200px', height: '200px', perspective: '1000px' }}
                                whileHover={{
                                    rotateY: 180,
                                    transition: { duration: 1 },
                                }}
                            >
                                <motion.img
                                    src={talent}
                                    alt="Farmer"
                                    style={{ width: '100%', height: '100%', backfaceVisibility: 'hidden' }}
                                />
                            </motion.div>
                            </figure> 

                           
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">1. Search a job</h2>
                                <p>Users should be able to browse and search for job openings based on criteria such as job title, location, salary range, and more.</p>
                            </div>
                        </div>
                        {/* card 2 */}
                        <div className="card mx-2 bg-blue-900 lg:w-96 shadow-xl">
                             <figure className="px-10 pt-8">
                             <motion.div
                                style={{ width: '200px', height: '200px', perspective: '1000px' }}
                                whileHover={{
                                    rotateY: 180,
                                    transition: { duration: 1 },
                                }}
                            >
                                <motion.img
                                    src={human}
                                    alt="Farmer"
                                    style={{ width: '100%', height: '100%', backfaceVisibility: 'hidden' }}
                                />
                            </motion.div>
                            </figure> 

                           
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">2. Apply for job</h2>
                                <p>Once users find a job opening they are interested in, they should be able to apply for it.</p>
                            </div>
                        </div>
                        {/* card 3 */}
                        <div className="card mx-2 bg-blue-900 lg:w-96 shadow-xl">
                             <figure className="px-10 pt-8">
                             <motion.div
                                style={{ width: '200px', height: '200px', perspective: '1000px' }}
                                whileHover={{
                                    rotateY: 180,
                                    transition: { duration: 1 },
                                }}
                            >
                                <motion.img
                                    src={get_job}
                                    alt="Farmer"
                                    style={{ width: '100%', height: '100%', backfaceVisibility: 'hidden' }}
                                />
                            </motion.div>
                            </figure> 

                           
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">3. Get your job</h2>
                                <p>After applying, the employer may review the applications and contact suitable candidates for interviews and potentially extend a job offer to the selected candidate.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApplyProcess;