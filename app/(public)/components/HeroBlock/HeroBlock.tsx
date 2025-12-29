import { Button } from "@/components/ui/button"
import { AnimationBlock } from "./AnimationBlock"
import { Stars } from "lucide-react"
import Link from "next/link"


export const HeroBlock = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-12 mt-14 mx-8">
            <h1 className="text-5xl md:text-6xl font-extrabold text-center">
                Practice real interviews in
            </h1>
            <AnimationBlock />

            <p className="text-xl md:text-2xl">
                Prepare for your next job with realistic interview simulation and actionable feedback
            </p>

            <div className="flex items-center justify-center pb-5">
                <Button className="hover:text-black bg-indigo-700 text-white rounded-lg px-20 py-6 text-xl font-semibold transition duration-300 ease-in-out" asChild>
                    <Link href="/dashboard">
                        <Stars className="group-hover:rotate-12 transition-transform" />
                        Star practicing now
                    </Link>
                </Button>
            </div>

            <div className="flex items-center gap-8 text-sm justify-center">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    +5 interview types
                </div>

                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    No credit card required
                </div>

                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    Instant feedback
                </div>
            </div>
        </div>
    )
}
