- 클로저에 대해서 설명해보세요.

내부 함수를 바깥으로 꺼내고 싶을 때 사용? (return, 전역 변수에 함수를 넣음)
이전에 가지고 있던 스코프를 여전히 참조하는 것.

- let과 const의 차이에 대해서 설명해보세요.

let과 const는 블록 스코프를 가지는 변수를 선언할 때 사용하는 키워드입니다.  
다만, let은 재선언은 불가하지만 재할당은 가능합니다. const는 재선언과 재할당 모두 불가합니다.

코드로 설명하면 다음과 같습니다.
let x = 5; // 가능
x = 10; // 가능
let x = 15; // 불가능
ㄴ
const y = 5; // 가능
y = 10; // 불가능
const y = 15; // 불가능

- 비동기 코드에서 콜백큐와 콜스택에 관계에 대해서 설명해보세요.

자바스크립트 엔진은 코드를 읽으면서 실행해야 하는 함수들을 콜 스택에 쌓습니다. 올라온 함수가 비동기 함수일 때, 엔진은 이 비동기 함수를 브라우저가 처리하도록 보냅니다. 그러다 이 비동기 함수에 해당하는 이벤트가 실행되면(시간이 종료되는 등), 콜백큐로 넘어오고, 콜스택이 비워졌을 때 비동기 함수는 콜스택에 올라가서 실행됩니다. 콜스택이 비워졌다는 것 ... 이벤트 큐가 계속 감지합니다.

- prototype chain은 무엇인가요?

자바스크립트에서 객체 지향 프로그래밍은 prototype을 기반으로 이루어집니다.
어떤 생성자 함수로 만들어진 인스턴스는 생성자 함수가 가르키는 prototype 객체가 가지고 있는 속성과 함수들을 사용할 수 있는데,
이렇게 연결된 prototype 객체를 타고 올라가면 가장 상위에 있는 prototype 객체까지 연결될 수 있다는 의미를 가집니다.

- constructor 는 무엇인가요?

함수의 종류이며, 공통된 특징(구조)을 가지고 있는 여러 개의 인스턴스를 만들어야 할 필요가 있을 때 생성자 함수를 만들어서 사용합니다.
해당 생성자를 사용하여 인스턴스를 만들기 위해서는 new라는 키워드를 사용합니다. 모든 생성자 함수는 prototype 객체를 가지며, 이 prototype 객체의 constructor 프로퍼티는 생성자 함수를 가리키는 구조를 가지고 있습니다. (선언 방식이 축약되었을 때는 constructor 프로퍼티를 만들어줘야 함)

```
function Person(){} // 생성자 선언
const p1 = new Person(); // 해당 생성자의 인스턴스 생성
const p2 = new Person(); // 해당 생성자의 인스턴스 생성
```

- this키워드의 상황별 동작에 대해서 설명해보세요.

1. 객체의 메서드로 실행된 함수 내에서 사용될 때: 객체에 바인딩
2. 내부 함수 내에서: Window 객체에 바인딩 (일반 function 기준)
3. 콜백 함수 내에서: Window 객체에 바인딩

- Node.js에서 require 를 통한 모듈관리 방법의 원리는 무엇인가요?

어떤 프로그램을 동작시키기 위해서는 다양한 기능이 필요한 기능이 많은데, 이를 보통 모듈로 나눠서 각각의 파일로 분리합니다.
한 모듈에서 다른 모듈을 사용해야 할 때 불러오기 위해서 사용합니다.

module.exports와 exports의 차이는 더 공부해야 합니다.

```
module.exports = obj
const request = require('./filename')
```

- bind는 무엇을 할때 쓰는 것인가요? 동작방식에 대해서 설명해보세요.

바인딩 할 this를 변경할 때 사용합니다. ~~아직 한번도 사용해 보지 않아서 동작 방식 설명 불가~~

- destructuring 예시코드를 작성해보세요.

1. Array destructuring : 매칭되는 index에 할당
   ```
   const colors = ['red', 'green', 'blue']
   const [r, g , b] = colors
   const [ , , lastElement] = colors
   ```
2. Object destructuring : 매칭되는 key에 할당

   ```
   const IU = {
   name : '이지은',
   age : 27,
   job : singer
   }

   const Twin {
      name : n, // IU에 있는 name 프로퍼티를 찾아서 변수 n에 넣음
      age : a,
      job : j
   } = IU

   console.log(n, a , j)
   ```

3. 기타

const { PI } = Math

- arrow function과 일반 function의 차이에 대해서 설명하세요.

일반 function과 arrow function은 this를 바인딩할 때 차이가 발생합니다. 예를 들어, 두개의 함수가 중첩되어 있을 때 일반 function 으로 선언된 내부 함수의 this는 window 객체(Chrome 기준)를 바인딩 합니다. arrow function 으로 선언된 내부 함수의 this는 외부 함수를 바인딩합니다.
