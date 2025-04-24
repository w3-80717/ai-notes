'use client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteNote } from '@/lib/queries';

export function NoteCard({ note }: { note: any }) {
  const queryClient = useQueryClient();
  const { mutate: removeNote } = useMutation({
    mutationFn: () => deleteNote(note.id),
    onSuccess: () => queryClient.invalidateQueries({queryKey: ['notes']})
  });

  return (
    <div className="border p-4 rounded-xl shadow">
      <h2 className="font-bold text-lg">{note.title}</h2>
      <p className="text-sm text-gray-500">{note.summary || note.content}</p>
      <button onClick={() => removeNote()} className="text-red-500 text-sm mt-2">Delete</button>
    </div>
  );
}
