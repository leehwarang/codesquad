const PrintMsg = function() {};

PrintMsg.prototype.showMsg = function(result, query) {
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

PrintMsg.prototype.addMsg = function(obj) {
  console.log(`${obj.name} 1개가 추가됐습니다. (id : ${obj.id})`);
};

PrintMsg.prototype.deleteMsg = function(obj) {
  console.log(`${obj.name}이(가) ${obj.status} 목록에서 삭제 되었습니다.`);
};

PrintMsg.prototype.updateMsg = function(obj) {
  console.log(`${obj.name}의 상태가 ${obj.status}로 변경되었습니다.`);
};

module.exports = PrintMsg;