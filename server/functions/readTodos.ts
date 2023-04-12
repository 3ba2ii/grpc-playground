import { todos } from './createTodo';

export function readTodos(
  call: any,
  callback: (error: Error | null, response: any) => void
) {
  callback(null, { items: todos });
}
