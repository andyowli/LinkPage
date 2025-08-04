"use client"

import { useRef } from "react";
import { Card } from "./ui/card";
import { motion, useInView } from "motion/react";
import Image from "next/image";

export function Blog() {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true, // Only triggered once
        margin: "-20% 0px -20% 0px" // Adjust trigger area
    })
    
    return (
        <div className="mb-20" ref={ref}>
            <motion.div  className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
            >
                <h4 className="text-center mb-6 text-blue-500">BLOG</h4>
                <h1 className="text-4xl text-center">Latest Articles</h1>
            </motion.div>

            <Card className="py-0 gap-0">
                <Image
                src="/data.png" 
                alt="No data"
                width={200}
                height={200}
                className="size-60 mx-auto"/>
                
            
                <div className="flex flex-col items-center justify-center mb-8 mt-[-4rem] gap-4">
                    <h2>No data yet</h2>
                    <p className="text-[#6B7280] text-lg">There is currently no data content available.</p>
                </div>
            </Card>
        </div>
    )
}