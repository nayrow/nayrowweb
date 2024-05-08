import Image from "next/image";
export default function SkillCard({skill,url}: { skill: string;url:string }) {
    return (
        <div className={"bg-[#1A202C] p-4 rounded-xl"} style={{ aspectRatio: "1/1" }}>
            <Image src={url} height={100} width={100} alt={skill} className={"mx-auto my-8"}/>
            <h1 className={"text-2xl font-bold mb-8 text-[#F9E784] text-center"}>{skill}</h1>
        </div>
    );
}