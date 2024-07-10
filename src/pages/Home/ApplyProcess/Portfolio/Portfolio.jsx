import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import img_1 from '../../../../assets/slide_1.webp'
import img_2 from '../../../../assets/slide_2.webp'
import img_3 from '../../../../assets/slide_3.jpg'

const Portfolio = () => {
    return (
        <div className='min-h-[500px]'>
            <Swiper
                pagination={{ clickable: true }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
            >
                <SwiperSlide>
                    <div className="hero">
                        <div className="hero-content text-center">
                            <div className="max-w-2xl">
                                <div className="avatar">
                                    <div className="w-24 rounded-xl">
                                        <img src={img_1} />
                                    </div>
                                </div>
                                <h1 className="text-2xl font-bold">Margaret Lawson</h1>
                                <p>Creative Director</p>
                                <p className="py-6 text-[#282828]">
                                    Marcus Styles is a creative director excelling in graphic design, web design, and photography. Marcus’s passion for fashion empowers busy adults to elevate their wardrobes and boost their confidence. Recognizing the need to make a lasting impression in today’s fast-paced world, he reimagines wardrobes with a bouji touch that reflects clients’ exciting lives.
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero">
                        <div className="hero-content text-center">
                            <div className="max-w-2xl">
                                <div className="avatar">
                                    <div className="w-24 rounded-xl">
                                        <img src={img_2} />
                                    </div>
                                </div>
                                <h1 className="text-2xl font-bold">Andrej Gajdos</h1>
                                <p>React Developer</p>
                                <p className="py-6 text-[#282828]">
                                I am a freelance full-stack developer. I have a strong background as a software architect and have successfully led teams as a fractional CTO. I have worked with clients from diverse industries worldwide. I have successfully delivered over 20 projects for a range of clients, including solo founders, early stage startups,
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="hero">
                        <div className="hero-content text-center">
                            <div className="max-w-2xl">
                                <div className="avatar">
                                    <div className="w-24 rounded-xl">
                                        <img src={img_3} />
                                    </div>
                                </div>
                                <h1 className="text-2xl font-bold">Saiful Islam</h1>
                                <p>MERN Stack Developer</p>
                                <p className="py-6 text-[#282828]">
                                I am a skilled software developer with experience in JavaScript, and expertise in frameworks like React, Node.js, Express.js and MongoDB. I am a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Lets work together to bring your ideas to life!
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Portfolio;