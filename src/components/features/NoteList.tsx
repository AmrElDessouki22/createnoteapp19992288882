'use client';

import { useNotes } from '@/contexts/NotesContext';
import NoteItem from '@/components/features/NoteItem';

export default function NoteList() {
  const { notes } = useNotes();

  return (
    <div className="mt-4">
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </div>
  );
}