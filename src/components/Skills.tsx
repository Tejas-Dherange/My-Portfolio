"use client";
import skills from "@/data/Skills.json"
import Image from "next/image";

interface Skill {
  id: number,
  title: string,
  image: string

}

function Skills() {
  const skils = skills.skills.sort((a, b) => a.id - b.id);
  return (
    <div className="h-full p-20 rounded-md   antialiased dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] items-center justify-center   ">
      <h1 className="font-bold text-4xl md:mt-10 flex justify-center mt-[-50px]  text-teal-600  tracking-wide uppercase"> My Skills</h1>
      <div className="  flex gap-5 md:gap-10 md:justify-center items-center flex-wrap mt-10 md:mt-16">
        {skils.map((skill) => (
          <div key={skill.id} className="card p-3 cursor-pointer rounded transform transition-transform duration-300 hover:scale-105 hover:shadow-lg  hover:bg-slate-800  w-[115px] md:w-40 flex flex-col items-center justify-center">
            <Image height={150} width={150} src={`/TeckStack/${skill.image}`} alt={skill.title} />
            <p className="font-bold text-lg">{skill.title}</p>
          </div>
        ))}
        </div>
      </div>
  )
}

export default Skills
