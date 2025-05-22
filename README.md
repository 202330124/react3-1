# 202330124 이태규

## 25년 5월 22일 강의
> 내용 정리

**프로젝트에 도입하기(Installation)**
- React는 <u>점진적으로 적용할 수 있도록 설계</u>되었으며, <u>필요한 만큼 React를 사용</u>할 수 있습니다.
- React를 <u>맛보기</u>로 접해 보려고 하거나, <u>간단한 HTML 페이지에 약간의 상호작용을 추가</u>하거나, <u>복잡한 React 기반의 앱</u>을 시작하고자 하는 경우, 이 섹션을 참고하세요.
<br/>

- 이 장에서는
    - <u>새로운 React 프로젝트</u>를 시작하는 방법
    - <u>기존 프로젝트에 React를 추가</u>하는 방법
    - <u>에디터를 설정</u>하는 방법
    - React <u>개발자 도구를 설치</u>하는 방법
<br/>

**React 시도하기**
- 단순히 React를 사용해 보고 싶다면, 아무것도 설치할 필요 없습니다. 이 샌드박스를 통해 사용해 보세요!
- ⚠ local에서 사용해 보고 싶다면 Node.js만 설치하면 됩니다.
- 직접 편집하거나 오른쪽 상단의 "Fork(포크)" 버튼을 눌러 새 탭에서 열 수 있습니다.
- React 문서의 대부분 페이지에는 이와 같은 샌드박스가 있습니다.
- React 문서 외에도 CodeSandbox, StackBlitz, CodePen 등의 온라인 샌드박스에서 React를 지원합니다.

**새로운 React 앱 만들기**
- React로 새로운 앱이나 웹사이트를 구축하려면 <u>프레임워크부터 시작하는 것이 좋습니다.</u>
- 앱에 기존 프레임워크에서 잘 제공되지 않는 제약 조건이 있거나, 자체 프레임워크를 빌드하는 것을 선호하거나, React 앱의 기본 사항만 배우려는 경우 React 앱을 처음부터 빌드할 수 있습니다.
- 풀스택 프레임워크:
    - 권장 프레임워크는 프로덕션에서 앱을 배포하고 확장하는 데 필요한 모든 기능을 지원합니다.
    - 최신 React 기능을 통합하고 React의 아키텍처를 활용합니다.
- Next.js(앱 라우터)
    - Next.js의 앱 라우터는 React의 아키텍처를 최대한 활용하여 <u>풀스택 React 앱을 활성화</u>하는 React 프레임워크입니다.
    - Next.js는 <u>Vercel</u>에서 유지 관리합니다.
    - Next.js 앱을 빌드해서 <u>Node.js와 서버리스 호스팅 혹은 자체 서버에 배포</u>할 수 있습니다.
    - Next.js는 또한 <u>서버가 필요 없는 정적 내보내기도 지원</u>합니다.
    - Vercel은 추가적으로 옵트-인 <u>유료 클라우드 서비스도 지원</u>합니다.
    - ⚠ Opt-in이란 사용자가 옵션을 직접 선택할 수 있도록하는 서비스 입니다.
<br/>

- React Router(v7)
    - React Router는 <u>React에서 가장 인기있는 라우팅 라이브러리</u>이며, <u>Vite와 함께 사용하면 풀스택 React 프레임워크를 만들 수 있습니다.</u>
    - <u>표준 Web API</u>이며, <u>다양한 자바스크립트 런타임과 플랫폼을 위한 준비된 배포 템플릿</u>이 있다고 강조합니다.
    - React Router는 <u>Shopify</u>에서 유지 관리합니다.
<br/>

- Expo(네이티브 앱용)
    - Expo는 <u>네이티브 UI를 사용하여 안드로이드, iOS, 웹을 위한 범용 앱을 만들 수 있는</u> React 프레임워크 입니다.
    - <u>네이티브 부분을 쉽게 사용할 수 있게 해주는 React Native SDK를 제공</u>합니다.
    - Expo는 <u>Expo</u>(the company)에서 유지 관리합니다.
    - Expo로 <u>앱을 빌드하는 것은 무료</u>이고, 구글이나 애플 스토어에 제한 없이 제출할 수 있습니다.
    - Expo는 추가적으로 옵트-인 <u>유료 클라우드 서비스를 제공</u>합니다.
<br/>

⚠ <u>풀스택 React</u> 비전을 향해 나아가고 있는 또 다른 떠오로는 프레임워크가 있습니다.
- TanStack Start(Beta): TanStack Start는 TanStack Router를 기반으로하는 풀스택 React 프레임워크입니다. Native나 Vite와 같이 전체 문서 SSR, 스트리밍, 서버함수, 번들링과 많은 유용한 도구를 제공합니다.
- <u>RedwoodJS</u>: Redwood는 쉽게 풀스택 웹 애플리케이션을 만들 수 있도록 사전탑재된 패키지와 구성을 가진 풀스택 React 프레임워크입니다.
<br/>

**[처음부터 시작하기] - 기존 프레임워크를 사용하지 않고...**

- 앱에 <u>기존 프레임워크에서 잘 제공되지 않는 제약 조건</u>이 있거나, <u>자체 프레임워크를 구축하는 것을 선호</u>하거나, <u>React 앱의 기본 사항을 배우려는 경우</u> React 프로젝트를 처음부터 시작하는데 사용할 수 있는 다른 옵션이 있습니다.
- 처음부터 시작하면 더 <u>많은 유연성을 얻을 수</u> 있지만 라우팅, 데이터 가져오기 및 기타 일반적인 사용 패턴에 <u>사용할 도구를 선택</u>해야 합니다.
- 이미 존재하는 프레임워크를 사용하는 대신 <u>자신만의 프레임워크를 구축하는 것과 비슷</u>합니다. 저희가 권장하는 프레임워크에는 이러한 문제에 대한 기본 제공 솔루션이 있습니다.
- 자신만의 솔루션을 구축하려면 Vite, Parcel 또는 RSbuild와 같은 빌드 도구로 시작할 수 있도록 하는 <u>처음부터 React 앱 만들기 가이드를 참조</u>하세요.
<br/>

**처음부터 React앱 만들기**
1. 앱에 기존 프레임워크가 잘 <u>지원하지 않는 제약 조건</u>이 있거나,
2. <u>자체 프레임워크를 구축</u>하는 것을 선호하거나,
3. React <u>앱의 기본을 배우고 싶은</u> 경우

**[1단계: 빌드 도구 설치]**
- 첫번째 단계는 Vite, Parcel, 또는 RSbuild와 같은 <u>빌드 도구를 설치</u>하는 것입니다.
- 이러한 빌드 도구는 다음과 같은 <u>기능</u>을 갖고 있습니다.
    1. 소스 코드를 <u>패키징</u>하고, <u>실행</u>하는 기능
    2. 로컬 개발을 위한 <u>개발 서버</u>
    3. 앱을 프로덕션 서버에 <u>배포하는 빌드 명령</u>을 제공합니다.
- ⚠ React <u>공식 빌더</u>는 Create React App(CRA)
- ⚠ Package.json을 확인해보면 빌더의 기능을 알 수 있습니다.
<br/>

<b>[Vite]</b>

- <u>Vite</u>는 현재 웹 프로젝트에 <u>더 빠르고, 가벼운 개발 환경을 제공</u>하는 것을 목표로 하는 빌드 도구입니다.
- Vite는 독창적이며, 기본적으로 합리적인 기본 기능을 제공합니다.
- Vite는 <u>빠른 새로고침</u>, JSX, Babel/SWC 및 <u>기타 일반적인 기능을 지원</u>하는 풍부한 플러그인 생태계를 갖추고 있습니다.
- Vite를 시작하려면 <u>React 플로그인</u> 또는 <u>React SWC 플러그인</u>과 <u>React SSR 예제 프로젝트</u>를 참조하세요.
- Vite는 이미 우리가 <u>추천하는 프레임워크</u> 중 하나에서 빌드 도구로 사용하고 있습니다. <u>React Router</u>, <u>Next.js</u> 등

<b>[Parcel]</b>

