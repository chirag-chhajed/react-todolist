import React from "react";
import Todo from "./Todo";
export default function DoneList(){
    return(
        <>
            <div className="donelist">
                <div className="head">
                    done list
                </div>
                <div className="body">
                    <ul>
                        <Todo/>
                    </ul>
                </div>
            </div>
        </>
    )
}