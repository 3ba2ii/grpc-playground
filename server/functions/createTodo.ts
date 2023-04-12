export const todos = [];

export function createTodo(
  call: any,
  callback: (error: Error | null, response: any) => void
) {
  const todoItem = {
    id: todos.length + 1,
    text: call.request.text,
  };
  todos.push(todoItem);
  callback(null, todoItem);
}
