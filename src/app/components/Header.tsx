import Image from "next/image";
import logo from "../../../public/logo.png";
import Link from "next/link";
import React from "react";
import Sidebar from "@/app/components/sidebar";

export default function Header() {
    return (
        <div
            className={"flex justify-between py-8 px-4 md:px-40 items-center"}
        >
            <Image src={logo} width={50} height={50} alt={"logo"}/>
            <div
                className={"space-x-4 hidden md:flex"}
            >
                <a
                    href={"#"}
                    className={"text-[#F0F8FF]"}
                >
                    About
                </a>
                <a
                    href={"#"}
                    className={"text-[#F0F8FF]"}
                >
                    Projects
                </a>
                <a
                    href={"#"}
                    className={"text-[#F0F8FF]"}
                >
                    Contact
                </a>
            </div>
            <Link href={"https://cns-media.com"} className={"text-[#F9E784] hidden md:flex"}>C&S MEDIA</Link>
            <div className={"md:hidden"}>
                <Sidebar/>
            </div>
        </div>
    );
}