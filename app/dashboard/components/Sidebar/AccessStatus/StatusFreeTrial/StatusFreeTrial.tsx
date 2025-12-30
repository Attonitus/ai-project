import { Badge } from "@/components/ui/badge"


export const StatusFreeTrial = () => {
    return(
        <div className="p-4 bg-purple-700 border border-white rounded-md">
            <h3 className="font-semibold text-xl mb-2 text-center">
                🚀 Free Trial available
            </h3>
            <Badge variant={"outline"} className="w-full bg-blue-600">
                1 Free interview
            </Badge>
            <p className="text-xs mt-2">
                Create a free interview with AI
            </p>
        </div>
    )
}