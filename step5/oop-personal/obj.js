function Todo(name, tags, status) {
  this.name = name;
  this.tags = tags;
  this.status = status;
  this.id = Todo.prototype.generatorUniqueId();
}

Todo.prototype.id = 0;
Todo.prototype.generatorUniqueId = function() {
  this.id += 1; // prototype 객체도 id를 가지고 있기 때문에 그것을 건드림
  return this.id;
};

function Manager() {
  this.manageTodoList = [];
}
Manager.prototype.printResult = function(result, query) {
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

Manager.prototype.show = function(query) {
  let result;
  if (query === "all") {
    result = this.manageTodoList.reduce((acc, cur) => {
      acc[cur.status] = acc[cur.status] ? (acc[cur.status] += 1) : 1;
      return acc;
    }, {});
  } else {
    result = this.manageTodoList.filter(todo => todo.status === query);
  }
  this.printResult(result, query);
};

Manager.prototype.add = function(name, tags, status = "todo") {
  this.manageTodoList.push(new Todo(name, tags, status)); //prototype이 manageTodoList를 가지고 있지 않기 때문에 호출한 인스턴스의 manageTodoList를 사용
};

Manager.prototype.delete = function() {};

Manager.prototype.update = function() {};

// <-------실행부------->

const managedTodo = new Manager();

managedTodo.add("자바스크립트 공부하기", ["programming", "javascript"], "todo");
managedTodo.add("그림 그리기", ["picture", "favorite"], "doing");

managedTodo.show("all");
managedTodo.show("todo");
managedTodo.show("doing");
