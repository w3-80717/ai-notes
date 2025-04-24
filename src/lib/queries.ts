import { supabase } from './supabase';

export async function getNotes(userId: string) {
  return supabase.from('notes').select('*').eq('user_id', userId).order('created_at', { ascending: false });
}

export async function addNote(note: { title: string; content: string; user_id: string }) {
  return supabase.from('notes').insert([note]);
}

export async function updateNote(id: string, updates: { title?: string; content?: string; summary?: string }) {
  return supabase.from('notes').update(updates).eq('id', id);
}

export async function deleteNote(id: string) {
  return supabase.from('notes').delete().eq('id', id);
}

