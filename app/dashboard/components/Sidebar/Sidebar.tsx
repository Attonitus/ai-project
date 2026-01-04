"use client"
import { Factory, Home, FlaskConical, Newspaper, Settings, Banknote } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import BtnCreateInterview from "../../../../components/shared/BtnCreateInterview/BtnCreateInterview"
import { AccessStatus } from "./AccessStatus"
import { useFetchUserStatus } from "@/hooks/use-fetch-user-status"
import StripeDialogPayment from "@/components/shared/StripeDialogPayment"

const items = [
    {
        title: "Dashboard",
        url: "/dashboard",
        icon: Home,
    },
    {
        title: "Interviews",
        url: "/dashboard/interviews",
        icon: FlaskConical,
    },
    {
        title: "All Interviews",
        url: "/dashboard/interviews",
        icon: Newspaper,
    },

    {
        title: "Payments",
        url: "/dashboard/payments",
        icon: Banknote,
    },
    {
        title: "Settings",
        url: "/dashboard/settings",
        icon: Settings,
    },
]


export const SidebarDashboard = () => {

    const { hasPaid, hasUsedFreeTrial } = useFetchUserStatus();

    return (
        <Sidebar className="bg-gray-950 text-white border-r-0 shadow-none ring-0">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            asChild
                            className="data-[slot=sidebar-menu-button]:p-1.5!"
                        >
                            <a href="#">
                                <Factory className="w-12 h-12" />
                                <span className="text-xl font-semibold">TechView AI</span>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>


            <SidebarContent>
                <SidebarGroup>
                    {hasPaid && <BtnCreateInterview />}

                    {!hasPaid && hasUsedFreeTrial && <StripeDialogPayment />}

                    {!hasPaid && !hasUsedFreeTrial && <BtnCreateInterview />}
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter>
                <AccessStatus />
            </SidebarFooter>
        </Sidebar>
    )
}