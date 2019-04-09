## 1. default parameter의 등장 이전에는...

- 함수의 매개 변수는 기본적으로 **undefined**이다.
  - 아래의 에시에서 add()에 하나의 매개 변수(a)만 넘겨주었을 때, b는 `let b;`로만 선언된 상태로 **undefined**이다.

```
function add(a, b) {
  console.log(a, b); //3, 5  //3, undefined
  return a + b;
}

console.log(add(3, 5)); //8
console.log(add(3)); //NaN
```

- 따라서 기존에는 매개 변수로 값이 들어오지 않는 경우를 대비하기 위해 아래의 예시처럼 `typeof b !== undefined`를 사용해서 처리했다.

```
function add(a, b) {
  b = typeof b !== undefined ? b : 1;

  console.log(a, b); // 3, 5   // 3, 1
  return a + b;
}

console.log(add(3, 5)); // 8
console.log(add(3)); // 4
```

## default parameter

- **_default parameter :_** **인자로 전달된 파라미터가 없거나 undefined가 전달된 경우, 매개 변수를 기본값으로 초기화 할 때 사용한다.**

```
function add(a, b = 1) {
  console.log(a, b); // 3, 5   // 3, 1
  return a + b;
}

console.log(add(3, 5)); // 8
console.log(add(3)); //4
```

- default parameter에는 값 뿐만 아니라 **표현식이나 함수**도 들어갈 수 있다.
  - `b = a + 1`로 사용할 수 있는 이유는 a가 b 이전에 선언되었기 때문이다.

```
function add(a, b = a + 1) {
  console.log(a, b); // 3, 5   // 3, 4
  return a + b;
}

console.log(add(3, 5)); // 8
console.log(add(3)); //7
```

```
function returnValue(){
    return 3
}

function add(a, b = returnValue()) {
  console.log(a, b); // 3, 5   // 3, 3
  return a + b;
}

console.log(add(3, 5)); // 8
console.log(add(3)); //6
```

- default parameter는 **argumments에는 영향을 주지 않는다.**

```
const a = function(a = 1, b = 2, c = 3) {
	console.log(arguments)
	console.log(a, b, c)
}
a() // arguments : []  1, 2, 3
a(4) //arguments : [4]  4, 2, 3
a(4, 5) //argumments : [4, 5] 4, 5, 3
a(4, undefined, 6) // arguments : [4, undefined, 6] 4, 2, 6
a(4, 5, 6) //arguments : [4,5,6] 4, 5, 6
```

---

## 2. rest parameter의 등장 이전에는...

- 함수에 추가적으로 들어온 매개 변수를 확인하기 위해서는 **arguments** 를 사용했다.
  - arguments는 유사 배열 객체이기 때문에, 배열처럼 사용하기 위해서는 **Array.prototype...** 등을 사용해야 했다.

```
function printArguments(a, b) {
  console.log(a, b); // 2, 3
  console.log(arguments); // { '0': 2, '1': 3, '2': 4, '3': 5, '4': 6 }
  let nomal_array = Array.prototype.slice.call(arguments, 2);
  console.log(nomal_array); // [4, 5, 6]
}

printArguments(2, 3, 4, 5, 6);
```

## rest parameter

- **_rest parameter :_** **함수의 마지막 파라미터 앞에 ...을 붙여 추가적으로 전달되는 인자들을 자바 스크립트 배열로 만든다.**

```
function printArguments(a, b, ...c) {
  console.log(a, b); // 2, 3
  console.log(c); // [4, 5, 6]
}

printArguments(2, 3, 4, 5, 6);
```

- 말 그대로 나머지 파라미터이기 때문에 함수의 **마지막 파라미터에서, 딱 한 번만** 쓸 수 있다.

- arguments은 유사 배열 객체였지만 rest 파라미터는 **Array 인스턴스로, 배열의 함수(sort, map, forEach, pop 등)을 바로 사용할 수 있다.**

```
==function printArguments(a, b, ...c) {
  console.log(a, b); // 2, 3
  console.log(c); // [4, 5, 6]
  c.push(7);
  console.log(c); // [4, 5, 6, 7]
}

printArguments(2, 3, 4, 5, 6);
```

### 기타

- 참고한 자료
  - 인프런 정재남님의 ES6 초급 강의
  - https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Default_parameters
  - https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/rest_parameters
