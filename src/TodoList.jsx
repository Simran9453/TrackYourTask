import {useState} from "react";
import {v4 as uuidv4} from 'uuid';
export default function TodoList(){
    let [todos,setTodos] = useState([{task:"sample task",id:uuidv4(),isDone:false}]);
    let [newTodo,setNewTodo] = useState("");
    let addNewTask = () =>{
        setTodos((prevTodos)=>{
            return [...prevTodos,{task:newTodo,id:uuidv4(),isDone:false}];
        });
        setNewTodo("");
    };

    let updateTodoValue = (event) =>{
        setNewTodo(event.target.value);
    }

    let deleteTodo=(id)=>{
        setTodos(todos.filter((todo)=>todo.id != id));
    }

  let MarkAllAsDone = () => {
    setTodos((prevTodos) => {
        return prevTodos.map((todo) => {
            return {
                ...todo,
                isDone:true,
            };
        });
    });
};
    let MarkAsDone = (id) => {
    setTodos((prevTodos) => {
        return prevTodos.map((todo) => {
        if(todo.id==id){
            return {
                ...todo,
                isDone:true,
            };
        }
        else{
        return todo;
    }
        });
    });
};

    return(
    <div>
        <input placeholder="add a task" 
        value={newTodo} 
        onChange={updateTodoValue}
        ></input>
        <br></br>
        <button onClick={addNewTask}>add Task</button>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <hr></hr>
        <h4>Todo List</h4>
        <ul>{
            todos.map((todo)=>(
                <li key={todo.id}>
                <span style={todo.isDone? {textDecorationLine:"line-through"}:{}}>{todo.task}</span>
                <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
                <button onClick={()=>MarkAsDone(todo.id)}>Mark as done</button>
                </li>
            ))
            }
        </ul>
        <button onClick={MarkAllAsDone}>Mark all as done</button>
    </div>
    );
}