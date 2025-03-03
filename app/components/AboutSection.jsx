"use client"
import { useState, useTransition } from "react"
import React from 'react'
import Image from "next/image"
import TabButton from "./TabButton"


const TAB_DATA = [
   {
      title: "Skills",
      id: "skills",
      content: (
         <ul className="list-disc pl-4">
            <li>Javascript</li>
            <li>React</li>
            <li>ReactNative</li>
            <li>Html and Css</li>
            <li>Next js</li>
         </ul>
      )
   },
   {
      title: "Education",
      id: "education",
      content: (
         <ul className="list-disc pl-4" >
            <li>Everest College, Thapathali</li>
            <li>VS Internation College, Baneshower</li>
         </ul>
      )
   },
   {
      title: "Certifications",
      id: "certifications",
      content: (
         <ul className="list-disc pl-4">
            <li>Hackathon</li>
            <li>LeetCode </li>
         </ul>
      )
   },
]
const AboutSection = () => {
   const [tab, setTab] = useState("skills")
   const [isPending, startTransition] = useTransition()

   const handleTabChange = (id) => {
      startTransition(() => {
         setTab(id)
      })
   }
  return (
     <section id="about" className='text-white '>
        <div className='md:grid md:grid-cols-2 gap-8 items-center px-4 py-8 xl:gap-16 sm:py-16 xl:px-16'>
           <Image
              src="/images/about-image.png"
              alt="about-image"
              width={500}
              height={500}
           />
           <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
              <h2 className='text-4xl font-bold text-white mb-4'>About Me </h2>
              <p className='text-base lg:text-lg'>
                   I am a full stack web developer with a passion for creating
                   interactive and responsive web applications. I have experience
                   working with JavaScript, React, Redux, HTML, CSS, and Git.
                   I am a quick learner and I am always looking to expand my knowledge 
                   and skill set. I am a team player and I am excited to work with 
                   others to create amazing applications.
              </p>
              <div className="flex flex-row mt-8  justify-start">
                 <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>Skills </TabButton>
                 <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>Education </TabButton>
                 <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>Certifications</TabButton>
              </div>
              <div className="mt-8">
                 {TAB_DATA.find((t) => t.id===tab).content}
              </div>
           </div>
        </div>
    </section>
  )
}

export default AboutSection