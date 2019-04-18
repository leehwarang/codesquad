const todos = [
  {
    name: "자바스크립트 공부하기",
    tags: ["programming", "javascript"],
    status: "todo",
    id: 12123123
  },
  {
    name: " 그림 그리기",
    tags: ["picture", "favorite"],
    status: "doing",
    id: 312323
  },
  {
    name: "IOS 공부하기",
    tags: ["programming", "ios"],
    status: "todo",
    id: 3123233
  },
  {
    name: "글쓰기",
    tags: ["writing", "hobby"],
    status: "doing",
    id: 31232311
  },
  {
    name: "운동",
    tags: ["health", "hobby"],
    status: "done",
    id: 312323555
  }
];

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
  const parsedInput = input.split("$");
  const command = parsedInput[0];
  const args = parsedInput.slice(1);

  if (command === "exit") {
    rl.close();
  }

  // func call
  ops[command](todos, ...args);

  rl.prompt();
}).on("close", function() {
  process.exit(0);
});
