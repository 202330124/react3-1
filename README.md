# 틱택토 게임

## 25년 4월 10일 강의
> 내용 정리

**props를 통해 데이터 전달하기**
- React의 component architecture를 사용해서 <u>재사용할 수 있는 component</u>를 만들어서 지저분하고 중복된 코드를 삭제합니다.
- <u>Board component</u>를 만들고, <u>Square component의 내용을 복사</u>합니다.
- <u>Square component의 button을 하나만 남기고 모두 삭제</u>합니다.
- Board component의 button을 Square component로 교체합니다.
- App에서 호출하는 component를 Square에서 Board로 바꿔줍니다.
- 정상적으로 출력이 되는지 확인해보세요.

- 여기까지 하면 component는 깔끔하게 정리 됐지만, 숫자 출력이 1만 나오게 됩니다.
- 이 문제를 해결하기 위해 <u>props를 사용하여 각 사각형이 가져야 할 값을 부모 component(Board)에서 자식 component(Square)로 전달</u>하겠습니다.
- component를 <u>호출하는 쪽이 부모 component</u>입니다.

**사용자와 상호작용하는 컴포넌트 만들기**
🚨 한글 문서에서 "<u>사각형</u>"이라고 번역된 것은 모두 <u>Square 컴포넌트</u>를 의미합니다.
- <u>Square 컴포넌트를 클릭하면 X로</u> 채워지게 코드를 수정해보겠습니다.
    1. 먼저 <u>Square 내부에 handleClick 함수를 선언</u>하세요.
    2. 다음 Square 컴포넌트에서 <u>반환되는 JSX 버튼의 props에 onClick을 추가</u>하세요.

- 이제 사각형을 클릭하면, 브라우저의 <u>console 탭에 "clicked!" 라는 로그가 표시</u>됩니다.
- 사각형을 <u>한 번 더 클릭하면 "clicked!" 라는 로그가 다시 생성</u>됩니다.
- 같은 메시지가 포함된 콘솔 로그를 <u>반복해도 콘솔에 더 많은 줄이 생기지 않습니다.</u>

- 다음으로 사각형 컴포넌트가 <u>클릭된 것을 "기억"하고 "X"표시로 채워</u>보겠습니다.
- 컴포넌트는 무언가 "기억"하기 위해 <u>static을 사용</u>합니다.
- React는 상태 기억을 위해 useState라는 Hook</u>을 제공합니다.
- <u>Square 현재 값은 state에 저장</u>하고 Square가 <u>클릭하면 값이 변경되도록</u> 하겠습니다.

1. 파일 상단에서 <u>useState를 import</u>합니다.
2. Sqaure 컴포넌트에서 <u>value prop을 제거합니다.</u> 대신 useState를 사용합니다.
3. Square <u>컴포넌트의 시작 부분에 useState를 호출</u>하고, <u>value라는 이름의 state 변수를 반환</u>하도록 하세요.

- <u>value는 값을 저장하는 변수, setValue는 값을 변경</u>하는데 사용하는 <u>함수</u>입니다.
- useState에 전달된 <u>null은 이 state 변수의 <b>초기값</b></u>으로 현재 value는 null이라는 의미입니다.
- 앞에서 Square 컴포넌트는 <u>더 이상 props를 사용하지 않게 수정</u>하였습니다.

4. 따라서 <u>Board 컴포넌트</u>가 생성한 9개의 Square 컴포넌트에서도 <u>value prop을 제거</u>합니다.

- 이제 Square가 <u>클릭되었을때 "X"를 표시하도록 변경</u>하겠습니다.

5. console.log("clicked!"); <u>이벤트 핸들러를 setValue('X');로 변경</u>하세요.

- onClick 핸들러에서 set 함수를 호출해서 <button>이 클릭될 때마다 Square를 다시 렌더링하도록 했습니다.
- 업데이트 후 Square의 value는 'X'가 되므로, 앞으로 Board에서 'X'를 볼 수 있습니다.
- Square를 클릭하면 'X'가 표시됩니다.

- 각 <u>Square에는 고유한 state</u>가 있습니다.
- 각각의 Square에 저장된 value는 다른 Square와 <u>완전히 독립적</u>입니다.
- 컴포넌트에서 set 함수를 호출하면 React는 그 안에 있는 <u>자식 컴포넌트도 자동으로 업데이트</u>합니다.

**state 끌어올리기**
- 현재 각 Square 컴포넌트는 게임 state의 일부를 기억합니다.
- 틱택토 게임에서 승자를 확인하려면 Board가 9개의 <u>Square 컴포넌트 각각의 state를 기억</u>하고 있어야 합니다.

- 어떻게 접근하는 것이 좋을까요?
- Board가 각각의 Square에 state에 <u>"요청"해야 한다고 생각해 보겠습니다.</u>
- 이 접근 방식은 React에서 <u>기술적으로는 가능</u>하지만, <u>코드가 이해하기 어렵고 버그에 취약하며 리팩토링하기 어렵기 때문에 권장하지 않습니다.</u>

