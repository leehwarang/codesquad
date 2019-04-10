> 프로그래밍에서 어떤 변수에 다른 변수의 값을 할당하거나, 함수를 통해 값을 주고 받는 로직이 없는 코드는 거의 찾아볼 수 없다.
> 이 때, 데이터의 타입에 따라서 값을 전달하는 방식이 달라지는데 **기본형 데이터 타입인 경우에 call by value** / **참조형 데이터 타입인 경우에 call by reference**의 규칙을 따른다.

## call by value

- **_call by value :_** 값을 복사해서 전달한다.

  - `let x = 10;`은 메모리에 변수 x에 해당하는 공간을 확보하고, 그 공간에는 10 이라는 값 자체가 들어간다. `let a = x;` 라고 하면 변수 x에 들어있는 **값(10)을 복사하여** 변수 a의 공간에 할당하는 것을 의미한다.

    ```
    let x = 10;
    let a = x;
    console.log(a); // 10
    console.log(x === a); // true
    a = 20;
    console.log(a); // 20
    console.log(x === a); // false
    ```

    ```
    let x = "hello";
    let a = x;
    console.log(a); // hello
    console.log(x === a); // true
    a = "world";
    console.log(a); // world
    console.log(x === a); // false
    ```

## call by reference

- **_call by reference :_** 값의 주소값을 전달한다.

  - `let arr1 = [1,2,3];`은 메모리에 변수 arr1에 해당하는 공간을 확보하고, 그 공간에는 [1,2,3] 이라는 배열의 주소값이 들어간다. `let arr2 = arr1;` 라고 하면 변수 arr1에 들어있는 **배열([1,2,3])의 주소값을 복사하여** 변수 arr2의 공간에 할당하는 것을 의미한다.

    - arr1과 arr2는 배열 [1,2,3]을 가리키는 같은 주소를 참조하고 있기 때문에 arr2에서 배열의 값을 변경하면 arr1의 배열도 변경된다.

    ```
    let arr1 = [1, 2, 3];
    let arr2 = arr1;
    console.log(arr2); // [1, 2, 3]
    console.log(arr1 === arr2); // true
    arr2.push(4);
    console.log(arr2); // [1, 2, 3, 4]
    console.log(arr1); // [1, 2, 3, 4]
    console.log(arr1 === arr2); // true
    ```

    - **_주의 할 점 :_** arr2이 배열을 수정하는게 아니라, 새로운 배열([4,5,6])을 할당하면 arr2는 새로운 배열에 대한 주소값이 재할당된다.

    ```
    let arr1 = [1, 2, 3];
    let arr2 = arr1;
    console.log(arr2); // [1, 2, 3]
    console.log(arr1 === arr2); // true
    arr2 = [4, 5, 6];
    console.log(arr2); // [4, 5, 6]
    console.log(arr1); // [1, 2, 3]
    console.log(arr1 === arr2); // false
    ```

## 함수의 파라미터로 전달할 때 call by value와 call by reference의 차이

- **_함수의 파라미터로 기본형 데이터 타입을 전달_**

  - multiply(x, y)로 전달 된 x와 y는 함수가 호출 되었을 때, `let a = x; let b = y;`와 동일한 기능을 한다. number는 기본형 데이터 타입이기 때문에 값이 복사 되어 전달되어, 함수의 바깥에 있는 x와 y는 함수에 영향을 받지 않는다. let으로 선언된 a와 b도 블록형 스코프에 갇혀서 외부에서 사용할 수 없다.

    - **참고 :** 이처럼 파라미터로 기본형 데이터 타입만을 주고 받고, 외부 스코프에 있는 것들에 영향을 주지 않는 함수를 _순수 함수_ 라고 한다.

    ```
    let x = 5;
    let y = 3;

    function multiply(a, b) {
    return a * b;
    }

    let result = multiply(x, y);
    console.log(result); // 15
    console.log(a, b); // ReferenceError: a is not defined
    ```

- **_함수의 파라미터로 참조형 데이터 타입을 전달_**

  - 함수의 외부에 있는 참조형 데이터 타입을 파라미터로 전달하면, 함수가 종료된 후에도 외부에 있던 데이터들은 영향을 받는다. passingYear(obj)로 객체를 넘겼기 때문에, `let person = obj;`와 같은 기능을 하고 동일한 주소값을 참조하게 된다.

    ```
    let obj = {
    name: "michelle",
    age: 27,
    job: "programmmer"
    };

    function passingYear(person) {
    person.age += 1;
    }

    passingYear(obj);
    console.log(obj.age); // 28
    ```

    - **참고 :** 이러한 현상 때문에 Array.map, Array.filter와 같은 대부분의 배열 내장 함수들은 순수 함수로 만들어졌다.
    - **참고 :** 참조형 데이터를 전달했을 때의 주소값 복제를 막기 위해서 `JSON.stringify`, `JSON.parse` 같은 것들을 사용한다고 한다.

## 기타

- 참고한 링크
  - https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0
