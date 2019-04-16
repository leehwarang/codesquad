// 동기적 실행 -> 순서대로 실행된다.
// const baseData = [1, 2, 3, 4, 5, 6, 100];

// baseData.forEach((v, i) => {
//   console.log("sync ", i);
// });

// baseData.forEach((v, i) => {
//   console.log("sync 2", i);
// });

// 비동기적 실행
// -> 모든 함수는 순서대로 실행되면 안된다.

const baseData = [1, 2, 3, 4, 5, 6, 100];

function foo() {
  baseData.forEach((v, i) => {
    console.log("sync ", i);
    bar();
  });
}

function bar() {
  baseData.forEach((v, i) => {
    //debugger;
    console.log("sync 2", i);
  });
}

foo();
