import { loadSync } from '@grpc/proto-loader';
import grpc from 'grpc';

async function main() {
  const packageDef = loadSync('todo.proto', {});
  const grpcObject = grpc.loadPackageDefinition(packageDef);
  const todoPackage = grpcObject.todoPackage as any;

  const client = new todoPackage.Todo(
    'localhost:40000',
    grpc.credentials.createInsecure()
  );
  client.createTodo({ id: -1, text: 'h333ey' }, (error: any, response: any) => {
    console.log(`🚀 ~ file: main.ts:12 ~ response:`, response, error);
  });

  // client.readTodos({}, (error: any, response: any) => {
  //   console.log(`🚀 ~ file: main.ts:15 ~ response:`, response);
  // });

  const call = client.readTodoStream();

  await call.on('data', (item: any) => {
    console.log(`🚀 ~ file: main.ts:20 ~ item:`, item?.text);
  });

  await call.on('end', (e: any) => {
    console.log(`Done Streaming`);
  });
}
main();
