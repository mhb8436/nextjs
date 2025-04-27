'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import TaskForm from '@/components/tasks/TaskForm';
import { Task, TaskFormData } from '@/types';

interface EditTaskClientProps {
  id: string;
}

export default function EditTaskClient({ id }: EditTaskClientProps) {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { data: task, isLoading } = useQuery<Task>({
    queryKey: ['tasks', id],
    queryFn: () => fetch(`/api/tasks/${id}`).then((res) => res.json()),
  });

  const { mutate: updateTask, isPending } = useMutation({
    mutationFn: async (data: TaskFormData) => {
      const response = await fetch(`/api/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
      }

      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
      router.push('/tasks');
    },
  });

  const { mutate: deleteTask, isPending: isDeleting } = useMutation({
    mutationFn: async () => {
      const response = await fetch(`/api/tasks/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
      }

      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
      router.push('/tasks');
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-t-2 border-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!task) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">작업을 찾을 수 없습니다.</p>
      </div>
    );
  }

  const initialData: TaskFormData = {
    title: task.title,
    description: task.description || undefined,
    status: task.status,
    priority: task.priority,
    dueDate: task.dueDate
      ? new Date(task.dueDate).toISOString().split('T')[0]
      : undefined,
  };

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-md mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">작업 수정</h1>
          <button
            onClick={() => {
              if (window.confirm('이 작업을 삭제하시겠습니까?')) {
                deleteTask();
              }
            }}
            className="text-red-500 hover:text-red-600"
            disabled={isDeleting}
          >
            삭제
          </button>
        </div>
        <TaskForm
          initialData={initialData}
          onSubmit={updateTask}
          isSubmitting={isPending}
        />
      </div>
    </div>
  );
}