- <u>Parcel</u>은 뛰어난 기본 개발 경험과 확장 가능한 아키텍처를 결합하여 프로젝트를 시작 단계에서 대규모 프로덕션 애플리케이션으로 발전시킬 수 있습니다.
- Parcel은 빠른 새로고침, JSX, TypeScript, Flow 및 스타일링을 기본적으로 지원합니다. Parcel의 React 레시피를 참조하여 시작해보세요.

<b>[RSbuild]</b>

- <u>RSbuild</u>는 React 애플리케이션 개발에 원활한 환경을 제공하는 Rspack 기반 빌드 도구입니다.
- 세심하게 조정된 기본 설정과 성능 최적화 기능을 바로 사용할 수 있도록 제공합니다.
- RSbuild는 빠른 새로고침, JSX, TypeScript, 스타일링 등 React 기능을 기본적으로 지원합니다.
- 시작하려면 RSbuild의 <u>React 가이드</u>를 참조하세요.

<b>[React Native용 Metro]</b>

- React Native를 처음부터 사용하려면 React Native용 JavaScript 번들러인 Metro를 사용해야 합니다.
- Metro는 iOS 및 Android와 같은 플랫폼에 대한 번들링을 지원하지만, 여기 소개된 도구에 비해 기능이 부족한 편입니다.
- 프로젝트에 React Native 지원이 필요하지 않다면, Vite, Parcel 또는 RSbuild로 시작하는 것이 좋습니다.

**[2단계: 공통 애플리케이션 패턴 구축]**
- 위에 나열된 빌드 도구는 클라이언트 전용 단일 페이지 앱(SPA)으로 시작하지만, <u>라우팅, 데이터 가져오기, 스타일링과 같은 일반적인 기능에 대한 추가 솔루션은 포함하지 않습니다.</u>
- React 생태계에서는 이러한 문제를 해결하는 다양한 도구가 있습니다.
- 널리 사용되는 몇 가지 도구를 소개했지만, 더 나은 도구가 있다면 다른 도구를 선택해도 됩니다.
<br/>

<b>[Routing]</b>

- 라우팅은 사용자가 <u>특정 URL을 방문할 때 표시할 콘텐츠나 페이지를 결정</u>합니다.
- 앱의 여러 부분에 <u>URL을 매핑하려면 라우터를 설정</u>해야합니다.
- 또한 <u>중첩된 경로, 경로 매개변수, 쿼리 매개변수도 처리</u>해야합니다.
- 라우터는 <u>코드 내에서 구성</u>하거나, 구성 <u>요소 폴더</u> 및 <u>파일 구조</u>에 따라 <u>정의</u>할 수 있습니다.
- 라우터는 <u>최신 애플리케이션의 핵심</u> 부분이며, 일반적으로:
    - 데이터 패치: 더 빠른 로딩을 위해 전체 페이지에 대한 데이터를 미리 패치하는 것 포함
    - 코드 분할: 클라이언트 번들 크기를 최소화하기 위한 것
    - 페이지 렌더링 방식: 각 페이지가 생성되는 방식을 결정하기 위한 것이 포함됩니다.
- 다음을 사용하는 것을 추천합니다.
    - <u>React Router</u>
    - <u>TanStack Router</u>
<br/>

<b>[Data Fetching] 데이터 미리 가져오기</b>

- 서버나 다른 데이터 소스에서 <u>데이터를 미리 가져오는 것</u>으로 대부분의 애플리케이션에서 <u>핵심적인 부분</u>입니다.
- 이를 제대로 수행하려면 <u>로딩 상태, 오류 상태, 그리고 가져온 데이터를 캐싱 등 복잡한 기능이 포함</u>됩니다.
- 특별히 제작된 데이터 가져오기 라이브러리는 <u>데이터를 가져오고 캐싱하는 어려운 작업을 대신 처리</u>해주므로, 개발자는 앱에 필요한 데이터와 이를 표시하는 방법에 집중할 수 있습니다.
- 이러한 라이브러리는 <u>일반적으로 컴포넌트에서 직접 사용</u>되지만, 더 빠른 프리페칭과 더 나은 성능을 위해 <u>라우팅 로더에 통합되거나 서버 렌더링에도 사용</u>할 수 있습니다.
- 컴포넌트에서 직접 데이터를 가져오면 네트워크 요청 폭주로 인해 로딩 시간이 느려질 수 있으므로, <u>라우터 로더나 서버에서 데이터를 미리 가져오는 것</u>이 좋습니다.
    - ⚠ 이렇게 하면 페이지가 표시될 때 페이지의 모든 데이터를 한 번에 가져올 수 있습니다.
- 대부분의 <u>백엔드나 REST 스타일 API에서 데이터를 가져오는 경우</u> 다음을 사용하는 것이 좋습니다.
    - <u>React Query</u>
    - <u>SWR</u>
    - <u>RTK Query</u>
<br/>

<b>[Code-Splitting] 코드 분할</b>

- 코드 분할은 <u>앱을 필요에 따라 로드할 수 있는 작은 묶음으로 나누는 프로세스</u>입니다.
- 앱의 <u>코드 크기</u>는 새로운 기능과 추가 종속성이 있을 때마다 증가 합니다.
- 앱 전체의 코드를 전송해야 사용하기 때문에 <u>앱 로드 속도가 느려질 수</u> 있습니다.
- 캐싱, 기능/종속성 축소, 일부 코드를 서버에서 실행되도록 이동하면 로드 속도 저하를 완화하는데 도움이 되지만, <u>과도하게 사용하면 기능이 저하될 수 있는 불완전한 해결책</u>입니다.
- <u>Parcel은 React.lazy를 사용하여 코드 분할을 지원</u>합니다.
<br/>

<b>[애플리케이션 성능 개선]</b>

- 선택한 빌드 도구는 단일 페이지 앱(SPA)만 지원하므로:
    - 서버 사이드 렌더링(SSR) - SSG와 유사하지만 매 요청 시 서버에서 정적 페이지 생성
    - 정적 사이트 생성(SSG) - 빌드 시 한 번에 모든 정적 페이지 생성
    - React 서버 컴포넌트(RSC) - 서버에서 동작하는 컴포넌트로 DB 접근 등이 가능<br/>
    와 같은 <u>다른 렌더링 패턴을 구현</u>해야 합니다.

- 처음에는 이러한 기능이 필요하지 않더라도 나중에 SSR, SSG 또는 RSC에 도움이 될 수 있는 몇가지 방법이 있을 수 있습니다.

1. 단일 페이지 앱(SPA)은 <u>단일 HTML 페이지를 로드</u>하고, 사용자가 앱과 <u>상호작용할 때 페이지를 동적으로 업데이트</u>합니다.
    - SPA는 시작하기는 쉽지만 <u>초기 로드 시간이 느릴 수</u> 있습니다.
    - SPA는 대부분의 <u>빌드 도구에서 기본 아키텍처로 사용</u>됩니다.

<hr/>

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
    - ⚠ 공식문서의 자세히 살펴보기를 통해서 props와 state에 관해서 다시 한번 정리합니다.

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
    - ⚠ 첫번째 코드와 비교해 보면서 어디가 수정되었는지 정확하게 수정해줘야 합니다.
    
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

## 25년 4월 18일 강의(보강)
> 내용 정리

**한번 더 state 끌어올리기**
6. 다음 플레이어와 플레이 기록을 추적하기 위해 <u>Game 컴포넌트에 몇 개의 state를 추가</u>하세요.

    ```javascript
    export default function Game() {
        const [xIsNext, setXIsNext] = useState(true);
        const [history, setHistory] = useState([Array(9).fill(null)]);

        // ...
    }
    ```
7. 현재 플레이에 대한 square를 렌더링하려면 history에서 <u>마지막 squares의 배열을 읽어야</u> 합니다.
8. 렌더링 중에 <u>계산할 수 있는 충분한 정보가 이미 있으므로 useState는 필요하지 않습니다</u>.
    ```javascript
    export default function Game() {
        const [xIsNext, setXIsNext] = useState(true);
        const [history, setHistory] = useState([Array(9).fill(null)]);
        const currentSquares = history[history.length - 1];

        // ...
    }
    ```