- 가장 좋은 방법은 게임의 <u>state를 각 Square가 아닌 부모 컴포넌트인 Board에 저장</u>하는 것입니다.
- Board 컴포넌트는 각 Square에 <u>숫자를 전달했을 때와 같이 prop을 전달</u>하여 각 Square에 표시할 내용을 정할 수 있습니다.

- <u>여러 자식 컴포넌트에서 데이터를 수집</u>하거나 두 자식 컴포넌트가 <u>서로 통신</u>하도록 하려면, <u>부모 컴포넌트에서 공유 state를 선언</u>해야 합니다.
- 부모 컴포넌트는 <u>props를 통해 해당 state를 자식 컴포넌트에 전달</u>할 수 있습니다.
- 이렇게 하면 <u>자식 컴포넌트가 서로 동기화</u>되고, <u>부모 컴포넌트와도 동기화</u>되도록 할 수 있습니다.

- React 컴포넌트를 리팩토링 할 때 <u>부모 컴포넌트로 state를 끌어올리는 것</u>은 많이 사용하는 방법입니다.
- 이번 기회에 직접 사용해 보도록 하겠습니다.

1. Board 컴포넌트를 편집해서 9개 Square에 해당되는 <u>9개의 null의 <b>배열</b>을 기본값</u>으로 하는 <u>state 변수 squares를 선언</u>하세요.
    - Array(9).fill(null)은 9개의 엘리먼트로 배열을 생성하고, 각 엘리먼트를 null로 설정합니다. (참고: developer.mozilla.org)
    - 그리고 state 변수 squares와 함수 setSqaures를 선언합니다.
    - 배열의 각 항목은 각 Square 컴포넌트의 값에 해당합니다.
    - 보드를 채우면, squares 배열은 다음과 같은 모양이 됩니다.
        ```javascript
        ['O', null, 'X', 'X', 'X', 'O', 'O', null, null]
        ```

**# component 분리하기**
⚠ Board component가 <u>export default로 선언</u>된 것을 보면, component가 분리되었다는 것을 알 수 있습니다.
- 우리도 컴포넌트를 모두 분리해서 만들겠습니다.
- 문서에서는 Board와 Square를 함께 두었지만 우리는 <u>모두 분리</u>합니다.

---
*[분리 순서]*
1. component 이름과 동일한 파일을 만듭니다.
2. 해당 파일에 코드를 복사하고 export default 키워드를 추가합니다.
3. 필요한 component와 useState를 추가합니다.
4. App.js에서 해당 코드를 삭제하고, Board component를 import 해줍니다.
5. App.js에서 useState의 import를 제거합니다.
6. 정상적으로 동작하는지 확인합니다.
---

2. 이제 Board 컴포넌트는 렌더링하는 각 Square 컴포넌트에 value prop을 전달해야 합니다.
3. 다음으로 <u>Board 컴포넌트에서 각 value prop을 받을 수 있도록 Square 컴포넌트를 수정</u>합니다.
4. 이를 위해 <u>Square 컴포넌트에서 value의 상태 추적과 버튼의 onClick prop을 제거</u>해야 합니다.

*[남은 작업은...]*
- 이제 <u>각 Square는</u> 'X', 'O', 또는 빈 Square인 경우 null이 되는 <u>value prop을 받습니다.</u>
- 다음으로 <u>Square가 클릭되었을 때 발생하는 동작을 변경</u>하겠습니다.
- 이제 <u>Board 컴포넌트가 Square를 관리</u>하므로 <u>Square가 Board의 state를 업데이트할 방법을 만들어야</u> 합니다.
- 컴포넌트는 <u>자신이 정의한 state에만 접근</u>할 수 있으므로 <u>Square에서 Board의 state를 직접 변경할 수는 없습니다.</u>
- 대신에 <u>Board 컴포넌트에서 Square 컴포넌트로 함수를 전달</u>하고, <u>Square가 클릭될 때 Square가 해당 함수를 호출하도록</u> 할 수 있습니다.

5. <u>Square 컴포넌트가 클릭될 때 호출할 함수부터 시작</u>하겠습니다. onSquareClick으로 해당 함수를 호출</u>하세요.
6. 다음으로, Square 컴포넌트의 <u>props에 onSquareClick 함수를 추가</u>하세요.
7. 이제 <u>onSquareClick prop을 Board 컴포넌트의 handleClick 함수와 연결</u>하세요.
    - onSquareClick 함수를 handleClick과 연결하려면 <u>첫번째 Square 컴포넌트의 onSquareClick prop에 해당 함수를 전달</u>하면 됩니다.
8. 마지막으로 보드 컴포넌트 내부에 <u>handleClick 함수를 정의</u>하여, 보드의 state를 담고 있는 squares 배열을 업데이트 하세요.

<hr>