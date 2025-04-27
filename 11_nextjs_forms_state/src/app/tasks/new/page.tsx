'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import TaskForm from '@/components/tasks/TaskForm';
import { TaskFormData } from '@/types';

export default function NewTaskPage() {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { mutate: createTask, isPending } = useMutation({
    mutationFn: async (data: TaskFormData) => {
      const response = await fetch('/api/tasks', {
        method: 'POST',
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

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-md mx-auto space-y-8">
        <h1 className="text-2xl font-bold">새 작업 추가</h1>
        <TaskForm onSubmit={createTask} isSubmitting={isPending} />
      </div>
    </div>
  );
}
