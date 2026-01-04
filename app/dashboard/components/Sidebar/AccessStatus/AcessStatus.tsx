"use client"

import { Badge } from "@/components/ui/badge";
import { StatusFreeTrial } from "./StatusFreeTrial";
import StatusPaid from "./StatusPaid/StatusPaid";

import StripeDialogPayment from "@/components/shared/StripeDialogPayment";
import { useFetchUserStatus } from "@/hooks/use-fetch-user-status";



export const AccessStatus = () => {

    const {hasPaid, hasUsedFreeTrial} = useFetchUserStatus();

    if (hasPaid) {
        return (
            <StatusPaid />
        )
    }

    if (!hasUsedFreeTrial && !hasPaid) {
        return (
            <StatusFreeTrial />
        )
    }


    return (
        <div className="p-2 border-white bg-purple-800 border rounded-md flex flex-col items-center">
            <h3 className="font-semibold text-xl mb-1 text-center">🚫 Plan no activated</h3>
            <Badge className="w-full py-1 bg-red-700" >Limited access</Badge>
            <p className="text-sx mt-2 mb-3 text-center">You have used your free trial</p>


            <StripeDialogPayment />

        </div>
    )
}