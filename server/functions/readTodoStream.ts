import { sleep } from '../utils/sleep';
import { todos } from './createTodo';

export async function readTodoStream(
  call: any,
  callback: (error: Error | null, response: any) => void
) {
  todos.forEach(async (todo) => {
    call.write(todo);
    await sleep(1000);
  });
  call.end();
}
