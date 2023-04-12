export function createTodo(
  call: any,
  callback: (error: Error | null, response: any) => void
) {
  console.log(call.request);
  callback(null, {});
}
