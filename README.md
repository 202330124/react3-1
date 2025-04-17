# 틱택토 게임

## 25년 4월 17일 강의
> 내용 정리

**# Closure의 개념**
- 클로저의 핵심은 스코프를 이용하여 <u>변수의 접근 범위를 "폐쇄"</u>하는 것에 있습니다.
- <u>외부 함수 스코프에서 내부 함수 스코프로 <b>접근이 불가능</b></u>합니다.
- <u>내부 함수에서는 외부 함수 스코프에서 선언된 변수에 <b>접근이 가능</b></u>합니다.

- 장점
    1. 전역변수 사용의 최소화
    2. 데이터 보존 가능(폐쇄성)
    3. 모듈화를 통한 코드 재사용에 편리
    4. 정보의 접근 제한(캡슐화)

**state 끌어올리기**
- 이제 Board가 모든 state를 관리하므로 <u>부모 Board 컴포넌트는 자식 Square 컴포넌트가 올바르게 표시될 수 있도록 props를 전달</u>합니다.
- <u>Square를 클릭하면 자식 Square 컴포넌트가</u> 부모 Board 컴포넌트에 <u>Board의 state를 업데이트 하도록 요청</u>합니다.
- <u>Board의 state가 변경되면</u> Board 컴포넌트와 모든 자식 Square 컴포넌트가 자동으로 다시 렌더링됩니다.
- <u>Board 컴포넌트에 속한 모든 Square의 state를 유지하면 나중에 승자를 결정할 수 있습니다.</u>
- 사용자가 Board의 <u>왼쪽 위 사각형을 클릭</u>하여 X를 추가하면 어떤 일이 발생하는지 <u>다시 한번 정리</u>해 보겠습니다.

1. 왼쪽 위 사각형을 클릭하면 <u>button이 Square로부터 onClick prop으로 받은 함수가 실행</u>됩니다.
    - <- Square 컴포넌트는 <u>Board에서 해당 함수를 OnSquareClick props로 받았습니다.
    - <- Board 컴포넌트는 <u>JSX에서 해당 함수를 직접 정의</u>했습니다.
    - <- 이 함수는 <u>0을 인수로 handleClick을 호출</u>합니다.

2. handleClick은 인수 0을 사용하여 <u>squares 배열의 첫번째 엘리먼트를 null에서 X로 업데이트</u> 합니다.

3. Board 컴포넌트의 <u>squares state가 업데이트되어 Board와 그 모든 자식이 다시 렌더링</u>됩니다.
    - -> 이에 따라 인덱스가 0인 <u>Square 컴포넌트의 value prop이 null에서 X로 변경</u>됩니다.

4. 최종적으로 <u>사용자</u>는 왼쪽 위 사각형을 클릭한 후 <u>비어 있는 사각형이 X로 변경된 것을 확인</u>할 수 있습니다.

💡 중요!
- DOM <button> 엘리먼트의 onClick 어트리뷰트(속성)는 빌트인 컴포넌트이기 때문에 <u>React에서 특별한 의미</u>를 갖습니다.
- <u>사용자 정의 컴포넌트</u>, 예를 들어 Square의 경우 <u>이름은 사용자가 원하는 대로</u> 지을 수 있습니다.
- Square의 onSquareClick prop이나 Board의 handleClick 함수에 <u>어떠한 이름을 붙여도 코드는 동일하게 작동</u>합니다.
- React에서는 주로 <u>이벤트</u>를 나타내는 prop에는 <u>on</u>Something과 같은 이름을 사용하고, <u>이벤트를 처리하는 함수</u>를 정의할 때는 <u>handle</u>Something과 같은 이름을 사용합니다.

**불변성이 중요한 이유**
- handleClick에서 기존 배열을 수정하는 대신 <u>slice()를 호출하여 squares 배열의 사본을 생성하는 방법에 주목</u>하세요.
- 그 이유를 설명하기 위해 불변성과 불변성을 배우는 것이 중요한 이유에 대해 논의해 보겠습니다.
- 일반적으로 <u>데이터를 변경하는 방법에는 두 가지</u>가 있습니다.
    1. 첫 번째 방법은 데이터의 값을 <u>직접 변경</u>하여 데이터를 변형하는 것입니다.
    2. 두 번째 방법은 원하는 <u>변경 사항이 있는 새 복사본으로 데이터를 대체</u>하는 것입니다.
- 다음은 squares 배열을 변형한 경우의 모습입니다. (직접 변경)
    ```javascript
        const squares = [null, null, null, null, null, null, null, null, null];
        squares[0] = 'X';
        // Now `squares` is ["X", null, null, null, null, null, null, null, null];
    ```
