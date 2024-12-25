# REACT 할일 기록 사이트 만들기<br/>

## project setting <br/>
- `npm create vite@latest`<br/>
- REACT 버전 `^18.2.0`<br/>
- `npm install`<br/><br/>


## 할일의 추가 & 삭제 옵션  <br/>

- controls와 todoList와의 교류 APP.jsx에서 데이터 관리 <br/>
- 할일 -> 전체 선택 & 해제 기능<br/>
- App.js를 기반으로 cotrols.jsx와 TodoList -> Todoitem으로 움직임 <br/>
- 선택된 항목 삭제 (선택된 항목의 수 & 삭제기능)<br/><br/>


## 할일 수정 <br/>

- 각 리스트의 기록된 할일들을 수정하는 기능 <br/>
- 수정클릭시 input창으로 변하고 아이콘 변경기능<br/><br/>

## useEffect를 사용하요 데이터 보존 및 useReducer로 리팩토링 <br/>

- 추가 수정 삭제 토글의 옵션 <br/>
- 각각의 옵션들을 switch 문의 case로 상태관리 <br/>
- useState의 복잡한 로직 간편화 <br/>

## 데이터 저장<br/>

- useEffect로 localstorage를 사용<br/>
- JSON.stringfy 문자열로 저장 <br/>








