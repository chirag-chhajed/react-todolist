import React,{useState} from "react";
import { nanoid } from "nanoid";

export default function Form(){
    const [value,setValue] = useState("")
    const [todo,setTodo] = useState([
        {
            text: "This is a sample todo",
            id: nanoid(),
            isDone: false
        }
    ])
    const addTodo = text => {
        const newTodos = [...todo,{text,id: nanoid(),isDone: false}]
        setTodo(newTodos)
    }
    
    const handleSubmit = event => {
        event.preventDefault()
        if(value){
            console.log(value)
        } else return
        setValue("")
        addTodo(value)
        console.log(todo)
    
        
    }
    const list = todo.map(e => (
        <li key={e.id}>
            {e.text}
        </li>
    )) 
    return(
        <>
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={value}
                onChange={e=>setValue(e.target.value)}
                placeholder="Type your todo"
            />
            <button><i class="ri-add-line ri-1.3x"></i></button>
        </form>
        <ul>
            {list}
        </ul>
        </>
    )
}