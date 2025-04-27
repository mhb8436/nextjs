'use client';

import { useQuery } from '@tanstack/react-query';
import { Task } from '@/types';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function TasksPage() {
  const { data: tasks, isLoading } = useQuery<Task[]>({
    queryKey: ['tasks'],
    queryFn: () => fetch('/api/tasks').then((res) => res.json()),
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-t-2 border-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">작업 목록</h1>
          <Link
            href="/tasks/new"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            새 작업
          </Link>
        </div>

        <div className="grid gap-4">
          {tasks?.map((task) => (
            <div
              key={task.id}
              className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-medium">{task.title}</h3>
                  {task.description && (
                    <p className="text-gray-600 mt-1">{task.description}</p>
                  )}
                </div>
                <Link
                  href={`/tasks/${task.id}/edit`}
                  className="text-blue-500 hover:text-blue-600"
                >
                  수정
                </Link>
              </div>

              <div className="mt-4 flex items-center gap-4 text-sm">
                <span
                  className={`px-2 py-1 rounded-full ${
                    task.status === 'completed'
                      ? 'bg-green-100 text-green-800'
                      : task.status === 'in-progress'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {task.status === 'completed'
                    ? '완료'
                    : task.status === 'in-progress'
                    ? '진행 중'
                    : '대기 중'}
                </span>
                <span
                  className={`px-2 py-1 rounded-full ${
                    task.priority === 'high'
                      ? 'bg-red-100 text-red-800'
                      : task.priority === 'medium'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-green-100 text-green-800'
                  }`}
                >
                  {task.priority === 'high'
                    ? '높음'
                    : task.priority === 'medium'
                    ? '중간'
                    : '낮음'}
                </span>
                {task.dueDate && (
                  <span className="text-gray-600">
                    마감일: {new Date(task.dueDate).toLocaleDateString()}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
