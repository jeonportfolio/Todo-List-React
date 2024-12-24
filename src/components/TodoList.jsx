import TodoItem from './TodoItem';
import './todoList.css'

function TodoList({ 
    data, 
    onToggle, 
    onToggleAll, 
    onDelete, 
    onDeleteCompleted,
    onUpdate
}) {
    
    // 전체선택 
    const isAllCompleted = 
        data.length > 0 && data.every((item) => item.completed);
    
    // 선택된 개수 세기 -> 삭제시 사용
    const completedCount = data.filter((item) => item.completed).length;



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
                {completedCount > 0 && (
                     <button className='todo-header-button' onClick={onDeleteCompleted}>
                        {completedCount}개 삭제
                     </button>
                )}
               
            </div>
            <div>
            <div>
                {data.map((item) => (
                    <TodoItem 
                        id={item.id}
                        key={item.id}
                        text={item.text} 
                        completed={item.completed}
                        onToggle= {() => onToggle(item.id)}
                        onDelete= {() => onDelete(item.id)}
                        onUpdate = {onUpdate}
                    />
                ))}
            </div>
            </div>
        </div>
    )
}

export default TodoList;