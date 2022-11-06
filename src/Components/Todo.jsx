import React, { useContext, useState } from "react";
import { Context } from "../Context";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Todo({ text, id }) {
    const { deleteTodo, toggleMarkDone } = useContext(Context)
    const [hover, setHover] = useState(false)
    const deleteIcon = hover ? "ri-delete-bin-fill" : "ri-delete-bin-line"
    const checkIcon = hover ? "ri-check-double-line" : "ri-check-line"
    // const showToastMessage = () => {
    //     toast.success('Success Notification !', {
    //         position: toast.POSITION.TOP_RIGHT
    //     })
    // }
    // const deleteButtonFunction = ()=>{
    //     deleteTodo(id);
    //     showToastMessage()
    // }
    return (
        <>
            <li
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                key={id}
            >
                {text}
                <div>
                    <i class={deleteIcon} onClick={()=>deleteTodo(id)}></i>
                    <i class={checkIcon} onClick={() => toggleMarkDone(id)}></i>
                </div>
                
            </li>
            <ToastContainer/>
        </>
    )
}