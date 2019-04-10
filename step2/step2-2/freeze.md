## const로 변수 선언시 주의 사항

- **const로 선언한 변수는 재선언, 재할당 모두 불가능하다.**

  ```
  const NAME = "michelle";
  NAME = "frank"; // Uncaught TypeError: Assignment to constant variable.
  const NAME = "demi"; // Uncaught SyntaxError: Identifier 'NAME' has already been declared
  ```

- 하지만, const로 참조형 데이터를 선언했을 때는 이야기가 달라진다. 선언한 변수 자체를 재선언 하거나 재할당 하는건 불가능하지만, **_안에 들어있는 값들은 변경될 수 있다._**

  ```
  const ARR = [1,2,3]
  ARR = [4, 5, 6] // Uncaught TypeError: Assignment to constant variable.
  ARR[0] = 'a'
  console.log(ARR) // ['a', 2, 3]
  ```

  ```
  const OBJ = {
      name : 'michelle',
      age : 27,
      job : 'programmer'
  }
  OBJ.age = 30
  console.log(OBJ.age) // 30
  ```

## Object.freeze()

- const에 선언된 참조형 데이터의 프로퍼티 변경도 막고싶다면 **Object.freeze()** 를 사용해야한다.
  - freeze 영어 단어 그대로 얼린다는 표현을 쓴다.

```
  const ARR = [1, 2, 3]
  Object.freeze(ARR)
  ARR[0] = 'a'
  console.log(ARR) // [1, 2, 3] -> error는 발생하지 않지만 값은 바뀌지 않는다.
```

```
const OBJ = {
    name : 'michelle',
    age : 27,
    job : 'programmer'
}

Object.freeze(OBJ);
OBJ.age = 30
console.log(OBJ.age) // 27 -> error는 발생하지 않지만 값은 바뀌지 않는다.
```

- 하지만 Object.freeze()도 한계가 있다. **_참조형 데이터의 프로퍼티에 또다시 참조형 데이터가 있을 때에는 얼지 않는다._**

```
const OBJ = {
    name : 'michelle',
    age : 27,
    job : 'programmer',
    grade : ['A', 'C', 'A']
}

Object.freeze(OBJ);
OBJ.grade[1] = 'B'
console.log(OBJ.grade) // ['A', 'B', 'A']
```

- 따라서 참조형 데이터는 한 번 더 얼리는 과정을 반복해야 한다. (깊은 복사의 개념과 유사함)

```
const OBJ = {
    name : 'michelle',
    age : 27,
    job : 'programmer',
    grade : ['A', 'C', 'A']
}

Object.freeze(OBJ);
Object.freeze(OBJ.grade)
OBJ.grade[1] = 'B'
console.log(OBJ.grade) // ['A', 'C', 'A']
```
