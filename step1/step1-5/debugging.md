# Debugging

- **Debugging(디버깅)** 이란 버그를 찾아서 수정 및 해결하는 과정을 말한다. 꼭 버그를 찾아내기 위함이 아니더라도 코드의 동작 방식을 자세히 보기 위해서도 사용한다.

## 1. breakpoint

- **_breakpoint :_** 코드 실행 도중에 멈출 포인트이다.
- 단축키는 `F9`
- breakpoint **이전까지의 코드를 실행하고 해당 라인에서 실행을 멈춘다.**
  - 이 시점에서의 변수의 값 등을 살핀다.

![breakpoint](https://user-images.githubusercontent.com/18614517/55671576-59856d80-58cc-11e9-8508-4d0004f963b0.png)

- if문에 breakpoint가 걸려있기 때문에, 좌측의 **VARIABLES탭**에서 if문 이전 까지의 초기 상태를 보면 i = 0, arr = [] 인걸 확인할 수 있다.
- 단축키 `F5`를 누르면 코드가 다시 실행되고, 또 다시 if문(breakpoint)에서 걸린다.
  - 코드가 끝날 때짜기 반복 하다보면 i의 값이 0->1->...->9로 변하고, 어떤 시점에 arr 배열에 0, 2, 4, 6, 8이 들어가는지 볼 수 있다.

## 2. watch

- **_watch :_** breakpoint로 선언한 코드에서의 **변수나 표현식의 상태를 관찰한다.**
  - 좌측의 **WATCH** 에서 추가한 변수(i)와 표현식(if문)의 결과를 확인할 수 있다.

![watch](https://user-images.githubusercontent.com/18614517/55672039-46c16780-58d1-11e9-9d67-9c1abbd26bd2.png)

> 근데 어차피 변수는 VARIABLES 탭에서 볼 수 있기 때문에 사용할 필요가 없을 것 같고, 표현식도 어떨 때 관찰할 필요가 있는지 사용해보지 않아서 아직 잘 모르겠다. 표현식도 breakpoint를 expression condition으로 설정하면 되지 않을까..?

## 3. callstack(콜 스택)

- **_callstack(콜 스택) :_** 컴퓨터 프로그램에서 현재 실행 중인 프로세서에 관한 정보를 저장하는 스택 자료구조

- Javascript는 **싱글 쓰레드 기반** 의 언어이다.
  - 이 말인 즉슨, _콜 스택이 하나이고, 비동기적으로 처리해야 한다는 것을 의미한다._ (비동기에 대한 설명은 추후에..)

<img width="976" alt="callstack code" src="https://user-images.githubusercontent.com/18614517/55672732-68bee800-58d9-11e9-971d-25b32aaec139.png">

> 좌측의 CALL STACK에 표시되는데, 정확히 나오지 않는 것 같아서 코드만 참고해주세요.

![callstack](https://user-images.githubusercontent.com/18614517/55672382-4f1ba180-58d5-11e9-9009-ba13e20c133b.png)

코드 및 이미지 출처: https://joshua1988.github.io/web-development/translation/javascript/how-js-works-inside-engine/#%ED%98%B8%EC%B6%9C-%EC%8A%A4%ED%83%9Dcall-stack

- **콜 스택에 올라간다는 것 = 함수가 호출됨**을 의미한다.
- **콜 스택의 제일 상위에 있는 함수가 실행**된다.
  - _step1 :_ printSquare()가 제일 먼저 실행되어 콜 스택에 올라감.
  - _step2 :_ printSquare()를 실행했는데, 그 안에 multiply()가 있어서 multiply()를 실행함.
  - _step3 :_ multiply()는 실행을 완료했기 때문에 콜 스택에서 사라짐. printSquare()에 있던 console.log()실행함.
  - _step4 :_ console.log()는 실행을 완료했기 때문에 콜 스택에서 사라짐.
  - _step5 :_ printSquare()는 실행을 완료했기 때문에 콜 스택에서 사라짐.

## 4. Step over, Step into, Step out

- **_Step over :_** 다음 줄에 나오는 명령을 실행하고 다음 줄로 점프한다.

  - **(Step over 실행 전)** breakpoint만 설정 후 디버깅 시장
    ![stepeover_before](https://user-images.githubusercontent.com/18614517/55678858-99d00480-593b-11e9-9b6a-2c0acca27545.png)

  - **(Step over 실행 후)** 변수 s의 값이 바뀐 걸 확인할 수 있다.

    <img width="1001" alt="stepover_after" src="https://user-images.githubusercontent.com/18614517/55678861-a7858a00-593b-11e9-8125-6077a5b73dab.png">

---

- **_Step into :_** 다음 줄에 함수 호출이 포함되어 있다면 해당 함수로 점프하고 첫 줄에서 멈춘다. (=콜 스택 안으로 들어간다.)

  - **(Step into 실행 전)** breakpoint만 설정 후 디버깅 시장
    ![step into_before](https://user-images.githubusercontent.com/18614517/55678921-f67fef00-593c-11e9-9e34-6a18bd7806cb.png)

  - **(Step into 실행 후)** multiply()함수의 첫 줄에서 멈춘 걸 확인할 수 있다.

    <img width="1003" alt="step into_after" src="https://user-images.githubusercontent.com/18614517/55679149-32b54e80-5941-11e9-95b0-8cb0912c1191.png">

---

- **_Step out :_** 현재 함수의 나머지 부분을 실행한 다음 함수 호출 뒤 다음 명령문에서 일시 중지한다. (=콜 스택에서 빠져 나온다.)

  - **(Step out 실행 전)** breakpoint만 설정 후 디버깅 시장
    ![step out_before](https://user-images.githubusercontent.com/18614517/55679028-aa35ae80-593e-11e9-8e96-f67321917daa.png)

  - **(Step out 실행 후)** printSquare()함수를 끝내고 다음 명령문에서 멈춘 걸 확인할 수 있다.  
    <img width="1003" alt="step out_after" src="https://user-images.githubusercontent.com/18614517/55679160-6c865500-5941-11e9-9df4-04eec65c6e5b.png">
