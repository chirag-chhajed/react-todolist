import React from "react";
import { Context } from "../Context";
import Todo from "../Components/Todo"

export default function DoneList(){
    const {todos} = React.useContext(Context)
    const doneList = todos.filter(todo => todo.isDone === true).map(todo => (<Todo {...todo} />))

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