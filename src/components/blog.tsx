import { div } from "motion/react-client";
import { Card } from "./ui/card";

export function Blog() {
    return (
        <div className="mb-20">
            <div className="mb-8">
                <h4 className="text-center mb-6 text-blue-500">Blog</h4>
                <h1 className="text-4xl text-center">Latest Articles</h1>
            </div>

            <Card className="py-0">
                <img src="/data.png" className="size-60 mx-auto"/>
            
                <div className="flex flex-col items-center justify-center mb-8">
                    {/* <h2>No data yet</h2> */}
                    <p className="text-[#6B7280] text-lg">There is currently no data content available.</p>
                </div>
            </Card>
        </div>
    )
}