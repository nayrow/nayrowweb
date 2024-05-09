'use client'
import React, {useState} from 'react';
import Image from "next/image";
import hamb from "../../../public/hamb.png";
import x from "../../../public/x.png";
import Link from "next/link";
import ScrollButton from "@/app/components/aboutSroll";

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick2 = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    };
    //Handles the opening and closing of our nav
    const handleClick = () => {
        setIsOpen(!isOpen);
        console.log(isOpen);
    }

    return (
        <button onClick={handleClick} className={"flex justify-center items-center "}>
            {
                !isOpen
                    ?
                    <Image src={hamb} alt={"menu"} height={50} width={50} className={"mr-4"}/>
                    :
                    <div>
                        <div className={"absolute top-8 right-0 "}>
                            <div className={"flex flex-col items-center"}>
                                <Image src={x} alt={"x button"} height={50} width={50}/>
                                <div className={"flex flex-col items-center bg-[#33363D] rounded-b-xl shadow-xl"}>
                                    <ScrollButton/>
                                    <Link href={"https://cns-media.com/#projects"} className={"text-[#F0F8FF] px-6 mt-4"}>Projects</Link>
                                    <Link href={"https://cns-media.com/#contact"} className={"text-[#F0F8FF] mt-4"}>Contact</Link>
                                    <Link href={"https://cns-media.com"} className={"text-[#F9E784] pb-6 mt-4"}>C&S MEDIA</Link>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </button>
    );
}