9. 다음으로 <u>Game 컴포넌트 안의 Board 컴포넌트가 게임을 업데이트할 때 호출할</u> <u>handlePlay 함수</u>를 만드세요.
10. xIsNext, currentSquares, handlePlay를 <u>Board 컴포넌트에 props로 전달</u>하세요.
    ```javascript
    export default function Game() {
        const [xIsNext, setXIsNext] = useState(true);
        const [history, setHistory] = useState([Array(9).fill(null)]);
        const currentSquares = history[history.length - 1];

        function handlePlay(nextSquares) {
            // TODO
        }

        return (
            <div className="game">
                <div className="game=board">
                    <Board xIsNext={ xIsNext } squares={ currentSquares } onPlay={ handlePlay } />
                    // ...
        )
    }
    ```

- Board 컴포넌트가 props에 의해 완전히 제어되도록 만들겠습니다.

11. Board 컴포넌트가 <u>xIsNext, squares, onPlay 함수를 props로 받을 수 있도록 변경</u>합니다.
    - onPlay는 Board가 <u>업데이트된 squares를 배열로 호출할 수 있는 <b>새로운 함수</b></u>입니다.
12. 다음으로 <u>Board 함수에서 useState를 호출하는 처음 두 줄을 제거</u>하세요.
13. 이제 Board 컴포넌트의 handleClick에 있는 <u>setSquares 및 setXIsNext 호출을 새로운 onPlay 함수에 대한 단일 호출로 대체함</u>으로써 사용자가 사각형을 클릭할 때, Game 컴포넌트가 Board를 업데이트할 수 있습니다.

- <u>Board 컴포넌트는 Game 컴포넌트가 전달한 props에 의해 완전히 제어</u>됩니다.
- 게임이 다시 작동하게 하려면 <u>Game 컴포넌트에서 handlePlay 함수를 구현</u>해야합니다.
- handlePlay가 호출되면 무엇을 해야 할까요?
    - -> 이전의 Board는 업데이트된 setSquares를 호출했지만, 이제는 <u>업데이트된 squares 배열을 onPlay로 전달</u>한다는 걸 기억하세요.
    - <u>handlePlay 함수</u>는 리렌더링을 트리거하기 위해 Game의 state를 업데이트해야 하지만, <u>더 이상 호출할 수 있는 setSqaures 함수가 없습니다.</u>
    - <u>대신 이 정보를 저장하기 위해 history state 변수를 사용</u>하고 있습니다.
    - 업데이트된 squares 배열을 <u>새 히스토리 항목으로 추가하여 history를 업데이트</u>해야 하고, Board에서 했던 것처럼 xIsNext 값을 반전</u>시켜야 합니다.
- 앞에서 [...history, nextSquares]는 history에 있는 모든 항목을 포함하는 새 배열을 만들고 그 뒤에 nextSquares를 만듭니다.
- ...history <u>전개 구문</u>을 사용하면 <u>"history의 모든 항목 열거"로 읽을 수</u> 있습니다.
- 예를 들어, history가 [[null, null, null], ["X", null, null]]이고, nextSquares가 ["X", null, "O"]라면 새로운 [...history, nextSquares] 배열은 [[null, null, null], ["X", null, null], ["X", null, "O"]]가 될 겁니다.

- 이 시점에서 state를 Game 컴포넌트로 옮겼으므로 <u>리팩토링 전과 마찬가지로 UI가 완전히 작동해야 합니다.</u>

💡 전개 연산자(spread operator...)

**# 화면이 한줄로 깨져보이는 이유**
- 화면이 다음과 같이 한줄로 깨져서 보이는 경우가 있습니다.
- 이것은 Square 컴포넌트에서 <u><button>을 <div>로 감싸서 생기는 문제</u>입니다.
- <u>React Fragment(<> ... </>)로 감싸</u>거나, <button>만 남겨주세요.
- React Fragment를 사용하면 <u>구조도 깔끔하고, 유지 보수도 편합니다.</u>

- 우리가 사용하는 튜토리얼에서는 버튼들을 float 스타일로 정렬하고 있습니다.
- 그런데 float: left는 <button>끼리만 제대로 정렬되도록 스타일이 짜여있습니다.

**과거 움직임 보여주기**
- 이제 틱택토 게임의 히스토리를 기록하기 때문에, 플레이어에게 과거 플레이 목록을 보여줄 수 있습니다.
- <button>과 같은 React 엘리먼트는 <u>일반 JavaScript 객체이므로 애플리케이션에서 전달</u>할 수 있습니다.
- React에서 <u>여러 엘리먼트를 렌더링하려면 React 엘리먼트 배열을 사용</u>할 수 있습니다.
- 이미 <u>state에 이동 history 배열이 있기 때문에 이것을 React 엘리먼트 배열로 변환</u>해야 합니다.
- JavaScript에서 <u>한 배열을 다른 배열로 변환하려면 <b>배열 map 메서드</b>를 사용</u>하면 됩니다.
    ```javascript
    [1, 2, 3].map((x) => x * 2) // [2, 4, 6]
    ```

1. 플레이 <u>history 배열을</u> 화면의 버튼을 나타내는 <u>React 엘리먼트로 변환</u>합니다.
2. 과거의 플레이로 <u>"점프"할 수 있는 버튼 목록을 표시</u>하세요.
3. 이것을 구현하기 위해서 <u>Game 컴포넌트에서 history를 map을 이용</u>해보겠습니다.

**# map 함수의 사용**
💡 문서의 내용이 이해하기 어렵게 번역되어 있기 때문에 다시 정리합니다.

- map의 기본 구문은 map(callbackFn)혹은 map(callbackFn, thisArg)입니다.
- <u>thisArg</u>는 내부에서 this로 사용할 값을 지정하는데 <u>화살표 함수에서는 생략</u>됩니다.
- 따라서 예제에서는 <u>callbackFn만 사용</u>하고, <u>화살표 함수가 callback 함수를 대신</u>합니다.
- <u>squares, move는 화살표 함수의 매개변수</u>입니다.

1. history.map: <u>history는 모든 플레이를 저장하는 배열</u>입니다. 이 <u>history에 map함수를 적용한다는 의미</u>입니다.
2. map 함수는 <u>history 각각의 요소 index를 순회하면서 squares 추출</u>합니다.
3. 각 요소는 <u>{ }안의 실행문을 실행하면서 버튼을 생성</u>합니다.
4. 이렇게 <u>생성된 버튼은 moves 객체(배열)에 다시 저장</u>됩니다.
5. <u>move는 최종 rendering에 사용</u>됩니다.

- 다시 정리하면
    - <b>원본 배열(history)</b>: map이 호출된 원본 배열.
    - <b>원본 배열의 인덱스(move)</b>: 현재 순환 중인 원본 배열 요소의 인덱스.
    - <b>요소 값</b>: 현재 순회 중인 요소 배열의 값

- history.map((squares, move) => { ... })는 다음과 같이 동작합니다.
    - 첫번째 호출: squares = [null, null, null, null, null, null, null, null, null], move = 0
    - 두번째 호출: squares = ['X', null, null, null, null, null, null, null, null], move = 1
    - 세번째 호출: squares = ['X', 'O', null, null, null, null, null, null, null], move = 2
- 각각의 <u>history 요소에 대한 { }의 실행문(후작업) 실행</u>합니다.
- <u>moves 객체에 저장</u>합니다.
- <u>최종 출력</u>에 사용됩니다.

**Key 선택하기**
- 리스트를 렌더링할 때 React는 <u>렌더링된 각 리스트 항목에 대한 몇 가지 정보를 저장</u>합니다.
- 리스트를 <u>업데이트할 때 React는 무엇이 변경되었는지 확인</u>해야 합니다.
- 리스트의 <u>항목은 추가, 제거, 재정렬 또는 업데이트</u>될 수 있습니다.

- 리스트가 다음과 같이 업데이트가 되었다고 생각해 봅니다.
    ```javascript
    <li>Alexa: 7 tasks left</li>
    <li>Ben: 5 tasks left</li>
    ```
    ⬇
    ```javascript
    <li>Ben: 9 tasks left</li>
    <li>Claudia: 8 tasks left</li>
    <li>Alexa: 5 tasks left</li>
    ```
