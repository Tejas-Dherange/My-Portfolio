"use client";
 
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
function Skills() {
  return (
      <div className="h-[35rem] rounded-md flex flex-col antialiased dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] items-center justify-center relative overflow-hidden ">
        <h1 className="font-bold text-4xl  "> My Skills</h1>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  )
}
const testimonials = [
     {
      "title": "HTML",
      "quote": "HTML is the backbone of web development, providing the structure for your content.",
      "name": "Tejas"
    },
    {
      "title": "CSS",
      "quote": "CSS adds style and design to your HTML, making your websites visually appealing.",
      "name": "Tejas"
    },
    {
      "title": "JavaScript",
      "quote": "JavaScript brings interactivity and functionality to your web applications, making them dynamic.",
      "name": "Tejas"
    },
    {
      "title": "React",
      "quote": "React is a powerful library for building user interfaces, enabling component-based development and efficient rendering.",
      "name": "Tejas"
    },
    {
      "title": "Next.js",
      "quote": "Next.js is a versatile framework for building React applications, providing server-side rendering, routing, and more out of the box.",
      "name": "Tejas"
    },
    {
      "title": "Tailwind CSS",
      "quote": "Tailwind CSS is a utility-first CSS framework that allows you to build custom designs quickly and efficiently.",
      "name": "Tejas"
    }
    ,{
        "title": "MongoDB",
        "quote": "MongoDB is a flexible NoSQL database that enables scalable and high-performance data storage for your applications.",
        "name": "Tejas"
      },
      {
        "title": "Node.js",
        "quote": "Node.js allows you to build scalable and fast server-side applications using JavaScript, making it a popular choice for backend development.",
        "name": "Tejas"
      },
      {
        "title": "Express.js",
        "quote": "Express.js is a minimalist web application framework for Node.js, providing robust features for building APIs and web servers.",
        "name": "Tejas"
      },
      {
        "title": "Git",
        "quote": "Git is a distributed version control system that helps you track changes in your codebase and collaborate with other developers efficiently.",
        "name": "Tejas"
      },
      {
        "title": "GitHub",
        "quote": "GitHub is a platform that allows developers to host and manage their Git repositories, enabling seamless collaboration and version control.",
        "name": "Tejas"
      }
]
export default Skills
