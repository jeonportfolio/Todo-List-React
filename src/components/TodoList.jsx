import TodoItem from './TodoItem';
import './todoList.css'

function TodoList({ data, onToggle, onToggleAll, onDelete }) {
    const isAllCompleted = 
        data.length > 0 && data.every((item) => item.completed);
    return (
        <div className="todo-list">
            <div className="todo-header">
                <input 
                    type="checkbox" 
                    className="todo-checkbox" 
                    checked={isAllCompleted}
                    onChange={(e) => onToggleAll(e.target.checked)}
                />
                <p className="todo-header-text">할 일</p>
                <button className='todo-header-button'>삭제</button>
            </div>
            <div>
            <div>
                {data.map((item) => (
                    <TodoItem 
                        text={item.text} 
                        completed={item.completed}
                        onToggle= {() => onToggle(item.id)}
                        onDelete= {() => onDelete(item.id)}
                    />
                ))}
            </div>
            </div>
        </div>
    )
}

export default TodoList;