## 동등 연산자(==) 와 일치 연산자(===) 의 차이점

- **== 와 === 의 차이점**
  - **_A == B :_** A와 B의 **값**이 같은지 다른지 검사한다.
  - **_A === B :_** A와 B의 **값과 타입**이 같은지 다른지 검사한다.

```
0 == false // true
0 === false // false

1 == true // true
1 === true // false

“” == false // true
"" === false // false

0 == “0” // true
0 === “0” // false

null == undefined // true
null === undefined // false

null == false // false
null === false // false

0 == null // false
0 ===  null // false
```

- 위의 연산 결과 차이는 Javascript의 **암묵적인 형변환** 을 따른다. Javascript  내부의 자동 형변환 프로토콜에 따라서 예상된 데이터형으로 변환하는 것 이다.
  - 동등 연산자(==)는 비교하기 전에 피연산자들을 같은 자료형으로 바꾼다.
    - 숫자와 문자열 비교: 문자열을 숫자로 바꿈
    - 숫자랑 Boolean 비교: Boolean을 숫자로 바꿈 
      

## Javascript의 데이터 타입

- Javascript에는 다양한 데이터 타입이 존재한다.
  - 기본형: Null, Undefined, Boolean, Number, _String_
  - 참조형: Array, Object, Function, RegExp(정규 표현식), Date

## Javascript의 데이터 타입 체크

- 변수의 타입은 미리 선언할 필요 없고, 프로그램이 처리되는 과정에서 자동으로 파악된다.

  - **_typeof :_** 피연산자의 데이터 타입을 문자열로 반환한다.

  ```
  typeof(3) // number
  typeof NaN; //number
  typeof("hello") //string
  typeof(true) //boolean
  typeof {}; // object
  typeof function() {} // function
  typeof null // object(설계적 결함)
  ```

  - **_Object.prototype.toString() :_** 객체를 나타내는 문자열을 반환한다.

  ```
  Object.prototype.toString.call(null) //"[object Null]"
  ```

  - **_Object.prototype.valueof()_ :** 객체의 원시값을 반환한다.

  - 그 외 **_isNaN(), isArray()_** ...

## 기타

- 참고한 자료
  - https://weicomes.tistory.com/130
  - https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Comparison_Operators
  - https://poiemaweb.com/js-type-check
