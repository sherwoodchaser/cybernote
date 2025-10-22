"use client";
import { createContext, useContext, useState } from "react";

const CyberNoteContext = createContext({
  categories: [],
  user: null,
  selectedCategory: null,
  setSelectedCategory: () => {},
});

export function CyberNoteProvider({ children }) {
  const [categories] = useState([
    {
      name: "Getting Started",
      content: `# Getting Started\n\nWelcome to **CyberNote**! This section helps you understand how to navigate the dashboard and manage your notes.`,
    },
    {
      name: "Projects",
      content: `# Projects\n\nHere you can organize notes related to your projects. Add descriptions, deadlines, and progress updates.`,
    },
    {
      name: "Ideas",
      content: `# Ideas\n\nCapture your random ideas or thoughts here. Great for brainstorming sessions and future planning.`,
    },
    {
      name: "Resources",
      content: `# Resources\n\nList useful links, tools, articles, or books that you want to keep for reference.`,
    },
    {
      name: "Personal Notes",
      content: `# Personal Notes\n\nThis section is for general journaling or daily thoughts. Keep it private and simple.`,
    },
  ]);

  const [user, setUser] = useState({
    username: "Redwan",
    email: "redwan@cybernote.io",
  });

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <CyberNoteContext.Provider
      value={{ categories, user, selectedCategory, setSelectedCategory }}
    >
      {children}
    </CyberNoteContext.Provider>
  );
}

export function useCyberNoteData() {
  return useContext(CyberNoteContext);
}
