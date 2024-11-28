import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default function Page() {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main>
                <SidebarTrigger />
            </main>
        </SidebarProvider>
    );
}
