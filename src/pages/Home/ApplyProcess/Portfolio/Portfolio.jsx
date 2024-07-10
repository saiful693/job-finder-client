import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import img_1 from '../../../../assets/slide_1.webp'

const Portfolio = () => {
    return (
        <div className='min-h-screen'>
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
                            <div className="max-w-md">
                                <div className="avatar">
                                    <div className="w-24 rounded-xl">
                                        <img src={img_1} />
                                    </div>
                                </div>
                                <h1 className="text-2xl font-bold">Margaret Lawson</h1>
                                <p>Creative Director</p>
                                <p className="py-6 text-[#282828]">
                                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                                </p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Portfolio;