- 그리고 아래는 squares 배열을 변형하지 않고 데이터를 변경한 경우의 모습입니다. (복사 대체)
    ```javascript
        const squares = [null, null, null, null, null, null, null, null, null];
        const nextSquares = ['X', null, null, null, null, null, null, null, null];
        // Now `squares` is unchanged, but `nextSquares` first element is 'X' rather than 'null'
    ```
- 최종 결과는 같지만, <u>원본 데이터를 직접 변형하지 않음으로써 몇가지 이점</u>을 얻을 수 있습니다.

1. 불변성을 사용하면 <u>복잡한 기능을 훨씬 쉽게 구현</u>할 수 있습니다.
    - 우리는 이 자습서의 뒷부분에서 게임의 진행 과정을 검토하고 과거 움직임으로 "돌아가기"를 할 수 있는 <u>"시간 여행" 기능을 구현</u>할 예정입니다.
    - <u>특정 작업을 실행 취소하고 다시 실행하는 기능</u>은 이 게임에만 국한된 것이 아닌 <u>앱의 일반적인 요구사항</u>입니다.
    - 직접적인 데이터 변경을 피하면 <u>이전 버전의 데이터를 그대로 유지하여 나중에 재사용</u>(또는 초기화)할 수 있습니다.

2. 불변성을 사용하는 것의 <u>또 다른 장점</u>이 있습니다.
    - 기본적으로 <u>부모 컴포넌트의 state가 변경되면 모든 자식 컴포넌트가 자동으로 다시 렌더링</u>됩니다.
    - 여기에는 <u>변경 사항이 없는 자식 컴포넌트도 포함</u>됩니다.
    - 리렌더링 자체가 <u>사용자에게 보이는 것은 아니지만</u>, 성능상의 이유로 <u>트리의 영향을 받지 않는 부분의 리렌더링을 피하는 것이 좋습니다</u>.
    - 불변성을 사용하면 컴포넌트가 <u>데이터의 변경 여부를 저렴한 비용으로 판단</u>할 수 있습니다.
    - <u>memo API 참고서</u>에서 React가 컴포넌트를 다시 렌더링할 시점을 선택하는 방법에 대해 살펴볼 수 있습니다.

**교대로 두기 - 1**
- 현재까지 작성한 틱택토 게임에서 가장 큰 결함인 <u>"O"를 보드에 표시할 수 없다는 문제를 수정</u>할 차례입니다.

1. <u>첫번째 선수가 두는 말을 "X"로 설정</u>합니다. 이제 <u>Board 컴포넌트에 또 다른 state를 추가</u>하여 추적해 보겠습니다.

# <u>X와 O가 번갈아 한번씩</u> 두어야 하기 때문에 <u>X가 두었는지 아닌지 현재의 상태</u>를 보관하면 됩니다. 즉, <u>X의 차례면 true, O의 차례면 false 상태</u>로 기억하면 됩니다.
    ```javascript
        function Board() {
            const [xIsNext, setXIsNext] = useState(true);
            const [squares, setSquares] = useState(Array(9).fill(null));

            // ...
        }
    ```

2. 플레이어가 움직일 때마다 <u>다음 플레이어를 결정하기 위해 boolean 값인 xIsNext가 반전</u>되고 게임의 state가 저장됩니다. Board의 handleClick 함수를 업데이트하여 xIsNext의 값을 반전시키세요.

- 완성된 코드는 다음과 같습니다.
    ```javascript
        export default function Board() {
            const [xIsNext, setXIsNext] = useState(true);
            const [squares, setSquares] = useState(Array(9).fill(null));

            function handleClick(i) {
                const nextSquares = squares.slice();

                if(xIsNext) {
                    nextSquares[i] = "X";
                }

                else {
                    nextSquares[i] = "O";
                }

                setSquares(nextSquares);
                setXIsNext(!xIsNext);
            }

            return (
                // ...
            );
        }
    ```
💡 개발자 도구에서 Board의 state를 확인해 보세요.

**교대로 두기 - 2**
- 이제 <u>다른 사각형을 클릭하면 정상적으로 X와 O가 번갈아 표시</u>됩니다!
- <u>하지만 다른 문제가 발생</u>했습니다. <u>같은 사각형을 여러번 클릭</u>해보세요.
- <u>O가 X를 덮어 씌웁니다!</u> 이렇게 하면 게임이 좀 더 흥미로워질 수 있지만 지금은 <u>원래의 규칙</u>을 유지하겠습니다.
- 지금은 X와 O로 사각형을 표시할 때 먼저 해당 <u>사각형에 이미 X 또는 O 값이 있는지 확인하고 있지 않습니다.</u>
- 앞으로 돌아가서 이 문제를 해결하기 위해 <u>사각형에 이미 X와 O가 있는지 확인</u>하겠습니다.

