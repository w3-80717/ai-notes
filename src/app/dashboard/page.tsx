'use client';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getNotes } from '@/lib/queries';
import { NoteCard } from '@/components/NoteCard';
import { NoteEditor } from '@/components/NoteEditor';
import { supabase } from '@/lib/supabase';

export default function Dashboard() {
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUserId(data.user?.id ?? null));
  }, []);

  const { data: notes, isLoading } = useQuery({
    queryKey: ['notes'],
    queryFn: () => getNotes(userId!),
    enabled: !!userId
  });

  if (!userId) return <p>Loading user...</p>;
  if (isLoading) return <p>Loading notes...</p>;

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold">Your Notes</h1>
      <NoteEditor userId={userId} />
      {notes?.data?.map(note => <NoteCard key={note.id} note={note} />)}
    </div>
  );
}
