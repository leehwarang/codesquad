const Todo = require("./todo.js");
const Msg = require("./msg.js");
const TodoError = require("./todoerror.js");

function TodoManager(rl) {
  this.managedTodoList = [];
  this.msgObj = new Msg();
  this.rl = rl;
  this.errorObj = new TodoError();
  this.statusCnt = { todo: 0, doing: 0, done: 0 };
}

TodoManager.prototype.show = function(query) {
  let result;
  if (query === "all") {
    result = Object.entries(this.statusCnt)
      .map(value => `${value[0]} : ${value[1]}개`)
      .join(", ");
  } else {
    result = this.managedTodoList.filter(todo => todo.status === query);
  }
  this.msgObj.showMsg(result, query);
  this.rl.prompt(); //exec.js에서 사용한 rl과 같은 인터페이스 사용
};

TodoManager.prototype.add = function(name, tags, status = "todo") {
  try {
    this.errorObj.isValidStatus(status);
    const newTodo = new Todo(name, tags, status);
    this.managedTodoList.push(newTodo);
    this.statusCnt[newTodo.status] += 1;
    //add 함수를 호출하는 실행부가 Mageger의 인스턴스이기 때문에, this는 TodoManager.prototype이 아닌 인스턴스에 바인딩함
    this.msgObj.addMsg(newTodo);
    setTimeout(() => this.show("all"), 1000);
  } catch (error) {
    console.log(error.message);
    this.rl.prompt();
  }
};

TodoManager.prototype.delete = function(deleteId) {
  deleteId = parseInt(deleteId);
  const targetTodo = this.managedTodoList.find(todo => todo.id === deleteId);
  try {
    this.errorObj.isValidId(targetTodo, deleteId);
    const targetIndex = this.managedTodoList.findIndex(
      todo => todo.id === deleteId
    );
    this.statusCnt[targetTodo.status] -= 1;
    // this.managedTodoList.splice(1, 1);
    this.managedTodoList = this.managedTodoList.map(
      todo => todo.id !== deleteId
    );
    this.msgObj.deleteMsg(targetTodo);
    setTimeout(() => this.show("all"), 1000);
  } catch (error) {
    console.log(error.message);
    this.rl.prompt();
  }
};

TodoManager.prototype.update = function(updateId, changeStatus) {
  updateId = parseInt(updateId);
  const targetTodo = this.managedTodoList.find(todo => todo.id === updateId);
  try {
    this.errorObj.isValidId(targetTodo, updateId);
    this.errorObj.isValidStatus(changeStatus);
    this.errorObj.compareStatus(targetTodo, changeStatus);

    this.statusCnt[targetTodo.status] -= 1;
    targetTodo.status = changeStatus;
    this.statusCnt[changeStatus] += 1;
    setTimeout(() => {
      this.msgObj.updateMsg(targetTodo);
      setTimeout(() => this.show("all"), 1000);
    }, 3000);
  } catch (error) {
    //error는 try문에서 발생한 에러 정보를 담고 있는 객체
    console.log(error.message);
    this.rl.prompt();
  }
};

module.exports = TodoManager;
