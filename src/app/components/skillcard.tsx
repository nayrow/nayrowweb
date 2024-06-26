import Image from "next/image";
export default function SkillCard({skill,url}: { skill: string;url:string }) {
    return (
        <div className={"bg-[#1A202C] py-4 rounded-xl "} style={{aspectRatio: "1/1" ,flex: "0 0 calc(16.66% - 20px)"}}>
            <Image src={url} height={100} width={100} alt={skill} className={"mx-auto my-6 xl:my-12 2xl:my-16"}/>
            <h1 className={"text-2xl w-64 font-bold mb-8 text-[#F9E784] text-center"}>{skill}</h1>
        </div>
    );
}