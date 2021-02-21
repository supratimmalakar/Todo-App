import React from 'react'
import Todo from './Todo'

const TodoList = ({todos, setTodos, filteredTodos, setFilteredTodos, searchText, setSearchText, searchMessageStatus, setSearchMessageStatus}) => {

    var alltodos = filteredTodos.map(todo => (
        <Todo 
            todos={todos}
            todo={todo}
            setTodos={setTodos}
        />
    ))

    const searchTextHandler = (e) => {
        setSearchText(e.target.value);
    }

    const searchHandler = (e) => {
        e.preventDefault();
        if (searchText !== "") {
            setFilteredTodos(todos.filter(item => item.text.includes(searchText)))
            if (filteredTodos.length) {
                setSearchMessageStatus(true)
            } 
        }
    }

    const crossHandler = (e) => {
        e.preventDefault();
        setFilteredTodos(todos)
        setSearchText("")
        setSearchMessageStatus(false)
    }

    return (
        <div className="todo-container">
            <form>
            <input value={searchText} onChange={searchTextHandler} placeholder="Search" type="text" className="todo-input-search" />
            <div className="search-btn-container">
            <button onClick={searchHandler} className="todo-button" type="submit">
                <i className="fas fa-search"></i>
                </button>
                <button onClick={crossHandler} className="todo-button">
                <i className="fas fa-times"></i>
                </button>
                </div>
            </form>
            {/* <p id="search-message">{searchMessage}</p> */}
            {filteredTodos.length || !searchMessageStatus ? "" : <p><i className="fas fa-frown"></i> No Result Found</p>}
            <ul className="todo-list">
                {alltodos}
            </ul>  
        </div>
    )
}

export default TodoList;