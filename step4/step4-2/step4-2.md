# Javascript의 비동기 프로그래밍 방식

> 이 글의 타이틀은 'Javascript의' 비동기 프로그래밍 방식이다. 하지만 비동기 프로그래밍은 Javascript 엔진을 위한 것이 아니라 **브라우저** 를 위한 것이라는 관점을 잊지 않았으면 한다.

## 동기와 비동기의 차이점

- **동기적** 실행 예시

```
console.log("hello");
function foo(){
    console.log("happy")
}
foo();
console.log("world!");

// hello
// happy
// world!
```

- **비동기적** 실행 예시

```
console.log("hello");
function foo(){
    console.log("happy")
}
setTimeout(foo, 1000);
console.log("world!");

// hello
// world!
// undefined
// happy
```

`console.log("hello");`와 `console.log("world!");` 사이에 어떤 함수를 호출했을 뿐인데, 두 코드의 실행 순서가 다른 것을 확인할 수 있다. **foo()**는 JS engine이 실행하는 *일반적인 함수*일 뿐이고, **setTimeout()**은 JS engine이 Web API에게 넘겨 *비동기식으로 처리하는 콜백 함수*이기 때문이다.

---

지금은 동기적으로 실행되는 코드 중 foo()의 기능이 얼마 없지만, 만약 foo()의 기능이 동기적이라는 가정하에 httprequest를 요청하거나 복잡한 이미지 프로세싱을 처리하는등 시간이 오래 걸리는 작업이라면 `console.log("world!");`가 너무 늦게 실행될 것이다.

---

**JS engine**에 있는 Call Stack은 한 번에 하나의 일밖에 처리할 수 없고, **브라우저**는 Call Stack에 있는 함수가 실행될 동안 렌더링 등의 아무 일도 하지 못한다. 심지어 클릭도 못한다. (이런 경우 브라우저는 **_block_**이 발생했다고 생각한다.) ~~따라서 브라우저는 JS engine이 해야할 일을 빨리 처리하고, 자신이 할 수 있는 일을 가능한 빨리 실행하기를 바랄 수 밖에 없다.~~ **_노드나 브라우저의 API가 거의 비동기식으로 처리되도록 만들어진 이유이다._**

- 콜백함수는 비동기로 처리되는 대표적인 함수의 종류이다.

## 그래서 비동기식으로 어떻게 동작하는데?

javascript는 브라우저안에서 되는 언어라는 걸 들어본 적 있을 것 이다. JS engine이 js코드를 어떤 일이 발생하는지 살펴보자. (아래의 이미지는 모든 처리 과정을 자세히 나타내고 있지 않습니다.)

<img width="994" alt="JS engine" src="https://user-images.githubusercontent.com/18614517/56194008-f1bde800-606c-11e9-836d-0f0e06ff2cc1.png">

1. **JS engine이 실행 컨텍스트를 만들어서 Call Stack에 push한다.**
   (참고로 각각의 실행 컨텍스트는 this등으로 연결된다.)

2. Call Stack에 있는 함수를 순서대로 실행하다가, **콜백 함수가 있다면 JS engine은 이 함수를 js 런타임 환경 외부에서 Web API가 처리하도록 넘긴다.**

3. 넘겨진 콜백 함수가 불려지는 시점이 되면 **Event queue**로 이동한다.

4. **Event Loop**가 Call Stack이 비어있는지 계속 검사하다가 비어 있다면, **Event queue에 있는 콜백 함수를 Call Stack으로 push한다.**

## 계속 봐야 할 실행 예시

**1. 비동기 상황 예**

```
const baseData = [1,2,3,4,5,6,100];

const asyncRun = (arr, fn) => {
 for(var i=0; i<arr.length; i++) {
   setTimeout( () => fn(i), 1000);
 }
}

asyncRun(baseData, idx =>console.log(idx));
```

**2. 비동기 상황 예 - forEach로 변경**

```
const baseData = [1,2,3,4,5,6,100];

const asyncRun = (arr, fn) => {
   arr.forEach((v,i) => {
     setTimeout( () => fn(i), 1000);
   });
}
asyncRun(baseData, idx =>console.log(idx))
```

**3. 비동기 상황 예 - 비동기 + 비동기**

```
const baseData = [1,2,3,4,5,6,100];

const asyncRun = (arr, fn) => {
   arr.forEach((v,i) => {
     setTimeout(() => {
       setTimeout(() => {
         console.log("cb 2");
         fn(i)
        },1000);
       console.log("cb 1");
     }, 1000);
   });

   console.log("end");
}

asyncRun(baseData, idx => console.log(idx))
```

- setTimeout()은 callback 함수를 비동기적으로 실행하지만 forEach()는 callback 함수를 동기적으로 실행한다.
- setTimeout()도 callstack에 올라오며, callback으로 받은 함수를 WEB API에 넘긴 후, setTimeout()은 callstack에서 사라진다.
- forEach()와 asyncRun()가 callstack에서 빠졌음에도 `fn(i)`을 실행했을 때 참조할 수 있는 이유는 scope, closure? 때문이라고 함
