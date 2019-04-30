const Todo = require("./todo.js");
const TodoManager = require("./todomanager.js");
const Msg = require("./msg.js");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const todoManager = new TodoManager(rl);
const msgObj = new Msg();

rl.setPrompt("명령어를 입력하세요. :");
rl.prompt();

rl.on("line", line => {
  const funcName = line.split("$")[0];
  const args = line.split("$").slice(1);
  try {
    if (!["show", "add", "update", "delete"].includes(funcName)) {
      throw new Error(msgObj.getMethodNameErrorMsg());
    }
    todoManager[funcName](...args);
  } catch (error) {
    console.log(error.message);
    rl.prompt();
  }
});
