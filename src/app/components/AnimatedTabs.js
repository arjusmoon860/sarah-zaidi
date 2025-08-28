"use client"

import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

const AnimatedTabs = ({
    title = "1,75,000+ Success Stories",
    autoplay = true,
    autoplayDuration = 5000,
    tabs = [
        {
            number: "01",
            heading: "IUI",
            description: "A fertility treatment where washed and concentrated sperm are placed directly into the uterus to increase chances of fertilization.",
            image: "/IUI.png"
        },
        {
            number: "02",
            heading: "IVF",
            description: "A process where eggs are retrieved, fertilized with sperm in a lab, and the resulting embryo is transferred into the uterus.",
            image: "/IVF.png"
        },
        {
            number: "03",
            heading: "ICSI",
            description: "An advanced IVF technique where a single healthy sperm is directly injected into an egg to aid fertilization.",
            image: "/ICSI.png"
        }
    ]
}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const progressBarRef = useRef(null);
    const visualItemsRef = useRef([]);
    const contentItemsRef = useRef([]);
    const detailsRef = useRef([]);

    useEffect(() => {
        if (autoplay && !isAnimating) {
            startProgressBar(activeIndex);
        }
        return () => {
            if (progressBarRef.current) {
                gsap.killTweensOf(progressBarRef.current);
            }
        };
    }, [activeIndex, autoplay, isAnimating]);

    const startProgressBar = (index) => {
        const progressBar = contentItemsRef.current[index]?.querySelector('[data-progress]');
        if (!progressBar) return;

        gsap.set(progressBar, { scaleX: 0, transformOrigin: "left center" });

        progressBarRef.current = gsap.to(progressBar, {
            scaleX: 1,
            duration: autoplayDuration / 1000,
            ease: "power1.inOut",
            onComplete: () => {
                if (!isAnimating) {
                    const nextIndex = (index + 1) % tabs.length;
                    switchTab(nextIndex);
                }
            }
        });
    };

    const switchTab = (index) => {
        if (isAnimating || index === activeIndex) return;

        setIsAnimating(true);
        if (progressBarRef.current) {
            progressBarRef.current.kill();
        }

        const outgoingVisual = visualItemsRef.current[activeIndex];
        const outgoingDetails = detailsRef.current[activeIndex];
        const outgoingBar = contentItemsRef.current[activeIndex]?.querySelector('[data-progress]');

        const incomingVisual = visualItemsRef.current[index];
        const incomingDetails = detailsRef.current[index];
        const incomingBar = contentItemsRef.current[index]?.querySelector('[data-progress]');

        const tl = gsap.timeline({
            defaults: { duration: 0.65, ease: "power3" },
            onComplete: () => {
                setActiveIndex(index);
                setIsAnimating(false);
            }
        });

        // Animate outgoing elements
        if (activeIndex !== null && outgoingVisual) {
            tl.set(outgoingBar, { transformOrigin: "right center" })
                .to(outgoingBar, { scaleX: 0, duration: 0.3 }, 0)
                .to(outgoingVisual, { autoAlpha: 0, xPercent: 3 }, 0)
                .to(outgoingDetails, { height: 0 }, 0);
        }

        // Animate incoming elements
        tl.fromTo(incomingVisual,
            { autoAlpha: 0, xPercent: 3 },
            { autoAlpha: 1, xPercent: 0 },
            0.3
        )
            .fromTo(incomingDetails,
                { height: 0 },
                { height: "auto" },
                0
            )
            .set(incomingBar, { scaleX: 0, transformOrigin: "left center" }, 0);
    };

    const handleTabClick = (index) => {
        if (index === activeIndex) return;
        switchTab(index);
    };

    return (
        <div className="relative z-10 flex flex-row flex-wrap px-4">
            {/* Content Column */}
            <div className="w-full lg:w-1/2 px-2">
                <div className="flex flex-col items-start pt-4 pr-10 lg:pr-10">
                    {/* Header */}
                    <div className="flex flex-col gap-8 mb-8">
                        <h1 className="text-3xl lg:text-6xl font-semibold m-0 text-white">
                            {title}
                        </h1>
                    </div>

                    {/* Tab Content */}
                    <div className="flex flex-col items-stretch w-full max-w-lg">
                        {tabs.map((tab, index) => (
                            <div
                                key={index}
                                ref={(el) => (contentItemsRef.current[index] = el)}
                                className={`relative w-full py-8 text-black cursor-pointer transition-opacity duration-250 ${activeIndex === index ? 'active' : ''
                                    }`}
                                onClick={() => handleTabClick(index)}
                            >
                                {/* Main Content */}
                                <div className="flex gap-8 justify-start items-start w-full">
                                    {/* Number Badge */}
                                    <div className="flex justify-center items-center w-10 h-10 bg-black text-white border border-black rounded-full text-xs font-mono transition-transform duration-400 ease-cubic-bezier">
                                        {tab.number}
                                    </div>

                                    {/* Heading */}
                                    <h2 className="text-2xl text-white lg:text-4xl font-medium leading-none m-0">
                                        {tab.heading}
                                    </h2>
                                </div>

                                {/* Details */}
                                <div
                                    ref={(el) => (detailsRef.current[index] = el)}
                                    className="w-full overflow-hidden pl-16"
                                    style={{ height: activeIndex === index ? 'auto' : 0 }}
                                >
                                    <div className="pt-4">
                                        <p className="text-base text-white mb-0">{tab.description}</p>
                                    </div>
                                    <div className="pt-4"></div>
                                </div>

                                {/* Progress Bar */}
                                <div className="absolute bottom-0 left-0 right-0 w-full h-px bg-black/20 bg-opacity-20 transition-colors duration-200">
                                    <div
                                        data-progress
                                        className="w-full h-px bg-white origin-left"
                                        style={{ transform: 'scale3d(0, 1, 1)' }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Visual Column */}
            <div className="w-full hidden md:block lg:w-1/2 px-2">
                <div className="relative w-full">
                    {tabs.map((tab, index) => (
                        <div
                            key={index}
                            ref={(el) => (visualItemsRef.current[index] = el)}
                            className={`md:absolute inset-0 flex justify-start items-start w-full h-full ${activeIndex === index ? 'visible' : 'invisible'
                                }`}
                        >
                            <div className="w-full p-2 rounded-lg overflow-hidden">
                                <Image
                                    src={tab.image}
                                    alt={tab.heading}
                                    className="rounded-2xl ml-auto"
                                    priority
                                    width={438} height={556}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AnimatedTabs;