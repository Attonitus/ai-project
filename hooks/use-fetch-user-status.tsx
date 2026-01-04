"use client";

import { useEffect, useState } from "react";

export const useFetchUserStatus = () => {

    const [hasPaid, setHasPaid] = useState<boolean | null>(null);
    const [hasUsedFreeTrial, setHasUsedFreeTrial] = useState<boolean | null>(null);

    useEffect(() => {
        const fetchUserStatus = async () => {
            try {
                const res = await fetch("/api/user/status");
                const json = await res.json();

                setHasPaid(json.hasPaid);
                setHasUsedFreeTrial(json.hasUsedFreeTrial);
            } catch (error) {
                console.error("Error fetch user status", error);
            }
        };

        fetchUserStatus();
    }, []);

    return { hasPaid, hasUsedFreeTrial };
};
