import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const CustomText = () => {
    return (
        <span style={{ fontFamily: 'IBM Plex Mono, monospace', marginLeft: '8px', color: '#FFFFFF' }}>BuzzCall</span>
    );
};

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500;700&display=swap" />

const Navbar = () => {
    return (
        <nav className="flex max-container padding-container relative z-30 py-5">
            <div className="flex items-center" style={{ padding: '0 24px 0 10px' }}>
                <Image src="/microphone-icon.svg" alt="logo" width={29} height={29} />
                <CustomText />
            </div>
            <div className="flex ml-auto" style={{ padding: '0 24px 0 15px' }}>
                <Button variant="outline" style={{ marginRight: '15px' }}>Sign up</Button>
                <Button variant="secondary">Log in</Button>
            </div>
        </nav>
    )
}

export default Navbar