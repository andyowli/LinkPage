"use client"

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import { Upload, Zap, Star } from "lucide-react";
import { Card } from "./ui/card";

export default function ProgressSteps() {
    const [currentStep, setCurrentStep] = useState(0)
    const steps = [
        {
            number: 1,
            title: "Configure your directory",
            description:
                "Clone the repository and start modifying your content.",
            icon: Upload,
            image: "/images/01.jpg",
        },
        {
            number: 2,
            title: "Write management content",
            description:
                "Use content from CMS (Sanity platform).",
            icon: Zap,
            image: "/images/02.png",
        },
        {
            number: 3,
            title: "Deploy project directory",
            description:
                "Deploy the project directory to the server platform you have chosen.",
            icon: Star,
            image: "/images/03.png",
        },
    ]

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentStep((prev) => (prev + 1) % steps.length)
        }, 4000)

        return () => clearTimeout(timer)
    }, [currentStep, steps.length])

    const displayStep = currentStep;

    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true, // Only triggered once
        margin: "-20% 0px -20% 0px" // Adjust trigger area
    })

    return (
        <div className="mb-20" ref={ref}>
            <div className="max-w-7xl mx-auto p-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="text-center flex flex-col gap-4"
                >   
                    <span className="text-blue-500 text-lg">HOW IT WORKS</span>
                    <h1 className="text-3xl mb-20 dark:text-white/85">Just 3 steps to get started</h1>
                </motion.div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
                    {/* Left Column - Steps */}
                    <div className="space-y-16">
                        {steps.map((step, index) => {
                            const Icon = step.icon
                            const isActive = true && currentStep === index
                            const isCompleted = true && currentStep > index

                            return (
                                <div key={index} className="flex items-center gap-4">
                                    {/* Progress Bar - Vertical */}
                                    <div className="flex flex-col items-center">
                                        <div className="w-1 h-16 bg-gray-200 rounded-full overflow-hidden">
                                            <motion.div
                                                className="w-full bg-blue-500 rounded-full"
                                                initial={{ height: "0%" }}
                                                animate={{
                                                    height: isActive ? "100%" : isCompleted ? "0%" : "0%",
                                                }}
                                                transition={{
                                                    duration: isActive ? 3.5 : 0.3,
                                                    ease: isActive ? "linear" : "easeInOut",
                                                }}
                                            />
                                        </div>
                                    </div>

                                    {/* Icon Circle */}
                                    <div className="flex-shrink-0">
                                        <div
                                            className={`w-12 h-12 rounded-full flex items-center justify-center ${
                                                isActive ? "bg-blue-500" : "bg-gray-100"
                                        } transition-colors duration-300`}
                                        >
                                        <Icon
                                            className={`w-6 h-6 ${
                                                isActive ? "text-white" : "text-gray-400"
                                            } transition-colors duration-300`}
                                        />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2 dark:text-white/85">
                                            {step.number}. {step.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">{step.description}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    {/* Right Column - Image */}
                    <div className="lg:sticky h-[340px]">
                        <Card className="py-0 h-full min-h-[300px] lg:min-h-[300px]">
                            <motion.img
                                key={displayStep}
                                src={steps[displayStep].image}
                                alt={`Step ${displayStep + 1} illustration`}
                                className="w-full h-full rounded-lg"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1,  }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            />
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}
