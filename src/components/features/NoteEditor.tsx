'use client';

import { useState } from 'react';
import { useNotes } from '@/contexts/NotesContext';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

export default function NoteEditor() {
  const [noteContent, setNoteContent] = useState('');
  const { addNote } = useNotes();

  const handleAddNote = () => {
    if (noteContent.trim()) {
      addNote(noteContent);
      setNoteContent('');
    }
  };

  return (
    <div className="mb-4">
      <Input
        value={noteContent}
        onChange={setNoteContent}
        placeholder="Enter your note here..."
      />
      <Button onClick={handleAddNote}>Add Note</Button>
    </div>
  );
}