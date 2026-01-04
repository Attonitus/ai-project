import { roles } from "@/components/shared/BtnCreateInterview/FormCreateInterview.data"
import { Interview } from "@/lib/generated/prisma/client"

export type InterviewImageProps = {
    interview: Interview
}

export default function InterviewImage({ interview }: InterviewImageProps) {

    const roleColors: Record<string, string> = {
        frontend: "bg-blue-600/20 border-blue-400/30 text-blue-200",
        backend: "bg-green-600/20 border-green-400/30 text-green-200",
        fullstack: "bg-purple-600/20 border-purple-400/30 text-purple-200",
        mobile: "bg-yellow-600/20 border-yellow-400/30 text-yellow-200",
        devops: "bg-red-600/20 border-red-400/30 text-red-200",
        data: "bg-pink-600/20 border-pink-400/30 text-pink-200",
    }

    const roleInfo = roles.find(r => r.value === interview.rol);

    return (
        <div className={`p-2 rounded-md border ${roleColors[interview.rol]}`}>
            <span className="text-3xl">{roleInfo?.icon}</span>
        </div>
    )
}
