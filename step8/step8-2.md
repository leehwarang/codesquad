## step 8-2 브라우저의 동작 @michelle @wook @allen

### 1. 임의의 웹사이트를 선정한다.

- https://programmers.co.kr/

### 2. HTML안에 js,css의 위치는 어디에 위치했는가? 왜 그랬을까?

- 2-1. css

  - **head tag 내부에 하나의 css 파일로 분리되어 있다.** 그래야 css parsing을 시작하는 시점이 빠르기 때문에 First Paint 시점에 css가 적용된 화면을 사용자에게 제공할 수 있는 확률이 높다.

- 2-2. script

  - **body tag 내부의 맨 아래에 있다.** script는 render tree의 생성을 blocking 한다. render tree가 최종 완성된 다음 js가 실행하기 위해서 body tag 내부의 맨 아래에 삽입하는 것이 일반적이다.

> 참고: Google Analytics 처럼 First Paint 이전에 실행 되어야 하는 script는 head tag 내부에 있다.

### 3. 화면을 표시하기 위해 어떤 파일들이 다운로드 되는가?

- html, css, js, 이미지(png, svg 등), 웹폰트, 보여줄 데이터 파일

### 4. 특정 자원의 Request Headers 와 Response Headers의 내용을 분석.(네트워크 탭 활용)

- 분석 대상: 프로그래머스 로고 파일

- Request Header

  <img width="1298" alt="request header" src="https://user-images.githubusercontent.com/18614517/58308080-84576100-7e3b-11e9-9a1c-7b817fee480a.png">

- Response Header

  <img width="356" alt="response header" src="https://user-images.githubusercontent.com/18614517/58308099-96390400-7e3b-11e9-9367-e050207a47ec.png">

### 5. 화면에 보여지기 시작하는 시간은 언제인가?

- 구글 퍼포먼스 탭의 First paint. **FP는 첫 번째 render tree가 완료된 후 처음 그려지는 시점** 이기 때문에 css parsing이 완료되기 전 또는 DOMContentLoaded 이전에도 가능하다. 되도록 FP 이전에 css parsing이 끝나서 사용자에게 보여지는 것이 좋기 때문에 css 파일을 head에 넣는 이유이다.

> 참고: css parsing은 한 번 시작하면 중단되지 않고 완료된다.

### 6. DOMContentLoaded라는 이벤트는 언제 발생하는가? load랑은 어떤 차이점이 있는가?

- DOMContentLoaded 이벤트는 html parsing을 완료해서 최종 DOM tree가 완성 되었을 때 발생한다. (위에서 설명 했듯이 FP 보다 느릴 수 있다)

- load 이벤트는 모든 리소스가 로드 되었을 때 발생한다.

### 7. HTML 파일 응답 받은 이후부터, 모니터화면에 보이기까지의 과정을 설명하고, 이를 암기한다.

- 1. HTML parsing(도중에 외부 리소스가 필요하면 서버에 요청)
- 2. css parsing(도중에 중단되지 않음)
- 3. render tree
- 4. recalculate style
- 5. layout
- 6. paint

위 과정이 반복적으로 실행된 후, HTML parsing이 완료되고 최종 render tree가 그려지면 body 바로 위에 있는 js 파일 실행
