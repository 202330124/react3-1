# 202330124 이태규

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

**React Project 생성**
React Project 생성 명령(CRA): npx create-react-app <project-name>
<br/>
React 시작 명령어는 프로젝트 디렉토리에서 npm start