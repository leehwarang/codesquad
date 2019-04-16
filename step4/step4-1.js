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

function printResult(data, text) {
  let str;
  if (text === "all") {
    str = `현재 상태 : `;
    str += Object.entries(data)
      .map(v => `${v[0]} : ${v[1]}`)
      .join(", ");
  } else {
    str = `${text} 리스트 : 총 ${data.length}건 : ${data.join(", ")}`;
  }
  console.log(str);
}

function show(text) {
  let result;
  if (text === "all") {
    result = todos.reduce((p, c) => {
      p[c.status] = p[c.status] + 1 || 1;
      return p;
    }, {});
  } else {
    result = [];
    result = todos.filter(v => v.status === text).map(v => v.name);
  }
  printResult(result, text);
}

show("all");
show("todo");
show("doing");
show("done");
