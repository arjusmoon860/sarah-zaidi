'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperCore } from "swiper";
import "swiper/css";
import Image from 'next/image';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

// Sample data - replace with your actual data structure
const procedureData = {
    section_title: "ICSI Procedure",
    sub_title: "Advanced Fertility Treatment",
    section_accordions: [
        {
            id: 1,
            title: "Sperm Selection",
            description: "Careful selection of the healthiest sperm"
        },
        {
            id: 2,
            title: "Egg Preparation",
            description: "Preparation of mature eggs for injection"
        },
        {
            id: 3,
            title: "Micro-injection",
            description: "Precise injection of sperm into egg"
        },
        {
            id: 4,
            title: "Embryo Culture",
            description: "Monitoring embryo development"
        },
        {
            id: 5,
            title: "Transfer Process",
            description: "Careful embryo transfer to uterus"
        }
    ]
};

export default function ProcedureVideo() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const heading1Ref = useRef<HTMLDivElement>(null);
    const heading2Ref = useRef<HTMLDivElement>(null);
    const tabsRef = useRef<(HTMLDivElement | null)[]>([]);
    const swiperRef = useRef<SwiperCore | null>(null);
    const lastSlideIndex = useRef(-1);
    const isUpdatingSwiper = useRef(false);

    useEffect(() => {
        if (!sectionRef.current || !imageRef.current) return;

        const frames = Array.from({ length: 54 }, (_, i) => {
            const frameNumber = String(i + 1).padStart(3, '0');
            return `/icsi-cut/ezgif-frame-${frameNumber}.jpg`;
        });

        let currentFrame = 0;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top top',
                end: '+=300%',
                pin: true,
                scrub: 0.25,
                onUpdate: (self) => {
                    const progress = self.progress;
                    const frameIndex = Math.floor(progress * (frames.length - 1));

                    if (frameIndex !== currentFrame && frameIndex >= 0 && frameIndex < frames.length) {
                        currentFrame = frameIndex;
                        imageRef.current!.src = frames[frameIndex];
                    }

                    // Handle mobile swiper sync
                    if (swiperRef.current && procedureData?.section_accordions && window.innerWidth < 1024 && !isUpdatingSwiper.current) {
                        const totalSlides = procedureData.section_accordions.length;
                        if (totalSlides > 0) {
                            const exactSlidePosition = self.progress * totalSlides;
                            const slideIndex = Math.floor(exactSlidePosition);
                            const clampedSlideIndex = Math.max(0, Math.min(slideIndex, totalSlides - 1));

                            if (lastSlideIndex.current !== clampedSlideIndex) {
                                lastSlideIndex.current = clampedSlideIndex;
                                isUpdatingSwiper.current = true;
                                requestAnimationFrame(() => {
                                    if (swiperRef.current) {
                                        swiperRef.current.slideTo(clampedSlideIndex, 200);
                                        setTimeout(() => {
                                            isUpdatingSwiper.current = false;
                                        }, 250);
                                    }
                                });
                            }
                        }
                    }
                }
            }
        });

        // Animate headings
        tl.fromTo(
            heading1Ref.current,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.15, ease: "power2.out" },
            0.1
        );

        tl.fromTo(
            heading2Ref.current,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.15, ease: "power2.out" },
            0.2
        );

        // Animate desktop tabs
        tabsRef.current.forEach((tab, index) => {
            if (tab) {
                tl.fromTo(
                    tab,
                    { y: 40, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.3, ease: "power2.out" },
                    0.3 + index * 0.1
                );
            }
        });

        imageRef.current.src = frames[0];

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    // Function to update slide opacity
    const updateSlideOpacity = (swiper: SwiperCore) => {
        swiper?.slides?.forEach((slide, index) => {
            const slideElement = slide.querySelector(".slide-content");
            if (slideElement) {
                if (index === swiper.activeIndex) {
                    slideElement.classList.remove("opacity-50");
                    slideElement.classList.add("opacity-100");
                } else {
                    slideElement.classList.remove("opacity-100");
                    slideElement.classList.add("opacity-50");
                }
            }
        });
    };

    return (
        <section
            ref={sectionRef}
            className="relative w-full h-screen bg-black overflow-hidden"
        >
            <img
                ref={imageRef}
                className="absolute inset-0 w-full h-full object-cover"
                alt="ICSI Procedure Video Frame"
            />

            <div className='absolute top-0 left-0 w-full h-full bg-black/50 z-10'></div>

            {/* Headings */}
            <div className="absolute top-[10%] lg:top-[30%] w-full left-1/2 transform -translate-x-1/2 z-20 text-center lg:flex lg:justify-center lg:gap-8">
                {/* <div ref={heading1Ref} className="opacity-0">
                    <h2 className="text-white text-3xl lg:text-5xl xl:text-6xl font-bold">
                        {procedureData?.section_title}
                    </h2>
                </div> */}
                <div ref={heading2Ref} className="opacity-0 mt-4 lg:mt-0">
                    <h2 className="text-white text-3xl lg:text-5xl xl:text-6xl font-bold">
                        {procedureData?.sub_title}
                    </h2>
                </div>
            </div>

            {/* Desktop tabs */}
            <div className="hidden lg:flex justify-center items-center gap-8 xl:gap-12 absolute w-full bottom-[15%] left-1/2 transform -translate-x-1/2 z-20">
                {procedureData?.section_accordions?.map((item, index) => (
                    <div
                        key={item.id}
                        ref={(el: HTMLDivElement | null) => {
                            tabsRef.current[index] = el;
                        }}
                        className="flex flex-col items-center text-center opacity-0 max-w-[200px]"
                    >
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mb-4">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M20 6L9 17l-5-5" />
                            </svg>
                        </div>
                        <h3 className="text-white text-lg xl:text-xl font-semibold mb-2">
                            {item.title}
                        </h3>
                        <p className="text-white/80 text-sm xl:text-base">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>

            {/* Mobile swiper */}
            <div className="block lg:hidden absolute bottom-[10%] left-1/2 transform -translate-x-1/2 z-20 w-full">
                <Swiper
                    centeredSlides={true}
                    slidesPerView={1.2}
                    spaceBetween={20}
                    allowTouchMove={false}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                        setTimeout(() => {
                            updateSlideOpacity(swiper);
                        }, 100);
                    }}
                    onSlideChange={(swiper) => {
                        if (!isUpdatingSwiper.current) {
                            updateSlideOpacity(swiper);
                        }
                    }}
                    onTransitionEnd={(swiper) => {
                        updateSlideOpacity(swiper);
                    }}
                >
                    {procedureData?.section_accordions?.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="slide-content opacity-50 rounded-lg p-4 border border-white bg-white/20 backdrop-blur-sm transition-opacity duration-300 text-center">
                                <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center mb-3 mx-auto">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M20 6L9 17l-5-5" />
                                    </svg>
                                </div>
                                <h3 className="text-white text-base font-semibold mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-white/80 text-sm">
                                    {item.description}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}