'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export default function ProcedureVideo() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);

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
                }
            }
        });

        imageRef.current.src = frames[0];

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

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

            {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <div className="text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        ICSI Procedure
                    </h1>
                    <p className="text-lg md:text-xl opacity-80">
                        Scroll to see the procedure step by step
                    </p>
                </div>
            </div> */}
        </section>
    );
}