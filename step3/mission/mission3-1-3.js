//3-1-3. Array 의 reduce 메서드처럼 동작하는 myReduce 메서드를 만들자.

const myReduce = (arr, callback, initial) => {
  if (typeof initial === "undefined") {
    initial = 0;
  }
  arr.forEach(function(v) {
    initial = callback(initial, v);
  });

  return initial;
};

const result = myReduce([1, 2, 3], function(prev, curv) {
  return prev + curv;
});

console.log(result);
