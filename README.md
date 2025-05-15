# 202330124 이태규

## React로 사고하기

## 25년 5월 15일 강의
> 내용 정리

3. 최소한의 데이터만 이용해서 완벽하게 UI State 표현하기
    - UI를 <u>상호작용(interactive)</u>하게 만들려면, <u>사용자가 기반 데이터 모델을 변경할 수 있게</u>해야 합니다.
    - React는 <u>state를 통해 기반 데이터 모델을 변경</u>할 수 있게 합니다.
    - state는 앱이 기억해야 하는, <u>변경할 수 있는 데이터의 최소 집합이라고 생각</u>하세요.
    - state를 구조화 하는데 가장 <u>중요한 원칙은 중복배제원칙(Don't Repeat Yourself)</u>입니다.
    - 애플리케이션이 필요로 하는 <u>가장 최소한의 state를 파악</u>하고, <u>나머지 모든 것들은 필요에 따라 실시간으로 계산</u>하세요.
    - 예를 들어, 쇼핑 리스트를 만든다고 하면 당신은 <u>배열에 상품 아이템</u>들을 넣을 겁니다.
    - UI에 <u>상품 아이템의 개수를 노출하고 싶다면,</u> 상품 아이템 개수를 <u>따로 state 값으로 가지는 게 아니라 단순하게 배열의 길이만 쓰면</u>됩니다.
    - 예시 애플리케이션 내 데이터들을 생각해 봅시다. 애플리케이션은 <u>다음과 같은 데이터를 가지고 있습니다.</u>
        1. 제품의 <u>원본 목록</u>
        2. 사용자가 입력한 <u>검색어</u>
        3. <u>체크박스</u>의 값
        4. <u>필터링된 제품</u> 목록
    - 이 중 어떤 것이 state가 되어야 할까요? 아래의 세 가지 질문을 통해 결정할 수 있습니다.
        1. <u>시간이 지나도 변하지 않나요?</u> 그러면 확실히 state가 아닙니다.
        2. <u>부모로부터 props를 통해 전달</u>됩니까? 그러면 확실히 state가 아닙니다.
        3. 컴포넌트 안의 <u>다른 state나 props를 가지고 계산 가능</u>한가요? 그렇다면 절대로 state가 아닙니다!
    - <u>이 외 남는건 아마 state</u>일 겁니다.
    <br>
    - 위 데이터들을 다시 한번 순서대로 살펴봅시다.
        1. <u>제품의 원본 목록은 props로 전달</u>되었기 때문에 state가 아닙니다.
        2. <u>사용자가 입력한 검색어는 시간이 지남에 따라 변하고</u>, <u>다른 요소로부터 계산될 수 없기 때문에</u> <u>state</u>로 볼 수 없습니다.
        3. <u>체크박스</u>의 값은 시간에 따라 바뀌고 <u>다른 요소로부터 계산</u>될 수 없기 때문에 <u>state</u>로 볼 수 있습니다.
        4. <u>필터링된 제품 목록</u>은 원본 제품 목록을 받아서 <u>검색어와 체크박스의 값에 따라 계산</u>할 수 있으므로, 이는 <u>state가 아닙니다.</u>
    - 따라서, <u>검색어와 체크박스의 값만이 state</u>입니다!
    ⚠ 공식문서의 자세히 살펴보기를 통해서 props와 state에 관해서 다시 한번 정리합니다.

<br/>

4. State가 어디에 있어야 할 지 정하기
    - 이제 앱에서 최소한으로 <u>필요한 state를 결정</u>했습니다.
    - 다음으로는 <u>어떤 컴포넌트가 이 state를 소유</u>하고, <u>변경할 책임을 지게 할 지 정해야</u> 합니다.
    - React는 항상 컴포넌트 계층구조를 따라 <u>부모에서 자식으로 데이터를 전달하는 단방향 데이터 흐름을 사용</u>하는 것을 기억하세요!
    - 앱을 구현하면서 <u>어떤 컴포넌트가 state를 가져야 하는 지 바로 명확하지 않을 수 있습니다.</u>
    - 이 개념이 처음이라면 더 어려울 수 있습니다.
    - 그러나 아래의 과정을 따라가면 해결할 수 있습니다.
    - 애플리케이션의 각 state에 대해서,
        1. 해당 <u>state를 기반으로 렌더링하는 모든 컴포넌트</u>를 찾으세요.
        2. 그들의 <u>가장 가까운 공통되는 부모 컴포넌트</u>를 찾으세요. - 계층에서 모두를 포괄하는 상위 컴포넌트
        3. <u>state가 어디에 위치돼야 하는지 결정</u>합시다.
    - state가 어디에 위치 돼야하는지 결정하려면,
        1. 대개, <u>공통 부모에 state를 그냥 두면</u>됩니다.
        2. 혹은, <u>공통 부모 상위의 컴포넌트</u>에 둬도 됩니다.
        3. state를 소유할 <u>적절한 컴포넌트를 찾지 못했다면</u>, <u>state를 소유하는 컴포넌트를 하나 만들어서 상위 계층에 추가</u>하세요.
    - 이전 단계에서, 이 애플리케이션의 <u>두 가지 state인 "<b>사용자의 검색어 입력과 체크박스의 값</b>"</u>을 발견하였습니다.
    - 이 예시에서 <u>두 가지 state가 항상 함께 나타나기 때문에 <b>같은 위치</b>에 두는 것이 합리적</u>입니다.
    <br>
    - 이제 이 전략을 애플리케이션에 적용해 봅시다.
    <br>
    1. <u>state를 쓰는 컴포넌트</u>를 찾아봅시다.
        - ProductTable은 state에 기반한 상품 리스트를 필터링해야 합니다.(검색어와 체크박스의 값)
        - SearchBar는 state를 표시해 주어야합니다.(검색어와 체크박스의 값)
    2. <u>공통 부모</u>를 찾아봅시다.
        - 둘 모두가 공유하는 첫번째 부모는 <u>FilterableProductTable</u>입니다.
    3. 어디에 state가 존재해야할지 정해봅시다.
        - 우리는 FilterableProductTable에 검색어와 체크박스 값을 state로 둘겁니다.
    <br>
    - 이제 state 값은 FilterableProductTable 안에 있습니다.
    - useState() Hook을 이용해서 state를 컴포넌트에 추가하세요.
    - Hooks는 React 기능에 "연결할 수(hook into)" 있게 해주는 특별한 함수 입니다.
    <br>
    1. FilterableProductTable의 상단의 두 개의 state 변수를 추가해서 초기값을 명확하게 보여주세요.
        ```javascript
        function FilterableProductTable({ products }) {
            const [filterText, setFilterText] = useState('');
            const [inStockOnly, setInStockOnly] = useState(false);
        }
        ```
    2. 다음으로, filterText와 inStockOnly를 ProductTable과 SearchBar에게 props로 전달하세요.
        ```javascript
        <div>
            <SearchBar
                filterText = { filterText }
                inStockOnly = { inStockOnly } />
            <ProductTable
                products = { products }
                filterText = { filterText }
                inStockOnly = { inStockOnly } />
        </div>
        ```
    - 이제 애플리케이션이 어떻게 동작하는지 알 수 있습니다.
    - filterText의 초깃값을 <u>useState('')에서 useState('fruit')로 수정</u>해보세요.
    - 검색창과 데이터 테이블이 모두 <u>업데이트 됨을 확인</u>할 수 있습니다.

    3. ProductTable의 props를 추가해줍니다. -> products, filterText, inStockOnly
    4. ProductTable의 forEach문을 수정합니다.
    ⚠ 첫번째 코드와 비교해 보면서 어디가 수정되었는지 정확하게 수정해줘야 합니다.
    
    - 아직 폼을 수정하는 작업이 작동하지 않습니다. 문서의 샌드박스에서 콘솔 에러가 발생하고 그 이유를 설명하겠습니다.
    - 완성된 코드를 보면, ProductTable와 SearchBar가 filterText와 inStockOnly props를 table, input과 체크박스를 렌더링하기 위해서 읽고 있습니다.
    - 예를 들면, SearchBar input의 value를 아래와 같이 채우고 있습니다.
    - 아직 사용자의 키보드 입력과 같은 행동에 반응하는 코드는 작성하지 않았습니다, 이 과정은 마지막 단계에서 진행할 예정입니다.

<br/>

5. 역 데이터 흐름 추가하기
    - 지금까지 우리는 <u>계층 구조 아래로 흐르는 props와 state</u>의 함수로써 앱을 만들었습니다.
    - 이제 사용자 입력에 따라 state를 변경하려면 <u>반대 방향의 데이터 흐름</u>을 만들어야 합니다.
    - 이를 위해서는 계층 구조의 <u>하단에 있는 컴포넌트에서 FilterableProductTable의 state를 업데이트할 수 있어야</u> 합니다.
    <br/>
    - React는 데이터 흐름을 명시적으로 보이게 만들어 줍니다.
    - 그러나 이는 전통적인 양방향 데이터 바인딩보다 조금 더 많은 타이핑이 필요합니다.
    <br/>
    - 4단계의 예시에서 <u>체크하거나 키보드를 타이핑할 경우 UI의 변화가 없고 입력을 무시</u>하는 것을 확인할 수 있습니다.
    - 이것은 의도적으로 <u>input value={ filterText }로 코드를 쓰면서 value라는 prop이 항상 FilterableProductTable의 filterText라는 state를 통해서 데이터를 받도록 정했기 때문</u>입니다.
    <br/>
    - filterText라는 <u>state가 변경되는 것이 아니기 때문에 input의 value는 변하지 않고 화면도 바뀌는 것이 없습니다.</u>
    - 우리는 사용자가 input을 변경할 때마다 <u>사용자의 입력을 반영할 수 있도록 state를 업데이트하기를 원합니다.</u>
    - state는 FilterableProductTable이 가지고 있고 <u>state 변경을 위해서는 setFilterText와 setInStockOnly를 호출</u>을 하면 됩니다.
    - SearchBar가 FilterableProductTable의 state를 업데이트할 수 있도록 하려면, 이 함수들을 SearchBar로 전달해야합니다.
        ```javascript
        function FilterableProductTable({ products }) {
            const [filterText, setFilterText] = useState('');
            const [inStockOnly, setInStockOnly] = useState(false);

            return (
                <div>
                    <SearchBar
                        filterText={ filterText }
                        inStockOnly={ inStockOnly }
                        onFilterTextChange={ setFilterText }
                        onInStockOnlyChange={ setInStockOnly } />
            )
        }
        ```
    - SearchBar에서 onChange 이벤트 핸들러를 추가하여 부모 state를 변경할 수 있도록 구현할 수 있습니다.
        ```javascript
        function SearchBar({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange }) {
            return (
                <form>
                    <input
                        type="text"
                        value={ filterText }
                        placeholder="Search..."
                        onChange={ (e) => onFilterTextChange(e.target.value) }
                    />
                    <label>
                        <input
                            type="checkbox"
                            checked={ inStockOnly }
                            onChange={ (e) => onInStockOnlyChange(e.target.checked) }
                        />
            )
        }
        ```
    - 이제 애플리케이션이 완전히 동작합니다!

<hr/>

## 25년 5월 8일 강의
> 내용 정리

**React로 사고하기**
- React를 사용하게 되면 우리가 고려하고 있는 <u>디자인이나 만들 앱들에 대한 생각을 바꿀 수</u>있습니다.
- React로 사용자 인터페이스를 빌드할 때, 먼저 이를 <u>컴포넌트라는 조각</u>으로 나눕니다.
- 그리고 <u>각 컴포넌트의 다양한 시각적 상태들을 정의</u>합니다.
- 마지막으로 <u>컴포넌트들을 연결하여 데이터가 그 사이를 흘러가게</u>합니다.
- 이 자습서에서는 React로 검색할 수 있는 <u>상품 테이블</u>을 만드는 과정을 체계적으로 안내해 드리겠습니다.
<br/>
⚠ React는 component 기반으로 개발합니다. 이번장을 통해서 component의 조각들이 어떻게 App으로 완성되는지 다시 한번 확인해보세요.

**모의 시안과 함께 시작하기 - 1**
- 이미 <u>JSON API와 디자이너로부터 제공받은 모의 시안이 있다고 생각</u>해 봅시다.
- <u>JSON API</u>는 아래와 같은 형태의 데이터를 반환합니다.
```javascript
    [
        { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
        { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
        { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
        { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
        { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
        { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
    ]
```

**모의 시안과 함께 시작하기 - 2**
- React로 UI를 구현하기 위해서 일반적으로 다섯 가지 단계를 거칩니다.

1. UI를 컴포넌트 계층으로 쪼개기
    - 먼저 모의 시간에 있는 <u>모든 컴포넌트와 하위 컴포넌트 주변에 박스를 그리고</u>, 그들에게 <u>이름을 붙이면서 시작</u>해보세요.
    - <u>디자이너와 함께 일한다면</u> 그들이 이미 디자인 툴을 통하여 이 컴포넌트들에 <u>이름을 정해 두었을 수도</u> 있습니다. 한번 여쭤보세요!
    - 어떤 배경을 가지고 있냐에 따라, <u>디자인을 컴포넌트로 나누는 방법에 대한 관점</u>이 달라질 수 있습니다.
    - <b>Programming</b>: 새로운 함수나 객체를 만드는 방식과 같은 방법으로 해봅시다.
        - 이 중 <u>단일책임 원칙</u>을 반영하고자 한다면 컴포넌트는 이상적으로는 <u>한 번에 한 가지 일만</u> 해야 합니다.
        - 만약 컴포넌트가 점점 커진다면 작은 하위 컴포넌트로 쪼개져야 하겠죠.
    - <b>CSS</b>: 클래스 <u>선택자를 무엇으로 만들지 생각</u>해 봅시다. (실제 컴포넌트들은 약간 좀 더 세분되어 있습니다.)
    - <b>Design</b>: 디자인 <u>계층을 어떤 식으로 구성할 지 생각</u>해봅시다.
    - JSON이 잘 구조화 되어 있다면, 종종 이것이 <u>UI의 컴포넌트 구조가 자연스럽게 데이터 모델에 대응된다는 것을 발견할 수</u> 있습니다.
    - 이는 <u>UI와 데이터 모델은 보통 같은 정보 아키텍처</u>, 즉 <u>같은 구조</u>를 가지기 때문입니다.
    - <u>UI를 컴포넌트로 분리</u>하고, <u>각 컴포넌트가 데이터 모델에 매칭될 수 있도록</u> 하세요.
    - 여기 다섯 개의 컴포넌트가 있습니다.
        1. <b>FilterableProductionTable</b>(회색): 예시 전체를 포괄합니다.
        2. <b>SearchBar</b>(파란색): 사용자의 입력을 받습니다.
        3. <b>ProductTable</b>(라벤더색): 데이터 리스트를 보여주고, 사용자의 입력을 기반으로 필터링합니다.
        4. <b>ProductCategoryRow</b>(초록색): 각 카테고리의 헤더를 보여줍니다.
        5. <b>ProductRow</b>(노란색): 각각의 제품에 해당하는 행을 보여줍니다.
    - ProductTable을 보면 "Name"과 "Price" <u>레이블을 포함한 테이블 헤더 기능만을 가진 컴포넌트는 없습니다.</u>
    - 독립된 컴포넌트를 따로 생성할지 생성하지 않을지는 <u>당신의 선택</u>입니다.
    - 이 예시에서는 3. ProductTable에 있는 단순한 헤더들이 ProductTable의 일부이기 때문에 위 <u>레이블들을 컴포넌트로 만들지 않고 그냥 남겨</u>두었습니다.
    - 그러나 이 <u>헤더가 복잡해지면</u>(즉 정렬을 위한 기능을 추가하는 등) <u>ProductTableHeader 컴포넌트를 만드는 것이 더 합리적</u>일 것입니다.
    - 이제 모의 시안 내의 컴포넌트들을 확인했으니, 이들을 <u>계층 구조로 정리</u>해 봅시다.
    - 모의 시안에서 <u>한 컴포넌트 내에 있는 다른 컴포넌트는 계충 구조에서 자식으로 표현</u>됩니다.

2. React로 정적인 버전 구현하기
    - 이제 컴포넌트 계층구조가 만들어졌으니, 앱을 <u>실제로 구현해 볼 시간</u>입니다.
    - <u><b>가장 쉬운 접근 방법</b></u>은 <u>상호작용 기능은 아직 추가하지 않고</u>, <u>데이터 모델로부터 UI를 렌더링</u>하는 버전을 만드는 것입니다.
    - 대체로 <u>먼저 정적인 버전을 만들고 상호작용 기능을 추가</u>하는게 더 쉽습니다.
    - <u><b>정적 버전</b></u>을 만드는 것은 많은 <u>타이핑이 필요</u>하지만, <u>생각할 것은 적습니다.</u>
    - 반대로 <u><b>상호작용 기능</b></u>을 추가하는 것은 <u>많은 생각이 필요</u>하지만, <u>타이핑은 그리 많이 필요하지 않습니다.</u>
    - <u>데이터 모델을 렌더링하는 앱의 정적인 버전을 만들기 위해서</u>는
        - 다른 컴포넌트를 <u>재사용</u>하고,
        - <u>props를 이용하여 데이터를 넘겨주는 컴포넌트를 구현하는 것</u>이 좋습니다.
    - props는 부모가 자식에게 데이터를 넘겨줄 때 사용할 수 있는 방법입니다.
    - 혹시 state 개념에 익숙하다고 해도 정적인 버전을 만드는 데는 <u>state를 쓰지 마세요!</u>
    - state는 오직 상호작용을 위해, 즉 <u>시간이 지남에 따라 데이터가 바뀌는 것에 사용</u>합니다.
    - 우리는 앱의 <u>정적 버전을 만들고 있기 때문에 지금은 필요하지 않습니다.</u>
    - 앱을 만들때 계층 구조에 따라 상층부에 있는 컴포넌트 즉, 1. FilterableProductTable부터 시작하는 <u><b>하향식(top - down)</b></u>으로 만드는 방법이 있습니다.
    - 또는 하층부에 있는 컴포넌트인 5. ProductRow부터 <u><b>상향식(down - top)</b></u>으로 만들 수도 있습니다.
    - <u>간단한 예시에서는 보통 하향식</u>으로 만드는게 쉽지만, <u>프로젝트가 커지면 상향식</u>으로 만들고 테스트를 작성하면서 개발하기가 더 쉽습니다.
    ⚠ 공식 문서의 첫번째 코드는 state를 사용하기 전 완성된 코드입니다. 천천히 component 하나씩 완성해 봅시다.
    - 이 단계가 끝나면 데이터 렌더링을 위해 만들어진 <u>재사용 가능한 component들의 라이브러리</u>를 가지게 됩니다.
    - 현재는 앱의 <u>정적 버전이기 때문에 component는 단순히 JSX만 리턴</u>합니다.
    - 계층구조의 <u>최상위 component(FilterableProductTable)는 prop으로 데이터 모델을 받습니다.</u>
    - 이는 데이터가 최상위 component부터 트리의 맨 아래까지 흘러가기 때문에 <u>단반향 데이터 흐름이라고 부릅니다.</u>
    🚨 주의하세요! 여기까지는 아직 state값을 쓰지 마세요. 다음 단계에서 사용할 겁니다!

    **Step - 2에 있는 component 구현하기**
    1. Project를 새로 생성하거나, 초기 commit으로 switch하여 실행에 이상이 없는지 확인합니다.
    2. src/ 아래 필요없는 파일을 제거합니다. (logo.svg / setupTest.js)
    3. App.js에 있는 코드를 모두 삭제합니다.
    4. 먼저 다음 코드로 App.js가 정상적으로 동작하는지 확인합니다.
    ```javascript
    const PRODUCTS = [
      { category: "Fruits", price: "$1", stocked: true, name: "Apple" }, 
      { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" }, 
      { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" }, 
      { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" }, 
      { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" }, 
      { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
    ];
    ```
    5. 사용할 데이터 PRODUCTS를 적당한 위치에 작성합니다.(여기에서는 제일 아래에 작성하도록 하겠습니다.)
    6. 다음으로 FilterableProductTable component를 만듭니다.
    7. SearchBar와 ProductTable component를 작성합니다.
    8. 다음으로 ProductCategoryRow와 ProductRow를 작성합니다.
    9. 마지막으로 처음에 수정한 App component를 다시 수정합니다.
    10. 공식 문서의 출력과 동일하게 출력하는지 확인합니다.

3. 최소한의 데이터만 이용해서 완벽하게 UI State 표현하기
    - UI를 <u>상호작용(interactive)</u>하게 만들려면, <u>사용자가 기반 데이터 모델을 변경할 수 있게</u>해야 합니다.
    - React는 <u>state를 통해 기반 데이터 모델을 변경</u>할 수 있게 합니다.
    - state는 앱이 기억해야 하는, <u>변경할 수 있는 데이터의 최소 집합이라고 생각</u>하세요.
    - state를 구조화 하는데 가장 <u>중요한 원칙은 중복배제원칙(Don't Repeat Yourself)</u>입니다.
    - 애플리케이션이 필요로 하는 <u>가장 최소한의 state를 파악</u>하고, <u>나머지 모든 것들은 필요에 따라 실시간으로 계산</u>하세요.
    - 예를 들어, 쇼핑 리스트를 만든다고 하면 당신은 <u>배열에 상품 아이템</u>들을 넣을 겁니다.
    - UI에 <u>상품 아이템의 개수를 노출하고 싶다면,</u> 상품 아이템 개수를 <u>따로 state 값으로 가지는 게 아니라 단순하게 배열의 길이만 쓰면</u>됩니다.
    - 예시 애플리케이션 내 데이터들을 생각해 봅시다. 애플리케이션은 <u>다음과 같은 데이터를 가지고 있습니다.</u>
        1. 제품의 <u>원본 목록</u>
        2. 사용자가 입력한 <u>검색어</u>
        3. <u>체크박스</u>의 값
        4. <u>필터링된 제품</u> 목록
    - 이 중 어떤 것이 state가 되어야 할까요? 아래의 세 가지 질문을 통해 결정할 수 있습니다.
        1. <u>시간이 지나도 변하지 않나요?</u> 그러면 확실히 state가 아닙니다.
        2. <u>부모로부터 props를 통해 전달</u>됩니까? 그러면 확실히 state가 아닙니다.
        3. 컴포넌트 안의 <u>다른 state나 props를 가지고 계산 가능</u>한가요? 그렇다면 절대로 state가 아닙니다!
    - <u>이 외 남는건 아마 state</u>일 겁니다.

4. State가 어디에 있어야 할 지 정하기

5. 역 데이터 흐름 추가하기

<hr/>