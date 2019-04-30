const Msg = require("./msg.js");
function TodoError() {
  this.msgObj = new Msg();
}

TodoError.prototype.isValidId = function(targetTodo, id) {
  if (targetTodo === undefined) {
    throw new Error(this.msgObj.getInvalidIdErrorMsg(id));
  }
};

TodoError.prototype.isValidStatus = function(status, statusList) {
  if (!statusList.includes(status)) {
    throw new Error(this.msgObj.getInvalidStatusErrorMsg(status));
  }
};

TodoError.prototype.compareStatus = function(targetTodo, changeStatus) {
  if (targetTodo.status === changeStatus) {
    throw new Error(
      this.msgObj.getCompareStatusErrorMsg(targetTodo, changeStatus)
    );
  }
};

TodoError.prototype.isValidMethodName = function(methodName, methodList) {
  if (!methodList.includes(methodName)) {
    throw new Error(this.msgObj.getMethodNameErrorMsg());
  }
};

//명령어에 $가 포함되어 있는지
TodoError.prototype.includeSeperate = function() {};

module.exports = TodoError;

// 아래 처럼 재선언할 수 있음. prototype 안써도 되는 장점 있지만, constructor 날아가기 때문에 다시 만드는 과정 필요
//  TodoError.proto = {
// getData() : {}
// }
