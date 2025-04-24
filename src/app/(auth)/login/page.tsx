'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (!error) router.push('/dashboard');
    else alert(error.message);
  };

  return (
    <div className="max-w-md mx-auto mt-10 space-y-4">
      <h1 className="text-xl font-bold">Login</h1>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} className="w-full p-2 border rounded" />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} className="w-full p-2 border rounded" />
      <button onClick={login} className="bg-green-600 text-white px-4 py-2 rounded">Login</button>
    </div>
  );
}
