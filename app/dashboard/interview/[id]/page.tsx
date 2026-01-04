"use client"
import { Interview } from "@/lib/generated/prisma/client";
import { Calendar, Drama, Gauge, LoaderCircle, Webhook } from "lucide-react";
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react";
import InfoCard from "./components/InfoCard";
import TranscriptBox from "./components/TranscriptBox";

type TranscriptMessage = {
    role: "user" | "system" | "assistant",
    content: string
}

export default function InterviewIdPage() {
    const params = useParams();
    const interviewId = params.id;

    const router = useRouter();

    const [interview, setInterview] = useState<Interview>();

    const fetchInterview = async () => {
        try {
            const response = await fetch(`/api/interview/${interviewId}`);
            const json = await response.json();

            setInterview(json);
        } catch (error) {
            console.log("Error fetching interview", error);
            router.push("/dashboard");
        }
    }

    useEffect(() => {
        fetchInterview();
    }, [interviewId]);


    if (!interview) {
        return (
            <p className="h-screen flex items-center justify-center">
                <LoaderCircle className="animate-spin h-10 w-10" />
            </p>
        )
    }

    const transcriptFinal = Array.isArray(interview?.transcript)
        ? (interview.transcript as TranscriptMessage[])
        : [];

    return (
        <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-primary">
                Interview Resumen
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-3 rounded-md p-6 bg-white/10 backdrop/blur-lg text-white border border-white/20">
                <InfoCard
                    icon={Webhook}
                    name={interview.name}
                    label="Name"
                />

                <InfoCard
                    icon={Gauge}
                    name={interview.level}
                    label="Level"
                />

                <InfoCard
                    icon={Calendar}
                    name={new Date(interview.startedAt).toLocaleDateString()}
                    label="Date"
                />

                <InfoCard
                    icon={Drama}
                    name={interview.rol}
                    label="Rol"
                />
            </div>

            <TranscriptBox messages={transcriptFinal} />
        </div>
    )
}
