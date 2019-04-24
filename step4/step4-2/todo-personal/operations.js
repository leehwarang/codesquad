const operation = {
  show: showTodo,
  add: addTodo,
  delete: deleteTodo,
  update: updateTodo
};

const generatorUniqueID = (() => {
  var uniqueId = 1;
  return function() {
    return uniqueId++;
  };
})();

function printResult(result, arg) {
  let str = "";
  if (arg === "all") {
    str += Object.entries(result).reduce(
      (acc, cur) => (str += `${cur[0]} : ${cur[1]}개 `),
      `현재 상태 : `
    );
  } else {
    str = `${arg} 리스트 : 총 ${result.length}건 : ${result.join(", ")}`;
  }
  console.log(str);
}
function showTodo(todos, arg) {
  let result;
  if (arg === "all") {
    result = todos.reduce((acc, cur) => {
      acc[cur.status] = acc.hasOwnProperty(cur.status)
        ? (acc[cur.status] += 1)
        : 1;
      return acc;
    }, {});
  } else {
    // todo, doing, done
    result = todos.filter(todo => todo.status === arg).map(todo => todo.name);
  }
  printResult(result, arg);
}

function addTodo(todos, name, tags, status = "todo") {
  console.log(tags);
  let newTodo = {
    name: name,
    tags: tags,
    status: status,
    id: generatorUniqueID()
  };
  console.log(newTodo.tags);
  todos.push(newTodo);
  console.log(`${newTodo.name} 1개가 추가됐습니다. (id : ${newTodo.id})`);
  setTimeout(() => showTodo(todos, "all"), 1000);
}

function deleteTodo(todos, id) {
  deletedTodo = todos.filter(todo => todo.id === Number(id))[0]; //const로 선언하고 find로 변경
  todos = todos.filter(todo => todo.id !== Number(id));

  console.log(
    `${deletedTodo.name} ${deletedTodo.status}가 목록에서 삭제됐습니다.`
  );
  setTimeout(() => showTodo(todos, "all"), 1000);
}

function updateTodo(todos, id, changeStatus) {
  changedTodo = todos.filter(todo => todo.id === Number(id))[0]; //const로 선언하고 find로 변경
  changedTodo.status = changeStatus;
  setTimeout(() => {
    console.log(`${changedTodo.name}가 ${changeStatus}로 상태가 변경됐습니다.`),
      setTimeout(() => showTodo(todos, "all"), 1000);
  }, 3000);
}

module.exports = operation;
