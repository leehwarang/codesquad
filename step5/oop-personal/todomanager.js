const Todo = require("./todo.js");

function TodoManager(rl, msgObj, errorObj) {
  this.managedTodoList = [];
  this.methodList = ["show", "add", "delete", "update"];
  this.rl = rl;
  this.msgObj = msgObj;
  this.errorObj = errorObj;
  this.statusCnt = { todo: 0, doing: 0, done: 0 };
}

TodoManager.prototype.countStatus = function() {
  return Object.entries(this.statusCnt).reduce(
    (acc, cur) => (acc += `${cur[0]} : ${cur[1]}개 `),
    "현재 상태 : "
  );
};

TodoManager.prototype.filterByStatus = function(query) {
  const filteredTodoList = this.managedTodoList.filter(
    todo => todo.status === query
  );
  return filteredTodoList.reduce(
    (acc, cur) => (acc += cur.name),
    `리스트 : 총 ${filteredTodoList.length} 건 : `
  );
};

TodoManager.prototype.show = function(query) {
  let outputStr;
  if (query === "all") {
    outputStr = this.countStatus();
  } else {
    outputStr = this.filterByStatus(query);
  }
  this.msgObj.showMsg(outputStr);
  this.rl.prompt(); //exec.js에서 사용한 rl과 같은 인터페이스 사용
};

TodoManager.prototype.add = function(name, tags, status = "todo") {
  tags = JSON.parse(tags);
  try {
    this.errorObj.isValidStatus(status, Object.keys(this.statusCnt));
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
    this.managedTodoList.splice(targetIndex, 1);
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
    this.errorObj.isValidStatus(changeStatus, Object.keys(this.statusCnt));
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
