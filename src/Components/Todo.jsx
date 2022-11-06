import React,{useContext,useState} from "react";
import { Context } from "../Context";

export default function Todo({text,id}){
    const {deleteTodo,toggleMarkDone} = useContext(Context)
    const [hover,setHover] = useState(false)
    const deleteIcon = hover ? "ri-delete-bin-fill" : "ri-delete-bin-line"
    const checkIcon = hover ? "ri-check-double-line" : "ri-check-line"

    return(
        <>
         <li 
            onMouseEnter={()=>setHover(true)} 
            onMouseLeave={()=>setHover(false)}
            key={id}
        >
            {text}
            <div>
            <i class={deleteIcon} onClick={()=>deleteTodo(id)}></i>
            <i class={checkIcon} onClick={()=>toggleMarkDone(id)}></i>
            </div>
         </li>
        </>
    )
}