- 아마 task의 개수가 업데이트 되었을 뿐만 아니라 Alexa와 Ben의 순서가 바뀌고 Claudia가 두 사람 사이에 추가되었다고 생각할 것입니다.
- 그러나 React는 <u>컴퓨터 프로그램</u>이므로 우리가 의도한 바가 무엇인지 알지 못합니다.
- 그러므로 <u>리스트 항목에 key 프로퍼티를 지정</u>하여 각 <u>리스트의 항목이 다른 항목과 다르다는 것을 구별</u>해 주어야 합니다.

- 만약 <u>데이터베이스에서 데이터를 불러와서 사용</u>한다면 Alexa, Ben, Claudia의 <u>데이터베이스 ID를 key로 사용</u>할 수 있습니다.
- 리스트가 다시 렌더링되면 React는 <u>각 리스트 항목의 key를 가져와서 이전 리스트의 항목에서 일치하는 key를 탐색</u>합니다.
- 현재 리스트에서 <u>이전에 존재하지 않았던 key가 있으면 React는 컴포넌트를 생성</u>합니다.
- 만약 현재 리스트에 이전 리스트에 존재했던 <u>key를 가지고 있지 않다면 React는 그 key를 가진 컴포넌트를 제거</u>합니다.
- <u>두 key가 일치한다면 해당 컴포넌트로 이동</u>합니다.
- key는 <u>각 React가 각 컴포넌트를 구별할 수 있도록</u> 하여, 컴포넌트가 다시 렌더링될 때 <u>React가 해당 컴포넌트의 state를 유지</u>할 수 있게 합니다.
- 컴포넌트의 <u>key가 변하면 컴포넌트는 제거되고 새로운 state와 함께 다시 생성</u>됩니다.

- key는 React에서 <u>특별하게 미리 지정된 프로퍼티</u>입니다.
- 엘리먼트가 생성되면 React는 key 프로퍼티를 추출하여 <u>반환되는 엘리먼트에 직접 key를 저장</u>합니다.
- key가 props로 전달되는 것처럼 보일 수 있지만, React는 <u>자동으로 key를 사용해 업데이트할 컴포넌트를 결정</u>합니다.
- <u>부모가 지정한 key가 무엇인지 컴포넌트는 알 수 없습니다.</u>
- <u>동적인 리스트를 만들 때마다 적절한 key를 할당하는 것을 강력하게 추천</u>합니다.
- 적절한 <u>key가 없는 경우 데이터의 재구성을 고려</u>해보세요.
- <u>key가 지정되지 않은 경우</u>, React는 <u>경고를 표시</u>하며 <u>배열의 인덱스를 기본 key로 사용</u>합니다.
- <u>배열 인덱스를 key로 사용하면</u> 리스트 <u>항목의 순서를 바꾸거나 항목을 추가 / 제거할 때 문제가 발생</u>합니다.
- <u>명시적으로 key = { i }를 전달하면 경고는 사라지지만</u>, 배열의 인덱스를 사용할 때와 같은 문제가 발생하므로 대부분은 <u>추천하지 않습니다</u>.
- key는 <u>전역적으로 고유할 필요는 없으며</u>, <u>컴포넌트와 해당 컴포넌트의 형제 컴포넌트 사이에서만 고유</u>하면 됩니다.

**시간여행 구현하기 - 1**
- 틱택토 게임의 기록에서 <u>과거의 각 플레이에는 해당 플레이의 일련번호인 고유 ID</u>가 있습니다.
- 플레이는 <u>중간에 순서를 바꾸거나 삭제하거나 삽입할 수 없기</u> 때문에 플레이 <u>인덱스를 key로 사용하는 것이 안전</u>합니다.

1. Game 함수에서 <u><li key = { move }>로 key를 추가</u>할 수 있으며, 렌더링 된 게임을 <u>다시 로드하면 React의 "key" 에러가 사라질 것</u>입니다.

**시간여행 구현하기 - 2**
- jumpTo를 구현하기 전에 <u>사용자가 현재 어떤 단계를 보고 있는지를 추적</u>할 수 있는 Game 컴포넌트의 <u>state가 하나 더 필요</u>합니다.

1. 이를 위해 <u>초기값이 0인 currentMove라는 새 state 변수를 정의</u>하세요.
    ```javascript
    const [currentMove, setCurrentMove] = useState(0);
    ```
2. 다음으로 Game 내부의 jumpTo 함수를 수정해서, 해당 <u>currentMove를 업데이트</u>하세요.
3. 또한 <u>currentMove를 변경하는 숫자가 짝수면 xIsNext를 true로 설정</u>하세요.

- 이제 사각형을 클릭할 때 호출되는 Game의 <u>handlePlay 함수 내용중 두 가지를 변경</u>하겠습니다.

4. "시간을 거슬러 올라가서" 그 시점에서 <u>새로운 플레이를 하는 경우 해당 시점까지의 히스토리만 유지</u>해야 합니다.
    - history의 모든 항목(... 전개 구문) 뒤에 nextSquares를 추가하는 대신 <u>history.slice(0, currentMove + 1)의 모든 항목 뒤에 추가</u>하여 이전 히스토리의 해당 부분만 유지하도록 하겠습니다.
5. <u>이동할 때마다 최신 히스토리 항목을 가리키도록 currentMove를 업데이트</u>하세요.
    ```javascript
    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
        setXIsNext(!xIsNext);
    }
    ```

*여기까지만 하면 내부적으로는 동작하지만 렌더링은 안되는 상태입니다.*

6. 마지막으로 항상 마지막 동작을 렌더링하는 대신 <u>현재 선택한 동작을 렌더링하도록</u> Game 컴포넌트를 수정하겠습니다.
    ```javascript
    export default function Game() {
        const [xIsNext, setXIsNext] = useState(true);
        const [history, setHistory] = useState([Array(9).fill(null)]);
        const [currentMove, setCurrentMove] = useState(0);
        const currentSquares = history[currentMove];

        // ...
    }
    ```

- 게임 히스토리의 특정 단계를 클릭하면 틱택토 보드가 즉시 업데이트되어 해당 단계가 발생한 시점의 보드 모양이 표시됩니다.

**최종 정리**

- 코드를 자세히 살펴보면 currentMove가 짝수일 때는 xIsNext === true가 되고, currentMove가 홀수일 때는 xIsNext === false가 되는 것을 알 수 있습니다.
- 즉, <u>currentMove의 값을 알고 있다면 언제나 xIsNext가 무엇인지 알아낼 수 있습니다.</u>
- 따라서 <u>이 두 가지 state를 모두 저장할 이유가 없습니다.</u>

- 항상 <u>중복되는 state는 피하세요.</u>
- state에 저장하는 것을 단순화하면 버그를 줄이고 코드를 더 쉽게 이해할 수 있습니다.

- Game을 변경하여 더 이상 xIsNext를 별도의 state 변수로 저장하지 않고 <u>currentMove를 기반으로 알아내도록 수정</u>하겠습니다.

<hr>

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

## 25년 4월 3일 강의
> 내용 정리

**8. 이벤트에 응답하기**
- component 내부에 <u>event handler 함수를 선언하면 event에 응답할</u> 수 있습니다.
- <u>onClick={handleClick}의 끝에 소괄호()가 없는 것</u>을 주목하세요!
- <u>함수를 호출하지 않고 전달만</u> 하면 됩니다.
- React는 사용자가 <u>버튼을 클릭할 때 이벤트 핸들러를 호출</u>합니다.

**9. 화면 업데이트하기**
- component가 <u>특정 정보를 "기억"해 두었다가 표시</u>하기를 원하는 경우가 있습니다.
- 예를 들어 <u>버튼이 클릭된 횟수</u>를 세고 싶을 수 있습니다.
- 이렇게 하려면 <u>component에 state를 추가</u>하면 됩니다.

- 먼저, React에서 <u>useState를 import</u>합니다.
    ```javascript
    import { useState } from 'react';
    ```
- 이 코드를 보면 <u>useState는 react 파일 안에 Named Exports로 선언되어 있는 여러개의 component중 하나</u>라는 것을 알 수 있습니다.
- 이제 <u>component 내부에 state 변수를 선언</u>할 수 있습니다.
    ```javascript
    function MyButton() {
        const [count, setCount] = useState(0);
        // ...
    }
    ```

