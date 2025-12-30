"use client"
import { Badge } from "@/components/ui/badge";
import { StatusFreeTrial } from "./StatusFreeTrial";
import StatusPaid from "./StatusPaid/StatusPaid";

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from "react";
import { Button } from "@/components/ui/button";

export const AccessStatus = () => {

    const [open, setOpen] = useState(false)

    const hasPaid = false;
    const statusFree = true;

    if (hasPaid) {
        return (
            <StatusPaid />
        )
    }

    if (statusFree && !hasPaid) {
        return (
            <StatusFreeTrial />
        )
    }

    const handleOpenChange = () => {
        setOpen(!open);
    }

    return (
        <div className="p-4 border-white bg-purple-800 border rounded-md">
            <h3 className="font-semibold text-xl mb-1 text-center">🚫 Plan no activated</h3>
            <Badge className="w-full py-1 bg-red-700" >Limited access</Badge>
            <p className="text-sx mt-2 mb-3 text-center">You have used your free trial</p>


            <Dialog open={open} onOpenChange={handleOpenChange}>
                <DialogTrigger asChild>
                    <Button
                    className="w-full font-semibold text-purple-700"
                    >
                        Unlock for $9.99
                    </Button>
                </DialogTrigger>
                <DialogContent className="max-w-xl p-0 overflow-hidden">
                    <DialogHeader>
                        <DialogTitle className="hidden">Purchase</DialogTitle>
                        <div id="checkout-modal" className="min-h-[600px]" />
                    </DialogHeader>
                </DialogContent>
            </Dialog>

        </div>
    )
}