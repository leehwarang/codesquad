const Todo = require("./todo.js");
const TodoManager = require("./todomanager.js");
const TodoError = require("./todoerror.js");
const Msg = require("./msg.js");

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const msgObj = new Msg();
const errorObj = new TodoError();
const todoManager = new TodoManager(rl, msgObj, errorObj);

rl.setPrompt("명령어를 입력하세요. :");
rl.prompt();

rl.on("line", line => {
  try {
    errorObj.includeSeperate(line, "$");

    const methodName = line.split("$")[0];
    const args = line.split("$").slice(1);

    errorObj.isValidMethodName(methodName, todoManager.methodList);

    todoManager[methodName](...args);
  } catch (error) {
    console.log(error.message);
    rl.prompt();
  }
});

rl.on("close", () => {
  process.exit();
});
