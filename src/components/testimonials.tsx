import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { div } from "motion/react-client";

const reviews = [
    {
        id: 1,
        name: "Jack",
        username: "@jack",
        body: "I bought # LinkPage last month and I'm excited! This template will definitely save me weeks of time building my own website.",
        img: "https://avatar.vercel.sh/jack",
    },
    {
        id: 2,
        name: "Jill",
        username: "@jill",
        body: "I don’t know coding, but I finished building a personal website in just 3 hours with #LinkPage. So user-friendly!",
        img: "https://avatar.vercel.sh/jill",
    },
    {
        id: 3,
        name: "John",
        username: "@john",
        body: "#LinkPage is packed with features for creating a blog. The design is modern, and the setup was a breeze. Highly recommend!",
        img: "https://avatar.vercel.sh/john",
    },
    {
        id: 4,
        name: "John4",
        username: "@john",
        body: "I love the UI of the #NewTemplate! Clean, modern, and the animations are top-notch.",
        img: "https://avatar.vercel.sh/john",
    },
    {
        id: 5,
        name: "John5",
        username: "@john",
        body: "The scalability of #NewTemplate is impressive. Set up my startup site in no time—perfect for beginners and pros alike.",
        img: "https://avatar.vercel.sh/john",
    },
    {
        id: 6,
        name: "John6",
        username: "@john",
        body: "This template is a game-changer! Set up a dev directory for my team in minutes.",
        img: "https://avatar.vercel.sh/john",
    },
    {
        id: 7,
        name: "John7",
        username: "@john",
        body: "I’m loving #LinkPage. The setup process is straightforward, and everything just works!",
        img: "https://avatar.vercel.sh/john",
    },
    {
        id: 8,
        name: "John8",
        username: "@john",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/john",
    },
    {
        id: 9,
        name: "John9",
        username: "@john",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/john",
    },
    {
        id: 10,
        name: "John10",
        username: "@john",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/john",
    },
    
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
    img,
    name,
    username,
    body,
}: {
    img: string;
    name: string;
    username: string;
    body: string;
}) => {
    return (
        <figure
            className={cn(
                "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-3",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
            )}
        >
            <blockquote className="mt-2 mb-4 text-sm">{body}</blockquote>

            <div className="flex flex-row items-center gap-2 mb-4">
                <img className="rounded-full" width="40" height="40" alt="" src={img} />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">
                        {name}
                    </figcaption>
                    <p className="text-xs font-medium dark:text-white/40">{username}</p>
                </div>
            </div>
        </figure>
    );
};

export function Testimonials() {
    return (
        <div className="mb-20">
            <h1 className="text-center text-4xl">What our customers are saying</h1>
            <div className="grid grid-cols-4  mt-8 h-[500px] relative overflow-hidden">
                <Marquee pauseOnHover vertical className="[--duration:20s]">
                    {firstRow.map((review) => (
                        <ReviewCard key={review.id} {...review} />
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
                    {secondRow.map((review) => (
                        <ReviewCard key={review.id} {...review} />
                    ))}
                </Marquee>
                <Marquee pauseOnHover vertical className="[--duration:20s]">
                    {secondRow.map((review) => (
                        <ReviewCard key={review.id} {...review} />
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
                    {secondRow.map((review) => (
                        <ReviewCard key={review.id} {...review} />
                    ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
            </div>
        </div>
    );
}
