export interface Todo {
  id: number;
  text: string;
  completed: boolean;
  important: boolean;
  createdAt: Date;
}

export type TodoAction =
  | { type: 'ADD_TODO'; payload: string }
  | { type: 'TOGGLE_TODO'; payload: number }
  | { type: 'TOGGLE_IMPORTANT'; payload: number }
  | { type: 'DELETE_TODO'; payload: number }
  | { type: 'EDIT_TODO'; payload: { id: number; text: string } }
  | { type: 'CLEAR_COMPLETED' }
  | { type: 'FILTER_TODOS'; payload: 'all' | 'active' | 'completed' };

export interface TodoState {
  todos: Todo[];
  filter: 'all' | 'active' | 'completed';
}

export const initialState: TodoState = {
  todos: [],
  filter: 'all'
};

export const todoReducer = (state: TodoState, action: TodoAction): TodoState => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            text: action.payload,
            completed: false,
            important: false,
            createdAt: new Date()
          }
        ]
      };

    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };

    case 'TOGGLE_IMPORTANT':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, important: !todo.important }
            : todo
        )
      };

    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };

    case 'EDIT_TODO':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id
            ? { ...todo, text: action.payload.text }
            : todo
        )
      };

    case 'CLEAR_COMPLETED':
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.completed)
      };

    case 'FILTER_TODOS':
      return {
        ...state,
        filter: action.payload
      };

    default:
      return state;
  }
};
