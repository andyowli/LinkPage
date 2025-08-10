"use client"

import { MessageSquareMore, X } from "lucide-react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { useState } from "react";


export function Chat() {
    const [messages, setMessages] = useState<{text: string, isUser: boolean}[]>([]);
    const [inputValue, setInputValue] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    

    // automatic reply function
    const autoReply = (userMessage: string) => {
        // convert to lowercase for easy matching
        const lowerCaseMessage = userMessage.toLowerCase();

        if (lowerCaseMessage.includes("price") || lowerCaseMessage.includes("cost")) {
            return "For specific prices or fees, please click on 'pricing' in the navigation bar or swipe the page to view the price location.";
        }
        else if (lowerCaseMessage.includes("use")) {
            return "Please refer to the documentation on how to use templates.";
        }
        else if (lowerCaseMessage.includes("联系") || lowerCaseMessage.includes("邮箱")) {
            return "You can use your email address: kissfish1376@163.com contact us.";
        }

        return "Sorry, I don't quite understand what you mean. You can rephrase it or contact our customer service.";
    };

      // input enter
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && inputValue.trim()) {
             // add user message
            const newUserMessage = { text: inputValue, isUser: true };
            setMessages(prev => [...prev, newUserMessage]);
            
            // save input values for replying
            const userMessage = inputValue;
            setInputValue("");


            // simulate automatic reply
            setTimeout(() => {
                const replyMessage = { text: autoReply(userMessage), isUser: false };
                setMessages(prev => [...prev, replyMessage]);
            }, 1000); 
        }
    };

    return (
        <div>
            <div 
                onClick={() => setIsOpen(!isOpen)}
                className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center fixed right-8 bottom-8"
            >
                {isOpen ? ( // 根据状态显示不同图标
                    <X className="text-white"/>
                ) : (
                    <MessageSquareMore className="text-white"/>
                )}
            </div>

            {/* Popup */}
            {isOpen && (
                <div className="fixed right-8 bottom-28 bg-white rounded-lg shadow-lg h-[30rem] w-96 flex flex-col">
                    <div className="h-20 bg-blue-500 flex items-center justify-center gap-2 rounded-t-md">
                        <div className="rounded-full bg-blue-400 w-10 h-10 flex items-center justify-center">
                            <MessageSquareMore className="text-white"/>
                        </div>
                        <span className="text-white/85 flex items-center">Chatbox</span>
                    </div>  
                    
                    <div className="flex flex-1 flex-col overflow-hidden">
                        <div className="p-4 flex-1 overflow-y-scroll custom-scrollbar">
                            <div className="flex items-center gap-4">
                                <Image 
                                    src="/images/01.jpg"
                                    alt="Avatar"
                                    width={32}
                                    height={32}
                                    className="rounded-full mb-2"
                                />
                                <div>
                                    <span className="text-sm text-gray-500">LinkPage</span>
                                    <p className="rounded-lg p-2 bg-gray-200 text-sm dark:text-black">what's the matter with you?</p>
                                </div>
                            </div>

                            {messages.map((message, index) => (
                                <div 
                                    key={index} 
                                    className={`flex mt-2 ${message.isUser ? 'justify-end' : 'justify-start'}`}
                                >
                                    {!message.isUser && (
                                        <Image 
                                            src="/images/01.jpg"
                                            alt="Avatar"
                                            width={32}
                                            height={32}
                                            className="rounded-full self-start mr-4"
                                        />
                                    )}

                                    <div>
                                        {!message.isUser && (
                                            <span className="text-sm text-gray-500">LinkPage</span>
                                        )}
                                        <div className={`rounded-lg p-2 max-w-xs text-sm ${
                                            message.isUser 
                                                ? 'bg-blue-500 text-white' 
                                                : 'bg-gray-200 text-gray-800'
                                        }`}>
                                            {message.text}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <div className="shrink-0">
                            <Input 
                                placeholder="Enter your question..."
                                className="border-0 focus-visible:ring-0 !text-[16px]"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={handleKeyDown}
                            />
                        </div>
                    </div>
                </div> 
            )}
        </div>
    )
}