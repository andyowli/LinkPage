"use client"

import { useRef } from "react";
import { Card } from "./ui/card";
import { motion, useInView } from "motion/react";

const skillsData = [
    {
        id: 1,
        title: "Next.js",
        description: "Build scalable web applications with Next.js.",
    },
    {
        id: 2,
        title: "Clerk",
        description: "Open source authentication library for Next.js.",
    },
    {
        id: 3,
        title: "Tailwind CSS",
        description: "Style your applications with Tailwind CSS.",
    },
    {
        id: 4,
        title: "Shadcn UI",
        icon: "",
        description: "Components for building modern websites.",
    },
    {
        id: 5,
        title: "Sanity",
        description: "Headless CMS for modern websites.",
    },
    {
        id: 6,
        title: "Tiptap",
        description: "Building a Rich Text Editor.",
    },
    {
        id: 7,
        title: "Stripe",
        description: "Excellent payment services.",
    },
]
export function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true, // Only triggered once
        margin: "-20% 0px -20% 0px" // Adjust trigger area
    })

    return (
        <div ref={ref}>
            <motion.div 
                className="text-center mb-12 flex flex-col gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
            >
                <span className="text-blue-500 text-lg">POWERED BY</span>
                <h1 className="text-3xl">Industry-standard Tech Stack</h1>
            </motion.div>
            <div className="grid grid-cols-4 gap-4 mb-20">
                {skillsData.map((skill) => (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        key={skill.id}
                    >
                        <Card className="p-4">
                            <div className="flex items-center gap-4">
                                <Card className="p-4">
                                <img src="/next.svg" alt="" className="size-7"/>
                                </Card>
                                <h3 className="text-xl font-bold">{skill.title}</h3>
                            </div>
                            <p className="text-gray-600 mt-2">{skill.description}</p>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}