- <u>useState로부터</u> 현재의 <u>state를 저장할 수 있는 변수</u>인 count와 이를 <u>업데이트할 수 있는 함수</u>인 setCount를 <u>얻을 수 있습니다.</u>
- <u>이름은 자유롭게 지정할 수</u> 있지만 <u>[something, setSomething]으로 작성하는 것이 일반적입니다.</u>
- 즉, <u>변수 이름과 변수 이름 앞에 set을 붙인 업데이트 함수를 관용적으로 사용</u>합니다.

- 버튼이 처음 표시될 때는 <u>useState()에 0을 전달</u>했기 때문에 count가 0이 됩니다.
- state를 변경하고 싶다면 <u>setCount를 실행하고 새 값을 전달</u>하세요.
- 이 <u>버튼을 클릭하면 카운터가 증가</u>합니다.
    ```javascript
    function Button() {
        const [count, setCount] = useState(0);

        function handleClick() {
            setCount(count + 1);
        }

        return (
            <button onClick={handleClick}>
                Clicked {count} times
            </button>
        );
    }
    ```

**10. Hook 사용하기**
- <u>use로 시작하는 함수</u>를 Hook이라고 합니다.
- useState는 React에서 제공하는 <u>내장 Hook</u>입니다.
- 다른 내장 Hook은 API 참고서에서 찾아볼 수 있습니다.
- 또한 기존의 것들을 조합하여 <u>자신만은 Hook을 작성할 수</u>도 있습니다. 사용자 Hook.

- Hook은 <u>다른 함수보다 더 제한적</u>입니다.
예를 들면,
- component 또는 다른 Hook의 <u>상단에서만 Hook을 호출</u>할 수 있습니다.
- 조건이나 반복문에서 useState를 사용하고 싶다면 새 컴포넌트를 추출하여 그곳에 넣으세요.

*[Hooks의 사용 규칙(Rules of Hooks)]*
- Hook은 React의 <u>렌더링 및 상태 관리 매커니즘과 밀접하게 연결</u>되어 있으며, 아래와 같은 규칙을 따라야 합니다.

1. <u>최상위에서만 호출</u>해야 한다.
⚠ <u>if, for, while 등의 블록 내부에서 Hooks를 호출하면 안됩니다.</u>
⚠ 함수의 조건문 <u>내부에서 호출하면 실행 순서가 달라질 수 있기 때문</u>입니다.

2. <u>React 함수형 component</u> 또는 <u>사용자 Hook 내부에서만 사용 가능</u>
⚠ <u>일반적인 JavaScript 함수</u>에서 useState, useEffect 등의 <u>Hook을 사용할 수 없습니다.</u>

⚠ 왜 이런 제한이 필요한가?
- React의 <u>동작을 예측 가능하고, 안정성을 높이기 위해</u> 필요한 규칙입니다.

1. rendering 순서를 보장하기 위해
    <u>조건문이나 반복문 안에서 Hooks를 사용하면</u> 매 rendering마다 <u>Hook의 호출 순서가 달라질 수 있기 때문</u>에 React가 <u>상태를 제대로 추적할 수 없습니다.</u>

2. 불필요한 사이드 이펙트 방지
    component가 <u>여러번 rendering 될 때마다 동일한 순서로 Hook이 실행되어야</u> React가 <u>의도한 동작을 수행할 수</u> 있습니다.

*[왜 function형 컴포넌트에서만 Hook을 사용할까?]*
- <u>Class형 component는 lifecycle 함수를 통해서 상태 관리</u>를 했습니다.
- 그런 이유때문에 <u>Class형 component는 유지보수가 어렵고 복잡해질 수 있었습니다.</u>
- React는 component의 <u>상태 관리(lifecycle)와 로직을 더 간결하게 만들기 위해 Hooks를 도입</u>하게 됩니다.
- 따라서 <u>React 팀은 function형 component를 권장</u>하고 있습니다.
- <u>Hook은 function형 component 전용으로 설계</u>되었습니다.

⚠ 이런 이유때문에 function형 component에서만 Hook을 사용하는 것입니다.

**11. Component 간 데이터 공유**
- <u>공식 문서에서는 MyButton과 MyApp을 계속 수정</u>해 가면서 설명을 하고 있어서 <u>이전 상태를 확인하기가 어렵습니다.</u>
- 물론 변경이 있을 때마다 꼼꼼히 <u>commit을 해두면 checkout을 통해서 확인이 가능합니다.</u>
- 다만 이 경우 <u>checkout을 반복해야 하기 때문에 확인하는데 불편</u>합니다.

⚠ 따라서 <u>실습은 꼭 필요한 경우를 제외하고는 별도의 component를 만들어 사용</u>하겠습니다.

- 사이트에서는 MyButton으로 설명하고 있지만, <u>우리는 CountState로 작성</u>했던 것을 기억하고 사이트의 설명을 봐야 합니다.
- 9절에서 <u>"왜 변수는 count 하나인데 버튼 3개의 데이터가 모두 다른 state를 갖는 것일까?"</u>라는 의문이 있었습니다.
- 각각의 <u>CountState component는 독립적인 count가 있는 것처럼 동작</u>했고, 각 버튼을 클릭하면 <u>클릭한 버튼의 count만 변경</u>되었습니다.
- <u>그러나 이것은 이상한 것이 아닙니다.</u> 각 component <u>객체가 독립적으로 동작하기 때문</u>입니다.
- component는 하나지만 count 변수도 객체로 여러개 복사된 것이나 마찬가지이기 때문입니다.

- 하지만 <u>데이터를 공유하고 항상 함께 업데이트</u>하기 위한 component가 필요한 경우가 많습니다.
- 두 개의 CountState2 component가 <u>동일한 count를 표시하고 함께 업데이트</u>하려면, <u>state를 개별 버튼에서 모든 버튼이 포함된 가장 가까운 component 안으로 이동</u>해야 합니다.
- 여기서 이야기하는 제일 가까운 component는 </u>App component</u>입니다.
⚠ 외부에서 두 개 호출하는 것이 아니라, <u>내부에서 같은 count변수를 사용</u>하는 것입니다.

<hr>

## 25년 3월 27일 강의
> 내용 정리

**1. 학습 내용**
1. component 생성 및 중첩 방법
2. 마크업과 스타일을 추가하는 방법
3. 데이터를 표시하는 방법
4. 조건부 랜더링과 목록 랜더링 방법
5. 이벤트에 응답하고 화면을 업데이트하는 방법
6. component 간에 데이터를 공유하는 방법

⚠ 공식 사이트의 "학습하기(Learn)" 참고
<br>

**2. Component의 생성 및 중첩(nesting)**
- 2장에서 살펴본 것과 같이 React앱은 component로 만들어집니다.
- component는 <u>고유한 로직과 모양을 가진 UI의 일부</u>입니다.
- component는 <u>버튼처럼 작을 수도</u> 있고, <u>전체 페이지처럼 클 수도</u> 있습니다.
- component는 <u>마크업을 반환(return)하는 JavaScript 함수</u>입니다.
- <u>Nesting</u>은 CSS 선택자의 중첩 구조를 생각하면 쉽게 이해할 수 있습니다.
    - CSS 중첩 구조는 2023년 부터 자체 지원합니다. 이전에는 Sass나 Lass 등을 이용할 때 사용했습니다.
    ```css
    .container {
        background: blanchedalmond;
    }

    .container > .foo {
        color: red;
    }

    .container > .foo > .bar {
        color: blueviolet;
    }
    ```
    ▼
    ```css
    .container {
        background: blanchedalmond;

        & .foo {
            color: red;

            & .bar {
                color: blueviolet;
            }
        }
    }
    ```
- **export default 선언의 위치는 어디가 좋을까?**
- <u>VS Code에서 자동 완성</u>을 하면 위와 같이 <u>맨 아래 선언</u>되는 것을 확인할 수 있습니다.
- 하지만 <u>공식 문서처럼</u> main component의 <u>function 키워드 왼쪽에 선언</u>하는 것이 좋습니다.
- 특히 <u>한 파일에 여러 개의 component가 있을 경우</u>라면 이렇게 하는 것이 <u>가독성에 유리</u>합니다.
    ```javascript
    function App() {
        return (
            <div>
                <h1>Welcome to my app</h1>
                <MyButton />
            </div>
        )
    }

    export default App
    ```
    ▼
    ```javascript
    export default function App() {
        return (
            <div>
                <h1>Welcome to my app</h1>
                <MyButton />
            </div>
        )
    }
    ```

