import React,{useContext} from "react";
import { Context } from "../Context";
import Todo from "../Components/Todo"

export default function TodoList(){
    const {todos} = useContext(Context)
    const TodoList = todos.filter(todo => todo.isDone === false).map(todo => (<Todo {...todo} />))
    
    return(
        <>
            <div className="todolist">
                <div className="head">
                    todo list
                </div>
                <div className="body">
                    <ul>
                        {TodoList}
                    </ul>
                </div>
            </div>
        </>
    )
}