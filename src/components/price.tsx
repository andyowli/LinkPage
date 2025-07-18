import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Check } from "lucide-react";
import { AvatarCircles } from "./magicui/avatar-circles";

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

    return (
        <div className="mb-20">
            <div>
                <h1 className="text-4xl text-center mb-4">Pricing</h1>
                <p className="text-center text-xl text-gray-500 mb-10">One time payment, permanent updates, building directory website</p>
            </div>

            <Card className="grid grid-cols-2 py-8">
                <div className="flex flex-col gap-8 justify-center items-center relative">
                    <h2 className="text-2xl">Special Price</h2>
                    <span className="text-3xl">$99 / <s>$199</s></span>
                    <Button className="w-56 bg-blue-500 hover:bg-[#409eff]/90">Get LinkPage</Button>
                    <AvatarCircles numPeople={99} avatarUrls={avatars} className="absolute z-0 top-60"/>
                </div>
                <div className="flex flex-col items-start justify-center">
                    {serviceItem.map((item) => (
                        <div 
                            key={item.id}
                            className="flex flex-start gap-2"
                        >
                            <span className="text-green-500">{item.icon}</span>
                            <p className="mb-4">{item.title}</p>
                        </div>
                    ))}
                </div>
            </Card>
        </div>
    )
}