import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { CyberNoteProvider } from "@/context/CyberNoteContext";
import { ThemeProvider } from "@/components/theme-provider";

export default function Layout({ children }) {
  return (
    <CyberNoteProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>{children}</SidebarInset>
        </SidebarProvider>
      </ThemeProvider>
    </CyberNoteProvider>
  );
}
