import { useContext } from 'react';
import TodoItem from './TodoItem';
import './TodoList.css'
import { TodoContext } from '../context';
import { DELETE_TODO_COMPLETED, TOGGLE_TODO_ALL } from '../reducer';

function TodoList() {
    
    const { state, dispatch } = useContext(TodoContext);
    
    // 선택된 개수 세기 -> 삭제시 사용
    const completedCount = state.list.filter((item) => item.completed).length;
    const handleToggleAll = e => {
        dispatch({ type: TOGGLE_TODO_ALL, payload: e.target.checked })
        
    };

    const handleDeleteCompleted = () => {
        dispatch({type:DELETE_TODO_COMPLETED})
    }

    const filteredList = state.list.filter((item) => {
        switch (state.filterType) {
            case "TODO":
                return !item.completed;
            case "COMPLETED": 
                return item.completed;
            default:
                return true;
        }
    })
    
     // 전체선택 
     const isAllCompleted = 
     filteredList.length > 0 && 
     filteredList.every((item) => item.completed);

    return (
        <div className="todo-list">
            <div className="todo-header">
                <input 
                    type="checkbox" 
                    className="todo-checkbox" 
                    checked={isAllCompleted}
                    onChange={handleToggleAll}
                />
                <p className="todo-header-text">할 일</p>
                {completedCount > 0 && (
                     <button className='todo-header-button' onClick={handleDeleteCompleted}>
                        {completedCount}개 삭제
                     </button>
                )}
               
            </div>
            <div>
            <div>
                {filteredList.map((item) => (
                    <TodoItem key={item.id} {...item}/>
                ))}
            </div>
            </div>
        </div>
    )
}

export default TodoList;