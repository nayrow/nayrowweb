import Image from "next/image";
import React from "react";
import Landing from "@/app/components/Landing";
import About from "@/app/components/About";

export default function Home() {
    return (
        <main className={"text-[#F0F8FF] w-full"}>
            <Landing/>
            <About/>
        </main>
    );
}