1. <u>square가 이미 채워져 있는 경우</u> Board의 <u>state를 업데이트하기 전</u>에 <u>handleClick 함수에서 조기에 return</u> 하겠습니다.
    ```javascript
        function handleClick(i) {
            if(squares[i]) {
                return;
            }

            const nextSquares = squares.slice();

            // ...
        }
    ```

- 이제 빈 사각형에 X 또는 O만 추가할 수 있습니다.

# return의 의미
- 작성한 코드에는 <u>return 값이 없습니다.</u>
- JavaScript에서 return값이 없는 return;은 <u>함수를 즉시 종료하라는 의미</u>입니다.
- 이때 값을 반환하지 않으면 자동으로 <u>undefined를 반환</u>합니다.
- <u>squares[i]가 이미 값이 있다면</u>(누군가 이미 둔 곳이라면), 그 자리에 다시 둘 수 없으니 <u>아무 일도 하지 말고 함수를 끝내는 것</u>입니다.

**승자 결정하기**
- 이제 어느 플레이어의 다음 차례인지 표시했으니, 게임의 <u>승자가 결정되어 더 이상 차례를 만들 필요가 없을 때도 표시</u>해야 합니다.
- 이를 위해 9개의 사각형 배열을 가져와서 <u>승자를 확인</u>하고, 적절하게 "X", "O", 또는 null을 반환하는 도우미 함수 <u>calculateWinner를 추가</u>하겠습니다.
- calculateWinner 함수에 대해 너무 걱정하지 마세요. 이 함수는 React에서만 국한되는 함수가 아닙니다.
- (중요❗) calculateWinner 함수를 <u>Board의 앞에 정의하든 뒤에 정의하든 상관 없습니다.</u> 여기에선 컴포넌트를 편집할 때마다 편집기 상에서 스크롤 할 필요가 없도록 마지막에 배치하겠습니다.

**승자 결정하기 - 1**
1. 먼저 <u>승리할 수 있는 경우의 자리를 2차원 배열로 선언</u>합니다.
2. 선언된 배열 <u>line과 squares를 비교</u>하기 위한 for문을 작성합니다.
3. 비교를 위해 <u>구조 분해 할당</u>을 합니다.

```javascript
    export default function Board() {
        // ...
    }

    function calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for(let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];

            if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }

        return null;
    }
```

4. Board 컴포넌트의 handleClick 함수에서 <u>calculateWinner(squares)를 호출하여 플레이어가 이겼는지 확인</u>하세요.
5. 이 검사는 <u>사용자가 이미 X 또는 O가 있는 사각형을 클릭했는지를 확인하는 것과 동시에 수행</u>할 수 있습니다.
6. 두 경우 모두 함수를 조기 반환합니다. 함수를 즉시 종료한다는 의미입니다.

```javascript
    function handleClick(i) {
        if(squares[i] || calculateWinner(squares)) {
            return;
        }

        const nextSquares = squares.slice();
        // ...
    }
```

⚠ 여기까지 작성하면 경기는 정상적으로 진행되지만, 경기 종료 알림 표시가 나오지 않습니다.

**승자 결정하기 - 2**
7. <u>게임이 끝났을 때</u>, 플레이어에게 알리기 위해 <u>"Winner: X" 또는 "Winner: O"라고 표시</u>하겠습니다.
8. 이렇게 하려면 <u>Board 컴포넌트에 status 구역을 추가</u>하면 됩니다.
9. <u>게임이 끝나면 status는 승자를 표시</u>하고, 게임이 <u>진행 중인 경우 다음 플레이어의 차례를 표시</u>합니다.

```javascript
    export default function Board() {
        // ...
        const winner = calculateWinner(squares);
        let status;

        if(winner) {
            status = "Winner: " + winner;
        }

        else {
            status = "Next player: " + (xIsNext ? "X" : "O");
        }

        return (
            <>
                <div className="status">{ status }</div>
                <div className="board-row">
                // ...
        );
    }
```

# 구조 분해 할당(Destructuring Assignment)
- 비구조화 할당, 구조화 할당이라고도 번역되지만, <u>구조 분해 할당을 많이 사용</u>합니다.
- 구조 분해 할당은 <u><b>배열</b>이나 <b>객체</b>의 구조를 해체하여 내부 값을 개별 변수에 쉽게 할당하는 방법</u>입니다.
- 이를 통해 <u>코드의 간결성과 가독성을 높일 수</u> 있습니다.
- map 함수에서도 사용되는 아주 많이 사용하는 방법입니다.

- 배열의 경우
    ```javascript
        const pairs = [
            [1, 2],
            [3, 4],
            [5, 6]
        ];

        pairs.map(([x, y]) => {
            console.log(`x: ${x}, y: ${y}`);
        });
    ```

