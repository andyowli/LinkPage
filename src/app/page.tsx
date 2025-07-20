import { Blog } from "@/components/blog";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Prepare } from "@/components/prepare";
import { Price } from "@/components/price";
import ProgressSteps from "@/components/ProgressSteps";
import { Questions } from "@/components/questions";
import { Testimonials } from "@/components/testimonials";
import { Top } from "@/components/top";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

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

export default function Home() {
  return (
    <div>
      <Navbar />


      <div className="container mx-auto max-w-6xl">
        {/* <div className="mt-40 mb-14 flex flex-col justify-center">
          <div className="text-center text-balance font-sans">
            <span className="mb-4 text-5xl">Launch your navigation</span>
            <span className="text-5xl">directory within 30 minutes</span>
          </div>
          <div className="flex justify-center mt-8">
            <Link href="#price">
              <Button className="bg-blue-500 hover:bg-[#409eff]/90">Get Link</Button>
            </Link>
          </div>
        </div> */}
        <Top />

        <div className="grid grid-cols-4 gap-4 mb-20">
          {skillsData.map((skill) => (
            <Card className="p-4" key={skill.id}>
              <div className="flex items-center gap-4">
                <Card className="p-4">
                  <img src="/next.svg" alt="" className="size-7"/>
                </Card>
                <h3 className="text-xl font-bold">{skill.title}</h3>
              </div>
              <p className="text-gray-600 mt-2">{skill.description}</p>
            </Card>
          ))}
        </div>

        <ProgressSteps />

        <Testimonials />

        <div id="price" className="scroll-mt-24">
          <Price />
        </div>

        <div id="questions" className="scroll-mt-24">
          <Questions />
        </div>

        <div id="blog" className="scroll-mt-24">
          <Blog />
        </div>
      </div>


      <div>
        <Prepare />
      </div>

      <div className="container mx-auto max-w-6xl">
        <Footer />
      </div>
    </div>
  );
}
