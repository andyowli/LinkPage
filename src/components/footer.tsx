import { Github, MoonStar, Twitter, Youtube } from "lucide-react";

type FooterLink = {
    name: string;
    href: string;
    icon?: React.ReactNode;
}

export function Footer() {
    const sections = [
        {
            title: 'Product',
            links: [
                { name: 'Features', href: '#' },
                { name: 'Pricing', href: '#price' },
                { name: 'Questions', href: '#' } 
            ],
        },
        {
            title: 'Resources',
            links: [
                { name: 'Blog', href: '#' },
                { name: 'Documentation', href: '#' },
                { name: 'Partners', href: '#' },
            ],
        },
        {
            title: 'Company',
            links: [
                { name: 'Email Contact', href: '#' },
                { name: 'Join Discord', href: '#' },
            ],
        },
        {
            title: 'Social',
            links: [
                { name: 'Twitter', href: '#', icon: <Twitter /> },
                { name: 'Instagram', href: '#', icon: <Github />  },
                { name: 'Youtube', href: '#', icon: <Youtube /> },
            ] as FooterLink[]
        },
    ];

    return (
        <footer className="bg-white py-10">
            <div>
                <div className="mb-8">
                    <div className="flex items-center">
                        
                        <span className="text-xl font-bold">LinkPage</span>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {sections.map((section, index) => (
                        <div key={index}>
                            <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
                            <ul>
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex} className="mb-4 flex">
                                        {link.icon && (
                                            <span className="mr-2">
                                                {link.icon}
                                            </span>
                                        )}
                                        <a href={link.href}>{link.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="h-[0.2] bg-gray-400 mb-6"></div>

                <div className="flex justify-between">
                    <span>© 2025 LinkPage All Rights Reserved.</span>
                    <MoonStar />
                </div>
            </div>
        </footer>
    );
}