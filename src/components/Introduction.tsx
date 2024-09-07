'use client'
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import Link from 'next/link'
import { Button } from './ui/moving-border'
import Image from 'next/image'
import { TextGenerateEffect } from "./ui/text-generate-effect";
 
 
function Introduction() {
  const handleclick = () => {
    const pdfUrl = '/MyResume.pdf';
    const anchor = document.createElement('a');
    anchor.href = pdfUrl;
    anchor.download = 'MyResume.pdf';
    anchor.click();
    anchor.remove();
  }
  return (
    <div className="h-auto md:h-[43.5rem] w-full rounded-md flex  items-center justify-center  relative overflow-hidden py-10 md:py-0"
    >

      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill=" #e0f2f1"
      />
      <div className="image absolute sm:left-24 md:mt-16 rounded-3xl border-white  justify-center top-32 ">
        <Image
          src="/Profile.jpg"
          alt="Description of your image"
          width={350}
          height={300}
          className='bg-white rounded-full boder-solid border-white border-[1px]'
        />
      </div>

      <div className="p-4 relative z-10 w-full text-center md:left-[250px] md:flex md:flex-col gap-4 md:mt-14  mt-[47vh]" >

        <h1
          className=" mt-20 md:mt-0 text-3xl md:text-7xl font-bold bg-gradient-to-r from-blue-900 to-white text-transparent bg-clip-text"
        >Hii , I'm Tejas</h1>

        <TextGenerateEffect className='mt-4  text-base md:text-lg text-neutral-300 max-w-lg mx-auto' words='I am a Developer ,
          Learner , programmer and a full stack developer who can build scalable full stack applications'/>

        <div className="mt-4  flex justify-center gap-4 ">
          <Link href={"/contact"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Contact Me
            </Button>
          </Link>
          <Link href={"/"}>
            <Button
              onClick={handleclick}
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Download CV
            </Button>
          </Link>
        </div>
      </div>
    </div>


  )
}

export default Introduction

