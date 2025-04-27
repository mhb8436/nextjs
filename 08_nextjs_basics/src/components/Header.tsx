'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-4xl mx-auto px-4 py-4">
        <ul className="flex items-center gap-6">
          <li>
            <Link
              href="/"
              className="text-gray-800 hover:text-blue-600 transition-colors"
            >
              홈
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="text-gray-800 hover:text-blue-600 transition-colors"
            >
              블로그
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-gray-800 hover:text-blue-600 transition-colors"
            >
              회사 소개
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
