// 'use client';

import React from "react";
import { notFound } from "next/navigation";

// 블로그 포스트 데이터 (실제로는 DB나 CMS에서 가져올 것입니다)
const posts = {
  "next-js-introduction": {
    title: "Next.js 소개",
    content: "Next.js는 React 기반의 풀스택 웹 프레임워크입니다...",
    date: "2025-04-27",
  },
  "app-router-basics": {
    title: "App Router 기초",
    content: "App Router는 Next.js 13의 새로운 라우팅 시스템입니다...",
    date: "2025-04-26",
  },
};

type Props = {
  params: {
    slug: string;
  };
};

// 동적 메타데이터 생성
export async function generateMetadata({ params }: Props) {
  const post = posts[params.slug as keyof typeof posts];

  if (!post) {
    return {
      title: "포스트를 찾을 수 없습니다",
    };
  }

  return {
    title: `${post.title} | Next.js 학습`,
    description: post.content.substring(0, 160),
  };
}

export default function BlogPost({ params }: Props) {
  const post = posts[params.slug as keyof typeof posts];

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto py-8 px-4">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
        <time className="text-gray-500">{post.date}</time>
      </header>

      <div className="prose prose-slate max-w-none">
        <p className="text-gray-600 leading-relaxed">{post.content}</p>
      </div>
    </article>
  );
}
