import React,{useContext} from "react";
import { Context } from "../Context";

export default function Todo({text,id}){
    const {deleteTodo,toggleMarkDone} = useContext(Context)

    return(
        <>
         <li key={id}>
            {text}
            <div>
            <i class="ri-delete-bin-line" onClick={()=>deleteTodo(id)}></i>
            <i class="ri-check-line" onClick={()=>toggleMarkDone(id)}></i>
            </div>
         </li>
        </>
    )
}