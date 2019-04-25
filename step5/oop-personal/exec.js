const Todo = require("./todo.js");
const ManageTodo = require("./managetodo.js");

const managedTodo = new ManageTodo();

managedTodo.add("자바스크립트 공부하기", ["programming", "javascript"], "todo");
managedTodo.add("그림 그리기", ["picture", "favorite"], "doing");

managedTodo.show("all");
managedTodo.show("todo");
managedTodo.show("doing");
