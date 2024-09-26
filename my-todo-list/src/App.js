import './App.css';
import InsertItem from './components/InsertItem';
import MyContainer from './components/MyContainer';
import TodoList from './components/TodoList';
import { useState } from 'react';

function App() {
  const [list, setList] = useState(['샘플', '데이터']);

  const addItem = (item) => {
    list.push(item);
    setList([...list]);
  }

  const deleteItem = (index) => {
    list.splice(index, 1);
    setList([...list]);
  }

  return (
    <div className="App">
      <MyContainer title = "My TodoList">
        <InsertItem addItem={addItem}/>
        <TodoList list={list} deleteItem={deleteItem}/>
      </MyContainer>
    </div>
  );
}

export default App;
