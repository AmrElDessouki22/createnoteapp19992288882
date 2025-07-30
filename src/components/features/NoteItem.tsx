'use client';

import { Note } from '@/types';
import { useNotes } from '@/contexts/NotesContext';

interface NoteItemProps {
  note: Note;
}

export default function NoteItem({ note }: NoteItemProps) {
  const { deleteNote } = useNotes();

  return (
    <div className="p-2 border mb-2 flex justify-between items-center">
      <span>{note.content}</span>
      <button onClick={() => deleteNote(note.id)} className="text-red-500">Delete</button>
    </div>
  );
}