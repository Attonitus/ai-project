import { MetricCardProps } from "./MetricCard.types"

export const MetricCard = ({icon, title, value}: MetricCardProps) => {
    return(
        <div className="flex flex-col items-center p-4 rounded-lg bg-white/20 shadow-sm">
            <div className="mb-2">
                {icon}
            </div>
            <span className="text-3xl font-extrabold">{value}</span>
            <p className="text-sm text-gray-300 mt-1">{title}</p>
        </div>
    )
}