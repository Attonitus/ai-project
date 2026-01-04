"use client"

import { Button } from "../ui/button";
import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

export default function StripeDialogPayment() {
    const [open, setOpen] = useState(false)

    const handleOpenChange = () => {
        setOpen(!open);
    }
    return (
        <Dialog open={open} onOpenChange={handleOpenChange}>
            <DialogTrigger asChild>
                <Button
                    className="text-white bg-purple-600"
                >
                    🚀 Unlock unlimited interviews
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-xl p-0 overflow-hidden text-black">
                <DialogHeader>
                    <DialogTitle className="hidden">Purchase</DialogTitle>
                    <div id="checkout-modal" className="min-h-150" />
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}
