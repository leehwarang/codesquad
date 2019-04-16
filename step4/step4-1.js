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
function isObject(value) {
  return value && typeof value === "object" && value.constructor === Object;
}

function printResult(data, text) {
  let result;
  if (text === "all") {
    let base = `현재 상태 : `;
    result = Object.entries(data).reduce((p, c) => {
      return (base += `${c[0]} : ${c[1]} `);
    }, base);
    console.log(result);
  } else {
    let base = `${text} 리스트 : 총 ${data.length}건 : `;
    data.forEach(v => (base += v));
    console.log(base);
  }
}

function show(text) {
  let obj = {};
  if (text === "all") {
    todos.forEach(v => {
      if (obj.hasOwnProperty(v.status)) {
        obj[v.status] += 1;
      } else {
        obj[v.status] = 1;
      }
    });
    printResult(obj, text);
  } else if (text === "todo") {
    let ret = [];
    todos.filter(v => v.status === text).forEach(v => ret.push(v.name + ", "));
    printResult(ret, text);
  }
}

show("all");
show("todo");