- <u>export default 키워드</u>는 파일내의 component 중 <u>기본 component를 지정</u>합니다.
- 이 키워드의 사용도 <u>JavaScript 문법</u>입니다.
- 좀 더 구체적으로 알고 싶다면 사이트의 MDN 혹은 javascript.info 링크를 확인하세요.
<br>

*[export default와 export의 차이]*
- <u>Named Exports</u>(export)
    - <u>하나의 파일안에 여러개의 component가 있을 때 사용</u>합니다.
    - component를 <u>사용하는 쪽에서는 component 정확한 이름을 명시</u>해야합니다.
    - 예) imnport { add, subtract, multiply, divide } from './math'

- <u>Default Exports<u>(export default)
    - <u>하나의 파일안에서 하나의 component만 내보내는 경우 사용</u>합니다.
    - component를 <u>사용하는 쪽에서는 어떤 이름을 사용해도 상관없습니다.</u>
    - 예) import calc from './calculator'

- 예제 코드에서 <u>MyButton Component만 분리</u>합니다.
- 어떤 과정을 거쳐야 하는지 생각하면서, 예제 코드와 <u>같은 결과가 나오도록 수정</u>합니다.
    ```javascript
    export default function MyButton() {
        return (
            <button>I'm a Button</button>
        )
    }
    ```
    ```javascript
    import MyB from "./MyButton.js"

    export default function App() {
        return (
            <div>
                <h1>Welcomt to my app</h1>
                <MyB />
            </div>
        )
    }
    ```
- <u>Default Exports</u>이기 때문에 import할 때는 <u>어떤 이름을 사용해도 상관없습니다.</u>
- 다만 convention을 달리할 경우 가독성이 떨어지기 때문에 <u>대문자로 시작</u>하는 것이 좋습니다.
<br>

- 다음은 <u>ButtonLib라는 component</u>를 새로 만듭니다.
- 내용은 <u>Named Exports의 button component 3개</u> 만듭니다.
- ButtonLib에 선언한 component를 <u>2개만 App으로 중첩</u>해 봅니다.
```javascript
function Button1() {
    return (
        <button>Button 1</button>
    )
}

function Button2() {
    return (
        <button>Button 2</button>
    )
}

function Button3() {
    return (
        <button>Button 3</button>
    )
}

export { Button1, Button2, Button3 };
```
```javascript
import MyB from "./MyButton.js"
import { Button1, Button3 } from "./ButtonLib.js";

export default function App() {
  return (
    <div>
      <h1>Hello React</h1>
      <MyB />
      <Button1 />
      <Button3 />
    </div>
  );
}
```

**3. JSX로 마크업 작성하기**
- 앞에서 작성한 코드의 <u>마크업 문법을 JSX</u>라고 합니다.
- 반드시 사용해야 하는 것은 아니지만, React 프로젝트에서는 <u>편의성을 위해 JSX를 사용</u>합니다.
- JSX는 HTML보다 더욱 엄격한 문법을 적용</u>합니다.
- JSX에서는 <u><br /> 같이 싱글 태그라도 태그를 닫아야</u> 합니다.
- React에서는 <u>여러개의 component를 JSX태그로 반환할 수</u> 있습니다.
- 다만 여러개의 component를 <u><div>...</div> 또는 빈 <>...</> wrapping 해줘야</u> 합니다.
<br>

- AboutPage component를 작성합니다.
    ```javascript
    export default function AboutPage() {
        return (
            <>
                <h1>About</h1>
                <p>Hello there.<br />How do you do?</p>
            </>
        );
    }
    ```
- 이 component를 화면에서 확인하려면 App.js에서 불러오면 가능하다.

**4. 스타일 추가하기**
- React에서는 <u>className으로 CSS 클래스를 지정</u>합니다.
    ```css
    <img className="avatar" />
    ```
- className은 <u>HTML의 class 속성과 동일한 방식으로 동작</u>합니다.
- CSS 규칙은 별도의 CSS 파일에 작성합니다. 그런데 React는 <u>CSS 파일을 추가하는 방법을 규정하지는 않습니다.</u>
    - 정작 페이지를 작성할 때와 동일한 방법을 지원합니다.
    ```css
    /* In your CSS */
    .avatar {
        border-radius: 50%;
    }
    ```
- 가장 간단한 방법은 HTML에 <link> 태그를 추가하는 것입니다.
    - 그러나 link를 추가하면 정적 페이지를 수정해야 하기 때문에 <u>추천하지 않습니다.</u>
    - React를 <u>사용할 수 있는 여러가지 방법은 뒤에서 알아보도록</u> 하겠습니다.
- 만일 빌드 도구나 프레임워크를 사용한다면 해당 문서를 참고하여 프로젝트에 CSS 파일을 추가합니다.

**5. 데이터 표시하기**
- <u>JSX를 사용하면 자바스크립트에 마크업을 넣을 수</u> 있습니다.
    - 반대 아닌가? <u>JS안의 마크업 안에 JS를 넣는</u>다는 것이 더 정확합니다. 
- JSX 코드 내에서 <u>JavaScript로 "탈출"하여 변수나 표현식을 사용</u>하는 것입니다.
- 이 방법을 "<u>Escape Back</u>"이라고 합니다.
- <u>{} 중괄호를 사용</u>해서 변수나 표현식을 사용자에게 표시하도록 하는 것입니다.
    ```javascript
    return (
        <h1>
            {user.name} // 자바스크립트 이스케이프
        </h1>
    );

    ------------------------------

    return (
        <img
            className="avatar"
            src={user.imageUrl}
        />
    );
    ```
- src 속성에 <u>user.imageUrl 변수의 값을 전달</u>하여 <u>이미지의 경로를 설정</u>하고 있습니다.
- 반면에 className="avatar"는 <u>단순히 문자열을 전달</u>하는 경우에는 중괄호 대신 큰 따옴표를 사용합니다.
- 스타일을 추가하기 위해서는 <u>import 키워드를 이용해서 파일 경로를 작성하면 됩니다.</u>

**6. 조건부 렌더링**
- React에서 조건문을 작성하는 데에는 특별한 문법이 필요 없습니다.
- <u>일반적인 자바스크립트 코드를 작성할 때 사용하는 것과 동일한 방법을 사용합니다.

**7. 리스트 렌더링하기**
- 컴포넌트 <u>리스트를 렌더링</u>하기 위해서는 <u>for 문 및 map() 함수</u>와 같은 자바스크립트 기능을 사용합니다.
- <u><li>에 key 속성(attribute)</u>이 있는 것을 주목하세요.
- 목록을 사용할 때는 <u>각 항목에 대해 고유하게 식별하는 문자열 또는 숫자를 전달</u>해야 합니다.
- <u>항목을 삽입, 삭제 또는 재정렬할 때</u> 어떤 일이 일어났는지 알기 위해 key를 사용</u>합니다.
- 이것을 <u>key props</u>라고 하는데, 자세한 내용은 props를 학습할 때 자세히 다룹니다.

<hr>

## 25년 3월 20일 강의
> 내용 정리

**React Project의 구조 및 역할**
- node_modules/
    1. 초기 node module 및 새로 설치하는 패키지가 저장됩니다.
    2. 초기 파일 37,352 / 폴더 4,597 / 용량은 200MB로 엄청난 양의 파일이 존재합니다.
    3. git으로 관리하지 않기 때문에 디렉토리 이름이 흐릿하게 나와 있는 것을 확인할 수 있습니다.

- public/
    1. 정적(static) 파일을 저장하는 디렉토리입니다.
    2. build 후 배포할 html, CSS, JavaScript 등이 보관되는 곳입니다.
    3. 개발하면서 특별히 수정할 코드는 없습니다.

- src/
    1. React 프로젝트의 주요 코드가 위치하는 디렉토리입니다.
    2. 개발하면서 대부분의 작업이 이루어지는 곳입니다.

- src/App.js
    1. 메인 component로, 필요한 sub component를 모아서 관리합니다.
    2. 출력을 위해서 index.js로 전달됩니다.

- src/App.css
    1. App.js에 적용되는 스타일을 정의하는 스타일 파일입니다.

