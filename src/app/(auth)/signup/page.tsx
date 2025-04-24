'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signup = async () => {
    const { error } = await supabase.auth.signUp({ email, password });
    if (!error) router.push('/dashboard');
    else alert(error.message);
  };

  return (
    <div className="max-w-md mx-auto mt-10 space-y-4">
      <h1 className="text-xl font-bold">Sign Up</h1>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} className="w-full p-2 border rounded" />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} className="w-full p-2 border rounded" />
      <button onClick={signup} className="bg-blue-600 text-white px-4 py-2 rounded">Sign Up</button>
    </div>
  );
}