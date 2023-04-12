import grpc from 'grpc';
import { loadSync } from '@grpc/proto-loader';
import { createTodo } from './functions/createTodo';
import { readTodos } from './functions/readTodos';

const packageDef = loadSync('todo.proto', {});
const grpcObject = grpc.loadPackageDefinition(packageDef);
const todoPackage = grpcObject.todoPackage as any;

const server = new grpc.Server();

server.addService(todoPackage.Todo.service, {
  createTodo: (
    call: any,
    callback: (error: Error | null, response: any) => void
  ) => {
    console.log(call.request);
    // callback(null, {});
  },
  readTodos: (
    call: any,
    callback: (error: Error | null, response: any) => void
  ) => {
    console.log(call.request);
    // callback(null, {});
  },
});

//uses HTTP/2, it needs to be secured,so we will use createInsecure for now
server.bind('0.0.0.0:40000', grpc.ServerCredentials.createInsecure());
server.start();