- src/index.js
    1. React앱의 진입점(entry point)으로 최종 렌더링의 되는 곳입니다.
    2. ReactDOM.createRoot를 사용하여 App.js를 렌더링합니다.

- src/index.css
    1. 전역 스타일을 정의하는 스타일 파일입니다.

**의존성 관리와 package.json**
- package.json은 <u>패키지의 의존성을 관리하는 파일</u>입니다.
- <u>의존성(Dependency)이란</u>, 하나의 소프트웨어가 다른 소프트웨어(라이브러리, 패키지, 모듈 등)에 <u>의존하여 동작하는 관계</u>를 말합니다.
- 즉, 어떤 프로젝트에 <u>사용된 각종 패키지 등의 버전을 동일하게 유지</u>하기 위한 것입니다.
- 협업을 할 때는 팀원들 각자의 컴퓨터에 <u>같은 패키지들을 설치해서 동일한 개발환경을 구성</u>해야합니다. <br>
코드는 Github 등 Git Server를 이용하지만, <u>node 패키지는 각 팀원들이 설치해야 합니다.</u>
- <u>의존성을 무시하면</u> 다른 버전의 패키지를 설치하는 팀원 때문에 <u>개발 프로젝트의 오류 등이 발생</u>할 수 있습니다.
- <u>개인</u>의 경우도 GitHub에 있는 코드를 <u>내려 받은 후에 동일한 개발환경을 구성</u>해야 할 때가 있습니다.

*[의존성을 관리하는 이유]*
- 손쉬운 설치 및 업데이트
    1. npm install 또는 yarn install 한 줄로 모든 의존성을 자동 설치 가능.
    2. 특정 버전의 라이브러리를 쉽게 업데이트 가능.

- 일관된 개발 환경 유지
    1. 팀원들과 같은 라이브러리 버전을 유지할 수 있음.
    2. package-lock.json을 활용하면 동일한 패키지를 정확한 버전으로 설치 가능.

- 중복 설치 방지
    1. 필요없는 라이브러리를 제거하여 프로젝트를 가볍게 유지할 수 있음.

- package.json은 이런 의존성을 체계적으로 관리하는 역할을 합니다.

- 프로젝트에 필요한 라이브러리를 쉽게 설치, 업데이트, 유지할 수 있도록 도와주는 시스템입니다.

*[package.json의 의존성 내용의 종류]*
- dependenies: <u>실제 코드에서 사용</u>하는 라이브러리(예: React, Express 등)

- devDependencies: <u>개발할 때만 필요</u>한 라이브러리들(예: Webpack, ESLint 등)

- peerDependencies: 필요한 라이브러리지만, 직접 설치하지 않고 <u>사용자에게 설치를 맡기는 경우</u>

- optionalDependencies: 있어도 되고 없어도 되는 <u>선택성 의존성</u>

*[package.json과 package-lock.json의 차이]*
- package.json에 "react": <u>"^18.0.0"</u>이라고 기록되어 있으면, 설치할 때 <u>최신 18.x.x 버전</u>이 자동으로 설치될 수 있습니다.

- package-lock.json에는 "react": <u>"18.2.0"</u>처럼 정확한 버전이 기록되어 있고, npm install을 실행해도 <u>같은 버전이 설치</u>됩니다.

- 따라서, 팀 프로젝트에서는 <u>package-lock.json을 유지하는 것이 중요</u>합니다.

- <u>package-lock.json만 유지하면 되지 않을까? package.json도 유지해야 하는 이유는 무엇일까?</u>
    - package.json에는 다른 중요한 파일 포함(예: script)

*[package.json을 유지해야 하는 이유]*
1. 프로젝트의 의존성 정보 제공
    - 프로젝트에서 <u>어떤 패키지를 사용하는지 정의하는 역할</u>을 합니다.
    - <u>어떤 패키지를 설치해야 하는지 알 수 있는 기준</u>이 됩니다.

2. 버전 범위 설정 가능
    - ^18.0.0처럼 <u>최신 패치 버전을 허용할 수도</u> 있고, 18.2.0처럼 <u>정확한 버전만 고정할 수도</u> 있습니다.
    - 개발자가 <u>원하는 방식으로 유연하게 관리</u>할 수 있습니다.

3. 스크립트와 메타데이터 저장
    - <u>"scripts" 속성</u>을 이용해 <u>빌드, 테스트, 실행 등의 명령어를 저장</u>할 수 있습니다.
    - <u>프로젝트 실행을 위해서</u>는 반드시 필요합니다.

4. 새로운 패키지 설치 및 관리
    - <u>패키지를 설치하면 package.json에 추가</u>되고, package-lock.json에는 정확한 버전이 기록됩니다.
    - 만약 <u>package.json이 없으면, 새로운 패키지를 추가할 수 없습니다.</u>

**node module의 재설치**
- node module을 다시 설치해야 하는 경우는 다음과 같은 <u>3가지 정도의 상황</u>이 있을 수 있습니다.
    1. <u>팀 작업</u>을 하면서 GitHub로 부터 프로젝트 파일을 <u>clone</u> 했을 경우.
    2. <u>개인</u>이 자신의 프로젝트를 다른 PC 등에서 <u>clone</u>을 받아 계속 개발해야 하는 경우.
    3. <u>프로젝트에 문제가 생겨서</u> node modules을 다시 설치해야 하는 경우.

*[clone을 받은 프로젝트의 경우]*
1. 다음 명령을 실행하면 package.json과 package-lock.json을 참고하여 패키지를 다시 설치합니다.
```bash
$ npm install
```
2. node_modules 디렉토리는 자동으로 생성됩니다.
3. 설치가 끝나면 프로젝트 동작을 확인합니다.

*[프로젝트에 오류나 의존성 등의 문제가 생겼을 경우]*
1. <u>node_modules 폴더와 package-lock.json 파일을 삭제합니다.</u>
```bash
$ rm -rf node_modules package-lock.json
```
2. npm 패키지의 임시 저장소인 <u>cache를 초기화</u>합니다.
    - <u>cache가 오래되면 충돌이 발생할 수도</u> 있기 때문에 문제 해결에 도움이 될 수 있는 작업입니다.
    - <u>force 옵션으로 강제 삭제</u>합니다.
    ```bash
    $ npm cache clean --force
    ```
    - <u>⚠ 일반적으로 캐시 정리는 안해도 되지만, 의존성 문제가 계속된다면 실행하는 것이 좋습니다.</u>
3. 패키지를 다시 설치합니다.
```bash
$ npm install
```
4. 설치가 끝나면 프로젝트를 실행시켜 정상 동작을 확인합니다.

*[package-lock.json을 삭제하는 이유]*
1. package-lock.json이 손상되었거나, 잘못된 의존성이 있을 때
    - 가끔씩 package-lock.json이 <u>의존성 충돌</u>때문에 이상한 상태가 될 때가 있습니다.
        - 예) 패키지를 <u>여러번 업데이트하면서 충돌이 발생</u>하는 경우
        - <u>수동으로 package.json을 수정</u>해서 package-lock.json에 영향을 미치는 경우
    - 이런 경우, package-lock.json을 삭제하고 새로 생성하면 충돌이 해결될 수도 있습니다.

2. 최신 버전의 패키지를 다시 받고 싶을 때
    - <u>최신 버전의 패키지를 다시 다운로드하고 싶다면</u>, 삭제하는 것이 효과적입니다.
    - 재설치하면 <u>최신 버전의 종속성을 기반으로 새로운 package-lock.json이 생성</u>됩니다.

3. 팀 프로젝트에서 다른 팀원이 이상한 상태로 package-lock.json을 업데이트했을 때
    - 팀원 중 누군가가 <u>로컬에서 이상한 상태로 package-lock.json을 변경</u>했다면 파일을 삭제하고 다시 설치하는 것이 더 깨끗할 수도 있습니다.

⚠ 문제가 없다면 package-lock.json을 유지하는 것이 좋지만, <u>의존성 충돌이나 패키지 문제로 인해 에러가 발생한다면 삭제 후 재설치 하는 것이 좋습니다.</u>

