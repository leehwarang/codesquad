const Todo = require("./todo.js");
const TodoManager = require("./todomanager.js");
const Msg = require("./msg.js");
const TodoError = require("./todoerror.js");

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const todoManager = new TodoManager(rl);
const msgObj = new Msg();
const todoError = new TodoError();

rl.setPrompt("명령어를 입력하세요. :");
rl.prompt();

rl.on("line", line => {
  try {
    todoError.includeSeperate(line, "$");
    const methodName = line.split("$")[0];
    const args = line.split("$").slice(1);
    todoError.isValidMethodName(methodName, todoManager.methodList);
    todoManager[methodName](...args);
  } catch (error) {
    console.log(error.message);
    rl.prompt();
  }
});
