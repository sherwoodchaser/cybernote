import { Command } from "lucide-react";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./sidebar";
import { AnimatedThemeToggler } from "./animated-theme-toggler";

function LogoHeader() {
  return (
    <SidebarMenu className="py-2">
      <SidebarMenuItem className="flex items-center">
        <SidebarMenuButton size="lg" asChild className="hover:bg-transparent">
          <h1>
            <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
              <Command className="size-4" />
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">CyberNote</span>
              <span className="truncate text-xs">Enterprise</span>
            </div>
          </h1>
        </SidebarMenuButton>
        <AnimatedThemeToggler duration={700} />
      </SidebarMenuItem>
    </SidebarMenu>
  );
}

export default LogoHeader;
