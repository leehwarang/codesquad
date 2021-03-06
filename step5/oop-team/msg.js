const msgObject = {
  add(name, id) {
    return `${name}이(가) 추가됐습니다.(id: ${id})`;
  },

  delete(name, status) {
    return `${name}이(가) ${status} 목록에서 삭제됐습니다`;
  },

  update(name, status) {
    return `${name}이(가) ${status}로 상태가 변경되었습니다.`;
  },

  getSeparatorError(seperator) {
    return `${seperator}가 없습니다. 다시 입력해주세요.`;
  },

  getSameStatusError(originStr, changingStr) {
    return `원래의 상태 '${originStr}'가 변경 할 상태 '${changingStr}'와 같습니다. 다시 입력해주세요.`;
  },

  getInvalidIdError() {
    return `입력 하신 id가 존재하지 않습니다. 다시 입력해주세요.`;
  },

  getInvalisdInstError() {
    return `입력 하신 명령어가 존재하지 않습니다. 다시 입력해주세요.`;
  },

  getInvalidStatusError() {
    return `입력 하신 상태가 존재하지 않습니다. 다시 입력해주세요.`;
  },

  getIsNotArrayError(notArray) {
    return `입력하신 ${notArray}를 배열의 형태로 입력해주세요.`;
  }
};
module.exports = msgObject;
