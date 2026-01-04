import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";
import { Hand, Mic, MicOff, Phone } from "lucide-react";
import Image from "next/image";
import { Speaker, StatusCall } from "../page.types";

type UserBoxProps = {
    toggleMicrophone: () => void,
    isMuted: boolean,
    startCall: () => void,
    endCall: () => void,
    callStatus: StatusCall,
    speaking: Speaker;
}


export default function UserBoxes({ callStatus, endCall, isMuted, speaking, startCall, toggleMicrophone }: UserBoxProps) {

    const { user } = useUser();

    return (
        <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mb-5 ">
                <div className="relative h-100">
                    <div className="h-full w-full bg-white/30 backdrop-blur-lg relative rounded-md">
                        <div className="absolute inset-0 z-0 rounded-md" style={{ backgroundImage: `radial-gradient(circle 500px at 50% 100px, rgba(139, 92, 246, 0.5), transparent), ` }} />

                        <div className="z-20 relative p-4 flex flex-col items-center justify-center gap-2 h-full">
                            <div className="relative">
                                {
                                    speaking === "ai" && (
                                        <span className="absolute inset-0 flex items-center justify-center w-full">
                                            <span className="animate-pulse absolute inline-flex h-16 w-16 rounded-full bg-blue-400 opacity-50"></span>
                                        </span>
                                    )
                                }

                                <div className="border-blue-200 bg-blue-100 border rounded-full p-2 relative z-10">
                                    <Image src="/assets/bot.jpg" alt="User bot" width={60} height={60} />
                                </div>
                            </div>

                            <p className="text-lg font-semibold">
                                AI Recluiter
                            </p>

                        </div>
                    </div>
                </div>

                <div className="relative h-100">
                    <div className={cn("h-full w-full bg-white/30 backdrop-blur-lg relative rounded-md", speaking === "user" ? "border-amber-400 shadow-xl" : "border-transparent")}>
                        <div className="absolute inset-0 z-0 rounded-md" style={{ backgroundImage: `radial-gradient(circle 500px at 50% 100px, rgba(255, 220, 190, 0.5), transparent)` }} />
                        <div className="p-4 flex flex-col items-center justify-center gap-2 h-full z-10 relative rounded-md">
                            <div className="relative">
                                {
                                    speaking === "user" && (
                                        <span className="absolute inset-0 flex items-center justify-center">
                                            <span className="animate-pulse absolute inline-flex h-20 w-20 rounded-full bg-amber-400 opacity-50"></span>
                                        </span>

                                    )
                                }
                                <div className="bg-amber-200 rounded-full p-1 relative z-10">
                                    <Image
                                        src={user?.imageUrl ?? "/assets/user.jpg"}
                                        alt="User avatar"
                                        width={60}
                                        height={60}
                                        className="rounded-full"
                                    />
                                </div>

                            </div>
                            <p className="text-lg font-semibold">{user?.firstName}</p>
                        </div>
                    </div>
                </div>


            </div>
            <div className="flex items-center justify-center gap-4">
                <div className="p-2 bg-gray-500 text-white rounded-full"
                    onClick={toggleMicrophone}
                >
                    {
                        isMuted ? (
                            <MicOff className="h-5 w-5" />
                        ) : (
                            <Mic className="h-5 w-5" />
                        )
                    }
                </div>
                <div className="p-2 bg-gray-500 text-white rounded-full">
                    <Hand className="h-5 w-5" />
                </div>

                <Button onClick={startCall} disabled={callStatus === StatusCall.ACTIVE} className="px-6 py-2 bg-green-500 text-white rounded-full cursor-pointer hover:text-green-500">
                    Start session
                    <Phone className="w-5 h-5 rotate-140" />
                </Button>

                <div onClick={endCall} className="px-6 py-2 bg-[#FF0200] text-white rounded-full cursor-pointer">
                    <Phone className="w-5 h-5 rotate-140" />
                </div>
            </div>
        </div>
    )
}
