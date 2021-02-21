import React from 'react';
import Red from '../asset/red.png'
import Green from '../asset/green.png'
import Yellow from '../asset/yellow.png'

const Todo = ({todo, todos, setTodos}) => {

    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id));
        // console.log(todo)
    };

    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if (item.id == todo.id) {
                return {
                    ...item, completed: !item.completed
                };
            };
            return item;
        }));
    };
    var priorityDisplay;

    switch (todo.priority) {
        case "high" : {
            priorityDisplay = <img className="priority-icon" src={Red}/>
            break;
        }
        case "moderate" : {
            priorityDisplay = <img className="priority-icon" src={Yellow}/>
            break;
        }
        case "low" : {
            priorityDisplay = <img className="priority-icon" src={Green}/>
            break;
        }
        default : {
            priorityDisplay = "";
            break;
        }


    }

    return (
        <div className="todo">
            {priorityDisplay}
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{todo.text}</li>
            {/* {todoText} */}
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
};

export default Todo;