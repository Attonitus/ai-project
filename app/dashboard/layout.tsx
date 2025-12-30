import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { SidebarDashboard } from "./components";

export default function layout({ children }: React.PropsWithChildren) {
    return (
        <div className="w-full min-h-screen bg-gray-800">
            <SidebarProvider>
                
                <SidebarDashboard />

                <main className="w-full min-h-screen p-6">
                    <div className="flex justify-between">
                        <SidebarTrigger className="text-black" />
                    </div>

                    {children}
                </main>

            </SidebarProvider>
        </div>
    )
}
