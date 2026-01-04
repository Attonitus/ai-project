import { Message } from "../page.types";

type MessagesProps = {
    messages: Message[];
}

export default function Messages({ messages }: MessagesProps) {
    return (
        <div className="overflow-y-auto scrollbar-none overflow-auto h-60 mt-4 max-w-xl
        mx-auto w-full px-4 py-4 bg-white/20 backdrop-blur-md border border-gray-200 rounded-lg
        space-y-4 shadow-sm">
            <h2 className="text-xl font-semibold mt-8 mb-2 text-center">Transcription</h2>

            <div>
                {
                    messages.map((message, key) => {
                        const isAssistant = message.role === "assistant"
                    
                        return (
                            <div key={key} className={`flex mb-2 ${isAssistant ? "justify-start" : "justify-end"}`}>
                                <div className={`max-w-[80%] px-4 py-2 rounded-2xl shadow-md text-sm ${isAssistant ? "bg-violet-300 text-left" : "bg-emerald-300 text-right"}`}>
                                    <span
                                        className="block font-semibold mb-1 text-xs text-gray-500 uppercase tracking-wide"
                                    >
                                        {isAssistant? "Recruiter": "Atto"}
                                    </span>
                                    <span>
                                        {message.content}
                                    </span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
