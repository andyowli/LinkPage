import { Button } from "./ui/button";
import { ArrowRightToLine } from "lucide-react";

export function Prepare() {
    return (
        <div className="bg-blue-200 dark:bg-[#101828] py-16 mb-20">
            <div className="text-center">
                <h4 className="mb-4 text-blue-500">Ready to get started?</h4>
                <h1 className="text-4xl dark:text-white/85">Let's start using it now.</h1>
            </div>

            <div className="flex justify-center mt-8">
                <Button className="bg-blue-500 text-white dark:text-white/85 hover:bg-[#409eff]/90">
                    <ArrowRightToLine />
                    Get Started
                </Button>
            </div>
        </div>
    )
}