"use client"

import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Check } from "lucide-react";
import { AvatarCircles } from "./magicui/avatar-circles";
import { useRef } from "react";
import { motion, useInView } from "motion/react";



export function Price() {
    const serviceItem = [
        {
            id: 1,
            title:"Complete Next.js boilerplate for directory",
            icon:<Check />
        },
        {
            id: 2,
            title:"Sleek UI components and responsive design",
            icon:<Check />
        },
        {
            id: 3,
            title:"Seamless payment integration",
            icon:<Check />
        },
        {
            id: 4,
            title:"Feature-rich blog system and built-in CMS",
            icon:<Check />
        },
        {
            id: 5,
            title:"Visit the official GitHub repository",
            icon:<Check />
        },
        {
            id: 6,
            title:"Lifetime updates with no extra cost",
            icon:<Check />
        },
        {
            id: 7,
            title:"Provide permanent technical support",
            icon:<Check />
        },
    ]

    const avatars = [ 
        {
            imageUrl: "https://avatars.githubusercontent.com/u/16860528",
            profileUrl:""
        },
        {
            imageUrl: "https://avatars.githubusercontent.com/u/20110627",
            profileUrl:""
        },
        {
            imageUrl: "https://avatars.githubusercontent.com/u/106103625",
            profileUrl:""
        },
        {
            imageUrl: "https://avatars.githubusercontent.com/u/59228569",
            profileUrl:""
        },
        {
            imageUrl: "https://avatars.githubusercontent.com/u/59442788",
            profileUrl:""
        },
        {
            imageUrl: "https://avatars.githubusercontent.com/u/89768406",
            profileUrl:""
        },
    ];

    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true, // Only triggered once
        margin: "-20% 0px -20% 0px" // Adjust trigger area
    })

    return (
        <div 
            className="mb-20" 
            ref={ref}
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl text-center mb-4 text-white/85">Pricing</h1>
                <p className="text-center text-xl text-gray-500 mb-10">One time payment, permanent updates, building directory website</p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0}}
                animate={isInView ? { opacity: 1} : {}}
                transition={{ duration: 2}}
            >
                <Card className="grid grid-cols-1 md:grid-cols-2 py-8">
                    <div className="flex flex-col gap-8 justify-center items-center dark:text-white/85">
                        <h2 className="text-2xl">Special Price</h2>
                        <span className="text-3xl">$99 / <s>$199</s></span>
                        <div className="flex flex-col items-center justify-center gap-8">
                            <Button className="w-56 bg-blue-500 hover:bg-[#409eff]/90 dark:text-white/85">Get LinkPage</Button>
                            <AvatarCircles numPeople={99} avatarUrls={avatars} className="z-0"/>
                        </div>
                        
                    </div>
                    <div className="flex flex-col items-start justify-center">
                        {serviceItem.map((item) => (
                            <div 
                                key={item.id}
                                className="flex flex-start gap-2"
                            >
                                <span className="text-green-500">{item.icon}</span>
                                <p className="mb-4 dark:text-white/85">{item.title}</p>
                            </div>
                        ))}
                    </div>
                </Card>
            </motion.div>
        </div>
    )
}