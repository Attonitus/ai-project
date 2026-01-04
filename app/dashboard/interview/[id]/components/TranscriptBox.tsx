import { Bot } from "lucide-react";

interface TranscriptMessage {
    role: "user" | "system" | "assistant",
    content: string
}

interface TranscriptProps {
    messages: TranscriptMessage[];
}

export default function TranscriptBox({messages}: TranscriptProps) {
    return (
        <div className="mt-5 p-4 md:px-10 border border-white/10 rounded-md bg-white/10 backdrop-blur-lg max-h-9/1 overflow-y-auto">
            <h3 className="text-2xl font-semibold mb-2">Transcript</h3>

            {
                messages.length > 0 ? (
                    <div>
                        {
                            messages.map((msg, index) => (
                                <div key={index} className={`flex ${msg.role === "user" ? "justify-end": "justify-start"}`}>
                                    <div className="flex items-start gap-2 max-w-[75%]">
                                        <div className={`rounded-lg px-4 py-2 text-sm items-center gap-2 ${msg.role === "user" ? "bg-purple-500 text-white": "bg-gray-100 text-gray-800"}`}>
                                            {
                                                msg.role !== "user" && <Bot className="w-4 h-4 text-purple-500 mt-1" />
                                            }
                                            {msg.content}
                                        </div>

                                    </div>
                                </div>
                            ))
                        }
                    </div>
                ) : (
                    <p className="text-gray-400 text-sm">No transcript found</p>
                )
            }
        </div>
    )
}
