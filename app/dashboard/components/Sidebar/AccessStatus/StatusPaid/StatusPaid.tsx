import { Badge } from "@/components/ui/badge";

export default function StatusPaid() {
    return (
        <div className="flex items-start gap-4 p-3 rounded-2xl border shadow-lg border-white text-white">
            <div>
                <h3 className="font-semibold text-2xl mb-2 text-center">🚀 Full access</h3>
                <Badge variant={"outline"} className="w-full bg-purple-700 py-1">Activated Plan</Badge>
                <p className="text-sm text-center mt-2">You can practice unlimited interviews with AI</p>
            </div>
        </div>
    )
}
