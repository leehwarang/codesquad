const Todo = require("./todo.js");
const Msg = require("./msg.js");

function ManageTodo(rl) {
  this.managedTodoList = [];
  this.msgObj = new Msg();
  this.rl = rl;
  this.statusCnt = { todo: 0, doing: 0, done: 0 };
}

ManageTodo.prototype.show = function(query) {
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

ManageTodo.prototype.add = function(name, tags, status = "todo") {
  const newTodo = new Todo(name, tags, status);
  this.managedTodoList.push(newTodo);
  this.statusCnt[newTodo.status] += 1;
  //add 함수를 호출하는 실행부가 Mageger의 인스턴스이기 때문에, this는 ManageTodo.prototype이 아닌 인스턴스에 바인딩함
  this.msgObj.addMsg(newTodo);
  setTimeout(() => this.show("all"), 1000);
};

ManageTodo.prototype.delete = function(deleteId) {
  deleteId = parseInt(deleteId);
  const targetTodo = this.managedTodoList.find(todo => todo.id === deleteId);
  try {
    if (targetTodo === undefined) {
      throw new Error(`삭제하고자 하는 ID(${deleteId})가 없습니다.`);
    }
    const targetIndex = this.managedTodoList.findIndex(
      todo => todo.id === deleteId
    );
    this.statusCnt[targetTodo.status] -= 1;
    this.managedTodoList.splice(1, 1);
    this.msgObj.deleteMsg(targetTodo);
    setTimeout(() => this.show("all"), 1000);
  } catch (error) {
    console.log(error.message);
    this.rl.prompt();
  }
};

ManageTodo.prototype.update = function(updateId, changeStatus) {
  updateId = parseInt(updateId);
  const targetTodo = this.managedTodoList.find(todo => todo.id === updateId);
  try {
    if (targetTodo === undefined) {
      throw new Error(`수정하고자 하는 ID(${updateId})가 없습니다.`);
    }
    if (targetTodo.status === changeStatus) {
      throw new Error(
        `현재 상태(${targetTodo.status})와 변경하려는 상태(${
          targetTodo.status
        })가 같습니다.`
      );
    }
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

module.exports = ManageTodo;
