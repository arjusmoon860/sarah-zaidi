'use client';

import Image from "next/image";
import { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BubbleButton from "../BubbleButton";
import Lottie from "lottie-react";
import scrollBottom1 from "../../../../public/scroll-bottom.json";

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export default function ContactSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const imageRef1 = useRef<HTMLImageElement>(null);
    const imageRef2 = useRef<HTMLImageElement>(null);
    const imageRef3 = useRef<HTMLImageElement>(null);
    const imageRef4 = useRef<HTMLImageElement>(null);
    const imageRef5 = useRef<HTMLImageElement>(null);
    const imageRef6 = useRef<HTMLImageElement>(null);
    const imageRef7 = useRef<HTMLImageElement>(null);
    const locationInfoRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        // Set initial state for images (hidden)
        const imageRefs = [imageRef1, imageRef2, imageRef3, imageRef4, imageRef5, imageRef6, imageRef7];
        imageRefs.forEach(ref => {
            if (ref.current) {
                gsap.set(ref.current, { scale: 0.8, opacity: 0 });
            }
        });

        // Set initial state for location info (hidden)
        if (locationInfoRef.current) {
            gsap.set(locationInfoRef.current, { opacity: 0 });
        }

        // Animation for images appearing when section enters viewport
        const imageTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%', // Start animation when section is 80% in view
                toggleActions: "play none none reverse"
            }
        });

        // Animate images with staggered timing
        imageRefs.forEach((ref, index) => {
            if (ref.current) {
                imageTimeline.to(
                    ref.current,
                    {
                        scale: 1,
                        opacity: 1,
                        duration: 0.6,
                        ease: "back.out(1.7)"
                    },
                    index * 0.1 // Stagger each image by 0.1 seconds
                );
            }
        });

        // Separate timeline for location info that appears on scroll within the section
        const locationTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top top',
                end: '+=200%',
                pin: true,
                scrub: 0.5,
            }
        });

        // Define scatter directions for each image
        const scatterDirections = [
            { x: -300, y: -200 }, // image 1: top-left
            { x: 0, y: -400 },    // image 2: top center
            { x: -250, y: -150 }, // image 3: top-left
            { x: 400, y: -200 },  // image 4: top-right
            { x: 350, y: -100 },  // image 5: top-right
            { x: -350, y: 250 },  // image 6: bottom-left
            { x: 300, y: 300 },   // image 7: bottom-right
        ];

        // Animate images scattering away
        imageRefs.forEach((ref, index) => {
            if (ref.current) {
                const direction = scatterDirections[index];
                locationTimeline.to(
                    ref.current,
                    {
                        x: direction.x,
                        y: direction.y,
                        opacity: 0,
                        scale: 0.2,
                        duration: 0.8,
                        ease: "power2.in"
                    },
                    0 // All images start scattering at the same time
                );
            }
        });

        // Show location info after images have scattered
        locationTimeline.to(
            locationInfoRef.current,
            {
                opacity: 1,
                duration: 0.8,
                ease: "power2.out"
            },
            0.6 // Start showing location info 0.6 seconds after scatter begins
        );

        // Cleanup function
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div ref={sectionRef} className="contact-section overflow-hidden bg-[#b61e42] h-screen py-10 md:py-[120px] relative" id="contact">
            <div className="team-pictures absolute top-1/2 left-1/2 max-w-[700px] w-[96%] h-[700px] lg:h-[540px] translate-x-[-50%] translate-y-[-50%] z-[2]">
                <div className="absolute top-[30%] md:top-[5%] md:top-[10%] left-0" ref={imageRef1}>
                    <div className="w-[150px] h-[210px] team-picture relative">
                        <Image src="/contact-images/2.jpg" fill className="object-cover rounded-lg" alt="Team Picture" />
                    </div>
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" ref={imageRef2}>
                    <div className="w-[215px] h-[340px] team-picture relative">
                        <Image src="/contact-images/1.jpg" fill className="object-cover rounded-lg" alt="Team Picture" />
                    </div>
                </div>
                <div className="absolute top-0 left-[18%]" ref={imageRef3}>
                    <div className="w-[160px] h-[235px] team-picture relative">
                        <Image src="/contact-images/3.jpg" fill className="object-cover rounded-lg" alt="Team Picture" />
                    </div>
                </div>
                <div className="absolute top-0 right-[17%]" ref={imageRef4}>
                    <div className="w-[145px] h-[120px] team-picture relative">
                        <Image src="/contact-images/4.jpg" fill className="object-cover rounded-lg" alt="Team Picture" />
                    </div>
                </div>
                <div className="absolute top-[13%] right-0" ref={imageRef5}>
                    <div className="w-[160px] h-[280px] team-picture relative">
                        <Image src="/contact-images/5.jpg" fill className="object-cover rounded-lg" alt="Team Picture" />
                    </div>
                </div>
                <div className="absolute bottom-[4%] left-0 md:left-[16%]" ref={imageRef6}>
                    <div className="w-[200px] h-[200px] team-picture relative">
                        <Image src="/contact-images/6.jpg" fill className="object-cover rounded-lg" alt="Team Picture" />
                    </div>
                </div>
                <div className="absolute bottom-0 right-0 md:right-[10%] -translate-x-1/2" ref={imageRef7}>
                    <div className="w-[145px] h-[220px] team-picture relative">
                        <Image src="/contact-images/7.jpg" fill className="object-cover rounded-lg" alt="Team Picture" />
                    </div>
                </div>
            </div>

            <div ref={locationInfoRef} className="location-info absolute w-full px-2 md:px-0 md:w-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-[3]">
                <h1 className="text-white text-4xl font-bold">Visit Us</h1>
                <h2 className="text-white text-2xl font-bold mt-4">
                    Indira IVF Fertility Centre - Best IVF Center in Dadar, Mumbai
                </h2>
                <p className="text-white text-lg md:text-xl mt-4">
                    <span className="font-bold">Address:</span> 1, 6th floor, office no. 601, Diamond Plaza, new street, Chabildas Rd, near Tilak Bridge, W, Dadar, Mumbai, Maharashtra 400028
                </p>
                <p className="text-white text-lg md:text-xl mt-4">
                    <span className="font-bold">Phone:</span> <a href="tel:+9108867181100" className="text-white">+91 98200 00000</a>
                </p>

                <div className="mt-6">
                    <BubbleButton href="https://www.google.com/maps/place/Indira+IVF+Fertility+Centre+-+Best+IVF+Center+in+Dadar,+Mumbai/data=!4m2!3m1!1s0x0:0xa9d52f9aa1ec4e8b?sa=X&ved=1t:2428&ictx=111" text="View on map" />
                </div>
            </div>

            <div className="absolute top-[100dvh] -mt-[50px] left-0 w-full">
                <div className="flex flex-row gap-4 justify-center">
                    <Lottie
                        animationData={scrollBottom1}
                        className="h-[40px] w-[30px]"
                    />
                    <p className="mt-[14px] text-[12px] text-white">
                        SCROLL DOWN
                    </p>
                    <Lottie
                        color="#fff"
                        animationData={scrollBottom1}
                        className="h-[40px] w-[30px]"
                    />
                </div>
            </div>
        </div>
    );
}