export interface Task {
  id: string;
  title: string;
  description?: string | null;
  status: 'pending' | 'in-progress' | 'completed';
  priority: 'low' | 'medium' | 'high';
  dueDate?: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface TaskFormData {
  title: string;
  description?: string;
  status: Task['status'];
  priority: Task['priority'];
  dueDate?: string;
}
