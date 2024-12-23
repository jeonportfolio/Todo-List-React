import { useRef, useState } from "react";
import Controls from "./components/Controls";
import Layout from "./components/Layout";
import Title from "./components/Title";
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";

function App() {
  const idRef = useRef(0)
  const [list, setList] = useState([]);
  const handleSubmit = (value) => {
    setList(prevList => prevList.concat({
      id: (idRef.current += 1),
      text: value,
      completed: false,
    }))
  }

  const handleToggle = (id) => {
      setList(prevList => prevList.map(item => {
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
    setList(prevList => prevList.filter(item => item.id !== id))
  } 
  return(
    <div>
      <Layout>
        <Title/>
        <Controls onSubmit={handleSubmit}/>
        <TodoList 
          data ={list} 
          onToggle={handleToggle} 
          onToggleAll={handleToggleAll}
          onDelete={handleDelete}
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




