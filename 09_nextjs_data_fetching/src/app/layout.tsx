import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next.js 데이터 페칭',
  description: 'Next.js의 데이터 페칭 방법을 배워봅시다.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
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
                  href="/posts"
                  className="text-gray-800 hover:text-blue-600 transition-colors"
                >
                  게시글
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <main>{children}</main>

        <footer className="bg-gray-50 border-t mt-12">
          <div className="max-w-4xl mx-auto px-4 py-8">
            <p className="text-center text-gray-600">
              Next.js 데이터 페칭 예제
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
