import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 space-y-6 text-center">
      <h1 className="text-3xl font-bold">Welcome to AI Notes App</h1>
      <p className="text-gray-600">Quick access links:</p>
      <div className="space-y-3">
        <Link href="/login" className="text-blue-600 hover:underline">
          🔐 Login
        </Link>
        <Link href="/signup" className="text-blue-600 hover:underline">
          ✍️ Signup
        </Link>
        <Link href="/dashboard" className="text-blue-600 hover:underline">
          🗒️ Dashboard
        </Link>
      </div>
    </div>
  );
}
