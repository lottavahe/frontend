import {useState} from "react";
import TodoTable from "./TodoTable";
import type { Todo,Priority } from "../types";



function TodoList() {

    const[todo, setTodo] = useState<Todo>({
        description: "",
        priority: "low",
        duedate: ""
    });
    const[todos, setTodos] = useState<Todo[]>([]);

    const handleAdd = () => {
        if (todo.description.trim()){
        setTodos([todo, ...todos]);
        setTodo({
            description: "",
            priority: "low",
            duedate: ""
        })
        }
        else {
            alert("Enter description first");
        }
    }
    //tässä delete nappi indexin mukaan + window.confirm() eli oletko varma palauttaa bboleanin
    const handleDelete = (row: number) => {
        if (window.confirm("Are you sure?"))
        setTodos(todos.filter((_, index) => row != index));
    }

    return (
    <>
    <h3>My to do list</h3>
    <input
        placeholder="Enter description..."
        value={todo.description}
        onChange={e => setTodo({...todo, description: e.target.value})}
    />
    <select
        title="Priority"
        value={todo.priority}
        onChange={e => setTodo({...todo, priority: e.target.value as Priority})}
    >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
    </select>
    <input
        type= "date"
        placeholder="Enter due date..."
        value={todo.duedate}
        onChange={e => setTodo({...todo, duedate: e.target.value})}
    />
    <button onClick={handleAdd}>Add todo</button>
    <TodoTable todos={todos}handleDelete={handleDelete}/>
    </>
    );
}

export default TodoList;