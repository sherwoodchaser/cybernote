"use client";

import React from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useCyberNoteData } from "@/context/CyberNoteContext";
import ReactMarkdown from "react-markdown";
import NoteDialog from "@/components/note-dialog";
import { Button } from "@/components/ui/button";
import { Pen, Trash2, FileText, Star, Zap } from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";

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
            <div className="flex flex-col items-center justify-center text-center text-muted-foreground space-y-8 mt-10">
              {/* Greeting */}
              <div>
                <h2 className="text-2xl font-semibold text-foreground">
                  Welcome to <span className="text-primary">CyberNote</span> ⚡
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Your personal space for cybersecurity research, notes, and
                  ideas.
                </p>
              </div>

              {/* Quick overview cards */}
              <div className="grid sm:grid-cols-3 gap-4 w-full max-w-3xl">
                {/* Total Notes Card */}
                <div className="bg-card border border-border/40 rounded-xl p-4 flex flex-col justify-around">
                  <div className="flex items-center justify-center mb-2">
                    <FileText className="w-6 h-6 text-primary mr-2" />
                    <h3 className="text-lg font-medium">Total Notes</h3>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    You’ve collected{" "}
                    <span className="font-medium">12 notes</span>. Keep
                    documenting your research.
                  </p>
                </div>

                {/* Welcome / Advice Card */}
                <div className="relative bg-card rounded-xl p-4 flex flex-col justify-around shadow-md">
                  <div className="flex items-center justify-center mb-2">
                    <h3 className="text-lg font-semibold text-primary">
                      Welcome!
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    Start taking notes by clicking the{" "}
                    <span className="font-medium">“Add Note”</span> button.
                  </p>
                  <BorderBeam size={100} />
                </div>

                {/* Quick Tip Card */}
                <div className="bg-card border border-border/40 rounded-xl p-4 flex flex-col justify-around">
                  <div className="flex items-center justify-center mb-2">
                    <Zap className="w-6 h-6 text-primary mr-2" />
                    <h3 className="text-lg font-medium">Quick Tip</h3>
                  </div>
                  <p className="text-sm text-muted-foreground italic">
                    “Security is a process, not a product.” — Bruce Schneier
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="w-16 h-[2px] bg-primary/60 rounded-full"></div>

              {/* Motivation */}
              <div className="max-w-md">
                <p className="text-sm leading-relaxed text-muted-foreground italic">
                  💡 Keep your notes structured — every exploit, every payload,
                  every idea documented here makes you a stronger researcher.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
