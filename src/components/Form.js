import React from 'react';
import {default as UUID} from "node-uuid"

const Form = ({setInputText, inputText, todos, setTodos, setStatus, priority, setPriority, setSearchMessageStatus}) => {

    const statusHandler = (e) => {
      setStatus(e.target.value);
    }

    const InputTextHandler = (e) => {
        // console.log(e.target.value)
        setInputText(e.target.value);
    }

    const SubmitTodoHandler = (e) => {
        e.preventDefault();
            if (inputText !== "") {
              setTodos([ 
                ...todos, {text: inputText, completed: false, id: UUID.v4(), priority: priority}])
                // setTodoId(todoId + 1);
                setInputText("")
                setPriority('high')
                setSearchMessageStatus(false)
            }
    }

    const PriorityHandler = (e) => {
      setPriority(e.target.value)
    }

    return (
        <form>
      <input value={inputText} onChange={InputTextHandler} type="text" className="todo-input" />
      <div className="select-priority">
        <select value={priority} onChange={PriorityHandler} className="filter-todo">
          <option value="high">HIGH PRIORITY</option>
          <option value="moderate">MODERATE PRIORITY</option>
          <option value="low">LOW PRIORITY</option>
        </select>
      </div>
      <button onClick={SubmitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
          <option value="high">High Priority</option>
          <option value="moderate">Moderate Priority</option>
          <option value="low">Low Priority</option>
        </select>
      </div>
    </form>
    )
}

export default Form;