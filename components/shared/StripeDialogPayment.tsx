"use client"

import { Button } from "../ui/button";
import { useRef, useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC!);

export default function StripeDialogPayment() {
    const [open, setOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null)

    const handleOpenChange = async (openState: boolean) => {
        setOpen(openState);

        if (openState) {
            const stripe = await stripePromise;
            const response = await fetch(`/api/checkout`, {
                method: "POST"
            });

            const { clientSecret } = await response.json();

            const checkout = await stripe?.initEmbeddedCheckout({
                fetchClientSecret: async() => clientSecret
            });

            checkout?.mount("#checkout-modal");
        }
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
                    <div ref={containerRef} id="checkout-modal" className="min-h-150" />
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}
