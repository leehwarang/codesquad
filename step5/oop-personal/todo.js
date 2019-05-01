function Todo(obj) {
  this.name = obj.name;
  this.tags = obj.tags;
  this.status = obj.status;
  this.id = Todo.prototype.generatorUniqueId();
  //generatorUniqueId 함수를 Todo.prototype에서 실행했기 때문에 this가 prototype object를 바인딩함(this의 동적 스코프)
}

Todo.prototype.id = 0;
Todo.prototype.generatorUniqueId = function() {
  this.id += 1;
  return this.id;
};

module.exports = Todo;
