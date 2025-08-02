"use client"

import Link from "next/link";
import { useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { animate, stagger } from "motion";
import { splitText } from "motion-plus";
import { Card } from "./ui/card";

export function Top() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        document.fonts.ready.then(() => {
            if (!containerRef.current) return
            containerRef.current.style.visibility = "visible"
    
            const titleLine1 = containerRef.current.querySelector("h1 > span:nth-child(1)");
            const titleLine2 = containerRef.current.querySelector("h1 > span:nth-child(2)");
            const button = containerRef.current.querySelector("button");
            const img = containerRef.current.querySelector("img");

            if(!titleLine1 || !titleLine2 || !button || !img) {
                console.error("Title elements not found");
                return;
            }
            const { words: words1 } = splitText(titleLine1);
            const { words: words2 } = splitText(titleLine2);

            animate(
                words1,
                { opacity: [0, 1], y: [10, 0] },
                {
                    type: "spring",
                    duration: 2,
                    bounce: 0,
                    delay: stagger(0.05),
                }
            )

            animate(
                words2,
                { opacity: [0, 1], y: [10, 0] },
                {
                    type: "spring",
                    duration: 2,
                    bounce: 0,
                    delay: stagger(0.05),
                }
            )

            animate(
                button,
                { 
                    opacity: [0, 1], 
                    y: [20, 0],
                    scale: [0.95, 1] 
                },
                {
                    type: "spring",
                    duration: 1.5,
                    bounce: 0.25,
                    delay: 0.3,
                }
            )

            animate(
                img,
                { 
                    opacity: [0, 1], 
                    y: [20, 0],
                    scale: [0.95, 1] 
                },
                {
                    type: "spring",
                    duration: 1.5,
                    bounce: 0.25,
                    delay: 0.3,
                }
            )
        })
    }, [])

    return (
        <div className="container mx-auto max-w-6xl" ref={containerRef}>
            <div className="mt-40 mb-14 flex flex-col justify-center">
                <h1 className="text-center text-5xl text-balance font-sans block">
                    <span className="mb-4 block">Launch your navigation</span>
                    <span className="text-5xl">directory within 30 minutes</span>
                </h1>
                <div className="flex justify-center mt-8 mb-8">
                    <Link href="#price">
                        <Button className="bg-blue-500 hover:bg-[#409eff]/90">Get Link</Button>
                    </Link>
                </div>

                <Card className="bg-gray-200 p-4">
                    <img 
                        src="/images/topImg.png" 
                        alt=""
                        className="rounded-xl"
                    />
                </Card>
            </div>
        </div>
    )
}