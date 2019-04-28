const Todo = require("./todo.js");
const Msg = require("./msg.js");

function ManageTodo(rl) {
  this.managedTodoList = [];
  this.msgObj = new Msg();
  this.rl = rl;
}

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
  this.msgObj.showMsg(result, query);
  this.rl.prompt(); //exec.js에서 사용한 rl과 같은 인터페이스 사용
};

ManageTodo.prototype.add = function(name, tags, status = "todo") {
  const newTodo = new Todo(name, tags, status);
  this.managedTodoList.push(newTodo);
  //add 함수를 호출하는 실행부가 Mageger의 인스턴스이기 때문에, this는 ManageTodo.prototype이 아닌 인스턴스에 바인딩함
  this.msgObj.addMsg(newTodo);
  setTimeout(() => this.show("all"), 1000);
};

ManageTodo.prototype.delete = function(deleteId) {
  deleteId = parseInt(deleteId);
  const targetTodo = this.managedTodoList.find(todo => todo.id === deleteId);
  const targetIndex = this.managedTodoList.findIndex(
    todo => todo.id === deleteId
  );
  this.managedTodoList.splice(1, 1);
  this.msgObj.deleteMsg(targetTodo);
  setTimeout(() => this.show("all"), 1000);
};

ManageTodo.prototype.update = function(updateId, changeStatus) {
  updateId = parseInt(updateId);
  const targetTodo = this.managedTodoList.find(todo => todo.id === updateId);
  targetTodo.status = changeStatus;
  setTimeout(() => {
    this.msgObj.updateMsg(targetTodo);
    setTimeout(() => this.show("all"), 1000);
  }, 3000);
};

module.exports = ManageTodo;
