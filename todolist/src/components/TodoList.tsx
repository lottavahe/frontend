import {useState} from "react";

type Todo = {
    description: string;
    priority: Priority;
    duedate: string;
}
type Priority = "low" | "medium" | "high";

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
    const handleDelete = (row: number) => {
        setTodos(todos.filter((todo, index) => row != index));
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
    <table>
        <thead>
            <th>Description</th>
            <th>Priority</th>
            <th>Due date</th>
            <th>Actions</th>
        </thead>
    <tbody>
        {
            todos.map((todo, index) =>
                <tr key ={index}>
                    <td>{todo.description}</td>
                    <td>{todo.priority}</td>
                    <td>{todo.duedate}</td>
                    <td><button onClick={() => handleDelete(index)}>Delete</button></td>
                </tr>
            )
        }
    </tbody>
    </table>
    </>
    );
}

export default TodoList;