**React 개요**
- React는 <u>component 단위로 개발하여 레고를 조립하듯이 앱을 완성</u>합니다.
- component는 <u>작은 기능을 실행할 수 있는 하나의 모듈</u>입니다.
- <u>공식 사이트의 홈</u>에는 component가 어떻게 사용되는지 설명하고 있습니다.
- React가 component를 이용하여 어떻게 사용자 인터페이스를 구성하는지 살펴보도록 하겠습니다.
- 이해를 돕기 위해 React코드가 나오지만 <u>코드 자체를 이해할 필요는 없습니다.</u>
- React <u>component가 페이지로 변해가는 과정에 집중</u>해 주세요.

- <u>React 사이트에 접속</u>하여 예제 코드를 확인하세요.
- 사이트에서 <u>자체 한글을 지원</u>합니다. ⚠ 자동 번역은 사용하지 마세요.
- 왼쪽 <u>코드에 마우스를 hover</u>하면, 오른쪽 출력에 어느 부분인지 확인할 수 있습니다.
- <u>component의 조립 과정에만 집중해 주세요.</u>

**Component를 사용한 유저 인터페이스 생성**
- React를 사용하면 <u>component라고 하는 개별 조각으로 사용자 인터페이스를 구축</u>할 수 있습니다.
- Video, Thumbnail 및 LikeButton이라는 <u>react component를 생성</u>하고, 이 <u>component를 결합하여 화면과 페이지 그리고 앱 전체를 구성</u>합니다.

- <u>첫번째 예제는 Video.js</u>라는 함수형 component 입니다.
- <u>component의 이름</u>은 파일 이름과 동일하게 하며, 영문 대문자로 시작합니다. <u>PascalCase</u>
- Video component는 Thumbnail과 LikeButton이라는 <u>두 개의 component를 포함</u>하고 있습니다.

⚠ React는 개인, 팀, 조직에서 작성한 <u>component를 원할하게 결합할 수 있도록 설계</u>되었습니다.22

**Component를 작성하는 JavaScript와 Markup**
- React <u>component는 JavaScript 함수</u>입니다.
- <u>조건에 따라 화면</u>을 다르게 표시하고 싶다면 <u>if문을 사용</u>하면 됩니다.
- <u>목록을 표시</u>하고 싶다면 <u>map() 함수</u>를 이용하면 됩니다.
- 결국 React를 배우는 것은 프로그래밍을 배우는 것과 같습니다.
- JavaScript를 이미 알고 있다면 더 쉽게 배울 수 있습니다.

**필요한 곳에 상호작용 기능 추가**
- React component는 <u>데이터를 수신</u>하고, 화면에 표시해야 하는 <u>내용을 반환</u>합니다.
- <u>사용자의 입력을 받아</u> 새로운 데이터를 <u>component에 전달할 수도</u> 있습니다.
- 이때 React는 <u>상호작용을 통해 얻은 새 데이터로 화면을 업데이트</u>합니다.
- 이것은 SearchInput과 VideoList 두 개의 <u>component를 결합한 또 다른 component</u>입니다.
- React 개발은 작은 component를 개발하고, 이렇게 개발된 component를 모아서 조금 더 큰 개발이 가능합니다.

**full-stack App개발을 도와주는 React Framework**
- React는 라이브러리기 때문에 <u>component를 조합</u>할 수는 있지만, <u>라우팅 및 데이터 가져오기 방법 등을 규정하지는 않습니다.</u>
- React로 <u>전체 앱을 빌드</u>하려면 Next.js 또는 Remix와 같은 <u>full-stack React Framework</u>를 사용하는 것이 좋습니다.
- 사이트의 confs/[slug].js는 Next.js에서 제공하는 routing 방법 중 하나입니다.
- React도 하나의 <u>아키텍처</u>입니다.
    - *소프트웨어 아키텍처(Software Architecture)는 <u>소프트웨어의 구성요소들 사이에서 유기적 관계를 표현</u>하고 <u>소프트웨어의 설계와 업그레이드를 통제하는 지침과 원칙</u>
- 따라서 이를 구현하는 <u>Framework를 사용</u>하면, <u>서버에서 실행되거나 혹은 빌드 중에도 비동기 component에서 데이터를 가져올 수</u>도 있습니다.
- 또한 <u>파일이나 데이터베이스에서 데이터를 읽어</u>와서 <u>대화형 component에 전달할 수</u>도 있습니다.

⚠ full-stack App을 개발하는 것이라면 Framework를 사용하는 것이 생산성이 높습니다.

**모든 플랫폼에서 최고의 성능을 발휘하는 React**
- React를 사용하면 <u>동일한 기술을 사용</u>하여, <u>웹 앱과 네이티브 앱을 모두 구축</u>할 수 있습니다.
- <u>각 플랫폼의 고유한 강점을 활용</u>하여 <u>모든 플랫폼과 잘 어울리는 인터페이스를 구현</u>할 수 있습니다.

*[웹의 본질에 충실하기]*
- 사람들은 웹 앱 페이지가 <u>빠르게 로드되기를 기대</u>합니다.
- React를 사용하면 <u>서버에서 데이터를 가져오는 동안</u>에도 <u>HTML를 스트리밍을 시작할 수</u> 있기 때문에, <u>JavaScript 코드가 로드되기 전에 콘텐츠를 점진적으로 채울 수</u> 잇습니다.
- 또한 <u>클라이언트 측에서는 표준 웹 API를 사용해서, 렌더링 도중에도 UI를 반응하도록 할 수</u> 있습니다.
- 이런 동작들은 사람들이 원하는 빠른 렌더링을 도와줍니다.

*[진정한 네이티브 UX를 실현]*
- 사람들은 네이티브 앱이 <u>자신의 플랫폼과 같은 모양과 느낌</u>을 주기를 원합니다.
- <u>React Native와 Expo를 사용</u>하면 <u>Android, iOS 등을 위한 앱을 React로 빌드</u>할 수 있습니다.
- 앱이 <u>네이티브처럼 보이고, 느껴지는 이유는 UI가 네이티브이기 때문</u>입니다.
- 즉 <u>Web View가 아니라</u> 플랫폼에서 제공하는 <u>Android 및 iOS View를 사용</u>하기 때문입니다.
- React를 사용하면 <u>웹 개발자도 네이티브 개발자도 될 수</u> 있습니다.
- <u>사용자 경험의 희생없이 다양한 플랫폼에 앱을 출시</u>할 수 있습니다.
- 기업에서는 플랫폼 간의 장벽을 허물고, <u>전체 기능을 협업을 통해 개발할 수 있는 팀을 구성</u>할 수 있습니다.

**새로운 기능에 맞춰 업그레이드 하기**
- React는 변화에 신중하게 접근합니다.
- 모든 React commit은 <u>10억 명 이상의 사용자에 의해 여러 환경에서 테스트</u>를 거쳤습니다.
- Meta에 있는 10만개 이상의 React component는 <u>모든 마이그레이션 전략의 검증을 지원</u>합니다.
    - 마이그레이션이란 데이터나 소프트웨어를 <u>한 시스템에서 다른 시스템으로 이동</u>하는 것.
- React 팀은 항상 React를 개선하는 방법을 연구합니다.
- 몇 년이 걸리는 연구도 있습니다.
- React는 연구 아이디어를 제품에 적용하는 데에 높은 기준을 가지고 있습니다.
- 검증된 접근 방식만이 React 일부가 됩니다.

<hr>

## 25년 3월 13일 강의
> 내용 정리

**Node.js의 장단점**
- 장점
    1. 비동기 논 블로킹 I/O로 높은 성능 제공
    2. JavaScript 풀스택 개발이 가능하여 생산성이 향상됨
    3. npm의 방대한 생태계를 활용 가능
    4. 경량 서버 개발에 적합
    5. 실시간 데이터 처리(WebSocket)가 강력함

- 단점 
    1. CPU 집약적인 작업에 부적합: 싱글스레드 기반이라 멀티스레딩 성능이 부족함
    2. 콜백(CallBack) 지옥 문제: 해결책으로 async/await 사용

**React 개발환경 구축**
1. Node.js 설치
2. 이 외에 코드 에디터와 웹 브라우저만 준비하면 개발 환경 구축은 완료

**React Project 생성** <br>
React Project 생성 명령(CRA): npx create-react-app \< project-name \> <br>
React 시작 명령어는 프로젝트 디렉토리에서 npm start <br>

<hr>