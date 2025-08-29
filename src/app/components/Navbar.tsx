"use client";

import Container from "./Container";
import Image from "next/image";
import StaggeredLink from "./StaggeredLink/StaggeredLink";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="fixed top-4 left-0 w-full z-50" data-navigation-status={isOpen ? 'active' : 'not-active'}>
                <Container>
                    <div className={`bg-[#ffd8d8] md:mx-6 transition-[height] duration-300 ease-in-out ${isOpen ? 'rounded-t-3xl rounded-b-3xl' : 'rounded-full'}`}>
                        <div className={`flex py-4 justify-between items-center md:mx-6 transition-[height] duration-300 ease-in-out px-8`}>
                            <div className="logo">
                                <Image src="/indira-ivf.png" className="w-[40%]" alt="Logo" width={804} height={203} />
                            </div>

                            <div className="items-center gap-10 hidden md:flex">
                                <StaggeredLink className="text-black" href="#about-me">About Me</StaggeredLink>
                                <StaggeredLink className="text-black" href="#procedures">Procedures</StaggeredLink>
                                <StaggeredLink className="text-black" href="#contact">Contact Us</StaggeredLink>
                            </div>
                            <button onClick={() => setIsOpen(!isOpen)} data-navigation-toggle="toggle" data-hover="" className="centered-nav__toggle md:hidden">
                                <div className="centered-nav__toggle-bar"></div>
                                <div className="centered-nav__toggle-bar"></div>
                            </button>
                        </div>
                        <div className={`centered-nav__content bg-[#ffd8d8] rounded-b-3xl py-4 px-8 md:hidden overflow-hidden ${isOpen ? 'block' : 'hidden'}`}>
                            <div className="centered-nav__inner">
                                <ul className="centered-nav__ul flex flex-col gap-4">
                                    <div data-navigation-item="" className="centered-nav__li">
                                        <a href="/" className="hamburger-nav__a text-black">
                                            <p className="hamburger-nav__p text-black">Home</p>
                                        </a>
                                    </div>
                                    <div data-navigation-item="" className="centered-nav__li">
                                        <a href="#about-me" className="hamburger-nav__a text-black">
                                            <p className="hamburger-nav__p text-black">About Me</p>
                                        </a>
                                    </div>
                                    <div data-navigation-item="" className="centered-nav__li">
                                        <a href="#procedures" className="hamburger-nav__a text-black">
                                            <p className="hamburger-nav__p text-black">Procedures</p>
                                        </a>
                                    </div>
                                    <div data-navigation-item="" className="centered-nav__li">
                                        <a href="#contact" className="hamburger-nav__a text-black">
                                            <p className="hamburger-nav__p text-black">Contact Us</p>
                                        </a>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

        </>
    );
}