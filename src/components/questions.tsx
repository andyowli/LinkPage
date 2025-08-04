"use client"

import { useRef } from "react";
import { Card } from "./ui/card"
import { motion, useInView } from "motion/react";
import { div } from "motion/react-client";


export function Questions() {
    const list = [
        {
            id: 1,
            title:"What can I see before making the payment?",
            answer:"You can view the Demo, and the functional appearance is clear at a glance."
        },
        {
            id: 2,
            title:"How many websites can I build with Mkdirs?",
            answer:"This is just a website template, you can create your website without any restrictions."
        },
        {
            id: 3,
            title:"How to get technical support?",
            answer:"You can refer to the tutorial for instructions, and if you have any further questions, you can send them via email kissfish1376@163.com contact me."
        },
    ]

    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true, // Only triggered once
        margin: "-20% 0px -20% 0px" // Adjust trigger area
    })

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3 // Each sub element animation interval is 0.2 seconds
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <div className="mb-20" ref={ref}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
            >
                <span className="text-blue-500 text-center text-lg block mb-2">FAQ</span>
                <h1 className="text-3xl text-center mb-16 dark:text-white/85">frequently asked questions</h1>
            </motion.div>
            
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                {list.map((item) => (
                    <motion.div
                        variants={itemVariants}
                        key={item.id}
                    >
                        <Card className="p-8 py-4 gap-2 mb-6">
                            <h3 className="text-xl dark:text-white/85">{item.title}</h3>
                            <p className="text-sm text-gray-500">{item.answer}</p>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}