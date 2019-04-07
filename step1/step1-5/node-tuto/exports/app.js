const response = require("./circle.js"); //circle.js에서 공개된 모듈들이 객체에 담겨서 반환된다.
console.log(response);

console.log(`지름이 4인 원의 면적: ${response.area(4)}`);
console.log(`지름이 4인 원의 둘레: ${response.circumference(4)}`);
