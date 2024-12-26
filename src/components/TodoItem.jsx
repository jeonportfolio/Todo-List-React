import { useContext, useState } from "react";
import "./TodoItem.css"
import { TodoContext } from "../context";
import { DELETE_TODO, TOGGLE_TODO, UPDATE_TODO } from "../reducer";

function TodoItem({ id, text, completed }) {
    const { dispatch } = useContext(TodoContext)
    
    const [edit, setEdit] = useState(false)
    // 수정 
    const handleEdit = () => {
        setEdit((prev) => !prev);
    }
    
    // 기존 내용 수정 버튼 
    const handleChange = (e) => {
        dispatch({type: UPDATE_TODO, payload:{id, text: e.target.value}});
    }

    // 한개 체크박스 선택
    const handleToggle = () => {
        dispatch({type: TOGGLE_TODO, payload:id });      
    }

    // 삭제 
    const handleDelete = () => {
        dispatch({type: DELETE_TODO, payload: id });      
    }   


    return(
            <div className="todo-item">
                <input 
                    type="checkbox" 
                    className="todo-item-checkbox" 
                    checked={completed}
                    onChange={handleToggle}
                />
                {
                    edit ? <input className="todo-edit-input" value={text} onChange={handleChange}/> : <p className={["todo-item-text", completed && 'completed'].join(" ")}>
                        {text}
                    </p>
                }
              
                <button className='todo-item-button' onClick={handleEdit}>수정</button>
                <button className='todo-item-button' onClick={handleDelete}>삭제</button>
            </div>
            
    ) 
}

export default TodoItem;