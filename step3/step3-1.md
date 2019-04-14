## 객체 탐색 방법

1. **_for ...in :_ 객체의 프로퍼티(key)를 출력할 때 사용한다.** 다만, Symbol 프로퍼티는 출력되지 않는다.

```
const SYM = Symbol();

const obj = {
name : 'michelle',
age : 27,
job : 'programmer',
[SYM] : 14
}

for (let prop in obj) {
if (!obj.hasOwnProperty(prop)) continue;
console.log(`${prop} : ${obj[prop]}`);
}

// name : michelle
// age : 27
// job : programmer
```

> 심볼(Symbol) 이란? Symbol() 함수를 통해 만드어지는 데이터 타입으로, 주로 객체의 프로퍼티에 대한 식별자로 사용된다. Symbol()로 부터 만들어지는 모든 값은 unique하다.

---

2.**_Object.keys :_ 객체의 프로퍼티(key)를 배열로 반환한다.** for ...in과 마찬가지로 Symbol 타입의 프로퍼티는 반환되지 않는다.

```

const SYM = Symbol();

const obj = {
  name: "michelle",
  age: 27,
  job: "programmer",
  [SYM]: 14
};

Object.keys(obj).forEach(prop => console.log(`${prop} : ${obj[prop]}`));

// name : michelle
// age : 27
// job : programmer

```

> for ... in과 달리 hasOwnProperty()로 프로퍼티를 체크할 필요는 없다.

---

3. **_Object.values() :_ 객체의 프로퍼티(key)의 값(value)을 배열로 반환한다.** Symbol 타입 프로퍼티의 값은 반환되지 않는다.

```
const SYM = Symbol();

const obj = {
  name: "michelle",
  age: 27,
  job: "programmer",
  [SYM]: 14
};

Object.values(obj).forEach(value => console.log(`${value}`)); // michelle, 27, programmer
```

---

4. **_Object.entries :_ 객체의 프로퍼티를 [key, value] 쌍의 배열로 반환한다.** Symbol 타입 프로퍼티의 값은 반환되지 않는다.

```
const SYM = Symbol();

const obj = {
  name: "michelle",
  age: 27,
  job: "programmer",
  [SYM]: 14
};

console.log(Object.entries(obj)); // -> 이차원 배열로 반환

Object.entries(obj).forEach(prop => console.log(prop));

// [ 'name', 'michelle' ]
// [ 'age', 27 ]
// [ 'job', 'programmer' ]

```

> **더 알아볼 것 :** for ...in과 달리 프로토 타입 체인의 속성도 열거한다.

## 배열 탐색 방법

1. **_forEach:_ 배열의 각 요소에 대해 콜백 함수를 실행한다.** ~~이전에 배열의 요소를 출력하기 위해 사용했던 단순 for문은 더이상 사용하지 않기로.~~

```
let arr = [1, 2, 3];

arr.forEach(v => console.log(v)); // 1, 2, 3
```

2. **_map :_ 배열의 각 요소에 대해 콜백 함수를 실행한 결과, 만들어진 새로운 배열을 반환한다.**

```
let arr = [1, 2, 3];

let double_arr = arr.map(v => {
  return v * 2;
});
console.log(double_arr); // 2, 4, 6
```

```
const a = [1, 2, 3];
const b = a.map(
  function(v, i) {
    return v + this[i];
  },
  [10, 11, 12]
);

console.log(b); // [11, 13, 15]
```

3. **_reduce_ : 배열의 각 요소에 대해 콜백(reducer) 함수를 실행하고, 하나의 결과값을 반환한다.** _값 뿐만 아니라 배열, 객체 등 원하는 어떤 것이든 반환할 수 있다._

- 첫 번째 인자값을 지정했을 경우

```
const arr = [1, 2, 3];
const res = arr.reduce(function(p, c) {
  console.log(p, c);
  return p + c;
}, 10);

// 10 1
// 11 2
// 13 3

console.log(res); // 결과 값: 16
```

```
const alphabet = ["a", "b", "c", "d"];

const text = alphabet.reduce(function(p, c) {
  return p + c;
}, "");

console.log(text); //abcd
```

```
const alphabet = ["a", "b", "c", "d"];

const obj = alphabet.reduce(function(p, c) {
  p[c] = c;
  return p;
}, {});

console.log(obj); // { a: 'a', b: 'b', c: 'c', d: 'd' }
```

- 첫 번째 인자값을 지정하지 않았을 경우

```
const arr = [1, 2, 3];
const res = arr.reduce(function(p, c) {
  console.log(p, c);
  return p + c;
});
// 1 2
// 3 3

console.log(res); // 6
```

4. **_filter_ : 배열의 각 요소 중 주어진 함수를 통과하는 요소를 모아 새로운 배열로 반환한다.**

```
const prices = [3000, 2800, 4100, 5000];

const expensive_price = prices.filter(v => v > 3000);
console.log(expensive_price); // [4100, 5000]
```

5. **_some_ : 배열의 각 요소 중 주어진 함수를 하나라도 통과하는 요소가 있다면 true, 없으면 false를 반환한다.**

> 참고: 빈 배열에서 some을 호출하면 무조건 false를 반환한다.

```
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = [1, 3, 5, 7, 9];

function even(v) {
  return v % 2 === 0;
}

console.log(arr1.some(even)); // true
console.log(arr2.some(even)); // false
```

6. **_every_ : 배열의 모든 요소가 주어진 함수를 통과하면 true, 하나의 요소라도 통과하지 못하면 false를 반환한다.**

```
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = [2, 4, 6, 8, 10];

function even(v) {
  return v % 2 === 0;
}

console.log(arr1.every(even)); // false
console.log(arr2.every(even)); // true
```
