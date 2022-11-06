import React from "react";


export default function Todo({text,id}){
    return(
        <>
         <li key={id}>
            {text}
            <div>
            <i class="ri-delete-bin-line"></i>
            <i class="ri-check-line"></i>
            </div>
         </li>
        </>
    )
}