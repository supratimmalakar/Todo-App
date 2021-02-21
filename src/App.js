import React, {useState, useEffect} from 'react'
import './App.css';
import Form from './components/Form'
import TodoList from './components/TodoList'

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] =  useState([]);
  const [priority, setPriority] = useState('high');
  const [searchText, setSearchText] = useState('');
  const [searchMessageStatus, setSearchMessageStatus] = useState(false);


  useEffect(() => {
    getLocalTodos();
  }, [])

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    if (localStorage.getItem("todos")=== null) {
      localStorage.setItem("todos", JSON.stringify([]))
    } else {
      let todosLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todosLocal)
    }
  }

  useEffect(()=>{
    filterHandler();
    saveLocalTodos();
  }, [todos, status])

  const filterHandler = () => {
    switch (status) {
      case "completed" : 
        setFilteredTodos(todos.filter(item => item.completed === true));
        break;
      case "uncompleted" :
        setFilteredTodos(todos.filter(item => item.completed === false));
        break;
      case "high" :
        setFilteredTodos(todos.filter(item => item.priority === "high"));
        break;
      case "moderate" :
        setFilteredTodos(todos.filter(item => item.priority === "moderate"));
        break;
      case "low" :
        setFilteredTodos(todos.filter(item => item.priority === "low"));
        break;
      default :
        setFilteredTodos(todos)
    };
  };

  

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form 
        setInputText={setInputText} 
        inputText={inputText} 
        todos={todos} 
        setTodos={setTodos}
        setStatus={setStatus}
        priority={priority}
        setPriority={setPriority}
        setSearchMessageStatus={setSearchMessageStatus}
        />
      <TodoList 
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
        setFilteredTodos={setFilteredTodos}
        searchText={searchText}
        setSearchText={setSearchText}
        searchMessageStatus={searchMessageStatus}
        setSearchMessageStatus={setSearchMessageStatus}
      />
    </div>
  );
}

export default App;
