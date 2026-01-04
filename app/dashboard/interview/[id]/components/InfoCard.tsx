import { LucideIcon } from "lucide-react"

interface InfoCardProps {
    name: string,
    icon: LucideIcon,
    label: string
}


export default function InfoCard({ icon: Icon, label, name }: InfoCardProps) {
    return (
        <div className="flex flex-col items-center p-4 bg-white/10 border border-white/20 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="p-3 bg-blue-600/20 border-blue-400/30 border rounded-full items-center">
                <Icon />
            </div>
            <p className="text-sm text-gray-300 mt-1 capitalize">{label}</p>
            <span className="text-2xl capitalize">{name}</span>
        </div>
    )
}
