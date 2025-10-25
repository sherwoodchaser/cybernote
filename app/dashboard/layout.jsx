import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { CyberNoteProvider } from "@/context/CyberNoteContext";

export default function Layout({ children }) {
  return (
    <CyberNoteProvider>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>{children}</SidebarInset>
      </SidebarProvider>
    </CyberNoteProvider>
  );
}
