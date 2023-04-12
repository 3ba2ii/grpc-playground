import { loadSync } from '@grpc/proto-loader';
import grpc from 'grpc';
const packageDef = loadSync('todo.proto', {});
const grpcObject = grpc.loadPackageDefinition(packageDef);
const todoPackage = grpcObject.todoPackage as any;

const client = new todoPackage.Todo(
  'localhost:40000',
  grpc.credentials.createInsecure()
);
client.createTodo({ id: -1, text: 'hey' }, (error: any, response: any) => {
  console.log(`🚀 ~ file: main.ts:12 ~ response:`, response, error);
});

client.readTodos({}, (error: any, response: any) => {
  console.log(`🚀 ~ file: main.ts:15 ~ response:`, response);
});
