"use client";

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';

export function useLenis() {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.1,
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            touchMultiplier: 2,
        });

        lenisRef.current = lenis;

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);

        const handleAnchorClick = (e: MouseEvent) => {
            const target = (e.target as HTMLElement).closest('a[href^="#"]');
            if (target) {
                e.preventDefault();
                const href = target.getAttribute('href');
                const targetElement = document.querySelector(href || '') as HTMLElement;

                if (targetElement) {
                    lenis.scrollTo(targetElement, {
                        easing: (x) => (x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2),
                        duration: 1.2,
                        offset: 0
                    });
                }
            }
        };

        document.addEventListener('click', handleAnchorClick);

        return () => {
            document.removeEventListener('click', handleAnchorClick);
            gsap.ticker.remove((time) => {
                lenis.raf(time * 1000);
            });
            lenis.destroy();
        };
    }, []);

    // Return the lenis instance for manual control if needed
    return lenisRef.current;
}