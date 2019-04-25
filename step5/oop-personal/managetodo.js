const Todo = require("./todo.js");

function ManageTodo() {
  this.managedTodoList = [];
}

ManageTodo.prototype.printResult = function(result, query) {
  let str;
  if (query === "all") {
    str = "현재 상태 : ";
    str += Object.entries(result)
      .map(value => `${value[0]} : ${value[1]}개`)
      .join(", ");
  } else {
    str = `${query} 리스트 : 총 ${result.length}건 : `;
    str += result.map(value => value.name).join(", ");
  }
  console.log(str);
};

ManageTodo.prototype.show = function(query) {
  let result;
  if (query === "all") {
    result = this.managedTodoList.reduce((acc, cur) => {
      acc[cur.status] = acc[cur.status] ? (acc[cur.status] += 1) : 1;
      return acc;
    }, {});
  } else {
    result = this.managedTodoList.filter(todo => todo.status === query);
  }
  this.printResult(result, query);
};

ManageTodo.prototype.add = function(name, tags, status = "todo") {
  this.managedTodoList.push(new Todo(name, tags, status));
  //add 함수를 호출하는 실행부가 Mageger의 인스턴스이기 때문에, this는 ManageTodo.prototype이 아닌 인스턴스에 바인딩함
};

ManageTodo.prototype.delete = function() {};

ManageTodo.prototype.update = function() {};

module.exports = ManageTodo;
