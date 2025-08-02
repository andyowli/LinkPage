"use client"

import Link from "next/link";
import { Button } from "./ui/button";
import { MobileNav } from "./mobile-nav";
import { SignOutButton, useUser } from "@clerk/nextjs";  
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";

export const Navbar = () => {
    const { user } = useUser();

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
    };

    const reverseItemVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0 }
    };


    return (
        <header className="fixed top-0 left-0 right-0 h-16 bg-background border-b z-10">
            <div className="w-full h-16 px-4 flex justify-center items-center">
                <div className="flex items-center justify-between container max-w-7xl h-full">
                    <motion.div 
                        className="flex items-center space-x-12"
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.3 }}
                    >
                        <motion.div variants={itemVariants}>
                            <Link href="/" className="flex items-center gap-4">
                                <Image 
                                    src={"/logo.svg"}
                                    alt="LinkPage Logo"
                                    width={30}
                                    height={30}
                                />
                                <span className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                                    LinkPage
                                </span>
                            </Link>
                        </motion.div>

                        <nav className="hidden md:flex items-center space-x-6">
                            <motion.div 
                            variants={itemVariants}
                            className="flex items-center space-x-6"
                        >
                                <Link 
                                    href="#" 
                                    className="text-muted-foreground hover:text-foreground transition-colors" 
                                >
                                    Features
                                </Link>
                                <Link 
                                    href="/blog" 
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Blog
                                </Link>
                                <Link 
                                    href="/price" 
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Pricing
                                </Link>
                                <Link 
                                    href="#" 
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Docs
                                </Link>
                                <Link 
                                    href="#" 
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Demo
                                </Link>
                            </motion.div>
                        </nav>
                    </motion.div>

                    <motion.div 
                        className="flex items-center space-x-2"
                        initial="hidden"
                        animate="visible"
                        transition={{ staggerChildren: 0.3 }}
                    >
                        {user ? (
                            <>
                                <motion.div variants={reverseItemVariants}>
                                    <Button  className="hidden md:inline-flex bg-[#409eff] hover:bg-[#409eff]/90 text-white">
                                        <Link href="/submit">submit</Link>
                                        <ArrowRight />
                                    </Button>
                                </motion.div>
                                <motion.div variants={reverseItemVariants}>
                                    <SignOutButton>
                                        <Button variant={"ghost"} className="hidden md:inline-flex">Sign out</Button>
                                    </SignOutButton>
                                </motion.div>
                            </>
                        ) : (
                            <>
                                <motion.div variants={reverseItemVariants}>
                                    <Button size="sm" className="rounded-full hidden md:inline-flex bg-[#409eff] hover:bg-[#409eff]/90 text-white" asChild>
                                        <Link href="/sign-in">Sign in</Link>
                                    </Button>
                                </motion.div>
                                <motion.div variants={reverseItemVariants}>
                                    <Button size="sm" className="rounded-full hidden md:inline-flex bg-[#409eff] hover:bg-[#409eff]/90 text-white" asChild>
                                        <Link href="/sign-up">Sign up</Link>
                                    </Button>
                                </motion.div>
                            </>
                        )}

                        <MobileNav />
                    </motion.div>    
                </div>
            </div>
        </header>
    )
}