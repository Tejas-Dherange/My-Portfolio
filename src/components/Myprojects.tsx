'use client'
import projectsData from "@/data/pojects.json"
import { BackgroundGradient } from './ui/background-gradient'
import Link from "next/link"
import { ButtonsCard } from "./ui/tailwindcss-buttons"
 
 
interface Project {
  id: number,
  title: string,
  description: string,
  link: string,
  isHosted: boolean,

}
function Myprojects() {
  const myprojects = projectsData.projects.filter((project: Project) => project.isHosted)

  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">MY PROJECTS</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Explore My work </p>
        </div>
      </div>
      <div className="mt-10 mx-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {myprojects.map((project: Project) => (
            <div key={project.id} className="flex justify-center">
              <BackgroundGradient
                className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="p-7 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{project.title}</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{project.description}</p>
                  <button className="mt-5 relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                      <Link href={`/courses`} className="w-24">
                        Click
                      </Link>
                    </span>
                  </button>

                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <button className="p-[3px] relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
          <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
            <Link href={"/courses"}

            >
              Show more projects
            </Link>
          </div>
        </button>

      </div>
    </div>
  )
}

export default Myprojects
