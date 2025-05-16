'use client';

import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold text-gray-800">
                Next.js Demo
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="/"
                className="inline-flex items-center px-1 pt-1 text-gray-500 hover:text-gray-700"
              >
                Home
              </Link>
              <Link
                href="/posts"
                className="inline-flex items-center px-1 pt-1 text-gray-500 hover:text-gray-700"
              >
                Posts
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            {session ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-700">
                  {session.user?.name || session.user?.email}
                </span>
                <button
                  onClick={() => signOut()}
                  className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <button
                onClick={() => signIn()}
                className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
