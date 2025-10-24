"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User2, ChevronsUpDown, BadgeCheck, LogOut } from "lucide-react";
import { SearchNote } from "./ui/search";
import { useCyberNoteData } from "@/context/CyberNoteContext";
import LogoHeader from "./ui/logo-header";

export function AppSidebar() {
  const { categories, user, selectedCategory, setSelectedCategory } =
    useCyberNoteData();

  return (
    <Sidebar>
      <SidebarHeader>
        <LogoHeader />
        <SearchNote />
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {categories.map((category) => (
                <SidebarMenuItem key={category.name}>
                  <SidebarMenuButton
                    asChild
                    onClick={() => setSelectedCategory(category)}
                    className={`text-sm font-medium transition-colors cursor-pointer ${
                      selectedCategory?.name === category.name
                        ? "bg-zinc-800 text-white"
                        : "hover:bg-zinc-800"
                    }`}
                  >
                    <button>{category.name}</button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton size="lg" className="w-full cursor-pointer">
                  <User2 className="mr-2 h-4 w-4" />
                  <div className="flex flex-col items-start">
                    <span>{user.username}</span>
                    <span className="text-xs text-muted-foreground">
                      {user.email}
                    </span>
                  </div>
                  <ChevronsUpDown className="ml-auto size-4" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                align="end"
                sideOffset={4}
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem>
                  <BadgeCheck />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LogOut />
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
