import Image from "next/image";
import logo from "../../../public/logo.png";
import Link from "next/link";
import React from "react";
import Sidebar from "@/app/components/sidebar";
import ScrolButton from "@/app/components/aboutScroll";

export default function Header() {
    return (
        <div
            className={"flex justify-between py-8 px-4 md:px-40 items-center"}
        >
            <Image src={logo} width={50} height={50} alt={"logo"}/>
            <div
                className={"space-x-4 hidden md:flex"}
            >
                <ScrolButton/>
                <Link
                    href={"https://cns-media.com/#projects"}
                    className={"text-[#F0F8FF]"}
                >
                    Projects
                </Link>
                <Link
                    href={"https://cns-media.com/#contact"}
                    className={"text-[#F0F8FF]"}
                >
                    Contact
                </Link>
            </div>
            <Link href={"https://cns-media.com"} className={"text-[#F9E784] hidden md:flex"}>C&S MEDIA</Link>
            <div className={"md:hidden"}>
                <Sidebar/>
            </div>
        </div>
    );
}