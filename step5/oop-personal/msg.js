const PrintMsg = function() {};

PrintMsg.prototype.showMsg = function(outputStr) {
  console.log(outputStr);
};

PrintMsg.prototype.addMsg = function(obj) {
  console.log(`${obj.name} 1개가 추가됐습니다. (id : ${obj.id})`);
};

PrintMsg.prototype.deleteMsg = function(obj) {
  console.log(`${obj.name}이(가) ${obj.status} 목록에서 삭제 되었습니다.`);
};

PrintMsg.prototype.updateMsg = function(obj) {
  console.log(`${obj.name}의 상태가 ${obj.status}로 변경되었습니다.`);
};

PrintMsg.prototype.getInvalidIdErrorMsg = function(id) {
  return `수정 또는 삭제 하고자 하는 ID(${id})가 없습니다.`;
};

PrintMsg.prototype.getInvalidStatusErrorMsg = function(status) {
  return `더하거나 수정 하고자 하는 상태(${status})가 없습니다. todo, doing, done 중 하나의 상태로 입력하세요.`;
};

PrintMsg.prototype.getCompareStatusErrorMsg = function(
  targetTodo,
  changeStatus
) {
  return `현재 상태(${
    targetTodo.status
  })와 변경하려는 상태(${changeStatus})가 같습니다.`;
};

PrintMsg.prototype.getMethodNameErrorMsg = function() {
  return "잘못된 명령어 입니다. show, add, update, delete 중 하나의 함수를 호출해주세요.";
};

PrintMsg.prototype.getNotIncludeSeperateMsg = function(){
  return "명령어에 최소 1개 이상의 $를 넣어주세요."
}

module.exports = PrintMsg;
