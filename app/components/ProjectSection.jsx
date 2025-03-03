"use client"

import React from 'react'
import { useState, useRef } from 'react';
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag';
import { animate, motion, useInView } from 'framer-motion';

const projectsData = [
   {
     id: 1,
     title: "Ryde Booking Platform",
     description: "Project 1 description",
     image: "/images/projects/1.png",
     tag: ["All", "Mobile"],
     gitUrl: "https://github.com/echokarun/Ryde",
   },
   {
     id: 2,
     title: "Horizon Banking Platform",
     description: "Project 2 description",
     image: "/images/projects/2.png",
     tag: ["All", "Web"],
     gitUrl: "https://github.com/echokarun/Bank-app",
   },
   {
     id: 3,
     title: "Aora Video Sharing Platform",
     description: "Project 3 description",
     image: "/images/projects/3.png",
     tag: ["All", "Mobile"],
     gitUrl: "/https://github.com/echokarun/Aora",
   },
   {
     id: 4,
     title: "Job Finder Platform ",
     description: "Project 4 description",
     image: "/images/projects/4.webp",
     tag: ["All", "Mobile"],
     gitUrl: "https://github.com/echokarun/Job-finder",
   }
 ];

const ProjectSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, {once:true})
   const [tag, setTag] = useState("All")
   
   const handleTagChange = (newTag) => {
      setTag(newTag)
   }

   const filteredProjects = projectsData.filter((project) => (
      project.tag.includes(tag)
   ))
  const cardVariants = {
    intial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  }
   return (
     <section id='projects'  className="py-10">
         <h2 className="text-3xl font-bold text-white mb-6">My Projects</h2>
         <div className='text-white flex flex-row justify-center items-center gap-2 py-6 '>
            <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
            <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"}  />
            <ProjectTag onClick={handleTagChange} name="Mobile" isSelected={tag === "Mobile"}  />
         </div>
       <ul ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {filteredProjects.map((project, idx) => (
           <motion.li key={idx } variants={cardVariants} initial="initial" animate={isInView? "animate":"initial"} transition={{duration: 0.3,delay: idx* 0.4}}>
              <ProjectCard
                key={project.id} 
                title={project.title} 
                description={project.description} 
                  imgUrl={project.image} 
                  tags={project}
                  gitUrl={project.gitUrl}
                  />
           </motion.li>
         ))}
       </ul>
     </section>
   );
 };
 

export default ProjectSection