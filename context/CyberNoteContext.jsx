"use client";
import { createContext, useContext, useEffect, useState } from "react";

const CyberNoteContext = createContext();

export function CyberNoteProvider({ children }) {
  const [notes, setNotes] = useState([]);
  const [user, setUser] = useState({
    username: "Redwan",
    email: "redwan@cybernote.io",
  });
  const [selectedNote, setSelectedNote] = useState(null);

  // Fetch notes from SQLite
  useEffect(() => {
    const fetchNotes = async () => {
      const res = await fetch("/api/notes");
      const data = await res.json();
      setNotes(data);
    };
    fetchNotes();
  }, []);

  // Function to add a note
  const addNote = async (name, content) => {
    const res = await fetch("/api/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, content }),
    });
    const newNote = await res.json();
    setNotes((prev) => [...prev, newNote]);
  };

  return (
    <CyberNoteContext.Provider
      value={{
        notes,
        user,
        selectedNote,
        setSelectedNote,
        addNote,
      }}
    >
      {children}
    </CyberNoteContext.Provider>
  );
}

export function useCyberNoteData() {
  return useContext(CyberNoteContext);
}
