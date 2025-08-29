"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import Container from "../Container";
import Image from "next/image";
import dynamic from "next/dynamic";
import scrollBottom1 from "../../../../public/scroll-bottom.json";
import StaggeredLink from "../StaggeredLink/StaggeredLink";

export default function Header() {
    const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
    const windowHeight = 900;
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef1 = useRef<HTMLHeadingElement>(null);
    const textRef2 = useRef<HTMLHeadingElement>(null);
    const mainBoxRef = useRef<HTMLDivElement>(null);
    const doctorImageRef = useRef<HTMLDivElement>(null);
    const doctorDetailsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (!containerRef.current) return;

        const ctx = gsap.context(() => {
            gsap.set(doctorDetailsRef.current, {
                opacity: 0,
                y: 50,
                scale: 0.9
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: `+=${windowHeight * 2}`,
                    pin: true,
                    scrub: 0.25,
                    pinSpacing: true,
                },
            });

            tl.to(textRef1.current, {
                y: "-55dvh",
                opacity: 0,
                color: "#ffacc3",
                ease: "power2.out",
                duration: 2,
            }, "first")
                .to(textRef2.current, {
                    y: "55dvh",
                    opacity: 0,
                    color: "#ffacc3",
                    ease: "power2.out",
                    duration: 2,
                }, "first")
                .to(mainBoxRef.current, {
                    opacity: 1,
                    scaleX: 1,
                    scaleY: 1,
                    ease: "power2.out",
                    duration: 2,
                }, "<")
                .to(doctorImageRef.current, {
                    bottom: 0,
                    opacity: 1,
                    ease: "power2.out",
                    duration: 2,
                }, "<")
                .to(doctorDetailsRef.current, {
                    opacity: 1,
                    bottom: 0,
                    scaleX: 1,
                    scaleY: 1,
                    duration: 1.2,
                    ease: "power3.out"
                }, "<");
        }, containerRef);

        return () => ctx.revert();
    }, [windowHeight]);

    return (
        <div
            ref={containerRef}
            className="relative h-screen w-full flex justify-center items-center"
        >

            <div className="flex gap-0 flex-col justify-between items-center">
                <h1 ref={textRef1} className="text-[36px] lg:text-[64px] xl:text-[clamp(64px,5vw,78px)] font-semibold text-[#d7003c]">
                    Hope <span className="text-[#ffacc3]">restored</span>
                </h1>
                <h1 ref={textRef2} className="text-[36px] lg:text-[64px] xl:text-[clamp(64px,5vw,78px)] font-semibold text-[#d7003c]">
                    <span className="text-[#ffacc3]">Dreams </span>fulfilled
                </h1>
            </div>

            <div
                ref={mainBoxRef}
                className="absolute rounded-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[calc(100dvh-140px)] opacity-0 scale-0"
            >
                <Container>
                    <div className="relative w-full h-[calc(100dvh-140px)] overflow-hidden rounded-2xl">
                        <Image src="/hospital-bg.png" alt="Hero Image" fill className="object-cover" />

                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#000]/80" />

                        <div ref={doctorDetailsRef} className="doctor-details absolute top-0 text-center md:text-left md:top-1/2 md:left-[100px] md:-translate-y-1/2">
                            <h2 className="text-[36px] leading-none lg:text-[64px] xl:text-[clamp(64px,5vw,78px)] text-white font-bold">
                                Dr. Sarah Zaidi
                            </h2>
                            <p className="text-[16px] lg:text-[24px] xl:text-[clamp(24px,1.5vw,24px)] text-white mt-0">
                                MBBS, MS, DNB, F.ART (ICOG)
                            </p>
                            <hr className="my-2 border-white opacity-50" />
                            <p className="text-[16px] lg:text-[24px] xl:text-[18px] text-white mt-0">
                                Cluster Business Director  | Dadar, Mumbai, Maharashtra
                            </p>

                            <StaggeredLink href="/" className="bg-[#b61e42] mx-auto md:mr-auto md:ml-0 py-2 px-4 rounded-full text-white mt-6">
                                <span>Schedule Consultation</span>
                            </StaggeredLink>
                        </div>

                        <div ref={doctorImageRef} className="doctor-image absolute -bottom-[436px] md:-bottom-[496px] right-0 w-full h-auto md:w-[423px] md:h-[496px] z-10">
                            <div className="absolute top-0 left-0 w-full h-full" />
                            <Image src="/doctor.png" className="w-full h-full" alt="Doctor" width={423} height={496} />
                        </div>
                    </div>
                </Container>
            </div>

            <div className="absolute top-[100dvh] -mt-[50px] left-0 w-full">
                <div className="flex flex-row gap-4 justify-center">
                    <Lottie
                        animationData={scrollBottom1}
                        className="h-[40px] w-[30px]"
                    />
                    <p className="mt-[14px] text-[12px] text-[#d7003c]">
                        SCROLL DOWN
                    </p>
                    <Lottie
                        animationData={scrollBottom1}
                        className="h-[40px] w-[30px]"
                    />
                </div>
            </div>
        </div>
    );
}
