## 1. Node.js에서 module system은 왜 등장했을까?

- html은 `<script src='file.js'></script>` 태그를 이용하여 javascript 파일을 로드한다.
- 여러개의 javascript 파일을 로드했을 때, 하나의 파일로 합병하여 동일한 유효 범위를 가지게 된다.

  - 예를 들어, aaa.js 파일에 있는 변수 a와 bbb.js 파일에 있는 변수 a가 동일한 유효 범위를 가지는 문제가 발생한다.

    > 따라서 하나의 .js 파일에 모든 기능을 넣을 수 밖에 없었는데, node.js의 module system 중 **exports(또는 module.exports)**와 **require** 을 사용하여 이를 해결할 수 있다!

## 2. exports와 require

- 각 모듈은 독립적인 파일 스코프를 갖는다.
- 만약 모듈 안에 선언한 항목 _(프로퍼티 또는 메서드)_ 을 외부에 공개하고 싶다면 **exports 객체**를 사용하여 직접 할당한다. (퍼블릭의 개념)
- 공개된 exports 객체는 **require()** 을 사용하여 추출한다.

  ```
  //circle.js
  const { PI } = Math;

  exports.text = "원의 둘레와 면적을 계산할거야!"; //객체의 프로퍼티로 설정

  exports.area = function(r) { //객체의 메서드로 설정
      return PI * r * r;
  };

  exports.circumference = function(r) { //객체의 메서드로 설정
      return 2 * PI * r;
  };
  ```

  - 객체의 프로퍼티와 메서드를 가져올 때 처럼 **.**를 사용하는 것을 주의하여 보면 좋겠다.

  ```
  //app.js
  const response = require("./circle"); //circle.js에서 공개된 모듈들이 담긴 객체가 반환된다.

  console.log(`지름이 4인 원의 면적: ${response.area(4)}`);
  console.log(`지름이 4인 원의 둘레: ${response.circumference(4)}`);
  ```

## 3. module.exports와 require

- exports객체는 여러 개의 프로퍼티와 메서드를 가질 수 있었지만, **module.exports 객체**는 **_하나의 값(원시 타입, 함수, 객체)_** 를 가진다.

  ```
  //circle.js
  const { PI } = Math;

  module.exports = function(r) {
    return {
      area() {
        return PI * r * r;
      },
      circumference() {
        return 2 * PI * r;
      }
    };
  };
  ```

  - module 객체의 exports 프로퍼티에 함수를 할당하는게 아니라, **module.exports** 라는 객체에 값(함수)을 할당하는 것

  ```
  //app.js
  const response = require("./circle"); //circle.js에서 공개된 하나의 값(함수)이 반환된다.
  const answer = response(4); //반환된 함수에 인자를 보내 두 개의 함수를 리턴 받는다.

  console.log(`지름이 4인 원의 면적: ${answer.area()}`);
  console.log(`지름이 4인 원의 둘레: ${answer.circumference()}`);
  ```

## 4. exports와 module.exports의 차이점

<img width="1093" alt="different" src="https://user-images.githubusercontent.com/18614517/55618578-e39cdb80-57d1-11e9-9b20-9290ea3cf529.png">

출처: https://poiemaweb.com/nodejs-module

## 5. require

- 추후 학습 후 추가 예정

## 6. 기타

- 공부하는데 참고한 링크
  - https://poiemaweb.com/nodejs-module
