const response = require("./circle.js");
// console.log(response);
const answer = response(4);
// console.log(answer);

console.log(`지름이 4인 원의 면적: ${answer.area()}`);
console.log(`지름이 4인 원의 둘레: ${answer.circumference()}`);
