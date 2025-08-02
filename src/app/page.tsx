import { Blog } from "@/components/blog";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Prepare } from "@/components/prepare";
import { Price } from "@/components/price";
import ProgressSteps from "@/components/ProgressSteps";
import { Questions } from "@/components/questions";
import { Skills } from "@/components/skills";
import { Testimonials } from "@/components/testimonials";
import { Top } from "@/components/top";
import { Card } from "@/components/ui/card";

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
        <Top />

        <Skills />

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
