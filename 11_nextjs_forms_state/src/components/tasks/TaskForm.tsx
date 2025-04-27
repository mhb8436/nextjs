'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { TaskFormData } from '@/types';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import Button from '@/components/ui/Button';

const taskSchema = z.object({
  title: z.string().min(1, '제목을 입력해주세요.'),
  description: z.string().optional(),
  status: z.enum(['pending', 'in-progress', 'completed']),
  priority: z.enum(['low', 'medium', 'high']),
  dueDate: z.string().optional(),
});

const statusOptions = [
  { value: 'pending', label: '대기 중' },
  { value: 'in-progress', label: '진행 중' },
  { value: 'completed', label: '완료' },
];

const priorityOptions = [
  { value: 'low', label: '낮음' },
  { value: 'medium', label: '중간' },
  { value: 'high', label: '높음' },
];

interface TaskFormProps {
  initialData?: TaskFormData;
  onSubmit: (data: TaskFormData) => void;
  isSubmitting?: boolean;
}

export default function TaskForm({ 
  initialData,
  onSubmit,
  isSubmitting = false,
}: TaskFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TaskFormData>({
    resolver: zodResolver(taskSchema),
    defaultValues: initialData,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <Input
        label="제목"
        {...register('title')}
        error={errors.title?.message}
      />

      <Input
        label="설명"
        {...register('description')}
        error={errors.description?.message}
      />

      <Select
        label="상태"
        options={statusOptions}
        {...register('status')}
        error={errors.status?.message}
      />

      <Select
        label="우선순위"
        options={priorityOptions}
        {...register('priority')}
        error={errors.priority?.message}
      />

      <Input
        label="마감일"
        type="date"
        {...register('dueDate')}
        error={errors.dueDate?.message}
      />

      <Button
        type="submit"
        className="w-full"
        isLoading={isSubmitting}
      >
        {initialData ? '수정하기' : '추가하기'}
      </Button>
    </form>
  );
}
