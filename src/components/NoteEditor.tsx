'use client';
import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addNote } from '@/lib/queries';

export function NoteEditor({ userId }: { userId: string }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const queryClient = useQueryClient();

  const { mutate: createNote } = useMutation({
    mutationFn: () => addNote({ title, content, user_id: userId }),
    onSuccess: () => {
      setTitle('');
      setContent('');
      queryClient.invalidateQueries(['notes']);
    }
  });

  return (
    <div className="space-y-2">
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" className="w-full p-2 border rounded" />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" className="w-full p-2 border rounded h-32" />
      <button onClick={() => createNote()} className="bg-blue-600 text-white px-4 py-2 rounded">Add Note</button>
    </div>
  );
}
