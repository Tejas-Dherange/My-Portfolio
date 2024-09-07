'use client'
import projectsData from "@/data/pojects.json"
import { BackgroundGradient } from '../../components/ui/background-gradient'
import Link from "next/link"
import { ButtonsCard } from "../../components/ui/tailwindcss-buttons"
 
 
interface Project {
  id: number,
  title: string,
  description: string,
  isHosted: boolean,
  image:string,
  btnLinkGit:string,
  btnLinkLive:string

}
function Myprojects() {
  const myprojects = projectsData.projects.filter((project: Project) => project.isHosted)

  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center  mt-20">
          <h2 className=" text-teal-600 font-extrabold tracking-wide text-4xl uppercase">MY PROJECTS</h2>
         </div>
      </div>
      <div className="mt-10 mx-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 grid-flow-row justify-center">
          {myprojects.map((project: Project) => (
            <div key={project.id} className="flex justify-center">
              <BackgroundGradient
                className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="p-7 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <p className=" w-full "><img className="w-full border border-gray-500 h-[180px]  rounded-[22px]" src={`/${project.image}`} alt="" /></p>
                  <p className="text-lg sm:text-2xl text-black mt-4 mb-2 dark:text-neutral-200 font-extrabold">{project.title}</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow font-bold">{project.description}</p>
                  <div className="btn flex gap-10">

                  <button className="mt-5 relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-2 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                      <Link href={`${project.btnLinkGit}`} className="w-24 text-[17px] flex justify-center items-center gap-2">
                      <img className="invert" src="/Github.svg" alt="" />
                        GitHub
                      </Link>
                    </span>
                  </button>
                  <button className="mt-5 relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-2 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    <Link href={`${project.btnLinkLive}`} className="w-24 text-[17px] flex justify-center items-center gap-2">
                      <img className="invert" src="/Live.svg" alt="" />
                        Live
                      </Link>
                    </span>
                  </button>

                  </div>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  )
}

export default Myprojects
