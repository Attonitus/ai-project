"use client"

import BtnCreateInterview from "@/components/shared/BtnCreateInterview/BtnCreateInterview"
import { Interview } from "@/lib/generated/prisma/client"
import { useQuery } from "@tanstack/react-query";
import { useState } from "react"
import InterviewImage from "./InterviewImage";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export const InterviewList = () => {

    // const [interviews, setInterviews] = useState<Interview[]>();

    const { isPending, error, data } = useQuery<Interview[]>({
        queryKey: ['interviews'],
        queryFn: () =>
            fetch('/api/interviews').then((res) =>
                res.json(),
            ),
        staleTime: 1000 * 60 * 60
    });

    const levelBadgeClasses: Record<string, string> = {
        junior: "bg-green-600/20 border-green-400/30 text-green-300",
        mid: "bg-yellow-600/20 border-yellow-400/30 text-yellow-300",
        senior: "bg-red-600/20 border-red-400/30 text-red-300",

    }

    return (
        <div>
            <div className="mt-5 md:px-10 p-4 border border-white/10 rounded-md bg-white/10 backdrop-blur-lg">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-semibold">Last interviews</h2>
                    <BtnCreateInterview />
                </div>

                <div className="mt-4">
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_60%_1fr_1fr_1fr] text-sm font-medium text-slate-200 mb-4">
                        <p className="text-left">Date</p>
                        <p className="text-left">Lessons</p>
                        <p className="text-left">Level</p>
                        <p className="text-left">Type</p>
                        <p className="text-center">Actions</p>
                    </div>

                    {
                        isPending && <p>Loading interviews...</p>
                    }
                    {
                        error && <p className="text-red-500">{error.message}</p>
                    }
                    {
                        !isPending && data?.length === 0 && (
                            <p>No interviews found</p>
                        )
                    }
                    {
                        !error && data?.slice(0, 5).map(interview => (
                            <div key={interview.id} 
                            className=" grid grid-cols-1 gap-5 md:gap-0 md:grid-cols-[1fr_60%_1fr_1fr_1fr] items-center justify-between border-b pb-4 last:border-b-0 my-4">
                                <span className="text-left text-sm text-white-70">
                                    {new Date(interview.startedAt).toLocaleDateString()}
                                </span>

                                <div className="flex gap-4 items-center">
                                    <InterviewImage interview={interview} />

                                    <div className="flex flex-col gap-1">
                                        <h3 className="text-2xl font-semibold">{interview.name}</h3>
                                    </div>
                                </div>

                                <span className={cn("text-sm px-2 py-1 rounded-full border w-fit", levelBadgeClasses[interview.level])}>
                                    {interview.level}
                                </span>

                                <span className="bg-blue-600/20 border-blue-400/30 border text-sm text-blue-200 py-1 px-3 rounded-full w-fit">
                                    {interview.rol}
                                </span>

                                <Button variant={"ghost"} asChild>
                                    <Link href={`/interview/${interview.id}`}>
                                        Details
                                    </Link>
                                </Button>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}