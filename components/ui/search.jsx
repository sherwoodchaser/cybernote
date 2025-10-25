import { Search, SearchIcon } from "lucide-react";

import { Label } from "@/components/ui/label";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarInput,
} from "@/components/ui/sidebar";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./input-group";

export function SearchNote({ ...props }) {
  return (
    <form {...props}>
      <SidebarGroup className="py-0">
        <SidebarGroupContent className="relative">
          <Label htmlFor="search" className="sr-only">
            Search
          </Label>
          <InputGroup>
            <InputGroupInput id="search" placeholder="Search the notes..." />
            <InputGroupAddon>
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
        </SidebarGroupContent>
      </SidebarGroup>
    </form>
  );
}
