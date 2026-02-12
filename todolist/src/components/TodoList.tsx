import {useState} from "react";
import TodoTable from "./TodoTable";
import type { Todo,Priority } from "../types";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';




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
    <Stack 
        mt={2}
        direction="row" 
        spacing={2} 
        alignItems={"center"} 
        justifyContent={"center"}
    >
        <TextField 
            label="Enter description..."
            value={todo.description}
            onChange={e => setTodo({...todo, description: e.target.value})}
        />
        <TextField
            title="Priority"
            select
            slotProps={{
                select: {
                native: true,
                },
            }}
            value={todo.priority}
            onChange={e => setTodo({...todo, priority: e.target.value as Priority})}
        >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
        </TextField>
        <TextField
            type= "date"
            value={todo.duedate}
            onChange={e => setTodo({...todo, duedate: e.target.value})}
        />
        <Button variant="contained" color="secondary" onClick={handleAdd}>Add todo</Button>
    </Stack>
    <TodoTable todos={todos}handleDelete={handleDelete}/>
    </>
    );
}

export default TodoList;