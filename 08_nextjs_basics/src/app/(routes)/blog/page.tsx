// "use client";

import React from "react";
import Link from "next/link";

export const metadata = {
  title: "블로그 | Next.js 학습",
  description: "Next.js로 만든 블로그 예제입니다.",
};

const posts = [
  {
    slug: "next-js-introduction",
    title: "Next.js 소개",
    excerpt:
      "Next.js는 React 기반의 풀스택 웹 프레임워크입니다. 이 글에서는 Next.js의 주요 기능과 장점을 알아봅니다.",
    date: "2025-04-27",
  },
  {
    slug: "app-router-basics",
    title: "App Router 기초",
    excerpt:
      "App Router는 Next.js 13의 새로운 라우팅 시스템입니다. 기존 pages 디렉토리와 비교하여 어떤 점이 개선되었는지 살펴봅시다.",
    date: "2025-04-26",
  },
];

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">블로그</h1>

      <div className="grid gap-8">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <Link href={`/blog/${post.slug}`} className="block">
              <h2 className="text-2xl font-semibold mb-2 hover:text-blue-600">
                {post.title}
              </h2>
              <time className="text-sm text-gray-500 mb-4 block">
                {post.date}
              </time>
              <p className="text-gray-600">{post.excerpt}</p>
              <div className="mt-4 text-blue-600 font-medium">더 읽기 →</div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
