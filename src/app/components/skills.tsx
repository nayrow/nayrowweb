'use client'
import axios from "axios";
import { useEffect, useState } from "react";
import SkillCard from "@/app/components/skillcard";

interface ProjectAttributes {
    id: string;
    skill: string;
    logo: {
        data: {
            attributes: {
                url: string;
            };
        };
    };
}
interface Project {
    attributes: ProjectAttributes;
}

export default function Skills() {
    const [projects, setProjects] = useState<Project[]>([]);
    useEffect(() => {
        // Axios request to fetch data
        axios.get(`${process.env.NEXT_PUBLIC_TEST_CMS_URL!}/api/skills-nayrows?populate=logo`)
            .then(response => {
                // Set the data state with the response data
                console.log(response.data.data)
                setProjects(response.data.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []); // Empty dependency array to ensure useEffect only runs once
    return (
        <div className={"flex items-center py-8 flex-col"}>
            <h1 className={"text-4xl font-bold text-[#F9E784] py-8"}>My Skills</h1>
            <div className={"flex flex-wrap gap-8 mx-4 md:mx-0 justify-center"}>
                {projects.map(project => (
                    <SkillCard skill={project.attributes.skill} url={`http://localhost:1337${project.attributes.logo.data.attributes.url}`}/>
                ))}
            </div>
        </div>
    )
}