- 객체의 경우
    ```javascript
        const users = [
            { id: 1, name: "Alice" }, 
            { id: 2, name: "Bob" }
        ];

        users.map(({ id, name }) => {
            console.log(`${id}: ${name}`);
        });
    ```

- lines는 승리할 수 있는 squares의 index 번호입니다.
- for문을 통해 lines의 길이 만큼 비교를 반복합니다.
- 구조 분해 할당을 통해 lines의 index를 a, b, c에 보관합니다.
- squares의 해당 index값을 비교하여 3개가 모두 일치하면 값이 X인지 O인지 return 합니다.
- 일치하는 것이 없으면 null을 return 합니다.

**시간 여행 추가하기**
- 마지막 연습으로 게임의 이전 동작으로 <u>"시간을 거슬러 올라가는" 기능</u>을 만들어 보겠습니다.

*[플레이 히스토리 저장하기]*
- squares <u>배열을 직접 업데이트</u>하면 시간 여행을 구현하기는 <u>매우 어려울 것</u>입니다.
- 하지만 우리는 <u>slice()를 사용</u>하여 <u>플레이어가 클릭할 때마다 squares 배열의 새 복사본</u>을 만들고 이를 불변으로 처리했습니다.
- 덕분에 squares 배열의 <u>모든 과거 버전을 저장</u>할 수 있고, <u>이미 발생한 플레이의 내용을 탐색</u>할 수 있습니다.
- <u>과거의 squares 배열을 history라는 다른 배열에 저장</u>하고, <u>이 배열을 새로운 state 변수로 저장</u>하겠습니다.
- history 배열은 첫번째 플레이부터 마지막 플레이까지 모든 보드 state를 나타내며 <u>다음과 같은 모양</u>을 갖습니다.
    ```javascript
        // Before first move
        [null, null, null, null, null, null, null, null, null],

        // After first move
        [null, null, null, null, 'X', null, null, null, null],

        // After second move
        [null, null, null, null, 'O', null, null, null, null],

        // ...
    ```
**한번 더 state 끌어올리기**
- 이제 과거 <u>플레이 목록을 표시하기 위해 새로운 최상위 컴포넌트 Game을 작성</u>하세요.
- 여기에 전체 게임 기록을 포함하는 <u>history state를 배치</u>하겠습니다.
- history state를 Game 컴포넌트에 배치하면 <u>자식 Board 컴포넌트에서 squares state를 제거할 수</u>있습니다.
- Square 컴포넌트에서 Board 컴포넌트로 state를 "끌어올렸던" 것처럼, 이제 <u>Board 컴포넌트에서 최상위 Game 컴포넌트로 state를 끌어올릴 수</u> 있습니다.
- 이렇게하면 Game 컴포넌트가 Board 컴포넌트의 데이터를 완전히 제어하고 Board의 history에서 이전 순서를 렌더링하도록 지시할 수 있습니다.

🚨 이번 절은 단계가 많아서 도중에 오류가 나거나, WARNING이 많이 발생합니다. 끝까지 작성하면 정상 동작합니다.

1. 먼저 <u>export default가 있는 Game 컴포넌트를 추가</u>하세요.
2. 마크업 안에 <u>Board 컴포넌트를 렌더링</u>하도록 하세요.
3. <u>export default 컴포넌트</u>는 하나의 컴포넌트 파일 안에 <u>하나만 존재해야</u> 하므로 Board에서는 삭제합니다.
4. 이것은 <u>index.js 파일에서 Board 컴포넌트 대신 Game 컴포넌트를 최상위 컴포넌트로 사용</u>하도록 지시합니다.
5. Game 컴포넌트가 반환하는 내용에 추가한 div는 나중에 <u>보드에 추가할 게임 정보를 위한 공간을 확보</u>합니다.

⚠ 주의
# 우리는 <u>index가 아니고 App</u>에서 불러오고 있습니다.
# 최상위 컴포넌트이기 때문에 <u>최상위에 선언</u>합니다.
# 최상위 <u>컴포넌트와 파일 이름은 일치</u>시키는 것이 좋습니다.

```javascript
    function Board() {
        // ...
    }

    export default function Game() {
        const [xIsNext, setXIsNext] = useState(true);
        const [history, setHistory] = useState([Array(9).fill(null)]);
        const currentSquares = history[history.length - 1];

        function handlePlay(nextSquares) {
            setHistory([...history, nextSquares]);
            setXIsNext(!xIsNext);
        }

        return (
            <div className='game'>
                <div className='game-board'>
                    <Board xIsNext = { xIsNext } squares = { currentSquares } onPlay = { handlePlay } />
                </div>
                <div className='game-info'>
                    <ol>{ /*TODO*/ }</ol>
                </div>
            </div>
        );
    }
```

<hr>

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