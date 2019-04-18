const ops = {
  add: addImpl,
  delete: deleteImpl,
  update: updateImpl,
  show: showImpl
};

function addImpl(todos, name, tag, status = "todo") {
  const newtodo = {
    name,
    tag: JSON.parse(tag),
    status,
    id: uniqueIdGenerator()
  };
  todos.push(newtodo);
  showImpl(todos, "all");
}

function deleteImpl() {}

function updateImpl() {}

var uniqueIdGenerator = (function() {
  var uniqueId = 1;
  return function() {
    return uniqueId++;
  };
})();

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

function showImpl(todos, status) {
  let result;
  if (status === "all") {
    result = todos.reduce((p, c) => {
      p[c.status] = p[c.status] + 1 || 1;
      return p;
    }, {});
  } else {
    result = [];
    result = todos.filter(v => v.status === status).map(v => v.name);
  }
  printResult(result, status);
}

module.exports = ops;
