const Todo = require("./todo.js");
const ManageTodo = require("./managetodo.js");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const managedTodo = new ManageTodo();

rl.setPrompt("명령어를 입력하세요. :");
rl.prompt();

rl.on("line", line => {
  const funcName = line.split("$")[0];
  const args = line.split("$").slice(1);
  managedTodo[funcName](...args);
  rl.prompt();
});
