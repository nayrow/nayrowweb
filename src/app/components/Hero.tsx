'use client'
import Link from "next/link";
import Image from "next/image";
import instagram from "../../../public/instagram.png";
import whatsapp from "../../../public/whatsapp.png";
import github from "../../../public/github.png";
export default function Hero() {
    const handleClick = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    };

    return (
        <div className={"w-full pt-12 pl-52 pr-36"}>
            <div className={"w-[300px] mb-20"}>
                <h1 className={"text-4xl font-bold"}>I&apos;m <span className={"text-[#F9E784]"}>nayrow</span></h1>
                <p className={"text-2xl mt-12"}>a young web developer and CEO of <span className={"text-[#F9E784]"}>C&S MEDIA</span>
                </p>
                <button
                    onClick={handleClick}
                    className={"text-[#F9E784] mt-12 ml-10 text-2xl border-2 border-[#F9E784] px-8 py-2 rounded-2xl hover:bg-[#F9E784] hover:text-[#1A202C] transition duration-300 ease-in-out"}
                >
                    More of me
                </button>
            </div>
            <div className={"items-end flex flex-col"}>
                <div className={"text-center"}>
                    <div>
                        <hr className={"rotate-90 w-24 border-2 rounded-xl border-[#F9E784]"}/>
                    </div>
                    <Image src={instagram} height={40} width={40} alt={"instagram"} className={"mx-auto mt-16"}/>
                    <Image src={whatsapp} height={40} width={40} alt={"instagram"} className={"mx-auto mt-4"}/>
                    <Image src={github} height={40} width={40} alt={"instagram"} className={"mx-auto mt-4"}/>
                </div>
            </div>
        </div>
    );
}