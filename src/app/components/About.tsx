import Skills from "@/app/components/skills";

export default function About() {
    const skills = []
    return (
        <section className={"h-screen"}>
            <div className={"pt-12 ml-8 md:ml-52 md:mr-36"}>
                <h1 className={"text-4xl font-bold text-[#F9E784] pb-4"}>About</h1>
                <div className={"flex justify-between gap-4"}>
                    <hr className={"my-4 w-[300px] border-2 rounded-xl border-[#F9E784]"}/>
                    <p className={"text-2xl"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque venenatis lectus nisi, id sollicitudin leo dapibus at.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque venenatis lectus nisi, id sollicitudin leo dapibus at.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque venenatis lectus nisi, id sollicitudin leo dapibus at.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque venenatis lectus nisi, id sollicitudin leo dapibus at.
                    </p>
                </div>
            </div>
            <Skills/>
        </section>
    );
}