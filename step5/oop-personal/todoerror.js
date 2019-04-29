const Msg = require("./msg.js");
const msgObj = new Msg();
function TodoError() {}

TodoError.prototype.isValidId = function(targetTodo, id) {
  if (targetTodo === undefined) {
    throw new Error(msgObj.getInvalidIdErrorMsg(id));
  }
};

TodoError.prototype.isValidStatus = function(status) {
  //status가 todo, doing, done중 하나인지
  if (!["todo", "doing", "done"].includes(status)) {
    throw new Error(msgObj.getInvalidStatusErrorMsg(status));
  }
};

TodoError.prototype.compareStatus = function(targetTodo, changeStatus) {
  if (targetTodo.status === changeStatus) {
    throw new Error(msgObj.getCompareStatusErrorMsg(targetTodo, changeStatus));
  }
};

//명령어에 $가 포함되어 있는지
TodoError.prototype.includeSeperate = function() {};

module.exports = TodoError;

// 아래 처럼 재선언할 수 있음. prototype 안써도 되는 장점 있지만, constructor 날아가기 때문에 다시 만드는 과정 필요
//  TodoError.proto = {
// getData() : {}
// }
