import React from 'react';

export const metadata = {
  title: '회사 소개 | Next.js 학습',
  description: 'Next.js의 라우팅과 메타데이터 기능을 배워봅시다.',
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">회사 소개</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">우리는 누구인가요?</h2>
        <p className="text-gray-600 mb-4">
          우리는 혁신적인 웹 솔루션을 제공하는 기술 회사입니다.
          Next.js와 최신 웹 기술을 활용하여 최고의 사용자 경험을 제공합니다.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">우리의 가치</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>혁신과 창의성</li>
          <li>고객 중심</li>
          <li>지속적인 학습</li>
          <li>팀워크와 협력</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">연락처</h2>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-gray-600 mb-2">
            <strong>주소:</strong> 서울시 강남구 테헤란로
          </p>
          <p className="text-gray-600 mb-2">
            <strong>이메일:</strong> contact@example.com
          </p>
          <p className="text-gray-600">
            <strong>전화:</strong> 02-1234-5678
          </p>
        </div>
      </section>
    </div>
  );
}
