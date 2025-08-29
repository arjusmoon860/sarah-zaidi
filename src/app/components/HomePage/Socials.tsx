'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Container from "../Container";
import CustomCursorTrigger from '../CustomCursor';

export default function Socials() {
    const socialImages = [
        {
            image: '/reels/reels-5.jpg',
            url: "https://www.instagram.com/p/DNnnpfdsER6",
        },
        {
            image: '/reels/reels-1.jpg',
            url: "https://www.instagram.com/p/DMh_gf3ttCS",
        },
        {
            image: '/reels/reels-3.jpg',
            url: "https://www.instagram.com/p/DLXYfiItXqZ",
        },
        {
            image: '/reels/reels-4.jpg',
            url: "https://www.instagram.com/p/DKKBnTisuh2",
        },
        {
            image: '/reels/reels-2.jpg',
            url: "https://www.instagram.com/p/DMNhbyUNdUj",
        },
    ];

    return (
        <div className="bg-white py-10 md:py-[120px] overflow-hidden">
            <Container>
                <div className="mb-8 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        IVF Simplified
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl">
                        Explore bite-sized reels where Dr. Sarah Zaidi Merchant answers common questions and shares insights on infertility treatments.
                    </p>
                </div>
            </Container>

            <div className="relative mt-4 w-full overflow-hidden">
                <div className="w-full px-4 py-4 md:px-8 lg:px-16">
                    <div className="relative max-w-full">
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={24}
                            slidesPerView={1.2}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2.2,
                                    spaceBetween: 24,
                                },
                                768: {
                                    slidesPerView: 2.5,
                                    spaceBetween: 32,
                                },
                                1024: {
                                    slidesPerView: 3.2,
                                    spaceBetween: 32,
                                },
                                1280: {
                                    slidesPerView: 3.5,
                                    spaceBetween: 40,
                                },
                            }}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            }}
                            pagination={{
                                clickable: true,
                                el: '.swiper-pagination',
                            }}
                            // autoplay={{
                            //     delay: 5000,
                            //     disableOnInteraction: false,
                            // }}
                            loop={true}
                            className="!overflow-visible"
                            style={{ width: '100%', maxWidth: '100%' }}
                        >
                            {socialImages.map((image, index) => (
                                <SwiperSlide key={index} style={{ width: 'auto' }}>
                                    <CustomCursorTrigger
                                        title="Watch video"
                                        color="#b61e42"
                                        className="group cursor-pointer"
                                        onClick={() => window.open(image.url, '_blank')}
                                    >
                                        <div className="relative overflow-hidden rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-102">
                                            <div className="relative w-full" style={{ aspectRatio: '3/4' }}>
                                                <img
                                                    src={image.image}
                                                    alt={`Success story ${index + 1}`}
                                                    className="w-full h-full object-cover"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            </div>
                                        </div>
                                    </CustomCursorTrigger>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <div className="swiper-button-prev !w-12 !h-12 !bg-white !text-gray-800 !rounded-full !shadow-lg hover:!bg-gray-100 transition-colors duration-200 !left-4 !top-1/2 !-translate-y-1/2 z-10">
                        </div>
                        <div className="swiper-button-next !w-12 !h-12 !bg-white !text-gray-800 !rounded-full !shadow-lg hover:!bg-gray-100 transition-colors duration-200 !right-4 !top-1/2 !-translate-y-1/2 z-10">
                        </div>
                    </div>
                </div>

                {/* Pagination dots */}
                <div className="swiper-pagination !relative !mt-3 !bottom-0" />
            </div>
        </div>
    );
}