'use client'
import React from "react";

const handleClick = () => {
    window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
    });
};
export default function ScrolButton() {
    return (
        <button onClick={handleClick} className={"text-[#F0F8FF]"}>About</button>
    );
}