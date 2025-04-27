export interface CounterState {
  count: number;
  step: number;
  history: number[];
}

export type CounterAction =
  | { type: 'INCREMENT' }
  | { type: 'DECREMENT' }
  | { type: 'SET_STEP'; payload: number }
  | { type: 'RESET' }
  | { type: 'UNDO' };

export const initialState: CounterState = {
  count: 0,
  step: 1,
  history: []
};

export const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + state.step,
        history: [...state.history, state.count]
      };

    case 'DECREMENT':
      return {
        ...state,
        count: state.count - state.step,
        history: [...state.history, state.count]
      };

    case 'SET_STEP':
      return {
        ...state,
        step: action.payload
      };

    case 'RESET':
      return {
        ...initialState,
        history: [...state.history, state.count]
      };

    case 'UNDO':
      if (state.history.length === 0) {
        return state;
      }
      const newHistory = [...state.history];
      const previousCount = newHistory.pop() || 0;
      return {
        ...state,
        count: previousCount,
        history: newHistory
      };

    default:
      return state;
  }
};
