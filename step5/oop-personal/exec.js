const Todo = require("./todo.js");
const ManageTodo = require("./managetodo.js");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const managedTodo = new ManageTodo(rl);

rl.setPrompt("명령어를 입력하세요. :");
rl.prompt();

rl.on("line", line => {
  const funcName = line.split("$")[0];
  const args = line.split("$").slice(1);
  try {
    if (!["show", "add", "update", "delete"].includes(funcName)) {
      throw new Error(
        "잘못된 명령어 입니다. show, add, update, delete 중 하나의 함수를 호출해주세요."
      );
    }
    managedTodo[funcName](...args);
  } catch (error) {
    console.log(error.message);
    rl.prompt();
  }
});
