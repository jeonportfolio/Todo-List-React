
import styled from "@emotion/styled";
import Controls from "./components/Controls";
import Layout from "./components/Layout";
import Title from "./components/Title";
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";
import { TodoProvider } from "./context";




function App() {
//   const [state, dispatch] = useReducer(reducer, initialState, init);

//   useEffect(() => {
//     window.localStorage.setItem('TODO', JSON.stringify(state.list));
//     window.localStorage.setItem('ID', JSON.stringify(state.id))
//   }, [state])
 
//   const handleChangeFilterType = (type) => {
//     dispatch({ type: SET_FILTER, payload: type});
//   }

//   const handleSubmit = (value) => {
//     dispatch({type: ADD_TODO, payload:value });
//   }

//   //체크박스 체크 선택 & 해제
//   const handleToggle = (id) => {
//      dispatch({type : TOGGLE_TODO, payload: id});
//   };

//   //체크박스 전체체크 & 전체해제
//   const handleToggleAll = (flag) => {
//     dispatch({type : TOGGLE_TODO_ALL, payload: flag});
//   };

//   //  항목 지우기 
//   const handleDelete = (id) => {
//     dispatch({type : DELETE_TODO, payload: id});
//   } 

//   //선택된 항목 모두 삭제
//   const handleDeleteCompleted = () => {
//     dispatch({type : DELETE_TODO_COMPLETED});
//   };

// //수정한 내용 업데이트 
// const handleUpdate = (id, text) => {
//    dispatch({
//       type : UPDATE_TODO, 
//       payload:{
//         id,
//         text,

//       }  
//    });
// };

// //SELECT 리스트 바꾸기 

// const filteredList = state.list.filter(item => {
//   switch (state.filterType) {
//     case 'TODO':
//       return !item.completed;
//     case 'COMPLETED':
//       return item.completed;
//     default:
//       return true;
//   }
// })


  return(
    <div>
      <TodoProvider>
        <Layout>
          <Title/>
          <Controls/>
          <TodoList/>
          <TodoItem/>
        </Layout>
      </TodoProvider>
     
       
    </div>
  );
}

export default App




