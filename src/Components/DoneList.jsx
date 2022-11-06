import React from "react";
import { Context } from "../Context";
import Todo from "../Components/Todo"

export default function DoneList(){
    const {todos} = React.useContext(Context)
    console.log(todos)
    const doneList = todos.filter(todo => todo.isDone === true).map(todo => (<Todo {...todo} />))
    console.log(doneList)
    return(
        <>
            <div className="donelist">
                <div className="head">
                    done list
                </div>
                <div className="body">
                    <ul>
                        {doneList}
                    </ul>
                </div>
            </div>
        </>
    )
}