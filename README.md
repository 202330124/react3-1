# 202330124 이태규

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