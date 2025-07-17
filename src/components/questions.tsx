import { Card } from "./ui/card"


export function Questions() {
    const list = [
        {
            id: 1,
            title:"What can I see before making the payment?",
            answer:"You can view the Demo, and the functional appearance is clear at a glance."
        },
        {
            id: 2,
            title:"How many websites can I build with Mkdirs?",
            answer:"This is just a website template, you can create your website without any restrictions."
        },
        {
            id: 3,
            title:"How to get technical support?",
            answer:"You can refer to the tutorial for instructions, and if you have any further questions, you can send them via email kissfish1376@163.com contact me."
        },
    ]

    return (
        <div className="mb-20">
            <div>
                <span className="text-blue-500 text-center block mb-2">FAQ</span>
                <h1 className="text-3xl text-center mb-16">frequently asked questions</h1>
            </div>

            {list.map((item) => (
                <Card  key={item.id} className="p-8 py-4 gap-2 mb-6">
                    <h3 className="text-xl">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.answer}</p>
                </Card>
            ))}
        </div>
    )
}