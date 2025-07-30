import NoteList from '@/components/features/NoteList';
import NoteEditor from '@/components/features/NoteEditor';

export default function HomePage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">My Notes</h1>
      <NoteEditor />
      <NoteList />
    </div>
  );
}