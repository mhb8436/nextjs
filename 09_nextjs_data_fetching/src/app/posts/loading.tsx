import LoadingSpinner from '@/components/LoadingSpinner';

export default function Loading() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="h-8 w-48 bg-gray-200 rounded mb-8 animate-pulse"></div>
      <div className="space-y-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="border rounded-lg p-4">
            <div className="h-6 w-3/4 bg-gray-200 rounded mb-2 animate-pulse"></div>
            <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse"></div>
          </div>
        ))}
      </div>
      <LoadingSpinner />
    </div>
  );
}
