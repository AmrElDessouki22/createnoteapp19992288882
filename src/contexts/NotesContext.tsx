'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { Note } from '@/types';

interface NotesContextProps {
  notes: Note[];
  addNote: (content: string) => void;
  deleteNote: (id: string) => void;
}

const NotesContext = createContext<NotesContextProps | undefined>(undefined);

export function NotesProvider({ children }: { children: ReactNode }) {
  const [notes, setNotes] = useState<Note[]>([]);

  const addNote = (content: string) => {
    setNotes([...notes, { id: `${Date.now()}`, content }]);
  };

  const deleteNote = (id: string) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <NotesContext.Provider value={{ notes, addNote, deleteNote }}>
      {children}
    </NotesContext.Provider>
  );
}

export function useNotes() {
  const context = useContext(NotesContext);
  if (!context) {
    throw new Error('useNotes must be used within a NotesProvider');
  }
  return context;
}