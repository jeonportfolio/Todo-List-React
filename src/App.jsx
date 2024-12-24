import { useRef, useState } from "react";
import Controls from "./components/Controls";
import Layout from "./components/Layout";
import Title from "./components/Title";
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";

function App() {
  const idRef = useRef(0)
  const [list, setList] = useState([]);
  const [filterType, setFilterType] = useState("ALL");
  const handleChangeFilterType = (type) => {
    setFilterType(type);
  }

  const handleSubmit = (value) => {
    setList(prevList => prevList.concat({
      id: (idRef.current += 1),
      text: value,
      completed: false,
    }))
  }

  const handleToggle = (id) => {
      setList(prevList => prevList.map((item) => {
        if(item.id === id) {
          return {...item, completed: !item.completed};
        }
        return item;
      })
    );
  };

  const handleToggleAll = (flag) => {
    setList((prevList) => 
      prevList.map((item) => ({...item, completed: flag}))
    );
  };
  const handleDelete = (id) => {
    setList(prevList => prevList.filter((item) => item.id !== id))
  } 

// 선택된 항목 삭제 -> 체크되지 않은 것만 남음
const handleDeleteCompleted = () => {
 setList((preList) => preList.filter((item) => !item.completed))
};

//수정한 내용 업데이트 
const handleUpdate = (id, text) => {
  setList(prevList => prevList.map (item => {
    if(item.id === id) {
      return {...item, text };
    }
    return item;
  }))
}

//SELECT 리스트 바꾸기 

const filteredList = list.filter(item => {
  if(filterType === 'ALL') {
    return item;
  }else if (filterType == 'TODO') {
    return !item.completed
  }else {
    return item.completed;
  }
})

  return(
    <div>
      <Layout>
        <Title/>
        <Controls 
                  filterType={filterType} 
                  onChangeFilterType={handleChangeFilterType} 
                  onSubmit={handleSubmit}
          />
        <TodoList 
          data ={filteredList} 
          onToggle={handleToggle} 
          onToggleAll={handleToggleAll}
          onDelete={handleDelete}
          onDeleteCompleted={handleDeleteCompleted}
          onUpdate={handleUpdate}
        />
        <TodoItem/>
      </Layout>
        {/* <Layout>
          <Title/>
          <Controls/>
          <TodoList/>
        </Layout> */}
    </div>
  );
}

export default App




