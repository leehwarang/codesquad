let todos = [];

const ops = require("./operations");
const readline = require("readline");
const helpMsg = `명령하세요 : `;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.setPrompt(helpMsg);
rl.prompt();

rl.on("line", function(input) {
  inputString = input.split("$");
  command = inputString[0];
  args = inputString.slice(1);

  if (command === "exit") {
    rl.close();
  }

  if (command !== undefined) {
    ops[command](todos, ...args);
  }

  rl.prompt();
}).on("close", function() {
  process.exit(0);
});
