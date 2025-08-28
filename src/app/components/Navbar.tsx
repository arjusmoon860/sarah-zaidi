"use client";

import Container from "./Container";
import Image from "next/image";
import StaggeredLink from "./StaggeredLink/StaggeredLink";

export default function Navbar() {
    return (
        <div className="fixed top-4 left-0 w-full z-50">
            <Container>
                <div className="flex py-4 justify-between items-center md:mx-6 bg-[#ffd8d8] px-8 rounded-full">
                    <div className="logo">
                        <Image src="/indira-ivf.png" className="w-[40%]" alt="Logo" width={804} height={203} />
                    </div>

                    <div className="items-center gap-10 hidden md:flex">
                        <StaggeredLink className="text-black" href="#about-me">About Me</StaggeredLink>
                        <StaggeredLink className="text-black" href="#services">Procedures</StaggeredLink>
                        <StaggeredLink className="text-black" href="#contact">Contact Us</StaggeredLink>
                    </div>
                </div>
            </Container>
        </div>
    );
}