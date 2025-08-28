"use client";

import { useEffect, useRef } from 'react';
import styles from './StaggeredLink.module.css';

interface StaggeredLinkProps {
    children: React.ReactNode;
    href: string;
    className?: string;
}

export default function StaggeredLink({ children, href, className }: StaggeredLinkProps) {
    const buttonRef = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        const initButtonCharacterStagger = () => {
            const offsetIncrement = 0.01;
            const button = buttonRef.current;

            if (!button) return;

            const text = button.textContent || '';
            const textSpan = button.querySelector('[data-button-animate-chars]') as HTMLElement;

            if (!textSpan) return;

            textSpan.innerHTML = '';

            [...text].forEach((char, index) => {
                const span = document.createElement('span');
                span.textContent = char;
                span.style.transitionDelay = `${index * offsetIncrement}s`;
                if (char === ' ') {
                    span.style.whiteSpace = 'pre';
                }
                textSpan.appendChild(span);
            });
        };

        initButtonCharacterStagger();
    }, [children]);

    return (
        <a
            ref={buttonRef}
            href={href}
            aria-label="Staggering button"
            className={`${styles.staggeredLink} ${className || ''}`}
        >
            <div className={styles.background}></div>
            <span data-button-animate-chars="" className={styles.textContainer}>
                {children}
            </span>
        </a>
    );
}