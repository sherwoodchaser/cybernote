"use client";

import React from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useCyberNoteData } from "@/context/CyberNoteContext";
import ReactMarkdown from "react-markdown";
import NoteDialog from "@/components/note-dialog";
import { Button } from "@/components/ui/button";
import { Pen, Trash2 } from "lucide-react";

function Dashboard() {
  const { selectedCategory, user } = useCyberNoteData();

  return (
    <>
      {/* Top header */}
      <header className="flex h-16 shrink-0 items-center justify-between px-6 border-b border-border/50">
        <div className="flex items-center gap-2">
          <SidebarTrigger className="-ml-1" />
          <h1 className="text-lg font-medium tracking-tight">
            Welcome back, <span className="font-semibold">{user.username}</span>
          </h1>
        </div>
        <div>
          <NoteDialog />
        </div>
      </header>

      {/* Main content area */}
      <div className="flex flex-1 flex-col gap-6 p-8 w-full max-w-4xl mx-auto">
        {/* Category title */}
        {selectedCategory && (
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              {selectedCategory.name}
            </h2>
            <div className="w-20 h-[2px] bg-primary mx-auto rounded-full"></div>
          </div>
        )}

        {/* Markdown content */}
        <div className="prose prose-zinc dark:prose-invert max-w-none mt-6 leading-relaxed">
          {selectedCategory ? (
            <>
              <div className="flex justify-end gap-2 mb-4">
                <Button variant="outline" className="cursor-pointer">
                  <Pen className="h-4 w-4" />
                  <span>Edit</span>
                </Button>
                <Button variant="destructive" className="cursor-pointer">
                  <Trash2 className="h-4 w-4" />
                  <span>Delete</span>
                </Button>
              </div>
              <ReactMarkdown>{selectedCategory.content}</ReactMarkdown>
            </>
          ) : (
            <p className="text-center text-muted-foreground">
              Select a category from the sidebar to view its content.
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
