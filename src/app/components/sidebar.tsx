'use client'
import React, {useState} from 'react';

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    //Handles the opening and closing of our nav
    const handleClick = () => {
        setIsOpen(!isOpen);
        console.log(isOpen);
    }

    return (
        <button onClick={handleClick}>
            a
        </button>
    );
}