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
import {
  User2,
  ChevronsUpDown,
  BadgeCheck,
  LogOut,
  Home,
  HomeIcon,
  Frown,
} from "lucide-react";
import { SearchNote } from "./ui/search";
import { useCyberNoteData } from "@/context/CyberNoteContext";
import LogoHeader from "./ui/logo-header";

export function AppSidebar() {
  const { notes, user, selectedNote, setSelectedNote } = useCyberNoteData();
  useCyberNoteData();

  return (
    <Sidebar>
      <SidebarHeader>
        <LogoHeader />
        {notes.length > 0 && <SearchNote />}
      </SidebarHeader>

      <SidebarContent>
        {notes.length === 0 ? (
          <div className="p-4 h-full flex items-center justify-center flex-col text-center text-sm text-muted-foreground">
            <Frown className="mb-2 h-6 w-6 mx-auto" />
            <span>No notes available. Create your first note!</span>
          </div>
        ) : (
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarGroupLabel>
                <BadgeCheck className="mr-2 h-4 w-4" />
                <span>All Notes</span>
              </SidebarGroupLabel>
              <SidebarMenu>
                {notes.map((note) => (
                  <SidebarMenuItem key={note.name}>
                    <SidebarMenuButton
                      asChild
                      onClick={() => setSelectedNote(note)}
                      className={`text-sm font-medium transition-colors cursor-pointer ${
                        selectedNote?.name === note.name
                          ? "bg-zinc-800 text-white"
                          : "hover:bg-zinc-800"
                      }`}
                    >
                      <button>{note.name}</button>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
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
