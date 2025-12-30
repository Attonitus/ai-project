import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Headset } from "lucide-react"
import FormCreateInterview from "./FormCreateInterview"

export default function BtnCreateInterview() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="bg-indigo-800 font-bold py-3 px-6 rounded-lg hover:text-black hover:cursor-pointer">
                    Create new interview
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="flex gap-2 items-center text-purple-800">
                        Start interview
                        <Headset />
                    </DialogTitle>
                    <FormCreateInterview />
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}
