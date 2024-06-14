
import { useQuery } from "@tanstack/react-query";
import React, { useRef, useState } from 'react';
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { motion } from "framer-motion";


const Carousel = () => {
    const axiosPublic = useAxiosPublic();

    const { data: carousel = [] } = useQuery({
        queryKey: ['carousel-data'],
        queryFn: async () => {
            const res = await axiosPublic.get('/carousels');
            console.log(res.data);
            return res.data;
        }
    })

    return (
        <div className=''>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                {
                    carousel.map(slide => <SwiperSlide
                        key={slide._id}
                    >
                        <div className='carousel-item relative'>
                            <img src={slide.img} alt="carousel_image" />
                            <div className="absolute flex items-center w-full h-full bg-gradient-to-r from-[#151515] to-[black, 0.5]">
                                <div className='text-center p-4 w-full flex flex-col text-white space-y-5 lg:text-left lg:w-2/3 lg:pl-16'>
                                    <div>
                                        <motion.h1
                                            initial={{ x: 50 }}
                                            animate={{ x: [50, 0] }}
                                            transition={{
                                                duration: "1",
                                                delay: "0.5"
                                            }}
                                            className='font-bold text-2xl md:text-4xl lg:text-6xl'>
                                            {slide.heading}
                                        </motion.h1>
                                        <motion.p
                                            initial={{ y: -30 }}
                                            animate={{ y: [30, 0] }}
                                            transition={{
                                                duration: "1",
                                                delay: "0.5"
                                            }}
                                            className='banner_para'>{slide.subheading}
                                        </motion.p>
                                        <div>
                                            <motion.button
                                                initial={{ y: -40 }}
                                                animate={{ y: [40, 0] }}
                                                transition={{
                                                    duration: "1",
                                                    delay: "0.5"
                                                }}
                                                className="btn bg-secondary rounded-sm hover:bg-secondary-light text-white border-0 sm:btn-sm mb-2 md:btn-md md:me-2 lg:btn-lg">Explore</motion.button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Carousel;