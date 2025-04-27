export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <p className="text-center text-gray-600">
          © {new Date().getFullYear()} Next.js 학습 예제. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
