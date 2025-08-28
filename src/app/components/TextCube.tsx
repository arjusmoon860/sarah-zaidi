'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Text3DRotate({ text, reverseAnimation, delay, darkcolor }: { text: string, reverseAnimation: boolean, delay: number, darkcolor: boolean }) {
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = textRef.current;
        if (!el) return;
        gsap.fromTo(
            el,
            { opacity: 0 },
            {
                opacity: 1,
                duration: 0.2,
                ease: 'power3.out',

            }
        );
        gsap.fromTo(
            el,
            { rotationX: reverseAnimation ? 270 : 180, },
            {
                rotationX: reverseAnimation ? 180 : 270,
                duration: 0.5,
                ease: 'power3.out',
                delay: delay,
            }
        );
    }, []);

    return (
        <div className="wrapText3D">
            <div className={`cubespinner opacity-0`} ref={textRef}>
                <div className="face1"></div>
                <div className={`face2 text-[36px] lg:text-[64px] xl:text-[clamp(64px,5vw,78px)] ${darkcolor ? "text-blue-50" : "text-blue-800"}`}>{text}</div>
                <div className={`face3 text-[36px] lg:text-[64px] xl:text-[clamp(64px,5vw,78px)] ${darkcolor ? "text-blue-800" : "text-blue-50"}`}>{text}</div>
                <span className='opacity-0 text-[36px] lg:text-[64px] xl:text-[clamp(64px,5vw,78px)]'>{text}</span>
            </div>
        </div>
    );
}