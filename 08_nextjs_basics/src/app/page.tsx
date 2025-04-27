"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">
            Next.js 13+ App Router 학습
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Next.js의 새로운 App Router와 주요 기능들을 배워봅시다.
          </p>
          <div className="inline-flex gap-4">
            <Link
              href="/blog"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
            >
              블로그 보기
            </Link>
            <Link
              href="/about"
              className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors"
            >
              회사 소개
            </Link>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">App Router</h2>
            <p className="text-gray-600 mb-4">
              Next.js 13+의 새로운 파일 시스템 기반 라우터를 학습합니다.
              레이아웃, 페이지, 로딩 UI 등을 구성하는 방법을 알아봅니다.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>파일 기반 라우팅</li>
              <li>레이아웃 시스템</li>
              <li>서버 컴포넌트</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">주요 기능</h2>
            <p className="text-gray-600 mb-4">
              Next.js의 핵심 기능들을 실습을 통해 학습합니다. 데이터 페칭,
              정적/동적 렌더링, 메타데이터 관리 등을 다룹니다.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>정적/동적 렌더링</li>
              <li>메타데이터 API</li>
              <li>캐싱 전략</li>
            </ul>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">시작하기</h2>
          <p className="text-gray-600 mb-6">
            블로그에서 Next.js의 다양한 기능들을 자세히 알아보세요.
          </p>
          <Link
            href="/blog"
            className="text-blue-500 hover:text-blue-600 font-medium"
          >
            블로그 글 읽기 →
          </Link>
        </section>
      </div>
    </div>
  );
}
