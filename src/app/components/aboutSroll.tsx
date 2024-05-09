'use client'
import React from "react";

const handleClick = () => {
    window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
    });
};
export default function ScrollButton() {
    return (
        <button onClick={handleClick} className={"text-[#F0F8FF] mt-4"}>About</button>
    );
}