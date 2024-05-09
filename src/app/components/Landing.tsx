import React from "react";
import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
export default function Landing() {
    return (
        <section className={"h-screen max-h-screen "}>
            <Header/>
            <Hero/>
        </section>
    );
}